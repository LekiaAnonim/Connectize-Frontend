import React, { useEffect } from "react";
import { getUserById } from "../../api-services/users";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import NoPage from "../../components/NoPage";
import PageLoading from "../../components/PageLoading";
import Navbar from "../../components/userProfile/Navbar";
import Sidebar from "../../components/admin/feeds/SideBar";
import Header from "../../components/userProfile/header";
import { useAuth } from "../../context/userContext";
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

  const { user: currentUser } = useAuth();

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

  if (isLoading) return <PageLoading />;

  if (!paramUser) return <NoPage />;

  const headerProps = {
    banner: paramUser?.banner || "",
    name: `${paramUser?.first_name || ""} ${paramUser?.last_name || ""}`,
    logo: paramUser?.avatar || "",
  };

  const {
    first_name,
    last_name,
    verified,
    company,
    bio,
    email,
    gender,
    date_of_birth,
    role,
    address,
    city,
    is_first_time_user,
    region,
    phone_number,
    country,
  } = paramUser;

  const userHeadingProps = {
    first_name,
    last_name,
    verified,
    company,
    currentUser,
    paramUser,
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background mb-8">
        <Sidebar />
        <section>
          <Header {...headerProps} />

          <section className="mt-8 container space-y-6">
            <UserProfileHeadings {...userHeadingProps} />
            <section className="flex max-lg:flex-col gap-y-6 gap-x-3">
              <section className="space-y-6">
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

              <ProfileSection title="People Associated">
                <SuggestionList hasSeeMore />

               
              </ProfileSection>
            </section>
          </section>
        </section>
      </main>
      <footer></footer>
    </>
  );
}

const ProfileAboutList = ({ title, value, Icon }) => {
  return (
    <li className="flex gap-2 items-center pt-4">
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
