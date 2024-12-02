import React, { useEffect } from "react";
import HeadingText from "../../components/HeadingText";
import LightParagraph from "../../components/ParagraphText";
import Form from "../../components/form";
import { useFormik } from "formik";
import * as Yup from "yup";
import StepButton from "../../components/profile/StepButton";

const validationSchema = Yup.object().shape({
  company_name: Yup.string().required("Field cannot be empty"),
  company_address: Yup.string().required("Field cannot be empty"),
  country: Yup.string().required("Field cannot be empty"),
});

const CreateCompany = () => {
  const initialValues = {
    company_name: localStorage.getItem("company_name") || "",
    company_address: localStorage.getItem("company_address") || "",
    country: localStorage.getItem("country") || "",
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
    return true;
  };

  useEffect(() => {
    document.title = "Create Company | Connectize";
    formik.setValues(initialValues);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const listingFields = [
    {
      name: "company_name",
      type: "text",
      label: "Company's Name",
      placeholder: "E.g The Large Company",
    },
    {
      name: "company_address",
      type: "text",
      label: "Office Address",
      placeholder: "E.g 24 Larkin Smith, Eket Akwa Ibom State",
    },
    {
      name: "country",
      type: "select",
      label: "Country",
      placeholder: "Select country",
    },
    {
      name: "country",
      type: "select",
      label: "Country",
      placeholder: "Select range of average annual revenue",
    },
    {
      name: "organization_type",
      type: "select",
      label: "Region/City",
      placeholder: "Select range of average annual revenue",
      options: [
        "Drilling Contractor Company",
        "Integrated Oil & Gas Company",
        "Independent Oil & Gas Company",
        "Oil Service Company",
        "Oil Equipment Manufacturer",
        "Media Company",
        "Security",
        "Renewable Energy Company",
        "Oil Refining",
      ],
    },
    {
      name: "company_size",
      type: "select",
      label: "Company's size",
      placeholder: "Select range",
      options: ["0-10 employees", "11-50 employees", "50 and above employees"],
    },
    {
      name: "description",
      type: "textarea",
      label: "Short description",
      placeholder: "write a short description of your company here...",
    },
  ];
  return (
    <section className="space-y-8">
      <div className="w-full">
        <HeadingText>
          Help us with brief information about your company
        </HeadingText>
        <LightParagraph>Please fill in the details below</LightParagraph>
      </div>

      <Form
        formik={formik}
        status={"none"}
        inputArray={listingFields}
        hasButton={false}
      />
      <div className="flex justify-between my-6">
        <div></div>
        <StepButton
          doStepChange={doStepChange}
          nextStep="company-documents"
          stepText="Next"
        />
      </div>
    </section>
  );
};

export default CreateCompany;
