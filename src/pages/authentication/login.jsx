/* eslint-disable react/react-in-jsx-scope */
import { useEffect } from "react";
import * as Yup from "yup";
import Form from "../../components/form";
import { useFormik } from "formik";
import { authenticationService } from "../../api-services/authentication";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import HeadingText from "../../components/HeadingText";
import { useAuth } from "../../context/userContext";
import { getCurrentUser } from "../../api-services/users";
import LightParagraph from "../../components/ParagraphText";

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
});

function Login() {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();
  const [searchParams] = useSearchParams();

  setUser(null);

  const nextParam = searchParams.get("next");

  const navigateTo =
    user && user?.is_first_time_user
      ? "/profile"
      : searchParams.has("next")
      ? nextParam
      : "/";

  const formValues = {
    username: "",
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues: formValues,
    validationSchema: validationSchema,
    onSubmit: async ({ email, password }, { resetForm }) => {
      const success = await authenticationService({
        values: {
          username: email,
          email,
          password,
        },
        url: "login",
        resetForm,
        type: "login",
      });

      if (success) {
        setUser(await getCurrentUser());
      }
    },
  });

  if (user) navigate(navigateTo);

  useEffect(() => {
    formik.setValues(formValues);
    document.title = "Login to connectize";

    // return async () => setUser((await getCurrentUser()) || null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const fields = [
    {
      name: "email",
      type: "email",
      label: "Company email",
      placeholder: "Enter a valid email address",
      validate: true,
    },
    {
      name: "password",
      type: "password",
      label: "Password",
      placeholder: "Enter a 8 digit password",
      validate: true,
    },
  ];

  return (
    <section className="space-y-4">
      <div>
        <HeadingText>Login to your account</HeadingText>
        <LightParagraph>
          Connect, Collaborate and transact{" "}
          <span className="text-gold">with connectize</span>
        </LightParagraph>
      </div>
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
        {"Don't have an account? "}
        <Link to="/signup" className="text-black font-bold no-underline">
          Sign Up
        </Link>
      </p>
    </section>
  );
}

export default Login;
