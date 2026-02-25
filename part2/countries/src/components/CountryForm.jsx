const CountryForm = (props) => {
  return (
    <div>
      <form>
        find countries
        <input onChange={props.changeHandler} />
      </form>
    </div>
  );
};

export default CountryForm;
