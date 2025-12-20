import React from 'react'

const Header = ({ course }) => {
  return (<h1>{course}</h1>);
};

const Part = ({ part, exercises }) => {
  return (<p>{part} {exercises}</p>);
};

const Content = ({ partExercises }) => {
  return (
    <>
      <Part part={partExercises[0].part} exercises={partExercises[0].exercises} />
      <Part part={partExercises[1].part} exercises={partExercises[1].exercises} />
      <Part part={partExercises[2].part} exercises={partExercises[2].exercises} />
    </>
  )
}

const Total = ({ total }) => {
  return (<p>Number of exercises {total}</p>);
};

const App = () => {
  const course = 'Half Stack application development'
  const partExercises = [
    { part: 'Fundamentals of React', exercises: 10 },
    { part: 'Using props to pass data', exercises: 7 },
    { part: 'State of a component', exercises: 14 }
  ];

  return (
    <div>
      <Header course={course} />
      <Content partExercises={partExercises} />
      <Total total={partExercises[0].exercises + partExercises[1].exercises + partExercises[2].exercises} />
    </div>
  )
}

export default App