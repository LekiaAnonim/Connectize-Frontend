import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
} from "@chakra-ui/react";
import { MoreHoriz } from "@mui/icons-material";

const MoreOptions = ({ children }) => {
  return (
    <Popover>
      <PopoverTrigger>
        <button>
          <MoreHoriz />
        </button>
      </PopoverTrigger>

      <PopoverContent>
        <PopoverArrow />
        {children}
      </PopoverContent>
    </Popover>
  );
};

export default MoreOptions;
