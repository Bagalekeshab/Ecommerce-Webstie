
import React from 'react';

const Rating = ({ value, maxValue }) => {
  const stars = [];
  for (let i = 1; i <= maxValue; i++) {
    stars.push(
      <span
        key={i}
        style={{ color: i <= value ? 'blue' : 'lightgrey', cursor: 'pointer' }}
      >
        ★
      </span>
    );
  }
  return <div>{stars}</div>;
};

export default Rating;