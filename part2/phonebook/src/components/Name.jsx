const Name = (props) => {
  return (
    <li>
      {props.name} {props.number}{' '}
      <button onClick={props.deletePerson}>Delete</button>
    </li>
  );
};

export default Name;
