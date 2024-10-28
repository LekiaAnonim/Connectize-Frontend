export default function FormikErrorResponse({ formik, name }) {
  return (
    <>
      {formik.touched[name] && formik.errors[name] && (
        <div className="text-[#9e3818] text-xs mb-2.5">
          {formik.errors[name]
            .toLowerCase()
            .replace(/^\w/, (c) => c.toUpperCase())}
        </div>
      )}
    </>
  );
}
