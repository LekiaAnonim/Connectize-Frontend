import React from "react";
import Favorites from "../../components/messages/Favorites";
import MessagesList from "../../components/messages/MessagesList";

export default function MessagesPage() {
  return (
    <>
      <Favorites />
      <MessagesList />
    </>
  );
}
