import { useEffect, useState } from "react";
import { baseURL } from "../lib/helpers";
import { getSession } from "../lib/session";

const useWebSocket = (url, params) => {
  const [messages, setMessages] = useState([]);
  const [ws, setWs] = useState(null);
  const session = getSession();

  useEffect(() => {
    const wsBaseUrl =
      process.env.NODE_ENV === "development"
        ? baseURL.replace("http", "")
        : baseURL.replace("https", "");

    const socket = new WebSocket(
      `ws${wsBaseUrl}/ws/${url}/${params ? params : "?"}token=${
        session?.tokens?.access
      }`
    );

    socket.onopen = () => {
      console.log("WebSocket Connected");
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);

      setMessages((prevMessages) => [...prevMessages, data]);
    };

    socket.onerror = (error) => {
      console.error("WebSocket Error:", error);
    };

    socket.onclose = () => {
      console.log("WebSocket Disconnected");
    };

    setWs(socket);

    return () => {
      socket.close();
    };
  }, [session?.tokens?.access, url]);

  const sendMessage = (message) => {
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify({ message }));
    }
  };

  return { messages, sendMessage };
};

export default useWebSocket;
