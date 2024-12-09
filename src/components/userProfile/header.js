import { Avatar } from "@chakra-ui/react";

const Header = ({ company }) => {
  return (
    <section className="relative">
      <img
        src={company.banner || "images/dangote.png"}
        alt={`${company.company_name.trim()}'s banner`}
        className="w-full min-h-64 max-h-[60vh] aspect-auto"
      />

      <Avatar
        src={company.logo}
        name={company.company_name}
        className="!absolute !left-[7%] md:!left-[3%] !bottom-10 !size-[90px] lg:!size-[120px]"
      />
    </section>
  );
};

export default Header;
