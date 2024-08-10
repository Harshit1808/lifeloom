import React, { useState } from 'react';

function NumberInputWithButtons() {
  const [value, setValue] = useState(0);

  const increment = () => {
    setValue(prevValue => prevValue + 1);
  };

  const decrement = () => {
    setValue(prevValue => prevValue - 1);
  };

  return (
    <div>
      <button onClick={decrement}>-</button>
      <input 
        type="number" 
        value={value} 
        onChange={e => setValue(parseInt(e.target.value) || 0)} 
      />
      <button onClick={increment}>+</button>
    </div>
  );
}

export default NumberInputWithButtons;
