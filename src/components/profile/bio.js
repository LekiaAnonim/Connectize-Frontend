import React, { useEffect } from "react";
import HeadingText from "../HeadingText";
import LightParagraph from "../ParagraphText";
import { bioKey, social_media_urlKey, website_urlKey } from "../../lib/data";
import Form from "../form";
import * as Yup from "yup";
import { useFormik } from "formik";
import StepButton from "./StepButton";

function Bio() {
  const formValues = {
    bio: localStorage.getItem(bioKey) || "",
    website_url: localStorage.getItem(website_urlKey) || "",
    social_media_url: localStorage.getItem(social_media_urlKey) || "",
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
    document.title = "Complete your profile - Bio data | connectize";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fields = [
    {
      type: "grid",
      gridInputs: [
        {
          name: bioKey,
          type: "text",
          label: "Bio",
          placeholder: "say something",
        },
        {
          name: website_urlKey,
          type: "text",
          label: "Website link",
          placeholder: "westlandoil.com",
        },
        {
          name: social_media_urlKey,
          type: "text",
          label: "Social media link",
          placeholder: "e.g linkedin",
        },
      ],
    },
  ];
  return (
    <section>
      <div className="my-4">
        <HeadingText>Create your bio and add other information</HeadingText>
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
          nextStep="address"
          stepDirection="back"
          stepText="Back"
          doStepChange={doStepChange}
        />
        <StepButton
          doStepChange={doStepChange}
          nextStep="overview"
          stepText="Overview"
        />
      </div>
    </section>
  );
}

export default Bio;
