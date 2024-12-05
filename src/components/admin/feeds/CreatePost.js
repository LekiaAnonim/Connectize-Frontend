import React, { useState } from "react";
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

function CreatePost() {
  const { data: companies } = useQuery({
    queryKey: ["companies"],
    queryFn: getCompanies,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [companyId, setCompanyId] = useState(-1);
  const [needsFocus, setNeedsFocus] = useState(false);
  const [showPicker, setShowPicker] = useState(false);

  const onEmojiClick = (emojiObject) => {
    setMessage((prevText) => prevText + emojiObject.emoji);
    setShowPicker(false);
  };

  const toggleEmojiPicker = () => {
    setShowPicker((prevState) => !prevState);
  };

  const handleCreatePost = async () => {
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
      await createPost(message, companyId);
      setMessage("");
      toast.success("Your post has been created", { id: toastId });
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
        placeholder="What's happening"
        className="w-full h-10 pb-2 border-b border-gray-300 bg-transparent focus:outline-0 text-xl resize-none transition-all duration-300 scrollbar-hidden scroll-smooth"
      />

      <div
        className="absolute right-3 top-2"
        onClick={() => setNeedsFocus(false)}
      >
        <MoreOptions
          triggerStyle={needsFocus ? "!border-2 !border-red-600 bg-white" : ""}
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
                    <option value={company?.id}>{company?.company_name}</option>
                  ))}
                </Select>
              </>
            )}
          </div>
        </MoreOptions>
      </div>

      <div className="mt-4 flex max-sm:flex-col md:flex-col lg:flex-row sm:items-center justify-between max-sm:gap-4 md:gap-4 lg:gap-1">
        <div className="flex items-center gap-2 relative">
          <MaskedIcon Icon={GalleryIcon} />
          <MaskedIcon Icon={GifIcon} />
          <MaskedIcon Icon={AlignmentIcon} />
          <MaskedIcon Icon={SmileIcon} onClick={toggleEmojiPicker} />
        </div>
        {showPicker && (
          <section className="fixed top-0 left-0 w-screen h-screen z-[4000] flex items-center justify-center bg-black/30">
            <div className="relative">
              <CloseButton
                onClick={() => setShowPicker(false)}
                className="absolute -right-8 -top-8 bg-white"
                c
              />
              <EmojiPicker onEmojiClick={onEmojiClick} />
            </div>
          </section>
        )}
        <button
          className="text-sm rounded-full bg-gold hover:bg-gold/60 py-2.5 px-4 transition-opacity duration-300 md:w-full lg:w-fit"
          onClick={handleCreatePost}
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
