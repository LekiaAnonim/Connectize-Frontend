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
  DownOutlined,
} from "@ant-design/icons";
import { PaperPlaneIcon, TrashIcon } from "@radix-ui/react-icons";
import { Mic, MicExternalOn } from "@mui/icons-material";
import EmojiPicker from "emoji-picker-react";
import { CloseButton } from "@chakra-ui/react";
import { toast } from "sonner";
import { largeFileText } from "../admin/listing/newListing";
import { motion } from "framer-motion";
import { messageUser } from "../../api-services/messaging";
import ValidImages from "../ValidImages";
import { useAuth } from "../../context/userContext";

const isImageSize = (files) => {
  const imageSize = 4 * 1024 * 1024; // 4MB
  return Array.isArray(files)
    ? files.every((file) => file.size <= imageSize)
    : files.size <= imageSize;
};

const emptyMessageValue = "Message field does not have any text";

export default function MessageControl({ loading, recipientId, senderId }) {
  const { user: currentUser } = useAuth();

  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [validImages, setValidImages] = useState([]);
  const [audioBlob, setAudioBlob] = useState(null);
  const [audioURL, setAudioURL] = useState(null);
  const [showScrollDown, setShowScrollDown] = useState(false);
  const chatContainerRef = useRef(null);

  const handleFileChange = useCallback((event) => {
    const selectedFiles = Array.from(event.target.files);
    const validImageFiles = selectedFiles.filter(isImageSize);

    setValidImages(validImageFiles);

    if (validImageFiles.length < selectedFiles.length) {
      toast.info(`${largeFileText}`);
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
    if (message.trim().length < 1 && !audioBlob && validImages.length < 1) {
      setErrorMessage(emptyMessageValue);
      return;
    }

    try {
      const formData = new FormData();
      formData.append("recipient", recipientId);
      formData.append("content", message);
      formData.append("sender", senderId);
      if (audioBlob) {
        if (message.trim().length < 1)
          formData.append("content", "Audio conversation");
        formData.append(
          "audio_file",
          audioBlob,
          `voice-note-in-room_${senderId}_${recipientId}-${new Date().getTime()}.webm`
        );
      }
      if (validImages) {
        if (message.trim().length < 1)
          formData.append("content", "Sent with attachment");
        validImages.forEach((image) => {
          formData.append("images", image);
        });
      }

      await messageUser(formData);
      // setCachedMessages((prev) => [newMessage, ...prev]);
      setMessage("");
      setValidImages([]);
      setAudioBlob(null);
      setAudioURL(null);
      setErrorMessage(null);
    } catch (error) {
      console.error(error);
      toast.info("An error occurred while sending message");
    }
  }, [audioBlob, message, recipientId, senderId, validImages]);

  const handleInputChange = useCallback((e) => {
    const trimmedMessage = e.target.value.trim();
    if (trimmedMessage.length >= 1) {
      setErrorMessage(null);
    } else if (trimmedMessage.length < 1) {
      setErrorMessage(emptyMessageValue);
    }
    setMessage(e.target.value);
  }, []);

  const handleScroll = useCallback(() => {
    if (chatContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } =
        chatContainerRef.current;
      setShowScrollDown(scrollTop + clientHeight < scrollHeight - 10);
    }
  }, []);

  const scrollToBottom = useCallback(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    const chatContainer = chatContainerRef.current;
    if (chatContainer) {
      chatContainer.addEventListener("scroll", handleScroll);
      return () => chatContainer.removeEventListener("scroll", handleScroll);
    }
  }, [handleScroll]);

  return (
    <section className="bg-white p-2 px-4 rounded-md flex flex-col gap-2 transition-all duration-300">
      {/* valid images */}
      {validImages && (
        <ValidImages
          setValidImages={setValidImages}
          validImages={validImages}
          header="Attachment"
        />
      )}
      <section className="flex items-center gap-2">
        {showEmojiPicker && renderEmojiGifPickers}
        <input
          type="file"
          name="attachment"
          id="attachment"
          multiple
          hidden
          onChange={handleFileChange}
        />
        <ButtonWithTooltipIcon
          IconName={PaperClipOutlined}
          tip="Attachment"
          className="hover:!bg-gray-100 !text-black p-2 rounded-full"
          onClick={() => document.getElementById("attachment").click()}
          disabled={loading}
        />
        {audioURL ? (
          <VoiceNotePlayer
            audioURL={audioURL}
            trashOnClick={() => {
              setAudioURL(null);
              setAudioBlob(null);
            }}
          />
        ) : (
          <input
            type="text"
            value={message}
            onChange={handleInputChange}
            className="flex-1 text-sm border-0 outline-none placeholder:text-gray-400 disabled:cursor-not-allowed"
            placeholder="Type a message here..."
            disabled={loading}
          />
        )}
        <div className="flex items-center">
          <ButtonWithTooltipIcon
            IconName={SmileFilled}
            onClick={() => setShowEmojiPicker(true)}
            tip="Emoji"
            className="hover:!bg-gray-100 !text-black p-2 rounded-full"
            disabled={loading}
          />
          <VoiceNoteRecorderIcon
            setAudioURL={setAudioURL}
            setAudioBlob={setAudioBlob}
          />
          <ButtonWithTooltipIcon
            IconName={PaperPlaneIcon}
            className="!bg-black !text-gray-300 p-1.5 rounded-full"
            iconClassName="size-3.5"
            tip="Send"
            onClick={handleSendMessage}
            disabled={loading}
          />
        </div>
      </section>
      {errorMessage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-[#9e3818] text-xs mx-0.5"
        >
          {errorMessage}
        </motion.div>
      )}
      {showScrollDown && (
        <button
          onClick={scrollToBottom}
          className="fixed bottom-4 right-4 p-2 bg-black text-white rounded-full"
        >
          <DownOutlined />
        </button>
      )}
    </section>
  );
}

const VoiceNoteRecorderIcon = ({ setAudioBlob, setAudioURL }) => {
  const [recordingDuration, setRecordingDuration] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorderRef = useRef(null);
  const audioChunks = useRef([]);

  const formatTime = (time) => {
    if (!time) return "00:00";
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const startRecording = useCallback(async () => {
    setAudioURL(null);
    setAudioBlob(null);
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
        setAudioBlob(audioBlob);
      };

      audioChunks.current = [];
      mediaRecorderRef.current.start();
      setIsRecording(true);
      const id = setInterval(() => {
        setRecordingDuration((prevDuration) => prevDuration + 1);
      }, 1000);
      setIntervalId(id);
    } catch (error) {
      console.error("Error accessing microphone:", error);
    }
  }, [setAudioBlob, setAudioURL]);

  const stopRecording = useCallback(() => {
    mediaRecorderRef.current?.stop();
    setIsRecording(false);
    clearInterval(intervalId);
    setRecordingDuration(0);
  }, [intervalId]);

  return (
    <ButtonWithTooltipIcon
      IconName={isRecording ? MicExternalOn : Mic}
      text={isRecording ? formatTime(recordingDuration) : ""}
      tip={isRecording ? "Recording" : "Voice note"}
      onClick={isRecording ? stopRecording : startRecording}
      className="hover:!bg-gray-100 !text-black p-2 rounded-full mr-1.5"
      thisKey="recorder"
    />
  );
};

export const VoiceNotePlayer = ({ audioURL, className, trashOnClick }) => {
  const audioRef = useRef(null);
  const analyserRef = useRef(null);
  const sourceRef = useRef(null);
  const animationFrameRef = useRef(null);
  const audioContextRef = useRef(null);
  const dataArrayRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [waveData, setWaveData] = useState(new Array(30).fill(5));

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.crossOrigin = "anonymous"; // Ensure CORS
      audioRef.current.onloadedmetadata = () => {
        setDuration(audioRef.current?.duration || 0);
      };
    }
  }, [audioURL]);

  const togglePlay = useCallback(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      cancelAnimationFrame(animationFrameRef?.current);
    } else {
      audioRef.current.play();
      startAudioAnalysis();
    }
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  const updateProgress = useCallback(() => {
    if (!audioRef.current) return;

    const newProgress =
      (audioRef.current.currentTime / (audioRef.current.duration || 1)) * 100;
    setProgress(newProgress);
    setCurrentTime(audioRef.current.currentTime);
    setDuration(audioRef.current.duration || 0);
  }, []);

  const changeSpeed = useCallback(() => {
    const newSpeed = speed === 1 ? 1.5 : speed === 1.5 ? 2 : 1;
    setSpeed(newSpeed);
    if (audioRef.current) {
      audioRef.current.playbackRate = newSpeed;
    }
  }, [speed]);

  const formatTime = (time) => {
    if (!time || isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const startAudioAnalysis = () => {
    if (!audioRef.current) return;

    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext ||
        window.webkitAudioContext)();
    }

    if (!sourceRef.current) {
      sourceRef.current = audioContextRef.current.createMediaElementSource(
        audioRef.current
      );
    }

    analyserRef.current = audioContextRef.current.createAnalyser();
    analyserRef.current.fftSize = 64;
    const bufferLength = analyserRef.current.frequencyBinCount;
    dataArrayRef.current = new Uint8Array(bufferLength);

    sourceRef.current.connect(analyserRef.current);
    analyserRef.current.connect(audioContextRef.current.destination);

    const analyzeAudio = () => {
      if (!analyserRef.current || !dataArrayRef.current) return;
      analyserRef.current.getByteFrequencyData(dataArrayRef.current);
      const newWaveData = Array.from(dataArrayRef.current)
        .slice(0, 30)
        .map((val) => (val / 255) * 25 + 5);

      setWaveData(newWaveData);
      animationFrameRef.current = requestAnimationFrame(analyzeAudio);
    };

    analyzeAudio();
  };

  return (
    <div
      className={`${className} flex-1 flex flex-col gap-1 p-2 overflow-hidden`}
    >
      <div className="flex items-center space-x-3 overflow-hidden">
        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          className="text-gold flex items-center gap-1"
        >
          <span className="sr-only text-xs">
            {isPlaying ? "Pause" : "Play"}
          </span>
          {isPlaying ? <PauseCircleFilled /> : <PlayCircleFilled />}
        </button>

        {/* Waveform Visualization */}
        <div className="flex-1 flex items-center gap-x-1 h-5">
          {waveData.map((height, index) => (
            <div
              key={index}
              className={`w-1 rounded transition-all duration-300 ${
                index < Math.floor((progress / 100) * waveData.length)
                  ? "bg-gold"
                  : "bg-gray-200"
              }`}
              style={{ height: `${(height / 30) * 100}%` }}
            />
          ))}
        </div>

        {/* Hidden Audio Element */}
        <audio
          ref={audioRef}
          src={audioURL}
          onTimeUpdate={updateProgress}
          onEnded={() => {
            setIsPlaying(false);
            cancelAnimationFrame(animationFrameRef?.current);
          }}
          crossOrigin="anonymous" // Ensures CORS
        />
      </div>

      {/* Timer & Speed Control */}
      <div className="flex items-center justify-between">
        <span className="text-[.6rem] text-gray-600">
          {formatTime(currentTime)} / {formatTime(duration)}
        </span>

        <div className="flex gap-2">
          {/* Speed Control Button */}
          <button
            onClick={changeSpeed}
            className="text-black !text-[.55rem] bg-gold rounded-full size-5 hover:bg-opacity-70 transition-all duration-300"
          >
            {speed}x
          </button>
          {trashOnClick && (
            <ButtonWithTooltipIcon
              onClick={trashOnClick}
              IconName={TrashIcon}
              tip="Delete voice note"
            />
          )}
        </div>
      </div>
    </div>
  );
};
