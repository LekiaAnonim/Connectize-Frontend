import React, { useEffect } from "react";
import HeadingText from "../HeadingText";
import LightParagraph from "../ParagraphText";
import { personal_emailKey, phone_numberKey } from "../../lib/data";
import Form from "../form";
import * as Yup from "yup";
import { useFormik } from "formik";
import StepButton from "./StepButton";

const validationSchema = Yup.object().shape({
  phone_number: Yup.string().required("Phone number field is required"),
  personal_email: Yup.string()
    .email("Invalid Email")
    .required("Personal email field is required"),
});

function Contact() {
  const formValues = {
    personal_email: localStorage.getItem(personal_emailKey) || "",
    phone_number: localStorage.getItem(phone_numberKey) || "",
  };

  const formik = useFormik({
    initialValues: formValues,
    validationSchema: validationSchema,
  });

  const doStepChange = () => {
    const hasUndefined = Object.values(formik.values).some(
      (value) => value === undefined || value === "" || value === null
    );

    if (hasUndefined) return false;

    for (let value in formik.values) {
      const key = value;
      const keyValue = formik.values[value];

      localStorage.setItem(key, keyValue);
    }
    return true;
  };

  useEffect(() => {
    formik.setValues(formValues);
    document.title = "Complete your profile - Contact | connectize";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const fields = [
    {
      type: "grid",
      gridInputs: [
        {
          name: phone_numberKey,
          type: "number",
          label: "Phone Number",
          placeholder: "090000000101",
        },
        {
          name: personal_emailKey,
          type: "email",
          label: "Personal Email",
          placeholder: "example@company_name.com",
        },
      ],
    },
  ];
  return (
    <section>
      <div className="my-4">
        <HeadingText>Let us and other companies reach out to you</HeadingText>
        <LightParagraph className="text-black-50">
          Please fill in the details below
        </LightParagraph>
      </div>

      <Form
        formik={formik}
        status={"none"}
        inputArray={fields}
        hasButton={false}
      />

      <div className="flex justify-between my-6">
        <StepButton
          nextStep="home"
          stepDirection="back"
          stepText="Back"
          doStepChange={doStepChange}
        />
        <StepButton doStepChange={doStepChange} />
      </div>
    </section>
  );
}

export default Contact;
