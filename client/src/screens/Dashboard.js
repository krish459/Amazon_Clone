import React from "react";
import ContactMap from "../components/ContactMap";
import ImageSlider from "../components/ImageSlider";
import ItemList from "../components/ItemList";
import Topsellers from "../components/Topsellers";

function Dashboard() {
  return (
    <>
      <ImageSlider />
      <ItemList />
      <Topsellers />
      <ContactMap />
    </>
  );
}

export default Dashboard;
