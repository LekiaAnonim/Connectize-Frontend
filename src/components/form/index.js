import { Textarea } from "@chakra-ui/react";
import CustomInput, {
  CustomSelect,
  CustomTextArea,
  inputClassNames,
} from "./customInput";
import FormikErrorResponse from "./formError";
import clsx from "clsx";
import { useCallback } from "react";

export default function Form({
  formik,
  inputArray,
  children,
  button,
  className,
  topCustomComponents,
  bottomCustomComponents,
  hasButton = true,
}) {
  const renderField = useCallback(
    (
      { name, type, label, placeholder, options, gridInputs, disabled },
      index
    ) => {
      const commonProps = {
        name,
        placeholder,
        onChange: formik.handleChange,
        onBlur: formik.handleBlur,
        value: formik.values[name],
      };

      const inputProps = {
        ...commonProps,
        disabled: disabled ? true : false,
      };

      const renderInput = () => {
        switch (type) {
          case "textarea":
            return (
              <Textarea
                {...commonProps}
                className={clsx("!min-h-[150px] w-full", inputClassNames)}
              />
            );
          case "textarea-md":
            return <CustomTextArea formik={formik} {...inputProps} />;
          case "select":
            return (
              <CustomSelect formik={formik} {...inputProps} options={options} />
            );
          default:
            return <CustomInput {...inputProps} type={type} />;
        }
      };

      return (
        <div key={index} className="w-full">
          {type === "grid" ? (
            <div className="grid md:grid-cols-2 gap-x-3 gap-y-5">
              {gridInputs.map((input, idx) => (
                <div key={input.name} className="">
                  <label htmlFor={input.name}>{input.label}</label>
                  {renderInput()}
                  <FormikErrorResponse formik={formik} name={input.name} />
                </div>
              ))}
            </div>
          ) : (
            <div className="my-3 w-full">
              <label htmlFor={name}>{label}</label>
              {renderInput()}
              <FormikErrorResponse formik={formik} name={name} />
            </div>
          )}
        </div>
      );
    },
    [formik]
  );

  return (
    <form className={`${className} w-full`} onSubmit={formik.handleSubmit}>
      {topCustomComponents}

      {inputArray.map((field, index) => renderField(field, index))}

      {bottomCustomComponents}

      {hasButton && (
        <div className="flex items-center">
          {button && (
            <button
              type={button?.type || "submit"}
              className={`w-full bg-black rounded-full hover:opacity-60 transition-all duration-300 text-white px-3 py-2.5 flex items-center active:scale-90 justify-center ${
                button?.style
              } ${formik.isSubmitting ? "opacity-50 pointer-events-none" : ""}`}
            >
              {formik.isSubmitting ? (
                button.submitText
              ) : (
                <>
                  <span>{button.text}</span>
                  {button.icon}
                </>
              )}
            </button>
          )}
        </div>
      )}

      {children}
    </form>
  );
}
