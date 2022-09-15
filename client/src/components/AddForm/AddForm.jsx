import React, { useState } from "react";
import "./AddForm.css";
import add from "../../assets/add.jpeg";
import loading from "../../assets/loading.png";
import axios from "axios";
const AddForm = () => {
  const [file, setFile] = useState();
  const [thikness, setThikness] = useState(0);
  const [size, setSize] = useState(0);
  const [mani, setMani] = useState(true);
  const [weight, setWeight] = useState(0);
  const [forign, setForign] = useState(false);
  const [price, setPrice] = useState(0);
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const uploadProduct = async () => {
    setErr(false);
    if (file == "" || thikness == 0 || size == 0 || weight == 0 || price == 0) {
      setErr(true);
      return;
    }
    setLoading(true);
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "upload");
    const uploadRes = await axios.post(
      "https://api.cloudinary.com/v1_1/desv0ugoq/image/upload",
      data
    );
    console.log(uploadRes.data.secure_url);
    const res = await axios.post(`${process.env.REACT_APP_URL}products/`, {
      img: uploadRes.data.secure_url,
      size,
      thikness,
      price,
      mani,
      weight,
      forign,
    });
    setLoading(false);
  };
  return (
    <div className="addform">
      {loading ? (
        <span
          style={{
            width: 300,
            height: 300,
            color: "black",
            fontSize: 39,
            display: "flex",
            textAlign: "center",
          }}
        >
          Loading ...
        </span>
      ) : (
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
              <input
                type="text"
                onChange={(e) => setThikness(e.target.value)}
                className="addformInput"
              />
            </div>
            <div className="addformset">
              <span className="addformText">Hole Size(mm) :</span>
              <input
                type="text"
                onChange={(e) => setSize(e.target.value)}
                className="addformInput"
              />
            </div>
            <div className="addformset">
              <span className="addformText">Weight Type :</span>
              <select
                onChange={(e) =>
                  setMani(e.target.value == "mani" ? true : false)
                }
                name=""
                className="addformInput"
                id=""
                style={{ backgroundColor: "white" }}
              >
                <option value="mani">MANI</option>
                <option value="kadiyal">KADIYAL</option>
              </select>
            </div>
            <div className="addformset">
              <span className="addformText">Weight(kg) :</span>
              <input
                type="text"
                onChange={(e) => setWeight(e.target.value)}
                className="addformInput"
              />
            </div>
            <div className="addformset">
              <span className="addformText">Foreign :</span>
              <select
                name=""
                className="addformInput"
                id=""
                style={{ backgroundColor: "white" }}
                onChange={(e) =>
                  setForign(e.target.value == "no" ? false : true)
                }
              >
                <option value="no">NO</option>
                <option value="yes">YES</option>
              </select>
            </div>
            <div className="addformset">
              <span className="addformText">Price (RS):</span>
              <input
                type="text"
                onChange={(e) => setPrice(e.target.value)}
                className="addformInput"
              />
            </div>
            {err && (
              <span style={{ color: "red", alignSelf: "center", fontSize: 22 }}>
                fill all inputs
              </span>
            )}
            <div className="addformset">
              <button className="submitaddform" onClick={uploadProduct}>
                Upload
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddForm;
