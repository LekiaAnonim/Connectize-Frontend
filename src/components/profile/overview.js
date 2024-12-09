import React, { useEffect } from "react";
import HeadingText from "../HeadingText";
import LightParagraph from "../ParagraphText";
import {
  bioKey,
  company_addressKey,
  currentProfileIndexKey,
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
import { updateCurrentUserInfo } from "../../api-services/users";
import * as Yup from "yup";
import { AvatarUpload } from "../form/customInput";
import { toast } from "sonner";
import useRedirect from "../../hooks/useRedirect";

const FILE_SIZE = 2 * 1024 * 1024; // 2MB
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
});

function Overview() {
  useRedirect(
    !(Number(localStorage.getItem(currentProfileIndexKey)) >= 4),
    "/bio"
  );

  const fullName =
    getLocalData(first_nameKey) + " " + getLocalData(last_nameKey);

  const formik = useFormik({
    initialValues: overviewFormValues,
    validationSchema,
  });

  const doStepChange = async () => {
    const values = formik.values;

    const response = await updateCurrentUserInfo(values);

    if (response && response?.id) {
      for (let value in formik.values) {
        localStorage.removeItem(value);
      }

      toast.success("User profile has been updated successfully");
      return true;
    }

    return false;
  };

  useEffect(() => {
    formik.setValues(overviewFormValues);

    document.title =
      "Complete profile - confirm profile information | Connectize";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="container">
      <div className="my-4">
        <HeadingText>Overview</HeadingText>
        <LightParagraph>Please ensure your details are correct</LightParagraph>
      </div>
      <div className="flex gap-3 mb-4">
        <AvatarUpload formik={formik} name="image" />
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
