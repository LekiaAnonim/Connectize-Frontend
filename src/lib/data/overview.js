import {
  first_nameKey,
  last_nameKey,
  company_nameKey,
  genderKey,
  ageKey,
  website_urlKey,
  social_media_urlKey,
  personal_emailKey,
  phone_numberKey,
  company_emailKey,
  nationalityKey,
  stateKey,
  cityKey,
  roleKey,
  company_addressKey,
  postal_codeKey,
  bioKey,
} from ".";
import { getLocalData } from "../helpers/overview";

export const overviewFields = [
  {
    type: "grid",
    disabled:true,
    gridInputs: [
      // {
      //   name: first_nameKey,
      //   type: "text",
      //   label: "First Name",
      //   placeholder: "Enter your first name",
      // },
      // {
      //   name: last_nameKey,
      //   type: "text",
      //   label: "Last Name",
      //   placeholder: "Enter your last name",
      // },
      {
        name: company_nameKey,
        type: "text",
        label: "Company Name",
        placeholder: "Enter your company's name",
      },
      {
        name: genderKey,
        type: "text",
        label: "Gender",
        placeholder: "Male/Female",
      },

      {
        name: ageKey,
        type: "date",
        label: "Age",
        placeholder: "What is your role as a representative",
      },
      {
        name: phone_numberKey,
        type: "number",
        label: "Phone Number",
        placeholder: "090000000101",
      },
      {
        name: personal_emailKey,
        type: "email",
        label: "Personal Email",
        placeholder: "example@personal_email.com",
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

export const overviewFormValues = {
  first_name: getLocalData(first_nameKey),
  last_name: getLocalData(last_nameKey),
  company_name: getLocalData(company_nameKey),
  gender: getLocalData(genderKey),
  age: getLocalData(ageKey),
  phone_number: getLocalData(phone_numberKey),
  personal_email: getLocalData(personal_emailKey),
  website_url: getLocalData(website_urlKey),
  social_media_url: getLocalData(social_media_urlKey),
  nationality: getLocalData(nationalityKey),
  state: getLocalData(stateKey),
  city: getLocalData(cityKey),
  company_address: getLocalData(company_addressKey),
  postal_code: getLocalData(postal_codeKey),
  role: getLocalData(roleKey),
  bio: getLocalData(bioKey),
};
