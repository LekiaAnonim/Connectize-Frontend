import React from "react";
import { Outlet } from "react-router-dom";
import MessagesAside from "../../components/messages/Aside";

export default function MessagesLayout() {
  return (
    <section>
      <section className="space-y-6">
        <Outlet />
      </section>
      <MessagesAside />
    </section>
  );
}
