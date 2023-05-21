import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Home = () => {
  const counter = useSelector((state) => state);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  console.log(counter);

  return (
    <div>
      <h2>Player Name: {counter.player.name}</h2>
      <h2>Player Age: {counter.player.age}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Home;
