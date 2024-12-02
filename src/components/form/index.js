import { Textarea } from "@chakra-ui/react";
import CustomInput, {
  CustomSelect,
  CustomTextArea,
  inputClassNames,
} from "./customInput";
import FormikErrorResponse from "./formError";
import clsx from "clsx";

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
  return (
    <form className={`${className} w-full`} onSubmit={formik.handleSubmit}>
      {topCustomComponents}

      {inputArray.map(
        (
          { name, type, label, placeholder, gridInputs, disabled, options },
          index
        ) => {
          return (
            <div key={index} className="w-full">
              {type === "grid" ? (
                <div className={`grid md:grid-cols-2 gap-x-3 gap-y-5`}>
                  {gridInputs.map(
                    ({ name, type, label, placeholder, options }) => {
                      return (
                        <div className="" key={name}>
                          <label htmlFor={name}>{label}</label>
                          {type === "textarea" ? (
                            <Textarea
                              name={name}
                              id={name}
                              placeholder={placeholder}
                              onChange={(e) => {
                                localStorage.setItem(
                                  name,
                                  e.currentTarget.value
                                );
                                formik.handleChange(e);
                              }}
                              onBlur={formik.handleBlur}
                              value={formik.values[`${name}`]}
                              className={clsx(
                                "!min-h-[150px] w-full",
                                inputClassNames
                              )}
                            />
                          ) : type === "textarea-md" ? (
                            <CustomTextArea
                              formik={formik}
                              name={name}
                              placeholder={placeholder}
                            />
                          ) : type === "select" ? (
                            <CustomSelect
                              formik={formik}
                              name={name}
                              placeholder={placeholder}
                              options={options}
                            />
                          ) : (
                            <CustomInput
                              type={type}
                              className={
                                disabled ? "opacity-80 pointer-events-none" : ""
                              }
                              name={name}
                              placeholder={placeholder}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values[`${name}`]}
                            />
                          )}
                          <FormikErrorResponse formik={formik} name={name} />
                        </div>
                      );
                    }
                  )}
                </div>
              ) : (
                <div className="my-3 w-full">
                  <label htmlFor={type}>{label}</label>
                  {type === "textarea" ? (
                    <Textarea
                      name={name}
                      placeholder={placeholder}
                      onChange={(e) => {
                        localStorage.setItem(name, e.currentTarget.value);
                        formik.handleChange(e);
                      }}
                      onBlur={formik.handleBlur}
                      value={formik.values[`${name}`]}
                      className={clsx("!min-h-[150px] w-full", inputClassNames)}
                    />
                  ) : type === "textarea-md" ? (
                    <CustomTextArea
                      formik={formik}
                      name={name}
                      placeholder={placeholder}
                    />
                  ) : type === "select" ? (
                    <CustomSelect
                      formik={formik}
                      name={name}
                      placeholder={placeholder}
                      options={options}
                    />
                  ) : (
                    <CustomInput
                      type={type}
                      name={name}
                      placeholder={placeholder}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values[`${name}`]}
                    />
                  )}
                  <FormikErrorResponse formik={formik} name={name} />
                </div>
              )}
            </div>
          );
        }
      )}

      {bottomCustomComponents}

      {hasButton && (
        <div className="flex items-center">
          {button && (
            <button
              type={button ? button?.type : "submit"}
              className={`w-full bg-black rounded-full hover:opacity-60 transition-all duration-300 text-white px-3 py-2.5 flex items-center active:scale-90 justify-center ${
                button.style
              } ${formik.isSubmitting ? "opacity-50 pointer-events-none" : ""}`}
            >
              {formik.isSubmitting ? (
                <> {button.submitText}</>
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
