import { useEffect } from "react";
import * as Yup from "yup";
import Form from "../../components/form";
import { useFormik } from "formik";
import { authenticationService } from "../../api-services/authentication";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import {
  RESET_PASSWORD_EMAIL_KEY,
  RESET_PASSWORD_KEY,
  SUCCESS_TYPE_KEY,
} from "../../lib/data/authentication";
import HeadingText from "../../components/HeadingText";
import LightParagraph from "../../components/ParagraphText";
import { toast } from "sonner";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid Email Address")
    .required("Fill in a valid email address"),
});

function VerifyAccount() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const formValues = { email: "" };

  const uid = searchParams.get("uid");
  const token = searchParams.get("token");

  const formik = useFormik({
    initialValues: formValues,
    validationSchema: validationSchema,
    onSubmit: async ({ email }, { resetForm }) => {
      if (!uid || !token) {
        toast.error("Please check your mail for a valid verification link");
      }
      const success = await authenticationService({
        values: { email },
        url: `verify-account/${uid}/${token}`,
        resetForm,
      });

      if (success) {
        localStorage.setItem(SUCCESS_TYPE_KEY, RESET_PASSWORD_KEY);
        localStorage.setItem(RESET_PASSWORD_EMAIL_KEY, email);
        navigate("/success");
      }
    },
  });

  useEffect(() => {
    formik.setValues(formValues);
    document.title = "Account Verification | connectize";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fields = [
    {
      name: "email",
      type: "email",
      label: "Email Address",
      placeholder: "Enter a valid email address",
      validate: true,
    },
  ];

  return (
    <section className="space-y-4">
      <HeadingText>Password recovery</HeadingText>
      <LightParagraph className="text-custom_grey">
        Please enter your email address to send a password recovery email.
      </LightParagraph>
      <Form
        formik={formik}
        status={"none"}
        inputArray={fields}
        button={{
          type: "submit",
          text: "Retrieve password",
          submitText: "Checking email...",
          style: "!md:w-[60%] mt-4",
        }}
      />

      <p className="text-center xs:text-sm">
        Don't have an account?{" "}
        <Link to="/signup" className="font-bold text-black">
          Sign Up
        </Link>
      </p>
    </section>
  );
}

export default VerifyAccount;
