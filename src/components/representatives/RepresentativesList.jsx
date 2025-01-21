import { CircleTitleSubtitleSkeleton } from "../admin/feeds/TopServiceSuggestions";
import HeadingText from "../HeadingText";
import LightParagraph from "../ParagraphText";
import { motion } from "framer-motion";
import { ConJoinedImages } from "../ResponsiveNav";
import Username from "../Username";
import { baseURL } from "../../lib/helpers";
import { Badge } from "@chakra-ui/react";
import { capitalizeFirst } from "../../lib/utils";

export const RepresentativesList = ({ representatives, isLoading }) => {
  console.log(representatives);

  return (
    <section className="flex flex-col">
      <HeadingText weight="semibold">Representatives</HeadingText>
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
          representatives?.map(({ user, company, status }) => (
            <motion.section
              key={user?.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex sm:items-center sm:justify-between max-sm:flex-col gap-4 mb-4 pt-4"
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
            </motion.section>
          ))
        )}
      </section>
    </section>
  );
};
