import './App.css';
import ProgressBar from "@ramonak/react-progress-bar";
import { useState } from 'react';

function App() {

  const calc= seconds => (seconds/315360).toFixed(6);

  function days_passed(dt) {
    var current = new Date(dt.getTime());
    var previous = new Date(dt.getFullYear(), 0, 1);
  
    return Math.ceil((current - previous + 1) / 86400000);
  }

  let daysPassed= days_passed(new Date())-1;
  let temp= daysPassed*86400;
  temp+=((new Date()).getHours())*(3600);
  temp+=((new Date()).getMinutes())*(60);
  temp+=((new Date()).getSeconds());
  const [seconds, setSeconds] = useState(temp);

  function GetTime() {
    setSeconds(seconds+1);
  }

  setTimeout(() => {
      GetTime();
  }, 1000);
  return (
    <div className="App">
      <h1>Raj</h1>
      <div>
        <ProgressBar completed={calc(seconds)} height='50px'/>
        <h1>Year 2023 is {calc(seconds)}% completed</h1>
      </div>
    </div>
  );
}

export default App;
