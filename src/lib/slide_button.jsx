import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

export const NAVIGATION_BUTTONS = [
  {
    id: 1,
    text: "Back",
    icon: <ChevronLeftIcon direction="left" className="!w-5" />,
    action: "prev",
  },
  {
    id: 2,
    text: "Next",
    icon: <ChevronRightIcon direction="right" className="!w-5" />,
    action: "next",
  },
];
