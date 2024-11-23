import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  Divider,
  // Tooltip,
} from "@chakra-ui/react";
import FeedSearch from "./admin/feeds/FeedSearch";
import { Search } from "@mui/icons-material";
import HeadingText from "./HeadingText";

export function SearchPopOver() {
  return (
    <Popover>
      <PopoverTrigger>
        <button className="text-white bg-custom_blue px-1.5 py-0.5 rounded-md md:hidden">
          <Search className="!size-4" />
        </button>
      </PopoverTrigger>

      <PopoverContent className="md:hidden px-3 py-2 mx-2">
        <PopoverArrow />
        <HeadingText>Search</HeadingText>
        <Divider className="my-2.5 text-gray-200" />
        <FeedSearch className="my-1 !max-w-[400px]" />
      </PopoverContent>
    </Popover>
  );
}
