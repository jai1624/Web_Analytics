import axios from "axios";
import React, { useState } from "react";
import "../App.css";

const DataTable = ({ data }) => {
  if (data === null) {
    return <div>No data available</div>;
  }
  const itemCheck = (item) => {
    if (
      item === "Administrative" ||
      item === "ProductRelated" ||
      item === "ProductRelated_Duration" ||
      item === "BounceRates" ||
      item === "ExitRates" ||
      item === "PageValues" ||
      item === "Month_Mar" ||
      item === "Month_May" ||
      item === "Month_Nov" ||
      item === "VisitorType_Returning_Visitor"
    ) {
      return true;
    } else {
      return false;
    }
  };
  const initialFormData = data.reduce((obj, item) => {
    return {
      ...obj,
      [item]: itemCheck(item) ? "" : 0,
    };
  }, {});

  // console.log(initialFormData, "datassss");

  const [formData, setFormData] = useState(initialFormData);
  const [dataOutput, setDataOutput] = useState();
  const [errorMessages, setErrorMessages] = useState({});
  // for modals
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // New changes validation
    const inputValue = value.trim();

    // Allow negative numbers and decimal points
    if (/^[-]?\d*\.?\d*$/.test(inputValue)) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: inputValue, // Store the input value as a string
      }));
      setErrorMessages((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    } else {
      setErrorMessages((prevErrors) => ({
        ...prevErrors,
        [name]: "Please enter a valid number.",
      }));
    }
  };

  // console.log(formData,'formdata');

  const handleSubmit = (e) => {
    e.preventDefault();
    const temp = Object.values(formData);
    const dataArray = {
      user_input: temp.map((value) => Number(value)),
    };
    console.log(dataArray, "dataaaa");

    const baseurl = import.meta.env.VITE_REACT_APP_API_BASE_URL;
    // const baseurl = import.meta.env.VITE_REACT_APP_API_BASE_URL || 'http://localhost:8000/';

    // console.log(import.meta.env, "meta");
    console.log(baseurl, "baseurl");

    axios
      .post(baseurl + "api/predict/", dataArray, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setDataOutput(response.data.prediction_data.Output);
        handleShowModal();
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth",
        });
      })
      .catch((error) => {
        console.error("Error making the request:", error);
      });
    handleShowModal();
  };
  const handleReset = () => {
    setFormData(initialFormData);
    setDataOutput(null);
    handleCloseModal();
  };

  // new rederfield

  const renderFields = () => {
    return (
      <div className="form-group-container">
        <h2>Types of Pages & Page Duration</h2> <br />
        <div className="table-section">
          {data.slice(0, 6).map((key, index) => (
            <div key={key} className="form-group">
              <label htmlFor={key}>{key}</label>
              <input
                type="text"
                required
                id={index}
                name={key}
                value={formData[key]}
                onChange={handleInputChange}
              />
            </div>
          ))}
        </div>
        <h2>Types of Sessions</h2> <br />
        <div className="table-section">
          {data.slice(6, 9).map((key, index) => (
            <div key={key} className="form-group">
              <label htmlFor={key}>{key}</label>
              <input
                type="text"
                required
                id={index + 9}
                name={key}
                value={formData[key]}
                onChange={handleInputChange}
              />
            </div>
          ))}
        </div>
        <h2>Special Days/Weekend</h2> <br />
        <div className="table-section">
          {data.slice(9, 11).map((key, index) => (
            <div key={key} className="form-group">
              <label htmlFor={key}>{key}</label>
              <input
                type="text"
                required
                id={index + 29}
                name={key}
                value={formData[key]}
                onChange={handleInputChange}
              />
            </div>
          ))}
        </div>
        <h2>Months</h2> <br />
        <div className="table-section">
          {data.slice(11, 20).map((key, index) => (
            <div key={key} className="form-group">
              <label htmlFor={key}>{key}</label>
              <input
                type="text"
                required
                id={index + 29}
                name={key}
                value={formData[key]}
                onChange={handleInputChange}
              />
            </div>
          ))}
        </div>
        <h2>Types of Operating System</h2> <br />
        <div className="table-section">
          {data.slice(20, 27).map((key, index) => (
            <div key={key} className="form-group">
              <label htmlFor={key}>{key}</label>
              <input
                type="text"
                required
                id={index + 29}
                name={key}
                value={formData[key]}
                onChange={handleInputChange}
              />
            </div>
          ))}
        </div>
        <h2>Types of Web Browsers</h2> <br />
        <div className="table-section">
          {data.slice(27, 39).map((key, index) => (
            <div key={key} className="form-group">
              <label htmlFor={key}>{key}</label>
              <input
                type="text"
                required
                id={index + 29}
                name={key}
                value={formData[key]}
                onChange={handleInputChange}
              />
            </div>
          ))}
        </div>
        <h2>Source of Traffics</h2> <br />
        <div className="table-section">
          {data.slice(39, 58).map((key, index) => (
            <div key={key} className="form-group">
              <label htmlFor={key}>{key}</label>
              <input
                type="text"
                required
                id={index + 29}
                name={key}
                value={formData[key]}
                onChange={handleInputChange}
              />
            </div>
          ))}
        </div>
        <h2>Visitor Types</h2> <br />
        <div className="table-section">
          {data.slice(58, 60).map((key, index) => (
            <div key={key} className="form-group">
              <label htmlFor={key}>{key}</label>
              <input
                type="text"
                required
                id={index + 29}
                name={key}
                value={formData[key]}
                onChange={handleInputChange}
              />
            </div>
          ))}
        </div>
      </div>
    );
  };

  const showHideClassName = showModal
    ? "modal display-block"
    : "modal display-none";

  return (
    <>
      <div className="form-container">
        <div className="form-box">
          <form onSubmit={handleSubmit}>
            {renderFields()}
            {/* <hr /> */}
            <div className="buttons">
              <button type="submit">Submit</button>
              <button type="button" onClick={handleReset}>
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className={showHideClassName}>
        <div className="modal-section">
          <section className="modal-main">
            <h2 className="output-data">{dataOutput}</h2>
            <button onClick={handleCloseModal} >Close</button>
          </section>
        </div>
      </div>
    </>
  );
};

export default DataTable;
