import React, { useEffect, useState } from "react";
import HeadingText from "../../components/HeadingText";
import LightParagraph from "../../components/ParagraphText";
import Form from "../../components/form";
import { useFormik } from "formik";
import * as Yup from "yup";
import StepButton from "../../components/profile/StepButton";
import { ImageSelect } from "../../components/form/customInput";
import { createCompany } from "../../api-services/companies";
import { toast } from "sonner";
import { customFormikFieldValidator } from "../../lib/utils";

const FILE_SIZE = 10 * 1024 * 1024; // 10MB
export const SUPPORTED_FORMATS = [
  "application/pdf",
  "text/plain",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ".docx",
];

export const unSupportedText =
  "Unsupported file format, only .pdfs, msword, .docx and plain text are allowed";

export const largeFileText =
  "File size is too large, only images less than 10mb is allowed";

export function checkFileFormat(value) {
  if (!value) return true;

  return value && SUPPORTED_FORMATS.includes(value.type.toLowerCase());
}

export function checkFileSize(value) {
  if (!value) return true;
  return value && value.size <= FILE_SIZE;
}

const validationSchema = Yup.object().shape({
  document_type: Yup.string().required("Field cannot be empty"),
  company_document: Yup.mixed()
    .required("Field cannot be empty")
    .test("file-size", largeFileText, checkFileSize)
    .test("file-format", unSupportedText, checkFileFormat),
});

const CompanyDocuments = () => {
  const [newCompanyName, setNewCompanyName] = useState("");
  const initialValues = {
    // create company
    company_name: localStorage.getItem("company_name") || "",
    company_address: localStorage.getItem("company_address") || "",
    country: localStorage.getItem("country") || "",
    city: localStorage.getItem("city") || "",
    company_category: localStorage.getItem("company_category") || "",
    company_size: localStorage.getItem("company_size") || "",
    company_description: localStorage.getItem("company_description") || "",
    company_tagline: localStorage.getItem("company_tagline") || "",

    // company information
    company_registration_no:
      localStorage.getItem("company_registration_no") || "",
    company_registration_date:
      localStorage.getItem("company_registration_date") || "",
    company_annual_revenue:
      localStorage.getItem("company_annual_revenue") || "",

    // company documents
    document_type: localStorage.getItem("document_type") || "",
    company_document: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
  });

  const doStepChange = async () => {
    const isValidFields = await customFormikFieldValidator(formik);

    if (!isValidFields) return false;

    const toastId = toast.info(
      `Onboarding ${formik.values.company_name} to connectize...`
    );

    const newCompany = await createCompany(formik.values);

    if (newCompany) {
      for (let value in formik.values) {
        localStorage.removeItem(value);
      }
      toast.success(formik.values["company_name"] + " onboarded successfully", {
        id: toastId,
      });
      setNewCompanyName(newCompany.company_name);
      return true;
    }
    toast.dismiss(toastId);
    return false;
  };

  useEffect(() => {
    document.title = "Upload Documents | Connectize";
    formik.setValues(initialValues);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const listingFields = [
    {
      name: "document_type",
      type: "select",
      label: "Document type",
      placeholder: "E.g VAT, TVN",
      options: ["TVN", "VAT"],
    },
  ];
  return (
    <section className="space-y-8">
      <div className="w-full">
        <HeadingText>Upload a VALID document of your company</HeadingText>
        <LightParagraph>Please fill in the details below</LightParagraph>
      </div>

      <Form
        formik={formik}
        status={"none"}
        inputArray={listingFields}
        hasButton={false}
      />

      <ImageSelect
        hasCaption={false}
        formik={formik}
        name="company_document"
        accept=".pdf, .doc, .docx, .txt, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      />
      <div className="flex justify-between my-6">
        <StepButton
          doStepChange={doStepChange}
          stepDirection="back"
          nextStep="company-information"
          stepText="Back"
        />
        <StepButton
          doStepChange={doStepChange}
          nextStep={newCompanyName || ""}
          stepText="Submit"
        />
      </div>
    </section>
  );
};

export default CompanyDocuments;
