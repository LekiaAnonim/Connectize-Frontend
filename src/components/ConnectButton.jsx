import { Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { connectWithUser } from "../api-services/users";
import { toast } from "sonner";
import { useAuth } from "../context/userContext";

export default function ConnectButton({
  id,
  type = "user",
  setCachedConnections,
}) {
  const { user } = useAuth();
  console.log(user);

  const [hasConnected, setHasConnected] = useState(false);
  return (
    <Button
      className="!bg-gold w-fit !px-10 !py-1.5 !h-fit !rounded-full transition-all duration-300 active:scale-95 !text-sm"
      onClick={async () => {
        const connect = await connectWithUser(id);
        setHasConnected((prev) => !prev);
        if (connect) {
          setCachedConnections((prev) => prev + 1);
          toast.success("Connect invitation sent");
        }
      }}
    >
      {hasConnected ? "Disconnect" : "Connect"}
    </Button>
  );
}
