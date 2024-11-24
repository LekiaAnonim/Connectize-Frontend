import {
  ChartBar,
  HomeIcon,
  Message,
  PhotosIcon,
  StoreIcon,
  UserGroup,
  VideoIcon,
} from "../../icon";
import { PersonIcon } from "@radix-ui/react-icons";
import { getSession } from "../session";

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

const session = getSession();

export const feedNavItems = [
  { name: "Feeds", to: "/", icon: <HomeIcon /> },
  { name: "Messages", to: "/messages", icon: <Message /> },
  { name: "Organization", to: "/organization", icon: <UserGroup /> },
  { name: "Market", to: "/market", icon: <StoreIcon /> },
  { name: "Analysis", to: "/analysis", icon: <ChartBar /> },
  { name: "Photos", to: "/photos", icon: <PhotosIcon /> },
  { name: "Videos", to: "/videos", icon: <VideoIcon /> },
  { name: "User profile", to: "/user-profile", icon: <VideoIcon /> },
  {
    name: "Profile",
    to:
      session && !session?.is_first_time_user
        ? "/user-profile"
        : session
        ? "/profile"
        : "/login",
    icon: <PersonIcon />,
  },
];

// personal information
export const first_nameKey = "first_name";
export const last_nameKey = "last_name";
export const company_nameKey = "company_name";
export const genderKey = "gender";
export const roleKey = "role";
export const ageKey = "age";
export const imageKey = "image";
// contact
export const personal_emailKey = "personal_email";
export const company_emailKey = "company_email";
export const phone_numberKey = "phone_number";
// address
export const nationalityKey = "nationality";
export const stateKey = "state";
export const cityKey = "city";
export const postal_codeKey = "postal_code";
export const company_addressKey = "company_address";
// bio
export const bioKey = "bio";
export const website_urlKey = "website_url";
export const social_media_urlKey = "social_media_url";
