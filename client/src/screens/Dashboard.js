import React from "react";
import ImageSlider from "../components/ImageSlider";
import ItemList from "../components/ItemList";
import Navbar from "../components/Navbar";
import Topsellers from "../components/Topsellers";

function Dashboard() {
  return (
    <>
      <Navbar />
      <ImageSlider />
      <ItemList />
      <Topsellers />
    </>
  );
}

export default Dashboard;
