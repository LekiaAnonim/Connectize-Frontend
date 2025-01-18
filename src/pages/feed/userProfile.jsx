import React, { useEffect } from "react";
import { getUserById } from "../../api-services/users";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import NoPage from "../../components/NoPage";
import PageLoading from "../../components/PageLoading";
import Header from "../../components/userProfile/header";
import UserProfileHeadings from "../../components/userProfile/user-profile-heading";
import ProfileSection from "../../components/userProfile/profile-section";
import LightParagraph from "../../components/ParagraphText";
import { LocationOnOutlined, PersonOutline } from "@mui/icons-material";
import {
  CalendarOutlined,
  MailOutlined,
  PhoneOutlined,
  TagOutlined,
} from "@ant-design/icons";
import { VerifiedIcon } from "../../icon";
import { Badge } from "@chakra-ui/react";
import { SuggestionList } from "../../components/admin/feeds/TopServiceSuggestions";

export default function UserProfile() {
  const { userId } = useParams();

  const { data: paramUser, isLoading } = useQuery({
    queryKey: ["users", userId],
    queryFn: () => getUserById(userId),
    enabled: !!userId,
  });

  useEffect(() => {
    document.title = `${paramUser?.first_name || paramUser?.email || ""} ${
      paramUser?.last_name || ""
    }  - Connectize`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) return <PageLoading hasLogo={false} />;

  if (!paramUser) return <NoPage />;

  const headerProps = {
    banner: paramUser?.banner || "",
    name: `${paramUser?.first_name || ""} ${paramUser?.last_name || ""}`,
    logo: paramUser?.avatar || "",
  };

  const {
    verified,
    bio,
    email,
    gender,
    date_of_birth,
    role,
    address,
    city,
    region,
    phone_number,
    country,
  } = paramUser;

  return (
    <section className="rounded-md overflow-hidden">
      <Header {...headerProps} />

      <section className="mt-8 container !px-0 space-y-6">
        <UserProfileHeadings {...paramUser} />

        <section className="flex max-lg:flex-col gap-y-6 gap-x-3 w-full">
          <section className="space-y-6 lg:w-[65.5%] shrink-0">
            <ProfileSection title="Short Bio">
              <LightParagraph>{bio} </LightParagraph>
            </ProfileSection>
            <ProfileSection title="about">
              <ul className="space-y-4 divide-y">
                <ProfileAboutList
                  Icon={PersonOutline}
                  title="Gender"
                  value={gender}
                />
                <ProfileAboutList
                  Icon={CalendarOutlined}
                  title="Date of Birth"
                  value={date_of_birth}
                />
                <ProfileAboutList
                  Icon={TagOutlined}
                  title="Role"
                  value={role}
                />
                <ProfileAboutList
                  Icon={LocationOnOutlined}
                  title="Location"
                  value={`${address}, ${city}. ${region}. ${country}`}
                />
                <ProfileAboutList
                  Icon={PhoneOutlined}
                  title="Phone number"
                  value={phone_number}
                />
                <ProfileAboutList
                  Icon={MailOutlined}
                  title="Email"
                  value={email}
                />
              </ul>
            </ProfileSection>

            <ProfileSection title="Badges">
              <section className="flex flex-wrap gap-x-4 gap-y-2">
                {verified && (
                  <ProfileBadge text="Identity Verified" color="black" />
                )}
                <ProfileBadge text="Premium" />
              </section>
            </ProfileSection>
          </section>

          <ProfileSection title="People Associated" className="h-fit lg:w-1/3">
            <SuggestionList hasSeeMore />
          </ProfileSection>
        </section>
      </section>
    </section>
  );
}

export const ProfileAboutList = ({ title, value, Icon }) => {
  return (
    <li className="flex gap-2 items-start pt-4">
      <Icon className="!size-6 xs:!size-5" />
      <div className="flex gap-x-1 items-baseline max-xs:flex-col">
        <strong className="leading-none">{title}:</strong>
        <LightParagraph>{value} </LightParagraph>
      </div>
    </li>
  );
};

const ProfileBadge = ({ color, text }) => {
  return (
    <Badge className="!normal-case !flex gap-1.5 items-center !bg-gray-100 !text-base xs:!text-sm">
      <VerifiedIcon color={color} className={color} />
      <span>{text}</span>
    </Badge>
  );
};
