import { useEffect } from "react";
import * as Yup from "yup";
import Form from "../form";
import { useFormik } from "formik";
import { REGISTER_EMAIL_KEY } from "../../lib/helpers";
import useRedirect from "../../hooks/useRedirect";
import { authenticationService } from "../../api-services/authentication";
import CheckAgreement from "../form/checkAgreement";

const validationSchema = Yup.object().shape({
  companyName: Yup.string()
    .matches(/^[a-zA-Z0-9]+$/, "Only alphanumeric characters are allowed.")
    .required("Fill in your Company's Name"),
  email: Yup.string().email("Invalid Email").required("Fill in your Email"),
  companyPhoneNumber: Yup.string()
    .matches(/^[a-zA-Z0-9]+$/, "Only alphanumeric characters are allowed.")
    .required("Fill in your  Company's phone number"),
  companyLocation: Yup.string()
    .matches(/^[a-zA-Z0-9\s-]+$/, "Only alphanumeric characters are allowed.")
    .required("Fill in your Company's location"),
  password: Yup.string()
    .matches(
      /^[a-zA-Z0-9!#$%^&*()]+$/,
      "Only letters, numbers and some specific punctuations allowed."
    )
    .required("Fill in your password"),
  confirmPassword: Yup.string()
    .required("Password confirmation is required")
    .test("passwords-match", "Passwords must match", function (value) {
      return this.parent.password === value;
    }),
  isChecked: Yup.boolean().oneOf(
    [true],
    "You must accept the terms and conditions"
  ),
});

function Signup() {
  const hasEmail = localStorage.getItem(REGISTER_EMAIL_KEY) !== null;

  useRedirect(hasEmail, "/confirm-email");

  const formValues = {
    companyName: "",
    email: "",
    companyPhoneNumber: "",
    companyLocation: "",
    password: "",
    confirmPassword: "",
    isChecked: false,
  };

  const formik = useFormik({
    initialValues: formValues,
    validationSchema: validationSchema,
    onSubmit: async (
      { email, companyEmail, password1, password2 },
      { resetForm }
    ) =>
      await authenticationService({
        values: {
          companyEmail,
          email,
          password1,
          password2,
        },
        url: "registration/",
        resetForm,
        type: "register",
      }),
  });

  useEffect(() => {
    formik.setValues(formValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fields = [
    {
      name: "username",
      type: "email",
      label: "Username",
      placeholder: "Enter Username",
    },
    {
      name: "email",
      type: "email",
      label: "Email Address",
      placeholder: "Enter a valid email address",
    },
    {
      name: "password",
      type: "password",
      label: "Password",
      placeholder: "Enter a 8 digit password",
    },
    {
      name: "confirm_password",
      type: "password",
      label: "Confirm Password",
      placeholder: "Enter the same password as above",
    },
  ];
  return (
    <section className="space-y-4">
      <h1>Create new account</h1>
      <Form
        formik={formik}
        status={"none"}
        inputArray={fields}
        bottomCustomComponents={<CheckAgreement formik={formik} />}
        button={{
          type: "submit",
          text: "Create my account",
          submitText: "Creating account...",
          style: "!md:w-[60%] my-4",
        }}
      />
    </section>
  );
}

export default Signup;
