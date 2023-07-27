import React from "react";
import NaveBar from "../component/NaveBar";
import Carsol from "../component/Carsol";
import Footer from "../component/Footer";
const Home = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <NaveBar />
      <Carsol />
      <Footer/>
    </div>
  );
};

export default Home;
