import React, {useState} from 'react';

export function App() {
  const [counter, setCounter] = useState(0);

  return <button type='button' onClick={() => setCounter(x => x + 1)}>ZZZ {counter}!</button>

  // return React.createElement('button', {
  //   type: 'button',
  //   onClick: () => setCounter(x => x + 1),
  // }, `Hello ${counter}!`);
}
