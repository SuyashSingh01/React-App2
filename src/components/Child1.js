import React from 'react';

const Child1 = ({ incrementMoney }) => {
    return (
        <div>
            <button onClick={incrementMoney}>Increment by 1000</button>
        </div>
    );
};

export default Child1;
