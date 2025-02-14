import React from "react";
import { motion } from "framer-motion";

export default function CustomErrorMessage({ errorMessage }) {
  return (
    <>
      {errorMessage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-[#9e3818] text-xs mx-0.5"
        >
          {errorMessage}
        </motion.div>
      )}
    </>
  );
}
