import React, { useState } from "react";

// interface inputProperties {
//   type: string;
//   placeholder?: string;
//   onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
//   onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
//   value?: string;
//   name?: string;
//   style?: string;
// }

export default function CustomInput({
  type,
  placeholder,
  onChange,
  onBlur,
  value,
  name,
  style,
}) {
  const [isPassword, setIsPassword] = useState(true);
  const [passWordType, setPasswordType] = useState("password");

  const handlePasswordVisibility = () => {
    setIsPassword(!isPassword);
    setPasswordType(!isPassword ? "password" : "text");
  };
  return (
    <div className="relative flex items-center justify-center">
      <input
        className={`relative mt-2 ${style}`}
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
