import React, { useEffect } from "react";
import HeadingText from "../../components/HeadingText";
import LightParagraph from "../../components/ParagraphText";
import Form from "../../components/form";
import { useFormik } from "formik";
import * as Yup from "yup";
import StepButton from "../../components/profile/StepButton";
import { ImageSelect } from "../../components/form/customInput";

const validationSchema = Yup.object().shape({
  document_type: Yup.string().required("Field cannot be empty"),
  company_document: Yup.mixed().required("Field cannot be empty"),
});

const CompanyDocuments = () => {
  const initialValues = {
    // create company
    company_name: localStorage.getItem("company_name") || "",
    company_address: localStorage.getItem("company_address") || "",
    country: localStorage.getItem("country") || "",
    city: localStorage.getItem("city") || "",
    organization_type: localStorage.getItem("organization_type") || "",
    company_size: localStorage.getItem("company_size") || "",
    company_description: localStorage.getItem("company_description") || "",

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
    const errors = await formik.validateForm(formik.values);

    if (Object.keys(errors).length > 0) {
      Object.keys(formik.values).forEach((field) => {
        formik.setFieldTouched(field, true);
      });
      return false;
    }

    // return true;
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

      <ImageSelect hasCaption={false} formik={formik} name="company_document" />
      <div className="flex justify-between my-6">
        <StepButton
          doStepChange={doStepChange}
          stepDirection="back"
          nextStep="create-company"
          stepText="Back"
        />
        <StepButton
          doStepChange={doStepChange}
          nextStep="success"
          stepText="Submit"
        />
      </div>
    </section>
  );
};

export default CompanyDocuments;
