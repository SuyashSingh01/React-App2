
import React from 'react';

const Child2 = ({ decrementMoney }) => {
    return (
        <div>
            <button onClick={decrementMoney}>Decrement by 500</button>
        </div>
    );
};

export default Child2;