import "./style.scss";

function Weather(props) {
  const { temperature } = props;
  const { weather } = props;
  console.log();
  const { weatherDescription } = props;
  return (
    <div className="weather-box">
      <div className="temp">{Math.round(temperature)}°C</div>
      <div className="weather">{weather}</div>
      <div className="weatherDescription">{weatherDescription}</div>
    </div>
  );
}

export default Weather;
