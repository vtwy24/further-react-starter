
function TempCard({temperature, increaseTemperature, decreaseTemperature}) {  
  return (
    <>
      <div className="app">
        <h1>Temperature</h1>
        <div className="temperature">{temperature}°C</div>
        <div className="buttons">
          <button onClick={decreaseTemperature}>Decrease</button>
          <button onClick={increaseTemperature}>Increase</button>
        </div>
      </div>
    </>
  );
}

export default TempCard;
