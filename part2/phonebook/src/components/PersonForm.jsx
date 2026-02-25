const PersonForm = (props) => {
  return (
    <form onSubmit={props.submit}>
      <h2>add a new</h2>
      <div>
        name: <input value={props.newName} onChange={props.nameChange} />
      </div>
      <div>
        {' '}
        number: <input value={props.newNumber} onChange={props.numberChange} />
      </div>

      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
