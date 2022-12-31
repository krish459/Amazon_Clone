import React from "react";
import ContactMap from "../components/ContactMap";
import ImageSlider from "../components/ImageSlider";
import ItemList from "../components/ItemList";
import Topsellers from "../components/Topsellers";
import Cartscreen from "./Cartscreen";

function Dashboard() {
  return (
    <>
      <ImageSlider />
      <ItemList />
      <Topsellers />
      <ContactMap />
      <Cartscreen />
    </>
  );
}

export default Dashboard;
