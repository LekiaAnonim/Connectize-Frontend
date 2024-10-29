import CustomInput from "./customInput";
import FormikErrorResponse from "./formError";

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
    <form className={`${className}`} onSubmit={formik.handleSubmit}>
      {topCustomComponents}

      {inputArray.map(
        ({ name, type, label, placeholder, gridInputs }, index) => (
          <div key={index}>
            {type === "grid" ? (
              <div className={`grid md:grid-cols-2 gap-2`}>
                {gridInputs.map(({ name, type, label, placeholder }) => (
                  <div className="mb-3" key={name}>
                    <label htmlFor={type}>{label}</label>
                    <CustomInput
                      type={type}
                      name={name}
                      placeholder={placeholder}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values[`${name}`]}
                    />
                    <FormikErrorResponse formik={formik} name={name} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="my-2">
                <label htmlFor={type} className="mb-4">
                  {label}
                </label>
                <CustomInput
                  type={type}
                  name={name}
                  placeholder={placeholder}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values[`${name}`]}
                />
                <FormikErrorResponse formik={formik} name={name} />
              </div>
            )}
          </div>
        )
      )}

      {bottomCustomComponents}

      {hasButton && (
        <div className="flex items-center">
          {button && (
            <button
              type={button ? button.type : "submit"}
              className={`w-full ${button.style} ${
                formik.isSubmitting ? "opacity-50 pointer-events-none" : ""
              }`}
            >
              {formik.isSubmitting ? (
                // <div className="boxes_loader"></div>

                <> {button.submitText}</>
              ) : (
                <>{button.text}</>
              )}
            </button>
          )}
        </div>
      )}

      {children}
    </form>
  );
}
