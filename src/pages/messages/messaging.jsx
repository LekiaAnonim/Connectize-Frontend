import React from "react";
import MessageControl from "../../components/messages/MessageControl";
import MessageArea from "../../components/messages/MessageArea";

export default function MessagingPage() {
  return (
    <section className="h-[72vh] mb-6">
      <MessageArea />
      <MessageControl />
    </section>
  );
}
