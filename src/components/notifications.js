import clsx from "clsx";
import { notificationMessages } from "../lib/data/feed";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  // Tooltip,
} from "@chakra-ui/react";
import { Notification } from "../icon";

export function NotificationPopOver() {
  return (
    <Popover>
      <PopoverTrigger>
        <button>
          {/* <Tooltip
            label={"Notifications"}
            fontSize="sm"
            placement="auto"
            className="!rounded-md bg-white !text-custom_blue border"
          > */}
          <Notification />
          {/* </Tooltip> */}
        </button>
      </PopoverTrigger>

      <PopoverContent>
        <PopoverArrow />
        <Notifications />
      </PopoverContent>
    </Popover>
  );
}

export function Notifications({ className }) {
  return (
    <div
      className={clsx(
        "bg-white rounded p-3 space-y-4 w-full max-w-screen-xs min-w-[300px]",
        className
      )}
    >
      <header className="flex justify-between items-center gap-2 border-b border-gray-100 pb-1">
        <h4 className="text-xl font-semibold">Notifications</h4>
        <button className="text-gray-500 hover:text-black transition-colors duration-300 hover:underline !text-xs">
          Clear All
        </button>
      </header>
      <div className="space-y-4">
        {notificationMessages.map(
          ({ company, src, message, timeStamp }, index) => (
            <div key={index} className="flex items-start gap-2">
              <img
                src={src}
                alt={company}
                width={35}
                height={35}
                className="rounded-full"
              />
              <div className="space-y-0">
                <h3 className="leading-[1.125] font-bold m-0">{company}</h3>
                <p className="text-sm text-gray-700 line-clamp-1">{message}</p>
                <small className="text-gray-400 text-xs m-0">{timeStamp}</small>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
