import { useEffect } from "react";
import * as Yup from "yup";
import Form from "../../components/form";
import { useFormik } from "formik";

import HeadingText from "../HeadingText";
import LightParagraph from "../ParagraphText";
import FormikErrorResponse from "../form/formError";
import StepButton from "./StepButton";
import {
  ageKey,
  company_nameKey,
  first_nameKey,
  genderKey,
  imageKey,
  last_nameKey,
  roleKey,
} from "../../lib/data";

const FILE_SIZE = 4 * 1024 * 1024; // 2MB
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];

const validationSchema = Yup.object().shape({
  image: Yup.mixed()
    .required("File is required")
    .test(
      "file-size",
      "File size is too large, only images less than 4mb is allowed",
      (value) => {
        return value && value.size <= FILE_SIZE;
      }
    )
    .test(
      "file-format",
      "Unsupported file format, only PNGs, JPEGs and JPGs are allowed",
      (value) => {
        return value && SUPPORTED_FORMATS.includes(value.type);
      }
    ),
  gender: Yup.string()
    .trim()
    .optional()
    .test(
      "correct-gender",
      "Only genders, ie male or female is allowed.",
      function (value) {
        return (
          value?.toLowerCase() === "male" || value?.toLowerCase() === "female"
        );
      }
    ),
  age: Yup.string()
    .optional()
    .test("compare-age", "You have to be at least 18 years", function (value) {
      const inputDate = new Date(value);

      const today = new Date();
      const tenYearsAgo = new Date();
      tenYearsAgo.setFullYear(today.getFullYear() - 17);

      today.setHours(0, 0, 0, 0);
      tenYearsAgo.setHours(0, 0, 0, 0);
      inputDate.setHours(0, 0, 0, 0);

      // Check that the date is not today, not 17 years ago, and not in the future
      return (
        inputDate.getTime() !== today.getTime() &&
        inputDate.getTime() !== tenYearsAgo.getTime() &&
        inputDate <= today
      );
    }),
});

function Home() {
  const formValues = {
    image: localStorage.getItem(imageKey) || "",
    first_name: localStorage.getItem(first_nameKey) || "",
    last_name: localStorage.getItem(last_nameKey) || "",
    company_name: localStorage.getItem(company_nameKey) || "",
    gender: localStorage.getItem(genderKey) || "",
    role: localStorage.getItem(roleKey) || "",
    age: localStorage.getItem(ageKey) || "",
  };

  const formik = useFormik({
    initialValues: formValues,
    validationSchema: validationSchema,
  });

  const doStepChange = () => {
    for (let value in formik.values) {
      const key = value;
      const keyValue = formik.values[value];

      localStorage.setItem(key, keyValue);
    }
    return true;
  };

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
          name: first_nameKey,
          type: "text",
          label: "First Name",
          placeholder: "Enter your first name",
        },
        {
          name: last_nameKey,
          type: "text",
          label: "Last Name",
          placeholder: "Enter your last name",
        },
        {
          name: company_nameKey,
          type: "text",
          label: "Company Name",
          placeholder: "Enter your company's name",
        },
        {
          name: genderKey,
          type: "text",
          label: "Gender",
          placeholder: "Male/Female",
        },
        {
          name: roleKey,
          type: "text",
          label: "Role",
          placeholder: "What is your role as a representative",
        },
        {
          name: ageKey,
          type: "date",
          label: "Age",
          placeholder: "What is your role as a representative",
        },
      ],
    },
  ];

  return (
    <section className="">
      <div className="my-4">
        <HeadingText>Help us know more about you</HeadingText>
        <LightParagraph>Please fill in the details below</LightParagraph>
      </div>

      <div>
        <label>
          <img
            src={"/images/pasportTwo.png"}
            alt="placeholder avatar"
            className="py-4 w-24 h-auto"
          />
          <input
            name="image"
            id="image"
            type="file"
            accept="image/*"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.image}
            className="hidden"
          />
        </label>

        <FormikErrorResponse formik={formik} name={formik.values["image"]} />
      </div>

      <Form
        formik={formik}
        status={"none"}
        inputArray={fields}
        hasButton={false}
      />
      <div className="flex justify-end my-6">
        <StepButton doStepChange={doStepChange} />
      </div>
    </section>
  );
}

export default Home;
