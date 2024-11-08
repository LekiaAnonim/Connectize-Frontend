import { useEffect } from "react";
import * as Yup from "yup";
import Form from "../../components/form";
import { useFormik } from "formik";
import { authenticationService } from "../../api-services/authentication";
import { Link, useNavigate } from "react-router-dom";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid Email Address")
    .required("Fill in a valid email address"),
  password: Yup.string()
    .matches(
      /^[a-zA-Z0-9!#$%^&*()]+$/,
      "Only letters, numbers and some specific punctuations allowed."
    )
    .required("Fill in your password"),
});

function Login() {
  const navigate = useNavigate();

  const formValues = {
    username: "",
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues: formValues,
    validationSchema: validationSchema,
    onSubmit: async ({ email, password }, { resetForm }) => {
      // console.log("Auth data ", { email, username, password, confirmPassword });

      const success = await authenticationService({
        values: {
          username: email,
          email,
          password,
        },
        url: "login/",
        resetForm,
        type: "login",
      });

      if (success) navigate("/profile");
    },
  });

  useEffect(() => {
    formik.setValues(formValues);
    // window.title = "Login to connectize";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const fields = [
    // {
    //   name: "username",
    //   type: "email",
    //   label: "Username",
    //   placeholder: "Enter Username",
    // },
    {
      name: "email",
      type: "email",
      label: "Company email",
      placeholder: "Enter a valid email address",
    },
    {
      name: "password",
      type: "password",
      label: "Password",
      placeholder: "Enter a 8 digit password",
    },
  ];
  return (
    <section className="space-y-4">
      <h1>Login to your account</h1>
      <Form
        formik={formik}
        status={"none"}
        bottomCustomComponents={
          <div className="flex justify-between gap-4 text-sm">
            <span>Forgot Password?</span>
            <Link
              to="/reset-password"
              className="font-bold text-black no-underline"
            >
              Retrieve it
            </Link>
          </div>
        }
        inputArray={fields}
        button={{
          type: "submit",
          text: "Login",
          submitText: "Checking...",
          style: "!md:w-[60%] mt-4",
        }}
      />

      <p className="text-center xs:text-sm">
        Don't have an account?{" "}
        <Link to="/signup" className="text-black font-bold no-underline">
          Sign Up
        </Link>
      </p>
    </section>
  );
}

export default Login;
