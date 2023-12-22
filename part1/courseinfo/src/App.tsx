type HeaderProps = {
  course: string;
};

function Header({ course }: HeaderProps) {
  return <h1>{course}</h1>;
}

type ContentProps = {
  parts: PartType[];
};

function Content({ parts }: ContentProps) {
  return parts.map((part) => (
    <Part name={part.name} exercise={part.exercises} key={part.name} />
  ));
}

type PartProps = {
  name: string;
  exercise: number;
};

function Part({ name, exercise }: PartProps) {
  return (
    <p>
      {name} {exercise}
    </p>
  );
}

type TotalProps = {
  parts: PartType[];
};

function Total({ parts }: TotalProps) {
  return (
    <p>
      Number of exercises {parts.reduce((sum, cur) => sum + cur.exercises, 0)}
    </p>
  );
}

type PartType = {
  name: string;
  exercises: number;
};

function App() {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
}

export default App;

