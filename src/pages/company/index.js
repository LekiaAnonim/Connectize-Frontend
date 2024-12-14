import React, { useEffect } from "react";
import HeadingText from "../../components/HeadingText";
import LightParagraph from "../../components/ParagraphText";
import Form from "../../components/form";
import { useFormik } from "formik";
import * as Yup from "yup";
import StepButton from "../../components/profile/StepButton";
import { getCountries } from "@loophq/country-state-list";

const validationSchema = Yup.object().shape({
  company_name: Yup.string().required("Field cannot be empty"),
  company_tagline: Yup.string().required("Field cannot be empty"),
  company_email: Yup.string().required("Field cannot be empty"),
  company_website: Yup.string().required("Field cannot be empty"),
  company_address: Yup.string().required("Field cannot be empty"),
  country: Yup.string().required("Field cannot be empty"),
  city: Yup.string().required("Field cannot be empty"),
  company_category: Yup.string().required("Field cannot be empty"),
  company_size: Yup.string().required("Field cannot be empty"),
  company_description: Yup.string().required("Field cannot be empty"),
});

const CreateCompany = () => {
  const countries = getCountries();

  const initialValues = {
    company_name: localStorage.getItem("company_name") || "",
    company_tagline: localStorage.getItem("company_tagline") || "",
    company_email: localStorage.getItem("company_email") || "",
    company_website: localStorage.getItem("company_website") || "",
    company_address: localStorage.getItem("company_address") || "",
    country: localStorage.getItem("country") || "",
    city: localStorage.getItem("city") || "",
    company_category: localStorage.getItem("company_category") || "",
    company_size: localStorage.getItem("company_size") || "",
    company_description: localStorage.getItem("company_description") || "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
  });

  const countriesString = countries.map((country) => country.name);

  const stateForCountry =
    countries.find((country) => country.name === formik.values["country"])
      ?.states || [];

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
      type: "grid",
      gridInputs: [
        {
          name: "company_name",
          type: "text",
          label: "Company's Name",
          placeholder: "E.g The Large Company",
        },
        {
          name: "company_tagline",
          type: "text",
          label: "Company's tagline",
          placeholder: "E.g best in production...",
        },
        {
          name: "company_email",
          type: "email",
          label: "Company's email",
          placeholder: "E.g me@yourcompany.com",
        },
        {
          name: "company_website",
          type: "url",
          label: "Company's website",
          placeholder: "E.g https://www.yourcompany.com",
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
          options: countriesString,
        },
        {
          name: "city",
          type: "select",
          label: "Region/City",
          placeholder: "Select city",
          options: stateForCountry,
        },
        {
          name: "company_category",
          type: "select",
          label: "Company type",
          placeholder: "Select company type",
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
          options: [
            "0-10 employees",
            "11-50 employees",
            "50 and above employees",
          ],
        },
        {
          name: "company_description",
          type: "textarea",
          label: "Short description",
          placeholder: "write a short description of your company here...",
        },
      ],
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
          nextStep="company-information"
          stepText="Next"
        />
      </div>
    </section>
  );
};

export default CreateCompany;
