import React from "react";

export default function ProfileSection({ title, children }) {
  return (
    <section className="p-4 border border-gray-200 rounded-xl space-y-2">
      <h2 className="font-semibold text-2xl xs:text-xl capitalize">{title}</h2>

      <div>{children} </div>
    </section>
  );
}
