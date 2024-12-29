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
        <Button className={clsx("bg-transparent shrink-0", triggerStyle)}>
          <MoreHoriz />
        </Button>
      </PopoverTrigger>

      <PopoverContent className={clsx("!p-3 space-y-2 !mb-1 !mx-2", className)}>
        <PopoverArrow />
        {children}
      </PopoverContent>
    </Popover>
  );
};

export default MoreOptions;
