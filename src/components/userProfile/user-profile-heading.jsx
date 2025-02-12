import { Avatar } from "@chakra-ui/react";
import { VerifiedIcon } from "../../icon";
import { formatNumber } from "../../lib/utils";
import { StatsText } from "../../pages/feed/companyProfile";
import clsx from "clsx";
import { avatarStyle } from "../ResponsiveNav";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/userContext";
import ConnectButton from "../ConnectButton";
import { useState } from "react";

export default function UserProfileHeadings({
  first_name,
  last_name,
  verified,
  company,
  id,
  is_first_time_user,
  followers_count,
  following_count,
  email,
}) {
  const { user: currentUser } = useAuth();
  const [cachedConnections, setCachedConnections] = useState(followers_count);
  return (
    <section className="flex max-md:flex-col md:items-center gap-4 md:justify-between">
      <section className="space-y-1">
        <div className="flex items-center gap-x-0.5">
          <h2
            className={clsx(
              "text-2xl xs:leading-tight text-gray-700 font-bold",
              {
                capitalize: first_name,
              }
            )}
          >
            {`${first_name || email} ${last_name || ""}`}
          </h2>
          {verified && <VerifiedIcon />}
        </div>
        <div className="flex flex-wrap gap-2">
          <StatsText text={`${formatNumber(following_count)} /following`} />
          <StatsText text={`${formatNumber(cachedConnections)} /connections`} />
          {company && (
            <div className="flex items-center gap-1.5 text-sm">
              <Avatar size="xs" name={company} className={clsx(avatarStyle)} />
              <Link to={`/${company}`}>{company}</Link>
            </div>
          )}
        </div>
      </section>

      {currentUser?.id === id ? (
        <Link
          to="/update-profile"
          className="block font-bold py-1.5 px-10 !bg-gold w-fit !rounded-full transition-all duration-300 active:scale-95 text-sm"
        >
          {is_first_time_user ? "Complete your profile" : "Edit profile"}
        </Link>
      ) : (
        <ConnectButton
          id={id}
          setCachedConnections={setCachedConnections}
          first_name={first_name}
        />
      )}
    </section>
  );
}
