import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function capitalizeFirst(value) {
  return String(value)
    .toLowerCase()
    .replace(/^\w/, (c) => c.toUpperCase());
}

export function timeAgo(timestamp) {
    const now = new Date();
    const past = new Date(timestamp);
    const seconds = Math.floor((now - past) / 1000);

    const intervals = {
        year: 31536000, // seconds in a year
        month: 2592000, // seconds in a month
        week: 604800,   // seconds in a week
        day: 86400,     // seconds in a day
        hour: 3600,     // seconds in an hour
        minute: 60,     // seconds in a minute
        second: 1       // seconds in a second
    };

    for (const [unit, value] of Object.entries(intervals)) {
        const count = Math.floor(seconds / value);
        if (count > 0) {
            return count === 1 ? `1 ${unit} ago` : `${count} ${unit}s ago`;
        }
    }

    return "just now"; // Default for timestamps very close to the current time
}

