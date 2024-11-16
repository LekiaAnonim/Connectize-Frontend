import React, { useEffect } from "react";
import HeadingText from "../HeadingText";
import LightParagraph from "../ParagraphText";
import {
  cityKey,
  company_addressKey,
  nationalityKey,
  postal_codeKey,
  stateKey,
} from "../../lib/data";
import Form from "../form";
import { useFormik } from "formik";
import StepButton from "./StepButton";

function Address() {
  const formValues = {
    nationality: localStorage.getItem(nationalityKey) || "",
    state: localStorage.getItem(stateKey) || "",
    city: localStorage.getItem(cityKey) || "",
    postal_code: localStorage.getItem(postal_codeKey) || "",
    company_address: localStorage.getItem(company_addressKey) || "",
  };

  const formik = useFormik({
    initialValues: formValues,
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
    document.title = "Complete your profile - Contact | connectize";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fields = [
    {
      type: "grid",
      gridInputs: [
        {
          name: nationalityKey,
          type: "text",
          label: "Nationality",
          placeholder: "Nigeria",
        },
        {
          name: stateKey,
          type: "text",
          label: "State/Province",
          placeholder: "Abuja",
        },
        {
          name: cityKey,
          type: "text",
          label: "City/Town",
          placeholder: "FCT",
        },
        {
          name: postal_codeKey,
          type: "text",
          label: "Postal Code",
          placeholder: "12345",
        },
        {
          name: company_addressKey,
          type: "text",
          label: "Company's Address",
          placeholder: "123, Royal Block, Esternbig, Abj",
        },
      ],
    },
  ];
  return (
    <section>
      <div className="my-4">
        <HeadingText>Tell us more about you</HeadingText>
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
          nextStep="contact"
          stepDirection="back"
          stepText="Back"
          doStepChange={doStepChange}
        />
        <StepButton doStepChange={doStepChange} nextStep="bio" />
      </div>
    </section>
  );
}

export default Address;
