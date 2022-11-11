import React, { useEffect, useState } from "react";

import "./home.css";
function HomePage() {
  const [formDetails, setFormDetails] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    location: "",
    date: "",
    age: "",
    description: "",
    degree: "",
  });
  const [list, setList] = useState([]);
  const [errors, setErrors] = useState({});
  const [show, setShow] = useState(false);

  const onChange = (e) => {
    setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    console.log(errors);
  });

  const Validation = (formDetails) => {
    let errors = {};
    debugger;

    if (formDetails.firstName === "") {
      errors.firstName = "*First Name Cannot be empty";
      setShow(false);
    } else {
      setShow(true);
    }
    if (formDetails.lastName === "") {
      errors.lastName = "*Last Name Cannot be empty";
      setShow(false);
    } else {
      setShow(true);
    }

    if (formDetails.gender === "") {
      errors.gender = "*Gender is Required";
      setShow(false);
    } else {
      setShow(true);
    }

    if (formDetails.location === "") {
      errors.location = "*Location is Required";
      setShow(false);
    } else {
      setShow(true);
    }

    if (formDetails.date === "") {
      errors.date = "*Birth date cannot be empty";
      setShow(false);
    } else {
      setShow(true);
    }
    if (formDetails.age === "") {
      errors.age = "*Age is Required";
      setShow(false);
    } else {
      setShow(true);
    }
    if (formDetails.description === "") {
      errors.description = "*Description is Required";
      setShow(false);
    } else {
      setShow(true);
    }
    if (formDetails.degree === "") {
      errors.degree = "*Degree is Required";
      setShow(false);
    } else {
      setShow(true);
    }

    console.log(errors);

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(Validation(formDetails));

    setList((items) => [...items, formDetails]);
    console.log("datas", list);
  };

  const clear = (e) => {
    e.preventDefault();
    setFormDetails({
      firstName: "",
      lastName: "",
      gender: "",
      location: "",
      date: "",
      age: "",
      description: "",
      degree: "",
    });
  };

  return (
    <>
      <div className="wrapper">
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-4 col-md-6  text-start  mt-5 ">
              <h1 className="head text-white  ">Signup Form</h1>
              <form className="form ps-3 mb-4">
                <label className="pt-3">First Name :</label>
                <br></br>
                <input
                  className="mt-2 w-75"
                  type={"text"}
                  name="firstName"
                  value={formDetails.firstName}
                  onChange={onChange}
                  placeholder="First Name"
                />
                <p className="text-danger">{errors.firstName}</p>
                <label>Last Name :</label>
                <br></br>
                <input
                  className="mt-2 w-75"
                  type={"text"}
                  name="lastName"
                  value={formDetails.lastName}
                  onChange={onChange}
                  placeholder="Last Name"
                />
                <p className="text-danger">{errors.lastName}</p>
                <label>Gender :</label>
                <br></br>
                <input
                  className="mx-3"
                  type={"radio"}
                  name="gender"
                  value={"Male"}
                  onChange={onChange}
                />{" "}
                <label for="Male">Male</label>
                <input
                  className="mx-3"
                  type={"radio"}
                  name="gender"
                  value={"Female"}
                  onChange={onChange}
                />
                <label for="Female">Female</label>
                <p className="text-danger">{errors.gender}</p>
                <label>Location:</label>
                <select
                  className="mx-2 mt-1 w-50"
                  value={formDetails.location}
                  onChange={onChange}
                  name="location"
                >
                  <option></option>
                  <option>Chennai</option>
                  <option>Coimbatore</option>
                  <option>Madurai</option>
                  <option>Trichy</option>
                </select>
                <p className="text-danger">{errors.location}</p>
                <label>Date Of Birth :</label>
                <br></br>
                <input
                  className="w-75 mt-2"
                  type={"date"}
                  name="date"
                  value={formDetails.date}
                  onChange={onChange}
                />
                <p className="text-danger">{errors.date}</p>
                <label>Age :</label>
                <br></br>
                <input
                  className="mt-2 w-75"
                  type={"number"}
                  name="age"
                  value={formDetails.age}
                  onChange={onChange}
                  placeholder="Enter your Age"
                />
                <p className="text-danger">{errors.age}</p>
                <label>Description :</label>
                <br></br>
                <input
                  className="mt-2 w-75 "
                  type={"text"}
                  value={formDetails.description}
                  name="description"
                  onChange={onChange}
                  placeholder="Description..."
                />
                <p className="text-danger">{errors.description}</p>
                <label>Degree :</label>
                <select
                  className="mx-2  mt-2 w-50"
                  value={formDetails.degree}
                  onChange={onChange}
                  name="degree"
                >
                  <option></option>
                  <option>B.Sc</option>
                  <option>B.E</option>
                  <option>M.Sc</option>
                  <option>M.E</option>
                </select>
                <p className="text-danger">{errors.degree}</p>
                <button className="submit" onClick={handleSubmit}>
                  Submit
                </button>
                <button className="reset" onClick={clear}>
                  Reset
                </button>
              </form>
            </div>
            {show ? (
              <div className="col-md-8 py-5 text-center">
                <h2>Stored Datas</h2>
                {list.map((render) => (
                  <div>
                    <h5>
                      Name: &nbsp;{render.firstName}
                      &nbsp;{render.lastName}
                    </h5>

                    <h5>Gender: &nbsp;{render.gender}</h5>
                    <h5>Location:&nbsp; {render.location}</h5>
                    <h5>Date of Birth:&nbsp;{render.date}</h5>
                    <h5>Age:&nbsp; {render.age}</h5>
                    <h5>Description:&nbsp; {render.description}</h5>
                    <h5>Degree:&nbsp; {render.degree}</h5>
                  </div>
                ))}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
