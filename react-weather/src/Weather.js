function Weather({ data }) {
  const { location, current } = data;
  return (
    <div>
      <h2>
        Current Weather for {location?.name}, {location?.region}
      </h2>
      <div>
        <strong>Temperature:</strong> {current?.temp_c}°C ({current?.temp_f}°F)
      </div>
      <div>
        <strong>Feels like:</strong> {current?.feelslike_c}°C (
        {current?.feelslike_f}°F)
      </div>
      <div>
        <strong>Conditions:</strong> {current?.condition?.text}
      </div>
      <div>
        <img src={current?.condition?.icon} alt={current?.condition?.text} />
      </div>
    </div>
  );
}

export default Weather;
