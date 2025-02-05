import React, { useEffect, useMemo, useState } from "react";
import MessageControl from "../../components/messages/MessageControl";
import MessageArea from "../../components/messages/MessageArea";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getMessagesForUser } from "../../api-services/messaging";
import { useAuth } from "../../context/userContext";
import useWebSocket from "../../hooks/useWebSocket";

export default function MessagingPage() {
  const { user: currentUser } = useAuth();
  const { room_name } = useParams();

  const { data: messages = [], isLoading } = useQuery({
    queryKey: ["messages", room_name],
    queryFn: () => getMessagesForUser({ room_name }),
    enabled: !!room_name && !!currentUser,
  });

  const { messages: ws_messages } = useWebSocket(
    `chat`,
    `?room_name=${room_name}&`
  );

  const allMessages = useMemo(
    () => [...ws_messages, ...messages],
    [messages, ws_messages]

  );

  console.log(ws_messages);
  

  const [cachedMessages, setCachedMessages] = useState(allMessages);

  useEffect(() => {
    document.title = "Room messaging in connectize";
    setCachedMessages(allMessages);
  }, [messages, currentUser, allMessages]);

  return (
    <section className="h-[79vh] lg:h-[85vh] flex flex-col">
      <MessageArea messages={cachedMessages} messagesLoading={isLoading} />
      <MessageControl loading={isLoading} room_name={room_name} />
    </section>
  );
}
