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
import { getLocalData } from "../../lib/helpers/overview";
import { makeApiRequest } from "../../lib/helpers";
import { useAuth } from "../../context/userContext";
import { setSession } from "../../lib/session";
import { getOrCreateGender } from "../../api-services/users";

function Overview() {
  const { user } = useAuth();

  const fullName =
    getLocalData(first_nameKey) + " " + getLocalData(last_nameKey);

  const formik = useFormik({
    initialValues: overviewFormValues,
    onSubmit: async () => await doStepChange(),
  });

  const doStepChange = async () => {
    const values = formik.values;

    await getOrCreateGender(values.gender);

    const response = await makeApiRequest({
      url: `api/users/${user.id}/`,
      method: "PUT",
      data: {
        first_name: values.first_name,
        last_name: values.last_name,
        email: user.email,
        gender: values.gender.toLowerCase(),
        date_of_birth: values.age,
        bio: values.bio,
        role: values.role,
        is_first_time_user: false,
        company: values.company_name,
        country: values.nationality,
        city: values.city,
        phone_number: values.phone_number,
        region: values.state,
        address: values.company_address,
        avatar: null,
        companies: [],
      },
    });

    const userData = { ...response, is_first_time_user: false };

    setSession(userData);

    for (let value in formik.values) {
      localStorage.removeItem(value);
    }

    return false;
  };

  useEffect(() => {
    formik.setValues(overviewFormValues);

    document.title = "Overview | connectize";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="container">
      <div className="my-4">
        <HeadingText>Overview</HeadingText>
        <LightParagraph>Please ensure your details are correct</LightParagraph>
      </div>
      <div className="flex gap-3 mb-4">
        <img
          src="/images/pasportTwo.png"
          alt={fullName || "User profile"}
          className="w-1/2 max-w-36"
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
          doStepChange={formik.handleSubmit}
          nextStep="/profile"
          disabled={formik.isSubmitting}
          stepText={formik.isSubmitting ? "Updating..." : "Submit"}
        />
      </div>
    </div>
  );
}

export default Overview;
