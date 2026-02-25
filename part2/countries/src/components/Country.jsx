const Country = (props) => {
  return (
    <div>
      {props.country}
      <button onClick={props.showButton}>show</button>
    </div>
  );
};

export default Country;
