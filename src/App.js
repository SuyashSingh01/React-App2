// src/App.js
import React, { useState } from 'react';
import Child1 from './components/Child1';
import Child2 from './components/Child2';
import Color from './components/Color';

const Parent = () => {
  const [money, setMoney] = useState(0);

  const incrementMoney = () => setMoney(money + 1000);
  const decrementMoney = () => setMoney(money - 500);

  return (
    <>
    <div>
      <h1>Q-1. Money</h1>
      <h2>{money}</h2>
      <Child1 incrementMoney={incrementMoney}/>
      <Child2 decrementMoney={decrementMoney} />
    </div>
    <div>
      <h1>Q-2. ColorPlatte </h1>
      <Color/>
    </div>
    </>
  );
};

export default Parent;

