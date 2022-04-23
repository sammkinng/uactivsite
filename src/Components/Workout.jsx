import React from "react";
import InitailModal from "./InitailModal"
import Left from "./Left";
import Middle from "./Middle";
import Modal from "./Modal";
import Modal2 from "./Modal2";
import Right from "./Right";
import "../Styles/Workout.css";

function Workout() {
  return (
    <div className="app">
      <Left key={"left"} />
      <Middle key={"middle"} />
      <Modal2 />
      <InitailModal key={"modal"} />
      <Modal />
      <Right />
      <Modal2 />
    </div>
  );
}

export default Workout;
