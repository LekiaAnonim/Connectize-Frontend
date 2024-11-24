import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
} from "@chakra-ui/react";
import { MoreHoriz } from "@mui/icons-material";
import clsx from "clsx";

const MoreOptions = ({ children, className, triggerStyle, isOpen }) => {
  return (
    <Popover isOpen={isOpen}>
      <PopoverTrigger>
        <button className={clsx("", triggerStyle)}>
          <MoreHoriz />
        </button>
      </PopoverTrigger>

      <PopoverContent className={clsx("!p-3 space-y-2 !mb-1", className)}>
        <PopoverArrow />
        {children}
      </PopoverContent>
    </Popover>
  );
};

export default MoreOptions;
