import React, { useEffect } from "react";
import HeadingText from "../HeadingText";
import LightParagraph from "../ParagraphText";
import {
  bioKey,
  company_addressKey,
  first_nameKey,
  last_nameKey,
  nationalityKey,
  postal_codeKey,
  roleKey,
  stateKey,
} from "../../lib/data";
import Form from "../form";
import { useFormik } from "formik";
import StepButton from "./StepButton";
import { overviewFields, overviewFormValues } from "../../lib/data/overview";
import { getLocalData, setLocalData } from "../../lib/helpers/overview";
import axios from "axios";

function Overview() {
  const fullName =
    getLocalData(first_nameKey) + " " + getLocalData(last_nameKey);

  const formik = useFormik({
    initialValues: overviewFormValues,
  });

  const doStepChange = async () => {
    const res = await axios.put("http://localhost:8000/api/users/1/", {
      data:{ ...formik.values, email: formik.values.personal_email, gender: "male"},
    });

    console.log(res);

    // for (let value in formik.values) {
    //   const key = value;
    //   const keyValue = formik.values[value];

    //   setLocalData(key, keyValue);
    // }

    return false;
  };

  useEffect(() => {
    formik.setValues(overviewFormValues);
    console.log("formik values: ", formik.values);

    document.title = "Overview | connectize";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="container">
      <div className="my-4">
        <HeadingText>Overview</HeadingText>
        <LightParagraph>Please make your details are correct</LightParagraph>
      </div>
      <div className="flex gap-3 mb-4">
        <img
          src="/images/passportFour.png"
          alt={fullName || "User profile"}
          className="w-1/2 max-w-40"
        />
        <div className="mt-4 capitalize">
          <h4>{fullName || "No name"}</h4>
          <p className="text-black/50">
            {getLocalData(stateKey) + ", " + getLocalData(nationalityKey) + ""}
          </p>
          <small className="text-black/50">
            {getLocalData(company_addressKey) +
              ", " +
              getLocalData(postal_codeKey) || "Postal code"}
          </small>
          <p className="text-black/50">
            <b>Role </b>
            {getLocalData(roleKey) || "N/A"}
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <LightParagraph>Bio: {getLocalData(bioKey)}</LightParagraph>

        <Form
          formik={formik}
          status={"none"}
          inputArray={overviewFields}
          hasButton={false}
        />
      </div>

      <div className="flex justify-between my-6">
        <StepButton
          nextStep="bio"
          stepDirection="back"
          stepText="Back"
          doStepChange={doStepChange}
        />
        <StepButton
          doStepChange={doStepChange}
          nextStep=""
          stepText={formik.isSubmitting ? "Submitting..." : "Submit"}
        />
      </div>
    </div>
  );
}

export default Overview;
