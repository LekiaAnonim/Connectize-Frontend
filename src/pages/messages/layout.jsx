import React from "react";
import { Outlet } from "react-router-dom";
import MessagesAside from "../../components/messages/Aside";

export default function MessagesLayout() {
  return (
    <section className="w-full grid grid-cols-1 xl:grid-cols-3 gap-7">
      <section className="md:w-full xl:col-span-2 space-y-6 xs:space-y-6">
        <Outlet />
      </section>
      <MessagesAside />
    </section>
  );
}
