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
});

function ResetPasswordPage() {
  const navigate = useNavigate();
  const formValues = {
    email: "",
  };

  const formik = useFormik({
    initialValues: formValues,
    validationSchema: validationSchema,
    onSubmit: async ({ email }, { resetForm }) => {
      // console.log("Auth data ", { email, username, password, confirmPassword });

      // const success =
      await authenticationService({
        values: {
          username: "user@connectize.com",
          email,
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
    // {
    //   name: "password",
    //   type: "password",
    //   label: "Password",
    //   placeholder: "Enter a 8 digit password",
    // },
  ];
  return (
    <section className="space-y-4">
      <h1>Retrieve your password</h1>
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
        <Link to="/signup" className="text-gold">
          Register here!
        </Link>
      </p>
    </section>
  );
}

export default ResetPasswordPage;
