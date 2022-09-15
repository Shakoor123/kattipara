import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import axios from "axios";
import "./Home.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getCards = async () => {
      const res = await axios.get(`${process.env.REACT_APP_URL}products`);
      setProducts(res.data);
    };
    getCards();
  }, []);

  return (
    <>
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <div className="cardwrapper">
            <div className="homecards">
              {products.map((pro) => (
                <Link to={`/product/${pro._id}`}>
                  <Card {...pro} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
