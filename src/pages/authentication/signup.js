import { useEffect } from "react";
import * as Yup from "yup";
import Form from "../../components/form";
import { useFormik } from "formik";
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
    email: "",
    password: "",
    confirmPassword: "",
    isChecked: false,
  };

  const formik = useFormik({
    initialValues: formValues,
    validationSchema: validationSchema,
    onSubmit: async ({ email, password, confirmPassword }, { resetForm }) => {
      // console.log("Auth data ", { email, username, password, confirmPassword });

      const success = await authenticationService({
        values: {
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
      name: "email",
      type: "email",
      label: "Company email",
      placeholder: "Example@companymail.com",
    },
    {
      name: "password",
      type: "password",
      label: "Password",
      placeholder: "At least 8 digit",
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
