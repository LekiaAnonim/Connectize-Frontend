import { Button } from "@chakra-ui/react";
import React from "react";

export default function ConnectButton() {
  return (
    <Button
      className="!bg-gold w-fit !px-10 !py-1.5 !h-fit !rounded-full transition-all duration-300 active:scale-95 !text-sm"
      onClick={async () => {
        try {
        } catch (err) {
        } finally {
        }
      }}
    >
      Connect
    </Button>
  );
}
