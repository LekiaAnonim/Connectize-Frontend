import { useEffect } from "react";
import * as Yup from "yup";
import Form from "../../components/form";
import { useFormik } from "formik";

import HeadingText from "../HeadingText";
import LightParagraph from "../ParagraphText";
import FormikErrorResponse from "../form/formError";
import StepButton from "./StepButton";

const validationSchema = Yup.object().shape({
  image: Yup.string().optional(),
  first_name: Yup.string().required("First name field is required"),
  last_name: Yup.string().required("Last name field is required"),
  company_name: Yup.string().required("Company name field is required"),
  gender: Yup.string()
    .trim()
    .required("Gender field is required")
    .test(
      "correct-gender",
      "Only genders, ie male or female is allowed.",
      function (value) {
        return (
          value.toLowerCase() === "male" || value.toLowerCase() === "female"
        );
      }
    ),
  role: Yup.string().required("Role field is required"),
  age: Yup.string().required("Age field is required"),
});

function Home() {
  //   const navigate = useNavigate();
  const formValues = {
    image: "",
    first_name: "",
    last_name: "",
    company_name: "",
    gender: "",
    role: "",
    age: "",
  };

  const formik = useFormik({
    initialValues: formValues,
    validationSchema: validationSchema,
  });

  useEffect(() => {
    formik.setValues(formValues);
    document.title =
      "Complete your profile - personal information | connectize";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fields = [
    {
      type: "grid",
      gridInputs: [
        {
          name: "first_name",
          type: "text",
          label: "First Name",
          placeholder: "Enter your first name",
        },
        {
          name: "last_name",
          type: "text",
          label: "Last Name",
          placeholder: "Enter your last name",
        },
        {
          name: "company_name",
          type: "text",
          label: "Company Name",
          placeholder: "Enter your company's name",
        },
        {
          name: "gender",
          type: "text",
          label: "Gender",
          placeholder: "Male/Female",
        },
        {
          name: "role",
          type: "text",
          label: "Role",
          placeholder: "What is your role as a representative",
        },
        {
          name: "age",
          type: "date",
          label: "Age",
          placeholder: "What is your role as a representative",
        },
      ],
    },
  ];

  return (
    <>
      <div className="my-4">
        <HeadingText>Help us know more about you</HeadingText>
        <LightParagraph>Please fill in the details below</LightParagraph>
      </div>

      <div>
        <label htmlFor="image">
          <img
            src="/images/pasportTwo.png"
            alt="placeholder avatar"
            className="py-4 w-24"
          />
        </label>
        <input
          name="image"
          id="image"
          type="file"
          accept="image/*"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="hidden"
        />
        <FormikErrorResponse formik={formik} name={formik.values.image} />
      </div>

      <Form
        formik={formik}
        status={"none"}
        inputArray={fields}
        hasButton={false}
        button={{
          type: "submit",
          text: "Login",
          submitText: "Checking...",
          style: "!md:w-[60%] mt-4",
        }}
      />
      <StepButton />
    </>
  );
}

export default Home;
