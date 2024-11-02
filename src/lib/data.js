import { ProfileFilled } from "@ant-design/icons";
import {
  AnalysisIcon,
  ChartBar,
  Home,
  HomeIcon,
  MarketIcon,
  Message,
  PhotosIcon,
  UserGroup,
  VideoIcon,
} from "../icon";
import { PersonIcon } from "@radix-ui/react-icons";

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
  { name: "Feeds", to: "/", icon: <HomeIcon /> },
  { name: "Messages", to: "/messages", icon: <Message /> },
  { name: "Organization", to: "/organization", icon: <UserGroup /> },
  { name: "Market", to: "/market", icon: <MarketIcon /> },
  { name: "Analysis", to: "/analysis", icon: <AnalysisIcon /> },
  { name: "Photos", to: "/photos", icon: <PhotosIcon /> },
  { name: "Videos", to: "/videos", icon: <VideoIcon /> },
  { name: "Profile", to: "/login", icon: <PersonIcon /> },
];
