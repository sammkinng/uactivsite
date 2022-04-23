import React, { createContext, useState, useRef } from "react";
import Middle from "./Components/Middle";
import "./Styles/Workout.css";

export const Context = createContext();

export default () => {
  const yesClick = useRef(null);
  const playing = useRef(null);
  const [modal, setModal] = useState(null);
  const [open, setOpen] = useState(true);
  const [rep, setRep] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [exercise, setExercise] = useState(null);
  const [start, setStart] = useState(false);
  return (
    <Context.Provider
      value={{
        yesClick,
        modal,
        setModal,
        start,
        setStart,
        open,
        setOpen,
        rep,
        setRep,
        speed,
        setSpeed,
        completed,
        setCompleted,
        exercise,
        setExercise,
        playing,
      }}
    >
      <div className="app">
        <Middle key={"middle"} />
      </div>
    </Context.Provider>
  )
}
