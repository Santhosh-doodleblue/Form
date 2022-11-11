import React, { useState } from "react";

import "./home.css";
function HomePage() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [gender, setGender] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [age, setAge] = useState("");
  const [description, setDescription] = useState("");
  const [degree, setDegree] = useState("");
  const [list, setList] = useState([]);
  const [errors, setErrors] = useState({});
  const [show, setShow] = useState(false);

  const Validation = () => {
    let errors = {};
    debugger;

    if (fname === "") {
      errors.fname = "*First Name Cannot be empty";
      setShow(false);
    } else {
      setShow(true);
    }
    if (lname === "") {
      errors.lname = "*Last Name Cannot be empty";
      setShow(false);
    } else {
      setShow(true);
    }

    if (gender === "") {
      errors.gender = "*Gender is Required";
      setShow(false);
    } else {
      setShow(true);
    }

    if (location === "") {
      errors.location = "*Location is Required";
      setShow(false);
    } else {
      setShow(true);
    }

    if (date === "") {
      errors.date = "*Birth date cannot be empty";
      setShow(false);
    } else {
      setShow(true);
    }
    if (age === "") {
      errors.age = "*Age is Required";
      setShow(false);
    } else {
      setShow(true);
    }
    if (description === "") {
      errors.description = "*Description is Required";
      setShow(false);
    } else {
      setShow(true);
    }
    if (degree === "") {
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
    setErrors(Validation());
    const data = {
      fname,
      lname,
      gender,
      location,
      date,
      age,
      description,
      degree,
    };

    setList((items) => [...items, data]);
    console.log("datas", list);
  };

  const clear = (e) => {
    e.preventDefault();
    setFname("");
    setLname("");
    setGender("");
    setLocation("");
    setDate("");
    setAge("");
    setDescription("");
    setDegree("");
  };

  return (
    <>
      <div className="wrapper">
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-3 col-md-6  text-start  mt-5 ">
              <h1 className="head text-white  ">Signup Form</h1>
              <form className="form ps-3 mb-4">
                <label className="pt-3">First Name :</label>
                <br></br>
                <input
                  className="mt-2 w-75"
                  type={"text"}
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                  placeholder="First Name"
                />
                <p className="text-danger">{errors.fname}</p>
                <label>Last Name :</label>
                <br></br>
                <input
                  className="mt-2 w-75"
                  type={"text"}
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                  placeholder="Last Name"
                />
                <p className="text-danger">{errors.lname}</p>
                <label>Gender :</label>
                <br></br>
                <input
                  className="mx-3"
                  type={"radio"}
                  name="gender"
                  value={"Male"}
                  onChange={(e) => setGender(e.target.value)}
                />{" "}
                <label for="Male">Male</label>
                <input
                  className="mx-3"
                  type={"radio"}
                  name="gender"
                  value={"Female"}
                  onChange={(e) => setGender(e.target.value)}
                />
                <label for="Female">Female</label>
                <p className="text-danger">{errors.gender}</p>
                <label>Location:</label>
                <select
                  className="mx-2 mt-1 w-50"
                  onChange={(e) => setLocation(e.target.value)}
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
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                <p className="text-danger">{errors.date}</p>
                <label>Age :</label>
                <br></br>
                <input
                  className="mt-2 w-75"
                  type={"number"}
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder="Enter your Age"
                />
                <p className="text-danger">{errors.age}</p>
                <label>Description :</label>
                <br></br>
                <input
                  className="mt-2 w-75 "
                  type={"text"}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Description..."
                />
                <p className="text-danger">{errors.description}</p>
                <label>Degree :</label>
                <select
                  className="mx-2  mt-2 w-50"
                  onChange={(e) => setDegree(e.target.value)}
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
              <div className="col-md-9 py-5 mt-5 text-center ">
                <h2>Stored Datas</h2>
                {list.map((render) => (
                  <div>
                    <h5>
                      Name: &nbsp;{render.fname}
                      &nbsp;{render.lname}
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
