import React from "react";

export default function Restricted({ fallback = "this" }) {
  return (
    <div className="text-center min-h-[80vh] flex flex-col items-center">
      <p className="max-w-screen-sm m-auto">
        Your account type restricts you from {fallback} on connectize. <br /> Kindly register a
        professional mail e.g <strong>example@yourbusiness.com</strong> to enjoy
        unrestricted privileges on connectize
      </p>
    </div>
  );
}
