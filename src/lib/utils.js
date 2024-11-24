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
