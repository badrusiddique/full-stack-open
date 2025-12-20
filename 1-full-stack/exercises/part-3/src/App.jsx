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
      <Part part={partExercises[0].name} exercises={partExercises[0].exercises} />
      <Part part={partExercises[1].name} exercises={partExercises[1].exercises} />
      <Part part={partExercises[2].name} exercises={partExercises[2].exercises} />
    </>
  )
}

const Total = ({ total }) => {
  return (<p>Number of exercises {total}</p>);
};

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content partExercises={[part1, part2, part3]} />
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

export default App