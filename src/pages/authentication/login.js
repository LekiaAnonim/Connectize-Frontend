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

      // const success =
      await authenticationService({
        values: {
          username: "user@connectize.com",
          email,
          password,
        },
        url: "login/",
        resetForm,
        type: "login",
      });

      //   if (success) navigate("/");
    },
  });

  useEffect(() => {
    formik.setValues(formValues);
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
      label: "Email Address",
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
      <h1>Log in to your account</h1>
      <Form
        formik={formik}
        status={"none"}
        bottomCustomComponents={
          <div className="flex justify-between gap-4 text-sm">
            <span>Forgot Password?</span>
            <Link to="/reset-password" className="no-underline text-gold">
              Retrieve it
            </Link>
          </div>
        }
        inputArray={fields}
        button={{
          type: "submit",
          text: "Login",
          submitText: "Checking...",
          style: "!md:w-[60%] my-4",
        }}
      />

      <p>
        Don't have an account?{" "}
        <Link to="/signup" className="no-underline text-gold">
          Register here!
        </Link>
      </p>
    </section>
  );
}

export default Login;
