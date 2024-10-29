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
    <div className="relative flex items-center justify-center w-full max-w-md">
      <input
        className={`relative mt-2 w-full border border-gray-100 p-2 xs:py-1.5 rounded-md placeholder:text-sm ${className}`}
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
      ) : (
        ""
      )}
    </div>
  );
}
