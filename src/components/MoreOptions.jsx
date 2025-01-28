import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  Button,
} from "@chakra-ui/react";
import { MoreHoriz } from "@mui/icons-material";
import clsx from "clsx";

const MoreOptions = ({ children, className, triggerStyle, isOpen }) => {
  return (
    <Popover isOpen={isOpen}>
      <PopoverTrigger>
        <Button
          className={clsx(
            "!bg-transparent shrink-0 !p-0 mt-1 !h-5",
            triggerStyle
          )}
        >
          <MoreHoriz />
        </Button>
      </PopoverTrigger>

      <PopoverContent className={clsx("!p-2 !mb-1 !mx-2", className)}>
        <PopoverArrow />
        <div className="space-y-4"> {children}</div>
      </PopoverContent>
    </Popover>
  );
};

export default MoreOptions;
