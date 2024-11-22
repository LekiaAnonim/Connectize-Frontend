import clsx from "clsx";
import { notificationMessages } from "../lib/data/feed";

export function Notifications({ className }) {
  return (
    <div className={clsx("bg-white rounded p-4 space-y-4 w-full", className)}>
      <header className="flex justify-between items-center gap-2">
        <h2 className="text-xl font-bold">Notifications</h2>
        <button className="text-gray-500 hover:text-black transition-colors duration-300 underline">
          Clear All
        </button>
      </header>
      <div className="space-y-4">
        {notificationMessages.map(
          ({ company, src, message, timeStamp }, index) => (
            <div key={index} className="flex items-center gap-2">
              <img
                src={src}
                alt={company}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="space-y-0">
                <h3 className="text-base leading-[1.125] font-bold m-0">
                  {company}
                </h3>
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
