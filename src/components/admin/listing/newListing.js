import React, { useEffect } from "react";
import { ImageIcon } from "../../../icon";
import HeadingText from "../../HeadingText";
import LightParagraph from "../../ParagraphText";
import Form from "../../form";
import * as Yup from "yup";
import { useFormik } from "formik";
import { ChevronLeft } from "@mui/icons-material";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { Divider } from "@chakra-ui/react";

const validationSchema = Yup.object().shape({
  product_title: Yup.string()
    .max(250, "Should not be more that 250 characters")
    .required("Field cannot be empty"),
  product_category: Yup.string().required("Field cannot be empty"),
  description: Yup.string()
    .max(1450, "Should not be more that 1450 characters")
    .required("Field cannot be empty"),
  subtitle: Yup.string()
    .max(450, "Should not be more that 450 characters")
    .required("Field cannot be empty"),
});

const listingFields = [
  {
    name: "product_title",
    type: "text",
    label: "Product Title",
    placeholder: "Should not be more that 250 characters",
  },
  {
    name: "product_category",
    type: "select",
    label: "Choose Category",
    placeholder: "Product type",
  },
  {
    name: "description",
    type: "textfield",
    label: "Description",
    placeholder: "Should not be more than 1450 characters",
  },
  {
    name: "subtitle",
    type: "textfield",
    label: "Subtitle",
    placeholder: "Should not be more than 450 characters",
  },
];

export default function NewListing() {
  //   const navigate = useNavigate();
  const formValues = {
    product_title: "",
    product_category: "",
    description: "",
    subtitle: "",
  };

  const formik = useFormik({
    initialValues: formValues,
    validationSchema: validationSchema,
    onSubmit: async (
      { product_title, product_category, description, subtitle },
      { resetForm }
    ) => {},
  });
  useEffect(() => {
    formik.setValues(formValues);
    document.title = "Create a new listing | Connectize";

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section className="bg-white p-4 rounded-md w-full shrink-0">
      <div className="mb-4">
        <HeadingText>List new products</HeadingText>
        <LightParagraph>Upload at least 4 images</LightParagraph>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-2 xl:grid-cols-4 gap-4">
        <ImageSelect name="Image 1" />
        <ImageSelect name="Image 2" />
        <ImageSelect name="Image 3" />
        <ImageSelect name="Image 4" />
      </div>
      <Divider className="my-4 text-transparent" />
      <Form
        formik={formik}
        status={"none"}
        inputArray={listingFields}
        button={{
          type: "submit",
          text: "List product  | ",
          icon: <ChevronRightIcon />,
          submitText: "Checking...",
          style: "!w-fit mt-20 text-sm",
        }}
      />
    </section>
  );
}

function ImageSelect(name) {
  return (
    <label className="border !border-gray-100 h-[150px] rounded-md bg-background flex flex-col items-center gap-3 overflow-hidden p-1 cursor-pointer">
      <input
        className="w-full file:border-0 file:rounded-md text-gray-500 text-sm file:p-2"
        type="file"
        accept="image/*"
        name={name}
      />
      <ImageIcon className="text-custom_grey/20" />
    </label>
  );
}
