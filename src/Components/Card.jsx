import React, { useContext } from 'react';
import '../Styles/Card.css';
import data from '../Assets/Json/Text';
import Wrapper from './Wrapper';
import { Context } from '../App';


const Card = ({ text, image, description, id, audio }) => {
  const {
    exercise,
    setExercise,
    setModal,
    playing,
    setStart,
    start,
    yesClick
  } = useContext(Context)
  return (
    <Wrapper id={id}>
      <div
        className="card"
        onClick={(e) => {
          if (e.target.className !== 'btnn' && id !== exercise) {
            if (!start) {
              document.getElementById('reset').click()
              setExercise(id)
              if (yesClick.current) {
                document.getElementsByClassName('btnn')[id].click()
                yesClick.current = false
              }
              const doc = document.getElementById(id);
              data.map((item, index) => {
                const ii = document.getElementById(`id` + item.text);
                const ii2 = document.getElementById(`img` + item.text);
                const doc = document.getElementById(index);

                if (ii) {
                  doc.style.flex = '0';
                  ii.style.height = '0px';
                  ii.parentNode.style.background = '#f5f5f5';
                  ii2.style.display = 'none';
                }
                return 0
              });

              const i = document.getElementById(`id` + text);
              const ii2 = document.getElementById(`img` + text);
              if (i) {
                doc.style.flex = '1';
                doc.style.backgroundColor = '#ccf3f1';
                if (i.style.height === '280px') {
                  i.parentNode.style.background = '#f5f5f5';
                  i.style.height = '0px';
                } else {
                  i.style.height = '285px';
                  i.style.transition = 'height 0.2s';
                  ii2.style.display = 'flex';

                  i.parentNode.style.background = '#ccf3f1';
                }
              }
            } else {
              setModal(id)
            }
          }
        }}
      >
        <h3 className={'card-title'}>{text}</h3>
        <img className={'icon'} src={image} alt="Invalid" id={'img' + text} />

        <div
          className="hidden"
          id={`id` + text}
          style={{
            position: 'relative',
          }}
        >
          <h4>{text} instructions:</h4>
          <ul
            style={{
              listStyleType: 'number',
            }}
          >
            {description.map(li => {
              return <li key={li}>{li}</li>;
            })}
          </ul>
          <div className='btnn' onClick={() => {
            if (!start) {
              if (playing.current) {
                playing.current.pause()
                playing.current.currentTime = 0
              }
              audio.play()
              playing.current = audio
              document.getElementById('reset').click()
            }
            setStart(!start)
          }}>
            {!start ? 'Start ' : 'Stop '} Exercise
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Card;
