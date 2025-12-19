import React, { useState, useEffect } from 'react';

const Hello = ({ name = "Stranger", age }) => {
  const anAdult = parseInt(age) >= 18 ? "an ADULT" : "a MINOR";

  return <p>Hello, {name}!, you are {anAdult}</p>;
}


const App = () => {
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
    <div>
      <h3>Welcome to Vite + React! (at {time.toLocaleTimeString('en-US', { hour12: true })})</h3>
      <Hello name='George' age="41" />
      <Hello name='Daisy' age={35} />
      <Hello name='Matt' age="13" />
      <Hello />
    </div>
  );
}

export default App
