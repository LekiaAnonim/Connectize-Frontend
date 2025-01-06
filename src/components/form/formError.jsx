import clsx from "clsx";
import { Check } from "../../icon";
import { capitalizeFirst } from "../../lib/utils";
import { motion } from "framer-motion";

export default function FormikErrorResponse({
  formik,
  name,
  validate = false,
}) {
  return (
    <>
      {formik.touched[name] && (
        <>
          <motion.div
            key={formik.errors[name]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={clsx("text-xs mt-0.5 mx-0.5", {
              "text-[#9e3818]": formik.errors[name],
              "text-green-600": !formik.errors[name] && validate,
            })}
          >
            {validate && !formik.errors[name] && (
              <div className="flex items-center gap-0.5 mt-1">
                <Check />
                <p>You're good to go</p>
              </div>
            )}
            {formik.errors[name] && capitalizeFirst(formik.errors[name])}
          </motion.div>
        </>
      )}
    </>
  );
}
