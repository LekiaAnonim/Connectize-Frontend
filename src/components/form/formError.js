import { capitalizeFirst } from "../../lib/utils";
import { motion } from "framer-motion";

export default function FormikErrorResponse({ formik, name }) {
  return (
    <>
      {formik.touched[name] && formik.errors[name] && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-[#9e3818] text-xs mt-0.5 mx-0.5"
        >
          {capitalizeFirst(formik.errors[name])}
        </motion.div>
      )}
    </>
  );
}
