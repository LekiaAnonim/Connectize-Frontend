import { Link } from "react-router-dom";
import FormikErrorResponse from "../form/formError";

export default function CheckAgreement({ formik }) {
  return (
    <>
      <div className="flex items-center space-x-2 my-1">
        <input
          className="size-3.5 cursor-pointer checked:!bg-gold che "
          name="isChecked"
          type="checkbox"
          onChange={formik.handleChange}
        />
        <label
          className="!text-[0.89rem] text-gray-500 font-[400]"
          htmlFor="terms"
        >
          I agree to the{" "}
          <Link
            className="!text-black font-bold"
            to="https://docs.google.com/document/d/13QlJVPv7qr6yNqBW_o4nl_mF8rpHdcEya_ewXOfS2L8/edit?tab=t.0"
            target="_blank"
          >
            Privacy Policy,
          </Link>{" "}
          <Link
            className="!text-black font-bold"
            to="https://docs.google.com/document/d/1UEOgZLY2kVfJ8spCIChHCYKAuFMnBEbICQNFmkXpC7g/edit?tab=t.0#heading=h.37rn9v2y3s02"
            target="_blank"
          >
            Terms and Conditions
          </Link>
        </label>
      </div>
      <FormikErrorResponse formik={formik} name={"isChecked"} />
    </>
  );
}
