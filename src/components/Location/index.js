import "./style.scss";
function Location(props) {
  const { location } = props;
  const { country } = props;
  return (
    <div className="location-box">
      <div className="location">
        {location}, {country}
      </div>
    </div>
  );
}

export default Location;
