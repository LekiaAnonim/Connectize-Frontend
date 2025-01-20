import React, { useState } from "react";
import { UserGroup } from "../../icon";
import clsx from "clsx";
import { PlusIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { getCompanies } from "../../api-services/companies";
import { assignRepresentative } from "../../api-services/representatives";
import { toast } from "sonner";
import { Spinner } from "@chakra-ui/react";

export default function RepRoleInput({ user }) {
  const emptyRepsRole = "Representative role cannot be empty";
  const [representativeRole, setRepresentativeRole] = useState("");
  const [roleError, setRoleError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { data: companies } = useQuery({
    queryKey: ["companies"],
    queryFn: getCompanies,
  });
  const handleAddRepresentative = async () => {
    if (!companies) {
      toast.info("You have not created a company yet");
      return;
    }
    setIsLoading(false);
    if (representativeRole.trim() === "") {
      setRoleError(emptyRepsRole);
      return;
    }
    console.log(companies);

    const repsData = {
      user,
      company: companies[0],
      role: representativeRole,
    };

    setIsLoading(true);

    try {
      await assignRepresentative(repsData);
      toast.success(
        `A representation request has been sent to ${user?.first_name}`
      );
      setRepresentativeRole("");
      setRoleError(null);
    } catch (error) {
      console.error(`Representative error ${error}`);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section>
      <div className="relative w-fit">
        <UserGroup className="size-4 text-gray-400 absolute left-4 z-30 top-1/2 -translate-y-1/2" />
        <input
          id={user?.id.toString()}
          value={representativeRole}
          onChange={(e) => {
            setRepresentativeRole(e.target.value);
            setRoleError(null);

            if (e.target.value.trim() === "") setRoleError(emptyRepsRole);
          }}
          placeholder="e.g Human Resources"
          className={clsx(
            "peer w-80 py-1.5 px-10 border border-gray-200 bg-gray-100/70 rounded-full placeholder:text-xs text-sm focus:outline-0 focus:border-gold transition-all duration-300"
          )}
        />

        <button
          className={clsx(
            "absolute right-1 top-1/2 -translate-y-1/2 bg-gold hover:bg-gold/60 active:scale-95 transition-all duration-300 px-4 rounded-full disabled:bg-gray-200 disabled:cursor-not-allowed",
            {
              "py-0.5": isLoading,
              "py-1.5": !isLoading,
            }
          )}
          onClick={handleAddRepresentative}
          disabled={isLoading}
        >
          {isLoading ? <Spinner size="xs" className="" /> : <PlusIcon />}
        </button>
      </div>

      {roleError && (
        <motion.span
          key={roleError}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="block text-[#9e3818] text-xs mt-0.5 mx-2"
        >
          {roleError}
        </motion.span>
      )}
    </section>
  );
}
