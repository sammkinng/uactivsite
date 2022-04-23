import React, { useContext } from 'react';
import '../Styles/InitailModal.css';
import Win from '../Assets/images/win.png';
import { Context } from '../App';
import data from '../Assets/Json/Text';

const Modal2 = () => {
  const {
    exercise,
    setStart,
    completed
  } = useContext(Context)
  return completed &&
    <div className='screen'>
      <div className="modal2" style={{ background: '#f5f5f5' }}>
        <div className="modal-mid">
          <img src={Win} alt='modal2' />
          <p>Bravo for completing {data[exercise].text} workout!</p>
          <p>
            Try another workout from the menu on the left or hit the "reset"
            button to redo this workout.{' '}
          </p>
        </div>
        <div className='btns'>
          <div className='btn1' onClick={() => {
            document.getElementById('reset').click()
          }}>Thank you !</div>
          <div className='btn2' onClick={() => {
            document.getElementById('reset').click()
            setStart(true)
          }}>Go again</div>
        </div>
      </div>
    </div>
};

export default Modal2;
