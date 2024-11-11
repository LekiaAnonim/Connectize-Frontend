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
  const [passWordType, setPasswordType] = useState("password");

  const handlePasswordVisibility = () => {
    setIsPassword(!isPassword);
    setPasswordType(!isPassword ? "password" : "text");
  };
  return (
    <div className="relative w-full max-w-md">
      <input
        autoComplete="true"
        className={`relative mt-2 !w-full bg-[#eee] py-2.5 px-3 rounded-md placeholder:text-sm text-sm ${className} transition-all duration-300 focus:border-mid_grey`}
        type={type === "password" ? passWordType : type}
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
