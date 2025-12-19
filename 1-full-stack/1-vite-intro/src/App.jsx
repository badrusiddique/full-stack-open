import React, { useState, useEffect } from 'react';

const Hello = ({ name = "Stranger", age }) => {
  const anAdult = parseInt(age) >= 18 ? "an ADULT" : "a MINOR";

  return <li>Hello, {name}!, you are {anAdult}</li>;
}


const App = () => {
  const friends = [
    { name: 'George', age: 41 },
    { name: 'Daisy', age: 35 },
    { name: 'Matt', age: 13 },
    { },
  ];
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      // update time every second
      setTime(new Date());
    }, 1000);

    // unmount cleanup
    return () => clearInterval(timer);
  }, []);


  return (
    <>
      <h3>Welcome to Vite + React! (at {time.toLocaleTimeString('en-US', { hour12: true })})</h3>
      <ul>
        {
          friends.map(({ name, age }) => (
            <Hello key={name} name={name} age={age} />
          ))
        }
      </ul>
    </>
  );
}

export default App
