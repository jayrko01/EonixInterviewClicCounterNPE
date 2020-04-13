import React from 'react';

function Home({
  onIncrement,
  onDecrement,
  counter,
}) {
  return (
    <div>
      <button onClick={onIncrement}>
        Vous avez cliqué {counter} fois
      </button>
      <button onClick={onDecrement}>
        Vous enlevez un clic
      </button>
    </div>
  );
};

export default Home;
