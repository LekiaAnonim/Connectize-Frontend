import React, { useState } from "react";
import { UserGroup } from "../../icon";
import clsx from "clsx";
import { PlusIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { getCompanies } from "../../api-services/companies";
import { createRepresentatives } from "../../api-services/representatives";
import { toast } from "sonner";

export default function RepRoleInput({ user }) {
  const emptyRepsRole = "Representative role cannot be empty";
  const [representativeRole, setRepresentativeRole] = useState(null);
  const [roleError, setRoleError] = useState(null);

  const { data: companies } = useQuery({
    queryKey: ["companies"],
    queryFn: getCompanies,
  });
  const handleAddRepresentative = async () => {
    if (representativeRole === null || representativeRole.trim() === "") {
      setRoleError(emptyRepsRole);
      return;
    }

    const repsData = {
      user,
      company: companies[0],
      role: representativeRole,
    };

    try {
      await createRepresentatives(repsData);
      toast.success(
        `A representative request has been sent to ${user?.first_name}`
      );
    } catch (error) {
      console.log(`Representative error ${error}`);
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
          className="absolute right-1 top-1/2 -translate-y-1/2 bg-gold hover:bg-gold/60 active:scale-95 transition-all duration-300 py-1.5 px-4 rounded-full"
          onClick={handleAddRepresentative}
        >
          <PlusIcon />
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
