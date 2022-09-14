import React, { useState } from "react";
import "./AddForm.css";
import add from "../../assets/add.jpeg";
const AddForm = () => {
  const [file, setFile] = useState();
  return (
    <div className="addform">
      <div className="addformWrapper">
        <div className="addformform">
          <h1 className="addformTitle">ADD NEW PRODUCT</h1>
          <div className="addformset">
            <input
              type="file"
              name="addImage"
              style={{ display: "none" }}
              id="addImage"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <label htmlFor="addImage">
              <img src={add} className="addinput" alt="" />
            </label>
            {file && (
              <img
                src={URL.createObjectURL(file)}
                className="addinputImage"
                alt=""
              />
            )}
          </div>
          <div className="addformset">
            <span className="addformText">Thickness(.mm) :</span>
            <input type="text" className="addformInput" />
          </div>
          <div className="addformset">
            <span className="addformText">Hole Size(mm) :</span>
            <input type="text" className="addformInput" />
          </div>
          <div className="addformset">
            <span className="addformText">Weight Type :</span>
            <input type="text" className="addformInput" />
          </div>
          <div className="addformset">
            <span className="addformText">Weight(kg) :</span>
            <input type="text" className="addformInput" />
          </div>
          <div className="addformset">
            <span className="addformText">Foreign :</span>
            <input type="text" className="addformInput" />
          </div>
          <div className="addformset">
            <span className="addformText">Price (RS):</span>
            <input type="text" className="addformInput" />
          </div>
          <div className="addformset">
            <button className="submitaddform">Upload</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddForm;
