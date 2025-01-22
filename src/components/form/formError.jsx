import clsx from "clsx";
import { capitalizeFirst } from "../../lib/utils";
import { motion } from "framer-motion";
import { CheckCircleFilled } from "@ant-design/icons";

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
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className={clsx("text-xs mt-0.5 mx-0.5", {
              "text-[#9e3818]": formik.errors[name],
              "text-green-800": !formik.errors[name] && validate,
            })}
          >
            {validate && !formik.errors[name] && (
              <div className="flex items-center gap-0.5">
                <CheckCircleFilled className="size-2.5" />
                <p>You are good to go</p>
              </div>
            )}
            {formik.errors[name] && capitalizeFirst(formik.errors[name])}
          </motion.div>
        </>
      )}
    </>
  );
}
