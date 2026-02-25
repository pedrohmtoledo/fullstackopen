const SingleCountry = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>Capital: {props.capital}</p>
      <p>Area: {props.area}</p>
      <h2>Languages</h2>
      <ul>
        {props.languages.map((language) => (
          <li>{language}</li>
        ))}
      </ul>
      <img src={props.flags}></img>
    </div>
  );
};

export default SingleCountry;
