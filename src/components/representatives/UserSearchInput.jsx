import { motion } from "framer-motion";
import clsx from "clsx";
import { SearchOutlined } from "@ant-design/icons";

export const UserSearchInput = ({ username, setUsername }) => (
  <div className="flex flex-col gap-1 w-full">
    <label
      htmlFor="username"
      className="text-base leading-none px-1 font-semibold w-fit"
    >
      Username
    </label>
    <div className="relative">
      <SearchOutlined className="size-4 text-gray-400 absolute left-4 z-30 top-1/2 -translate-y-1/2" />
      <input
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Find users"
        className={clsx(
          "w-full max-w-screen-xs py-1.5 px-3 border border-gray-200 bg-gray-100/70 rounded-full placeholder:text-xs text-sm focus:outline-0 focus:border-gold transition-all duration-300 indent-6"
        )}
      />
    </div>
    {username?.length > 1 && (
      <motion.small
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-gray-400 px-1"
      >
        Search for: <strong className="text-black">{username}</strong>
      </motion.small>
    )}
  </div>
);
