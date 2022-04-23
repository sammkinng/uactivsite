import React from 'react';
import '../Styles/Left.css';
import Card from './Card';
import Data from '../Assets/Json/Text';

const Left = () => {
  return (
    <div className="left">
      <h2 className={'top'}>Select an exercise</h2>

      {Data.map((item, index) => {
        return (
          <Card
            id={index}
            key={index}
            text={item.text}
            image={item.image}
            description={item.description}
            audio={item.audio}
          />
        );
      })}
    </div>
  );
};

export default Left;
