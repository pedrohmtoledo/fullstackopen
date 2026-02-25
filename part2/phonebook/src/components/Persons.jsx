import Name from './Name';
const Persons = (props) => {
  return (
    <div>
      <ul>
        {props.persons
          .filter((person) => {
            if (props.filter) {
              return person.name.toLowerCase() === props.filter.toLowerCase();
            } else {
              return person;
            }
          })
          .map((item) => (
            <Name
              key={item.id}
              name={item.name}
              number={item.number}
              deletePerson={() => props.deletePerson(item.id)}
            />
          ))}
      </ul>
    </div>
  );
};

export default Persons;
