import React from "react";
import { Link } from "react-router-dom";
import Logo from "../logo";
import { getSession } from "../../lib/session";
import useRedirect from "../../hooks/useRedirect";
import HeadingText from "../HeadingText";
import { useAuth } from "../../context/userContext";

function Profile() {
  const session = getSession();

  const {user} = useAuth()

  useRedirect(!session, "/login");

  useRedirect(session && !user?.is_first_time_user, "/");
  return (
    <main>
      <div className="container py-4">
        <Logo />
        <div className="mx-auto flex flex-col justify-center items-center text-center space-y-6 min-h-[80vh]">
          <HeadingText>
            Would you like to set up <br />
            your profile now?
          </HeadingText>
          <img src="/images/pasportOne.png" alt="passport" width="150px" />
          <div className="flex max-md:flex-col gap-3">
            <Link to="/home" className="bg-gold rounded-full w-[250px] p-2">
              Let's Go
            </Link>
            <Link
              to="/user-profile"
              className="bg-gray-400 rounded-full w-[250px] p-2"
            >
              Not Now
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Profile;
