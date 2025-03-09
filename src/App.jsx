import { useState } from 'react';
import './css/App.css';
import AverageTempCard from './components/AverageTempCard';
import TempCard from './components/TempCard';
import { data } from './data.js';

function App() {
  // DON'T EDIT BELOW
  const [temperature, setTemperature] = useState(20);
  const [bgCol, setBgCol] = useState([122, 122, 122]);
  function increaseTemperature() {
    setTemperature((prevTemp) => prevTemp + 1);
    setBgCol((prevCol) => {
      return [prevCol[0] + 10, prevCol[1], prevCol[2] - 10];
    });
  }
  function decreaseTemperature() {
    setTemperature((prevTemp) => prevTemp - 1);
    setBgCol((prevCol) => {
      return [prevCol[0] - 10, prevCol[1], prevCol[2] + 10];
    });
  }
  // DON'T EDIT ABOVE

  return (
    <div className="screen" style={{ backgroundColor: `rgb(${bgCol[0]}, ${bgCol[1]}, ${bgCol[2]})` }}>
      <AverageTempCard data={data} />
      <TempCard
        temperature={temperature}
        increaseTemperature={increaseTemperature}
        decreaseTemperature={decreaseTemperature}
      />
    </div>
  );
}

export default App;
