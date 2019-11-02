import React from 'react';
import './App.css';


const StateComponent = props => {
  const [count, setCount] = React.useState(props.count);
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count => count + props.value)}>
        Increment
      </button>
      <button onClick={() => setCount(count => count - props.value)}>
        Decrement
      </button>
    </div>
  );
};

export const StateComponentContainer = () => {
  return <StateComponent count={10} value={5} />;
};

export default StateComponent;