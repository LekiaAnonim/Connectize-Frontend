import { Link } from "react-router-dom";
import FormikErrorResponse from "../form/formError";

export default function CheckAgreement({ formik }) {
  return (
    <>
      <div className="flex items-center space-x-2 my-1">
        <input
          className="w-4 h-4 cursor-pointer"
          name="isChecked"
          type="checkbox"
          onChange={formik.handleChange}
        />
        <label
          className="!text-[0.9rem] text-gray-500 font-[400]"
          htmlFor="terms"
        >
          I have read and understood Connectize{" "}
          <Link className="text-custom_link underline" to="/">
            Terms
          </Link>
          ,{" "}
          <Link className="text-custom_link underline" to="/">
            Conditions
          </Link>{" "}
          and{" "}
          <Link className="text-custom_link underline" to="/">
            Policies
          </Link>
          .
        </label>
      </div>
      <FormikErrorResponse formik={formik} name={"isChecked"} />
    </>
  );
}
