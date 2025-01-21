import { CircleTitleSubtitleSkeleton } from "../admin/feeds/TopServiceSuggestions";
import HeadingText from "../HeadingText";
import LightParagraph from "../ParagraphText";
import { motion } from "framer-motion";
import { ConJoinedImages } from "../ResponsiveNav";
import Username from "../Username";
import { Badge, Switch } from "@chakra-ui/react";
import { capitalizeFirst } from "../../lib/utils";
import { useState } from "react";
import { changeRepStatus } from "../../api-services/representatives";

export const RepresentativesList = ({ representatives, isLoading }) => {
  return (
    <section className="flex flex-col gap-4">
      <section className="border-b pb-2">
        <HeadingText weight="semibold">Manage Representatives</HeadingText>
      </section>
      <section className="flex items-center gap-4 justify-between">
        {["Representative", "Category", "Status"].map((heading, index) => (
          <h2 key={index} className="font-semibold even:max-lg:hidden">
            {heading}
          </h2>
        ))}
      </section>
      <section className="divide-y divide-gray-200/70">
        {isLoading ? (
          Array.from({ length: 5 }, (_, index) => (
            <CircleTitleSubtitleSkeleton key={index} />
          ))
        ) : representatives?.length < 1 ? (
          <div className="py-4">
            <LightParagraph>No representatives yet...</LightParagraph>
          </div>
        ) : (
          representatives?.map((params, index) => (
            <RepsTile key={index} {...params} />
          ))
        )}
      </section>
    </section>
  );
};

const RepsTile = ({ id, user, company, status, role, category }) => {
  const [isChecked, setIsChecked] = useState(status);

  const handleToggle = async () => {
    setIsChecked(!isChecked);
    await changeRepStatus(id, {
      user: user?.id,
      company: company?.id,
      status: !isChecked,
      category,
    });
  };
  return (
    <motion.section
      key={user?.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center justify-between gap-4 mb-10 lg:mb-4 pt-4 relative"
    >
      <div className="flex items-center">
        <ConJoinedImages
          animate={false}
          array={[
            {
              name: `${company?.company_name}`,
              src: company?.logo || "/images/default-company-logo.png",
              href: `/${company?.company_name}`,
            },
            {
              name: `${user?.first_name} ${user?.last_name}`,
              src: user?.avatar,
              href: `/co/${user?.id}`,
            },
          ]}
          size={35}
          sizeVariant="sm"
        />
        <div className="flex flex-col">
          <Username user={user} />
          <small className="text-gray-400 !-my-1 line-clamp-2">
            {capitalizeFirst(user?.role)}{" "}
            {!status && (
              <>
                &bull;{" "}
                <Badge
                  className="!text-[.6rem] cursor-pointer"
                  onClick={() => {}}
                >
                  Cancel Request
                </Badge>
              </>
            )}
          </small>
        </div>
      </div>

      <div className="max-lg:absolute max-lg:-bottom-8 max-lg:left-2 lg:flex-1 items-center justify-center">
        <Badge className="!w-fit">{role}</Badge>
      </div>

      <div className="">
        <Switch
          id={`rep_${user?.id}`}
          isChecked={isChecked}
          onChange={handleToggle}
        />
      </div>
    </motion.section>
  );
};
