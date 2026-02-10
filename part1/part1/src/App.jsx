const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  );
};

const App = () => {
  const friends = ['Peter', 'des'];
  return (
    <>
      <p>{friends}</p>
      <p>{friends}</p>
    </>
  );
};

export default App;
