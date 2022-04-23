import React, { useContext } from 'react';
import '../Styles/Right.css';
import Uactiv from '../Assets/images/Uactiv.png';
import About from '../Assets/images/About.png';
import { Context } from '../App';
import data from '../Assets/Json/Text';

const Right = () => {
  const {
    setOpen,
    rep,
    speed,
    setRep,
    setSpeed,
    setCompleted,
    exercise,
    setStart,
  } = useContext(Context);

  return (
    <div className="right">
      <div className="right-top">
        <img src={Uactiv} alt='Uactiv' />
      </div>
      <div className="second-icon">
        <img src={About} onClick={() => setOpen(true)} alt='About' />
      </div>
      <div className="circle">
        <span>Reps</span>
        <h1>{rep}{exercise !== null && <div style={{ display: 'inline' }}>{' '}/{' '}{data[exercise].reps}</div>}</h1>
      </div>
      <div className="circle">
        <span>Speed</span>
        <h1>{speed} R/S</h1>
      </div>
      <div className="reset">
        <h1 style={{ cursor: 'pointer' }} id="reset"
          onClick={() => {
            setRep(0)
            setSpeed(0)
            setCompleted(false)
            setStart(false)
          }}>Reset</h1>
      </div>
    </div>
  );
};

export default Right;
