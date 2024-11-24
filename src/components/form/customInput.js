import { Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { ImageIcon } from "../../icon";
import FormikErrorResponse from "./formError";

const inputClassNames =
  "relative mt-2 !w-full !bg-background py-2.5 px-3 rounded-md placeholder:text-sm !text-sm transition-all duration-300";

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
    <div className="relative w-full max-w-md">
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

export function ImageSelect({ name, formik, hasCaption = true, captionName }) {
  return (
    <div>
      <label className="border !border-gray-100 h-[150px] rounded-md bg-background flex flex-col items-center gap-3 overflow-hidden p-1 cursor-pointer relative">
        <input
          className="w-full file:border-0 file:rounded-md text-gray-500 text-xs file:!text-xs file:p-2"
          type="file"
          accept="image/*"
          name={name}
          onChange={(event) => {
            formik.setFieldValue(name, event.currentTarget.files?.[0]);
          }}
          onBlur={(event) => {
            formik.setFieldValue(name, event.currentTarget.files?.[0]);
          }}
          // value={formik.values[`${name}`]}
        />
        <ImageIcon className="text-custom_grey/20" />
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
      </label>

      <FormikErrorResponse formik={formik} name={name} />
    </div>
  );
}
