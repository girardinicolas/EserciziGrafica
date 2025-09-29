import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

function App() {
 
  return (
    <>
      <Navbar title={"React Meal"} cartCount={0}></Navbar>
      <Hero></Hero>
      <Card
        title="Delicious Food, Delivered To You"
        description1="Choose your favourite meal from our broad selection of avaible meals and enjoy a delicious
        lunch or dinner at home."
        description2="All our meals are cooked with high-quality ingredients,just in time and of course by 
        experienced chefs!"
      />
    </>
  );
}

export default App;
