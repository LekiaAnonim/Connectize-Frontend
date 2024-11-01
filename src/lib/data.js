import {
  ChartBar,
  Home,
  HomeIcon,
  MarketIcon,
  Message,
  UserGroup,
  VideoIcon,
} from "../icon";

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const connectizeApiBaseUrl = "https://connectize.co/api/";

export const feedNavItems = [
  { name: "Feeds", to: "/feeds", icon: <HomeIcon /> },
  { name: "Messages", to: "/Messages", icon: <Message /> },
  { name: "Organization", to: "/Organization", icon: <UserGroup /> },
  { name: "Market", to: "/Market", icon: <MarketIcon /> },
  { name: "Analysis", to: "/Analysis", icon: <ChartBar /> },
  { name: "Photos", to: "/Photos", icon: <Message /> },
  { name: "Videos", to: "/Videos", icon: <VideoIcon /> },
];
