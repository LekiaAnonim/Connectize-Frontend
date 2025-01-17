import { Avatar } from "@chakra-ui/react";
import clsx from "clsx";
import { avatarStyle } from "../ResponsiveNav";

const Header = ({ banner, name, logo }) => {
  return (
    <section className="relative">
      {banner ? (
        <img
          src={banner}
          alt={`${name?.trim()}'s banner`}
          className="w-full h-60 max-h-[45vh] aspect-auto"
        />
      ) : (
        <div className="w-full h-40 bg-gold" />
      )}

      <Avatar
        src={logo}
        name={name}
        className={clsx(
          avatarStyle,
          "!absolute !left-[7%] md:!left-[3%]  !size-[90px] lg:!size-[120px]",
          {
            "!bottom-10": banner,
            "!-bottom-8": !banner,
          }
        )}
      />
    </section>
  );
};

export default Header;
