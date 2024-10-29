import { useEffect } from "react";
import * as Yup from "yup";
import Form from "../../components/form";
import { useFormik } from "formik";
import { REGISTER_EMAIL_KEY } from "../../lib/helpers";
import useRedirect from "../../hooks/useRedirect";
import { authenticationService } from "../../api-services/authentication";
import CheckAgreement from "../../components/form/checkAgreement";
import { Link, useNavigate } from "react-router-dom";

const validationSchema = Yup.object().shape({
  // username1: Yup.string()
  //   .matches(/^[a-zA-Z0-9]+$/, "Only alphanumeric characters are allowed.")
  //   .required("Fill in your username"),
  email: Yup.string()
    .email("Invalid Email Address")
    .required("Fill in a valid email address"),
  username: Yup.string()
    .email("Fill in a valid email address")
    .required("Fill in a valid email address"),

  password: Yup.string()
    .matches(
      /^[a-zA-Z0-9!#$%^&*()]+$/,
      "Only letters, numbers and some specific punctuations allowed."
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
  // const hasEmail = localStorage.getItem(REGISTER_EMAIL_KEY) !== null;

  // useRedirect(hasEmail, "/success");

  const navigate = useNavigate();

  const formValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    isChecked: false,
  };

  const formik = useFormik({
    initialValues: formValues,
    validationSchema: validationSchema,
    onSubmit: async (
      { email, username, password, confirmPassword },
      { resetForm }
    ) => {
      // console.log("Auth data ", { email, username, password, confirmPassword });

      const success = await authenticationService({
        values: {
          username,
          email,
          password1: password,
          password2: confirmPassword,
        },
        url: "registration/",
        resetForm,
        type: "register",
      });

      if (success) navigate("/success");
    },
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
      name: "confirmPassword",
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
          submitText: "Creating your connectize account...",
          style: "!md:w-[60%] my-4",
        }}
      />

      <p>
        Already have an account?{" "}
        <Link to="/login" className="no-underline">
          Register here!
        </Link>
      </p>
    </section>
  );
}

export default Signup;
