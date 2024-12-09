import {
  Input,
  Select,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { ImageIcon } from "../../icon";
import FormikErrorResponse from "./formError";
import ReactQuill from "react-quill";

import "react-quill/dist/quill.snow.css";
import { MarkdownComponent } from "../MarkDownComponent";
import { capitalizeFirst } from "../../lib/utils";

import clsx from "clsx";

export const inputClassNames =
  "relative mt-2 !w-full !bg-background py-2.5 px-3 rounded-md placeholder:text-sm !text-sm transition-all duration-300 !z-0";

export default function CustomInput({
  type,
  placeholder,
  onChange,
  onBlur,
  value,
  name,
  className,
}) {
  const [isPassword, setIsPassword] = useState(true);
  const [passwordType, setPasswordType] = useState("password");

  const handlePasswordVisibility = () => {
    setIsPassword(!isPassword);
    setPasswordType(!isPassword ? "password" : "text");
  };
  return (
    <div className="relative w-full">
      <Input
        autoComplete="true"
        className={`${className} ${inputClassNames}`}
        type={type === "password" ? passwordType : type}
        placeholder={placeholder}
        onChange={(e) => {
          localStorage.setItem(name, e.target.value);
          onChange(e);
        }}
        onBlur={onBlur}
        value={value}
        id={name}
        name={name}
      />

      {type === "password" && isPassword ? (
        <span
          className="absolute top-5 right-3 cursor-pointer text-xs"
          onClick={handlePasswordVisibility}
        >
          Show
        </span>
      ) : type === "password" && !isPassword ? (
        <span
          className="absolute top-5 right-3 cursor-pointer text-xs"
          onClick={handlePasswordVisibility}
        >
          Hide
        </span>
      ) : null}
    </div>
  );
}

export function ImageSelect({
  label,
  name,
  formik,
  hasCaption = true,
  captionName,
  accept = "image/*",
}) {
  return (
    <div>
      <label
        className={clsx(
          "border !border-gray-100 h-[150px] rounded-md bg-background flex flex-col items-center gap-3 overflow-hidden p-1 cursor-pointer relative",
          {
            "!border-green-200 bg-green-50": formik.values[name],
          }
        )}
      >
        {label}
        <input
          className="w-full file:border-0 file:rounded-md text-gray-500 text-xs file:!text-xs file:p-2"
          type="file"
          accept={accept}
          name={name}
          onChange={(event) => {
            formik.setFieldValue(name, event.currentTarget.files?.[0]);
          }}
          onBlur={(event) => {
            formik.setFieldValue(name, event.currentTarget.files?.[0]);
          }}
        />
        <ImageIcon className="text-custom_grey/20" />
        {hasCaption && (
          <Input
            name={captionName}
            onChange={(event) => {
              localStorage.setItem(name, event.currentTarget.value);
              formik.setFieldValue(captionName, event.currentTarget.value);
            }}
            onBlur={(event) => {
              formik.setFieldValue(captionName, event.currentTarget.value);
            }}
            value={formik.values[`${captionName}`]}
            placeholder="Enter caption for image (optional)"
            className={`${inputClassNames} placeholder:text-xs placeholder:text-gray-400 !border-gray-200`}
          />
        )}
      </label>

      <FormikErrorResponse formik={formik} name={name} />
    </div>
  );
}

export function AvatarUpload({ formik, name, label, className }) {
  const imageValue = formik.values[`${name}`];

  const handleFileChange = (e) => {
    formik.setFieldValue(name, e.currentTarget.files[0]);
  };

  return (
    <div className={className}>
      <label>
        <img
          src={
            imageValue
              ? URL.createObjectURL(imageValue)
              : "/images/passportTwo.png"
          }
          alt="upload"
          className={clsx("size-24 mx-auto transition-all duration-300", {
            "rounded-full p-0.5 bg-gold": imageValue !== "",
          })}
        />
        <input
          name={name}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          onInput={handleFileChange}
          onBlur={handleFileChange}
          className="hidden"
        />
        {label && (
          <small className="font-semibold !leading-none">{label}</small>
        )}
      </label>
      <FormikErrorResponse formik={formik} name={name} />
    </div>
  );
}

export const CustomTextArea = ({ formik, name, placeholder }) => {
  const selectedStyle = { color: "black", bg: "gray.100" };
  return (
    <>
      <Tabs>
        <TabList className="mt-1">
          <Tab className="text-xs" _selected={selectedStyle}>
            Editor
          </Tab>
          <Tab className="text-xs" _selected={selectedStyle}>
            Preview
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel className="!px-0">
            <ReactQuill
              value={formik.values[`${name}`]}
              onChange={(value) => {
                // Remove <p><br></p> if the editor is empty
                const cleanedValue = value === "<p><br></p>" ? "" : value;

                localStorage.setItem(name, cleanedValue);
                formik.setFieldValue(name, cleanedValue);
              }}
              theme="snow"
              placeholder={placeholder}
            />
          </TabPanel>
          <TabPanel className="mb-4 !px-0">
            <MarkdownComponent markdownContent={formik.values[`${name}`]} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export const CustomSelect = ({ formik, name, placeholder, options = [""] }) => (
  <div className="mt-2">
    <Select
      id={name}
      name={name}
      placeholder={placeholder}
      onChange={(e) => {
        localStorage.setItem(name, e.currentTarget.value);
        formik.handleChange(e);
      }}
      onBlur={(e) => {
        localStorage.setItem(name, e.currentTarget.value);
        formik.handleChange(e);
      }}
      value={formik.values[`${name}`]}
      className="!w-full !bg-background px-3 !text-sm  border-gray-100"
    >
      {options?.map((option, index) => (
        <option key={index} value={option}>
          {capitalizeFirst(option.toLowerCase())}
        </option>
      ))}
    </Select>

    {/* <FormikErrorResponse formik={formik} name={name} /> */}
  </div>
);
