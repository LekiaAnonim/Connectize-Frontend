import {
  ChartBar,
  HomeIcon,
  Message,
  PhotosIcon,
  StoreIcon,
  UserGroup,
  VideoIcon,
} from "../../icon";
// import { PersonIcon } from "@radix-ui/react-icons";
// import { getSession } from "../session";

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

// const session = getSession();

export const feedNavItems = [
  { name: "Home", to: "/", icon: HomeIcon },
  { name: "Messages", to: "/chat", icon: Message },
  { name: "Services", to: "/services", icon: UserGroup },
  { name: "Market", to: "/market", icon: StoreIcon },
  { name: "Analysis", to: "/analysis", icon: ChartBar },
  // { name: "Photos", to: "/photos", icon: PhotosIcon },
  // { name: "Videos", to: "/videos", icon: VideoIcon },
];

// index key for complete profile

export const currentProfileIndexKey = "currentProfileIndex";

// personal information
export const first_nameKey = "first_name";
export const last_nameKey = "last_name";
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
