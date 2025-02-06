import React, { useEffect, useMemo } from "react";
import MessageControl from "../../components/messages/MessageControl";
import MessageArea from "../../components/messages/MessageArea";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getMessagesForUser } from "../../api-services/messaging";
import { useAuth } from "../../context/userContext";
import useWebSocket from "../../hooks/useWebSocket";

export default function MessagingPage() {
  const { user: currentUser } = useAuth();
  const { room_name } = useParams();

  const navigate = useNavigate();
  const [, userId, recipientId] = room_name.split("_");

  const { data: messages = [], isLoading } = useQuery({
    queryKey: ["messages", room_name],
    queryFn: () => getMessagesForUser({ room_name }),
    enabled: !!room_name && !!currentUser,
  });

  const { messages: ws_messages, sendCommand } = useWebSocket(
    `chat/${room_name}`
  );

  const allMessages = useMemo(
    () => [...ws_messages, ...messages],
    [messages, ws_messages]
  );

  useEffect(() => {
    document.title = "Room messaging in connectize";
    if (allMessages) {
      allMessages.forEach((message) => {
        if (message?.read_at === null) {
          sendCommand({ command: "mark_as_read", message_id: message?.id });
        }
      });
    }
    console.log(allMessages);
  }, [messages, currentUser, allMessages, ws_messages, sendCommand]);

  useEffect(() => {
    if (
      String(userId) !== String(currentUser?.id) &&
      String(recipientId) !== String(currentUser?.id)
    )
      navigate("/messages");
  }, [currentUser?.id, navigate, recipientId, userId]);

  return (
    <section className="h-[79vh] lg:h-[85vh] flex flex-col">
      <MessageArea messages={allMessages} messagesLoading={isLoading} />
      <MessageControl
        loading={isLoading}
        recipientId={recipientId}
        senderId={userId}
      />
    </section>
  );
}
