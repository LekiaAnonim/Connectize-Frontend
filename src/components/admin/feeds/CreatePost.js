import React, { useEffect, useState } from "react";
import { AlignmentIcon, GalleryIcon, GifIcon, SmileIcon } from "../../../icon";
import { createPost } from "../../../api-services/posts";
import { toast } from "sonner";
import MoreOptions from "../../MoreOptions";
import { useQuery } from "@tanstack/react-query";
import { getCompanies } from "../../../api-services/companies";
import { CloseButton, Select } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import EmojiPicker from "emoji-picker-react";
import GifPicker from "../../GifPicker";
import { largeFileText, unSupportedText } from "../listing/newListing";
import { useCustomQuery } from "../../../context/queryContext";
import { useAuth } from "../../../context/userContext";

const isImageFile = (files) => {
  if (!files || files.length === 0) return true; // No files provided

  const imageTypes = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp",
    "image/avif",
  ];

  // Check all files if the input is an array of files
  if (Array.isArray(files)) {
    return files.every((file) => imageTypes.includes(file.type.toLowerCase()));
  }

  // If it's a single file, directly check its type
  return imageTypes.includes(files.type.toLowerCase());
};

const isImageSize = (files) => {
  if (!files || files.length === 0) return true; // No files provided

  const imageSize = 4 * 1024; // 4MB

  // Check all files if the input is an array of files
  if (Array.isArray(files)) {
    return files.every((file) => imageSize <= file.size);
  }

  // If it's a single file, directly check its type
  return imageSize <= files.size;
};

function CreatePost() {
  const { setRefetchInterval } = useCustomQuery();
  const { user: currentUser } = useAuth();
  const { data: companies } = useQuery({
    queryKey: ["companies"],
    queryFn: getCompanies,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [validImages, setValidImages] = useState([]);
  const [companyId, setCompanyId] = useState(-1);
  const [needsFocus, setNeedsFocus] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [showGifPicker, setShowGifPicker] = useState(false);
  const [selectedGif, setSelectedGif] = useState("");

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);

    const validImageFiles = selectedFiles
      .filter(isImageFile)
      .filter(isImageSize);

    setValidImages(validImageFiles);

    if (validImageFiles.length < selectedFiles.length) {
      toast.info(unSupportedText + " or " + largeFileText);
    }
  };
  useEffect(() => {
    // Cleanup generated URLs on unmount or when validImages changes
    return () => {
      validImages.forEach((image) => URL.revokeObjectURL(image));
    };
  }, [validImages]);

  const onEmojiClick = (emojiObject) => {
    setMessage((prevText) => prevText + emojiObject.emoji);
    setShowEmojiPicker(false);
  };

  const onGifSelect = (gifUrl) => {
    setSelectedGif(gifUrl);
    setShowGifPicker(false);
  };

  const handleCreatePost = async () => {
    if (currentUser?.is_first_time_user) {
      toast.info(
        <div className="grid gap-1">
          <strong>Please complete your profile to create a post</strong>
          <Link
            to="/home"
            className="!underline !text-gray-400 hover:!text-black font-semibold"
          >
            Complete your profile
          </Link>
        </div>,
        {
          closeButton: true,
          duration: 30000,
          position: "top-center",
        }
      );
      return;
    }
    if (message.length < 10) {
      toast.info(
        "Post length is too short. Minimum post character length is 10 characters"
      );
      return;
    }
    if (companyId < 1) {
      setNeedsFocus(true);
      toast.info("Please attach a company to your post");
      return;
    }
    setIsLoading(true);
    const toastId = toast.info("Creating post. please hold on...");
    try {
      await createPost(message, companyId, validImages);
      setMessage("");
      setSelectedGif("");
      toast.success("Your post has been created", { id: toastId });
      setRefetchInterval(1000);
      setTimeout(() => setRefetchInterval(false), 2000);
      setValidImages([]);
    } catch (error) {
      toast.dismiss(toastId);
      console.error("Post error: ", error);
    } finally {
      setIsLoading(false);
      setNeedsFocus(false);
    }
  };
  return (
    <div className="bg-white px-4 md:px-4 py-4 rounded border-b-[5px] border-gold relative">
      <textarea
        type="text"
        value={message}
        onChange={(e) => setMessage(e.currentTarget.value)}
        minLength={10}
        placeholder="What's happening?"
        className="w-full min-h-10 h-10 max-h-40  pb-2 border-b border-gray-300 bg-transparent focus:outline-0 text-base resize-no_ne transition-all duration-300 scrollbar-hidden scroll-smooth placeholder:text-lg"
      />

      {validImages.length > 0 && (
        <div className="mt-2">
          <h5 className="font-bold mb-2">
            Image Preview{validImages.length > 1 ? "s" : ""}
          </h5>
          <div className="flex gap-4 overflow-x-auto">
            {validImages.map((image, index) => (
              <div key={index} className="relative shrink-0 group">
                <CloseButton
                  onClick={() =>
                    setValidImages((prevItems) =>
                      prevItems.filter((_, i) => i !== index)
                    )
                  }
                  className="absolute -right-1 -top-1 bg-white !text-[.5rem] !size-6 xs:opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <img
                  src={URL.createObjectURL(image)}
                  alt={image.name}
                  className="w-full h-20 object-cover rounded-lg shadow-md"
                />
                <p className="text-center mt-2 text-sm font-semibold">
                  {image.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedGif && (
        <div className="mt-4 relative w-fit">
          <CloseButton
            onClick={() => setSelectedGif("")}
            className="absolute -right-1 -top-1 bg-white !text-[.5rem] !size-6"
            c
          />
          <img
            src={selectedGif}
            alt="Selected GIF"
            className="w-16 h-auto rounded-lg hover:shadow transition-all duration-300"
          />
        </div>
      )}

      <div
        className="absolute right-3 top-2"
        onClick={() => setNeedsFocus(false)}
      >
        <MoreOptions
          triggerStyle={`${
            needsFocus ? "!border-2 !border-red-600 " : ""
          } !bg-white`}
        >
          <div className="space-y-1">
            {companies?.length < 1 ? (
              <>
                <h1 className="text-custom_blue">
                  <InfoCircledIcon className="inline" /> You have no company
                  attributed with your profile, please{" "}
                  <Link
                    to="/create-company"
                    className="!text-gray-400 hover:!text-custom_blue transition-all duration-300 underline"
                  >
                    create one
                  </Link>
                </h1>
              </>
            ) : (
              <>
                <h1 className="text-lg font-semibold">Create post as</h1>
                <Select
                  placeholder="Select company"
                  onChange={(e) => setCompanyId(Number(e.currentTarget.value))}
                  className="!text-sm"
                >
                  {companies?.map((company) => (
                    <option value={company?.id} key={company?.id}>
                      {company?.company_name}
                    </option>
                  ))}
                </Select>
              </>
            )}
          </div>
        </MoreOptions>
      </div>

      <div className="mt-4 flex max-sm:flex-col md:flex-col lg:flex-row sm:items-center justify-between max-sm:gap-4 md:gap-4 lg:gap-1">
        <div className="flex items-center gap-2 relative">
          <input
            name="post_images"
            id="post_images"
            type="file"
            onChange={handleFileChange}
            accept="image/*"
            multiple
            hidden
          />

          <MaskedIcon
            Icon={GalleryIcon}
            onClick={() => document.getElementById("post_images").click()}
          />
          <MaskedIcon Icon={GifIcon} onClick={() => setShowGifPicker(true)} />
          <MaskedIcon Icon={AlignmentIcon} />
          <MaskedIcon
            Icon={SmileIcon}
            onClick={() => setShowEmojiPicker((prevState) => !prevState)}
          />
        </div>

        {(showEmojiPicker || showGifPicker) && (
          <section className="fixed top-0 left-0 w-screen h-screen z-[4000] flex items-center justify-center bg-transparent">
            <div
              className="bg-black/30 fixed top-0 left-0 w-screen h-screen"
              onClick={() => {
                setShowEmojiPicker(false);
                setShowGifPicker(false);
              }}
            />
            <div className="relative size-fit max-w-sm grid place-items-center m-10">
              <CloseButton
                onClick={() => {
                  setShowEmojiPicker(false);
                  setShowGifPicker(false);
                }}
                className="absolute -right-8 -top-8 bg-white !text-xs !size-8"
                c
              />
              {showGifPicker && <GifPicker onGifSelect={onGifSelect} />}
              {showEmojiPicker && <EmojiPicker onEmojiClick={onEmojiClick} />}
            </div>
          </section>
        )}
        <button
          className="text-sm rounded-full bg-gold hover:bg-gold/60 py-2.5 px-4 transition-all duration-300 md:w-full lg:w-fit disabled:bg-gray-400 disabled:cursor-not-allowed"
          onClick={handleCreatePost}
          disabled={isLoading}
        >
          {isLoading ? "creating post" : "create post"}
        </button>
      </div>
    </div>
  );
}

const MaskedIcon = ({ Icon, onClick }) => (
  <button
    className="bg-gray-200/50 py-2 px-4 rounded-sm outline-0 max-sm:w-full grid place-items-center"
    onClick={onClick}
  >
    <Icon />
  </button>
);

export default CreatePost;
