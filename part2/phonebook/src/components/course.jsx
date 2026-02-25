const Header = (props) => <h1>{props.course}</h1>;

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  );
};
const Content = (props) => {
  return (
    <div>
      {props.course.parts.map((item) => (
        <Part key={item.exercises} part={item} />
      ))}
    </div>
  );
};

const Total = (props) => {
  const total = props.course.parts.reduce(
    (acc, curr) => acc + curr.exercises,
    0
  );

  return <p>Number of exercises {total}</p>;
};

const All = (props) => {
  const { course } = props;

  return (
    <div>
      <Header course={course.name} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

const Course = (props) => {
  const { courses } = props;
  return (
    <div>
      {courses.map((course) => (
        <All key={course.id} course={course} />
      ))}
    </div>
  );
};

export default Course;
