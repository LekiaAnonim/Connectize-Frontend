import React, { useState } from "react";
import HeadingText from "../../components/HeadingText";
import LightParagraph from "../../components/ParagraphText";
import { Input } from "@chakra-ui/react";
import clsx from "clsx";
import { inputClassNames } from "../../components/form/customInput";
import { motion } from "framer-motion";
import { SearchOutlined } from "@ant-design/icons";

export default function AssignRepresentative() {
  const [username, setUsername] = useState(null);
  return (
    <section>
      <section className="space-y-6">
        <div className="">
          <HeadingText>Assign Representatives</HeadingText>
          <LightParagraph>
            Assign representatives to manage your company on connectize and
            specify the role of representation{" "}
            <strong className="text-black">
              e.g (human resources, technical, commercial)
            </strong>
          </LightParagraph>
        </div>

        <div className="">
          <div className="flex flex-col gap-1 w-full">
            <label
              htmlFor="username"
              className="text-base leading-none px-1 font-semibold"
            >
              Username
            </label>
            <div className="relative">
              <SearchOutlined className="size-4 text-gray-400 absolute left-4 z-30 top-1/2 -translate-y-1/2" />
              <Input
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Find users"
                className={clsx(
                  inputClassNames,
                  "!rounded-full focus:!border-0 inset-none focus:!outline-none !mt-0 indent-6"
                )}
              />
            </div>
            {username.length > 1 && (
              <motion.small
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-gray-400 px-1"
              >
                Search for: <strong className="text-black">{username}</strong>
              </motion.small>
            )}
          </div>
        </div>
      </section>
    </section>
  );
}
