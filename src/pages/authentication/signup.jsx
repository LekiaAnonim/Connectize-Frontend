import { useEffect } from "react";
import * as Yup from "yup";
import Form from "../../components/form";
import { useFormik } from "formik";
import { authenticationService } from "../../api-services/authentication";
import CheckAgreement from "../../components/form/checkAgreement";
import { Link, useNavigate } from "react-router-dom";
import { SUCCESS_TYPE_KEY } from "../../lib/data/authentication";
import { REGISTER_EMAIL_KEY } from "../../lib/helpers";
import HeadingText from "../../components/HeadingText";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid Email Address")
    .required("Fill in a valid email address"),

  password: Yup.string()
    .min(8, "Password should be at least 8 characters long")
    .matches(
      /^[a-zA-Z0-9!#$%^&*()_+|~=`{}[\]:";'<>?,./-]+$/,
      "Only alphanumeric characters and special characters allowed."
    )
    .required("Fill in your password"),
  confirmPassword: Yup.string()
    .required("Password confirmation is required")
    .test(
      "passwords-match",
      "Password and confirm password must match",
      function (value) {
        return this.parent.password === value;
      }
    ),
  isChecked: Yup.boolean().oneOf(
    [true],
    "You must accept the terms and conditions"
  ),
});

function Signup() {
  const navigate = useNavigate();

  const formValues = {
    email: "",
    password: "",
    confirmPassword: "",
    isChecked: false,
  };

  const formik = useFormik({
    initialValues: formValues,
    validationSchema: validationSchema,
    onSubmit: async ({ email, password, confirmPassword }, { resetForm }) => {
      const success = await authenticationService({
        values: {
          email,
          username: email,
          password1: password,
          password2: confirmPassword,
        },
        url: "registration",
        resetForm,
        type: "register",
      });

      if (success) {
        localStorage.setItem(SUCCESS_TYPE_KEY, REGISTER_EMAIL_KEY);
        navigate("/success");
      }
    },
  });

  useEffect(() => {
    formik.setValues(formValues);
    document.title = "Account Registration portal | connectize";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fields = [
    {
      name: "email",
      type: "email",
      label: "Company email",
      placeholder: "Example@companymail.com",
      validate: true,
    },
    {
      name: "password",
      type: "password",
      label: "Password",
      placeholder: "At least 8 digit",
      validate: true,
    },
    {
      name: "confirmPassword",
      type: "password",
      label: "Confirm Password",
      placeholder: "Enter the same password as above",
      validate: true,
    },
  ];
  return (
    <section className="space-y-4">
      <HeadingText>Create new account</HeadingText>
      <Form
        formik={formik}
        status={"none"}
        inputArray={fields}
        bottomCustomComponents={<CheckAgreement formik={formik} />}
        button={{
          type: "submit",
          text: "Sign up",
          submitText: "Creating your account...",
          style: "!md:w-[60%] mt-4",
        }}
      />

      <p className="text-center xs:text-sm font-[400]">
        Already have an account?{" "}
        <Link to="/login" className="font-bold text-black">
          Login
        </Link>
      </p>
    </section>
  );
}

export default Signup;
