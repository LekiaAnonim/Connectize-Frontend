import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { ButtonWithTooltipIcon } from "../admin/feeds/DiscoverPosts";
import {
  PaperClipOutlined,
  PauseCircleFilled,
  PlayCircleFilled,
  SmileFilled,
} from "@ant-design/icons";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { Mic, MicExternalOn } from "@mui/icons-material";
import EmojiPicker from "emoji-picker-react";
import { CloseButton } from "@chakra-ui/react";
import { useAuth } from "../../context/userContext";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import { largeFileText, unSupportedText } from "../admin/listing/newListing";
import { motion } from "framer-motion";
import clsx from "clsx";
import { useCustomQuery } from "../../context/queryContext";
import { messageUser } from "../../api-services/messaging";

const isImageFile = (files) => {
  const imageTypes = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp",
    "image/avif",
  ];
  return Array.isArray(files)
    ? files.every((file) => imageTypes.includes(file.type.toLowerCase()))
    : imageTypes.includes(files.type.toLowerCase());
};

const isImageSize = (files) => {
  const imageSize = 4 * 1024 * 1024; // 4MB
  return Array.isArray(files)
    ? files.every((file) => file.size <= imageSize)
    : files.size <= imageSize;
};

const emptyMessageValue = "Message field does not have any text";

export default function MessageControl() {
  const params = useParams();
  const room = params?.room;
  const recipientId = room.split("_")[2];
  const { user: currentUser } = useAuth();
  const { setRefetchInterval } = useCustomQuery();
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [audioBlob, setAudioBlob] = useState(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [validImages, setValidImages] = useState([]);

  const handleFileChange = useCallback((event) => {
    const selectedFiles = Array.from(event.target.files);
    const validImageFiles = selectedFiles
      .filter(isImageFile)
      .filter(isImageSize);

    setValidImages(validImageFiles);

    if (validImageFiles.length < selectedFiles.length) {
      toast.info(`${unSupportedText} or ${largeFileText}`);
    }
  }, []);

  const onEmojiClick = useCallback((emojiObject) => {
    setMessage((prevText) => prevText + emojiObject.emoji);
  }, []);

  const renderEmojiGifPickers = useMemo(
    () => (
      <section className="fixed top-0 left-0 w-screen h-screen z-[4000] flex items-center justify-center bg-transparent">
        <div
          className="bg-black/30 fixed top-0 left-0 w-screen h-screen"
          onClick={() => {
            setShowEmojiPicker(false);
          }}
        />
        <div className="relative size-fit max-w-sm grid place-items-center m-10">
          <CloseButton
            onClick={() => {
              setShowEmojiPicker(false);
            }}
            className="absolute -right-8 -top-8 bg-white !text-xs !size-8"
          />
          {showEmojiPicker && <EmojiPicker onEmojiClick={onEmojiClick} />}
        </div>
      </section>
    ),
    [showEmojiPicker, onEmojiClick]
  );

  const handleSendMessage = useCallback(async () => {
    if (message.trim().length < 1 && !audioBlob) {
      setErrorMessage(emptyMessageValue);
      return;
    }
    console.log(audioBlob, recipientId, message);

    const formData = new FormData();
    formData.append("recipient", recipientId);
    formData.append("content", message);
    if (audioBlob)
      formData.append(
        "audio_file",
        audioBlob,
        `voice-note-in-${room}-${new Date().getTime()}.webm`
      );
    if (validImages)
      validImages.forEach((image) => {
        formData.append("images", image);
      });
    console.log(formData);

    await messageUser(formData);
    setRefetchInterval(1000);
    setTimeout(() => setRefetchInterval(false), 2000);
  }, [audioBlob, message, recipientId, room, setRefetchInterval, validImages]);

  const handleInputChange = useCallback((e) => {
    const trimmedMessage = e.target.value.trim();
    if (trimmedMessage.length >= 1) {
      setErrorMessage(null);
    } else if (trimmedMessage.length < 1) {
      setErrorMessage(emptyMessageValue);
    }
    setMessage(e.target.value);
  }, []);

  return (
    <section className="bg-white p-2 px-4 rounded-md flex gap-2">
      {showEmojiPicker && renderEmojiGifPickers}
      <input
        type="file"
        name="attachment"
        id="attachment"
        hidden
        onChange={handleFileChange}
      />
      <ButtonWithTooltipIcon
        IconName={PaperClipOutlined}
        tip="Attachment"
        className="hover:!bg-gray-100 !text-black p-2 rounded-full"
        onClick={() => document.getElementById("attachment").click()}
      />
      <input
        type="text"
        value={message}
        onChange={handleInputChange}
        className="flex-1 text-sm border-0 outline-none placeholder:text-gray-400"
        placeholder="Type a message here..."
      />
      <div className="flex items-center">
        <ButtonWithTooltipIcon
          IconName={SmileFilled}
          onClick={() => setShowEmojiPicker(true)}
          tip="Emoji"
          className="hover:!bg-gray-100 !text-black p-2 rounded-full"
        />
        <VoiceRecorder onSave={handleSendMessage} setAudioBlob={setAudioBlob} />
        <ButtonWithTooltipIcon
          IconName={PaperPlaneIcon}
          className="!bg-black !text-gray-300 p-1.5 rounded-full"
          iconClassName="size-3.5"
          tip="Send"
          onClick={handleSendMessage}
        />
      </div>
    </section>
  );
}

const VoiceRecorder = ({ onSave, setAudioBlob }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState(null);
  const mediaRecorderRef = useRef(null);
  const audioChunks = useRef([]);

  const startRecording = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);

      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunks.current.push(event.data);
        }
      };

      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunks.current, { type: "audio/webm" });
        const url = URL.createObjectURL(audioBlob);
        setAudioURL(url);
        onSave(audioBlob);
        setAudioBlob(audioBlob);
      };

      audioChunks.current = [];
      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (error) {
      console.error("Error accessing microphone:", error);
    }
  }, [onSave]);

  const stopRecording = useCallback(() => {
    mediaRecorderRef.current?.stop();
    setIsRecording(false);
  }, []);

  return (
    <div className="relative">
      <ButtonWithTooltipIcon
        IconName={isRecording ? MicExternalOn : Mic}
        tip={isRecording ? "Recording" : "Voice note"}
        onClick={isRecording ? stopRecording : startRecording}
        className="hover:!bg-gray-100 !text-black p-2 rounded-full mr-1.5"
      />
      {audioURL && <VoiceNotePlayer audioURL={audioURL} />}
    </div>
  );
};

const VoiceNotePlayer = ({ audioURL }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [duration, setDuration] = useState(0);
  const [waveHeights, setWaveHeights] = useState([5, 15, 10, 2, 5, 4, 1, 7, 3]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.onloadedmetadata = () => {
        setDuration(audioRef.current.duration);
      };
    }
  }, [audioURL]);

  const togglePlay = useCallback(() => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  const updateProgress = useCallback(() => {
    if (audioRef.current) {
      const percent =
        (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(percent);

      setDuration(audioRef.current.duration);
      setCurrentTime(audioRef.current.currentTime);

      // Create a dynamic wave pattern based on progress
      setWaveHeights(waveHeights.map(() => Math.random() * 25));
    }
  }, [waveHeights]);

  const changeSpeed = useCallback(() => {
    const newSpeed = speed === 1 ? 1.5 : speed === 1.5 ? 2 : 1;
    setSpeed(newSpeed);
    audioRef.current.playbackRate = newSpeed;
  }, [speed]);

  const formatTime = useCallback((time) => {
    if (!time) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  }, []);

  return (
    <div className="absolute right-0 -top-16 flex flex-col gap-1 bg-white rounded-lg w-60 shadow overflow-hidden p-2">
      <div className=" flex items-center overflow-hidden space-x-3">
        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          className="p-1 bg-gold rounded-full text-white"
        >
          {isPlaying ? (
            <PauseCircleFilled size={20} />
          ) : (
            <PlayCircleFilled size={20} />
          )}
        </button>

        <div className="flex-1 flex items-center gap-x-1 h-6 ">
          {Array.from({ length: progress }).map((height, index) => (
            <motion.div
              key={index}
              className={clsx("w-1  rounded", {
                "bg-gold": Math.floor(duration % 60) > index,
                "bg-gray-200": duration < index,
              })}
              initial={{ height: Math.floor(Math.random() * 20) }}
              animate={{
                height: isPlaying ? height : Math.floor(Math.random() * 25),
              }}
              transition={{
                duration: 0.4,
                //   repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
                delay: index * 0.1,
              }}
            />
          ))}
        </div>

        {/* Hidden Audio Element */}
        <audio
          ref={audioRef}
          src={audioURL}
          onTimeUpdate={updateProgress}
          onEnded={() => setIsPlaying(false)}
        />
      </div>
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-600">
          {formatTime(currentTime)} / {formatTime(duration)}
        </span>

        {/* Speed Control Button */}
        <button
          onClick={changeSpeed}
          className="text-black text-xs bg-gold rounded-full p-1 hover:bg-opacity-70 transition-all duration-300"
        >
          {speed}x
        </button>
      </div>
    </div>
  );
};
