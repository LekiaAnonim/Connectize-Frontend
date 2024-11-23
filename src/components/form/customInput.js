import { Input } from "@chakra-ui/react";
import React, { useState } from "react";

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
        className={`relative mt-2 !w-full !bg-background py-2.5 px-3 rounded-md placeholder:text-sm text-sm ${className} transition-all duration-300 focus:!border-gold focus:outline-none`}
        type={type === "password" ? passwordType : type}
        placeholder={placeholder}
        onChange={onChange}
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
