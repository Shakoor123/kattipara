import React from "react";
import "./ProductList.css";
import net1 from "../../assets/net1.webp";
import axios from "axios";
type addProps = {
  thikness: number;
  size: number;
  img: string;
  mani: boolean;
  weight: number;
  foreign: boolean;
  price: number;
  _id: string;
};
const ProductList = ({
  thikness,
  size,
  img,
  mani,
  weight,
  foreign,
  price,
  _id,
}: addProps) => {
  const clickDelete = async (id: string) => {
    const res = await axios.delete(
      `${process.env.REACT_APP_URL}products/${id}`
    );
    alert(res.data);
  };
  return (
    <div className="plist">
      <div className="plistwrapper">
        <div className="plistleft">
          <img src={img} alt="" className="plistImage" />
        </div>
        <div className="plistright">
          <span className="plistthikness">Thikness:.{thikness}mm</span>
          <span className="plistHole">Hole size:{size}mm</span>
          <span className="plistprice">Price:{price}</span>
          <span className="plistprice">Foreign:{foreign ? "YES" : "NO"}</span>
          <span className="plistprice">mani:{mani ? "mani" : "kadiyal"}</span>
          <span className="plistprice">weight:{weight}kg</span>

          <button
            className="delete"
            onClick={() => {
              clickDelete(_id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
