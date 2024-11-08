import { useEffect } from "react";
import * as Yup from "yup";
import Form from "../../components/form";
import { useFormik } from "formik";

import { Link } from "react-router-dom";
import { GreaterThan, ArrowDown } from "../../icon";

const validationSchema = Yup.object().shape({
  first_name: Yup.string().required("First name field is required"),
  last_name: Yup.string().required("Last name field is required"),
  company_name: Yup.string().required("Company name field is required"),
  gender: Yup.string()
    .trim()
    .required("Gender field is required")
    .test(
      "correct-gender",
      "Only genders, ie male or female is allowed.",
      function (value) {
        return (
          value.toLowerCase() === "male" || value.toLowerCase() === "female"
        );
      }
    ),
  role: Yup.string().required("Role field is required"),
  age: Yup.string().required("Age field is required"),
});

function Home() {
  //   const navigate = useNavigate();
  const formValues = {
    first_name: "",
    last_name: "",
    company_name: "",
    gender: "",
    role: "",
    age: "",
  };

  const formik = useFormik({
    initialValues: formValues,
    validationSchema: validationSchema,
    onSubmit: async ({ email, password }, { resetForm }) => {
      // console.log("Auth data ", { email, username, password, confirmPassword });
      //   const success = await authenticationService({
      //     values: {
      //       username: email,
      //       email,
      //       password,
      //     },
      //     url: "login/",
      //     resetForm,
      //     type: "login",
      //   });
      //   if (success) navigate("/profile");
    },
  });

  useEffect(() => {
    formik.setValues(formValues);
    // window.title = "Login to connectize";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fields = [
    {
      name: "first_name",
      type: "text",
      label: "First Name",
      placeholder: "Enter your first name",
    },
    {
      name: "last_name",
      type: "text",
      label: "Last Name",
      placeholder: "Enter your last name",
    },
    {
      name: "company_name",
      type: "text",
      label: "Company Name",
      placeholder: "Enter your company's name",
    },
    {
      name: "gender",
      type: "text",
      label: "Gender",
      placeholder: "Male/Female",
    },
    {
      name: "role",
      type: "text",
      label: "Role",
      placeholder: "What is your role as a representative",
    },
    {
      name: "age",
      type: "date",
      label: "Age",
      placeholder: "What is your role as a representative",
    },
  ];

  return (
    <section className="container">
      <div className="my-4">
        <h4>Help us know more about you</h4>
        <p className="text-black-50">Please fill in the details below</p>
      </div>
      <div>
        <img
          src="/images/pasportTwo.png"
          alt="placeholder avatar"
          className="py-4 size-32 aspect-square"
        />
      </div>

      <Form
        formik={formik}
        status={"none"}
        inputArray={fields}
        button={{
          type: "submit",
          text: "Login",
          submitText: "Checking...",
          style: "!md:w-[60%] mt-4",
        }}
      />
      {/* <form>
        <div className="row form-group">
          <div className="me-3 col-sm-6 col-md-4 py-4">
            <label>First Name</label>
            <br />
            <input
              type="text"
              className="form-control border-0 mt-3"
              style={{ background: "#EEEEEE", height: "60%" }}
              placeholder="Example@companyname.com"
            />
          </div>
          <div className="col-sm-6 col-md-4 py-4">
            <label>Last Name</label>
            <br />
            <input
              type="text"
              className="form-control border-0 mt-3"
              style={{ background: "#EEEEEE", height: "60%" }}
              placeholder="Enter your last name"
            />
          </div>
        </div>
        <div className="row form-group">
          <div className="me-3 col-sm-6 col-md-4">
            <label>Company Name</label>
            <br />
            <input
              type="text"
              className="form-control border-0 mt-3"
              style={{ background: "#EEEEEE", height: "50px" }}
              placeholder="Enter company name"
            />
          </div>
          <div className="col-sm-6 col-md-4">
            <label>Gender</label>
            <br />
            <div className="d-flex">
              <input
                type="text"
                className="form-control border-0 mt-3"
                list="datalistOptions"
                id="exampleDataList"
                style={{ background: "#EEEEEE", height: "50px" }}
                placeholder="Male/Female"
              />
              <div style={{ marginLeft: "-10%", marginTop: "7%" }}>
                <ArrowDown />
              </div>
              <datalist id="datalistOptions">
                <option />
                <option value="Male" />
                <option value="Female" />
              </datalist>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-md-4 me-4 py-4">
            <label>Role</label>
            <br />
            <div className="d-flex">
              <input
                type="text"
                className="form-control border-0 mt-3"
                style={{ background: "#EEEEEE", height: "50px" }}
                list="datalistOptions"
                id="exampleDataList"
                placeholder="What your role as a representative"
              />
              <div style={{ marginLeft: "-10%", marginTop: "7%" }}>
                <ArrowDown />
              </div>
            </div>
            <datalist id="datalistOptions">
              <option />
              <option value="Male" />
              <option value="Female" />
            </datalist>
          </div>
          <div className="col-sm-6 col-md-4 py-4">
            <label>Age</label>
            <br />
            <input
              type="date"
              className="form-control border-0 mt-3"
              style={{ background: "#EEEEEE", height: "60%" }}
              list="datalistOptions"
              id="exampleDataList"
              placeholder="DD/MM/YY"
            />
          </div>

          {/* <select class="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select> */}
      {/* </div> */}
      {/* </form> */}
      <Link
        to="/contact"
        className="btn btn-warning rounded my-4 py-2 shadow-lg px-4"
      >
        Next
        <GreaterThan />
      </Link>

      {/* <div className="input-group date" data-provide="datepicker">
            <input type="text" className="form-control" id='date' />
            <div className="input-group-addon">
                <span className="glyphicon glyphicon-th"></span>
            </div>
            </div> */}
    </section>
  );
}

export default Home;
