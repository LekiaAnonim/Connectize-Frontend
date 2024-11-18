import { useEffect } from "react";
import * as Yup from "yup";
import Form from "../../components/form";
import { useFormik } from "formik";
import { authenticationService } from "../../api-services/authentication";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import HeadingText from "../../components/HeadingText";
import useRedirect from "../../hooks/useRedirect";

const validationSchema = Yup.object().shape({
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
});

function ConfirmResetPassword() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const token = searchParams.get("token") || "";
  const uid = searchParams.get("uid") || "";

  useRedirect(!token && !uid, "/reset-password");

  const formValues = {
    password: "",
    confirmPassword: "",
  };

  const formik = useFormik({
    initialValues: formValues,
    validationSchema: validationSchema,
    onSubmit: async ({ password }, { resetForm }) => {
      const success = await authenticationService({
        values: { new_password: password },
        url: `password-reset-confirm/${uid}/${token}`,
        resetForm,
      });

      if (success) navigate("/success");
    },
  });

  useEffect(() => {
    formik.setValues(formValues);
    document.title = "Confirm password reset portal | connectize";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fields = [
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
      <HeadingText>Complete Password Reset</HeadingText>

      <Form
        formik={formik}
        status={"none"}
        inputArray={fields}
        button={{
          type: "submit",
          text: "Reset password",
          submitText: "Resetting password...",
          style: "!md:w-[60%] mt-4",
        }}
      />

      <p className="text-center xs:text-sm">
        I Remembered my password?{" "}
        <Link to="/login" className="font-bold text-black">
          Login
        </Link>
      </p>
    </section>
  );
}

export default ConfirmResetPassword;
