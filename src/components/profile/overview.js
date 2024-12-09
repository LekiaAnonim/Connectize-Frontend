import React, { useEffect, useState } from "react";
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
import { customFormikFieldValidator } from "../../lib/utils";

const FILE_SIZE = 2 * 1024 * 1024; // 2MB
const SUPPORTED_FORMATS = [
  "image/jpg",
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/avif",
];

function Overview() {
  useRedirect(
    !(Number(localStorage.getItem(currentProfileIndexKey)) >= 4),
    "/bio"
  );

  const [loading, setLoading] = useState(false);

  const fullName =
    getLocalData(first_nameKey) + " " + getLocalData(last_nameKey);

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
        "Unsupported file format, only AVIFs, WEBPs, PNGs, JPEGs and JPGs are allowed",
        (value) => {
          return value && SUPPORTED_FORMATS.includes(value.type);
        }
      ),
  });

  const formik = useFormik({
    initialValues: overviewFormValues,
    validationSchema,
  });

  const doStepChange = async () => {
    const values = formik.values;

    const isValidFields = await customFormikFieldValidator(formik);

    if (!isValidFields) return false;

    const toastId = toast.loading("Updating your profile information");

    setLoading(true);

    const response = await updateCurrentUserInfo(values);

    if (response && response?.id) {
      for (let value in formik.values) {
        localStorage.removeItem(value);
      }

      toast.success("User profile has been updated successfully", {
        id: toastId,
      });
      return true;
    }
    toast.dismiss(toastId);
    setLoading(false);
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
        <LightParagraph>
          Please confirm that your details are correct
        </LightParagraph>
      </div>
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <AvatarUpload
          formik={formik}
          name="image"
          label={formik.values.image ? "" : "Upload a profile image"}
          className="max-w-40"
        />
        <div className="capitalize">
          <h4>{fullName || "No name"}</h4>
          <p className="text-black/50">
            {getLocalData(stateKey) + ", " + getLocalData(nationalityKey) + ""}
          </p>
          <small className="text-black/50">
            {getLocalData(company_addressKey) +
              ", " +
              getLocalData(postal_codeKey) || "Postal code"}
          </small>
          <p>
            <strong>Role </strong>
            <small className="text-black/50">
              {getLocalData(roleKey) || "N/A"}
            </small>
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <LightParagraph>
          <strong className="text-black">Bio: </strong>
          {getLocalData(bioKey)}
        </LightParagraph>

        <Form
          formik={formik}
          status={"none"}
          inputArray={overviewFields}
          hasButton={false}
        />
      </div>

      <div className="flex justify-between my-6">
        <StepButton nextStep="bio" stepDirection="back" stepText="Back" />
        <StepButton
          doStepChange={doStepChange}
          nextStep=""
          disabled={loading}
          stepText={loading ? "Updating..." : "Submit"}
        />
      </div>
    </div>
  );
}

export default Overview;
