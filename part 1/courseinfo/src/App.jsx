/*
Unfortunately, the entire application is in the same component. Refactor the code so that it consists of three new components: Header, Content, and Total. All data still resides in the App component, which passes the necessary data to each component using props. Header takes care of rendering the name of the course, Content renders the parts and their number of exercises and Total renders the total number of exercises.

Define the new components in the file App.jsx.
*/

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <p>{props.part}: {props.exercises}</p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} exercises={props.val1} />
      <Part part={props.part2} exercises={props.val2} />
      <Part part={props.part3} exercises={props.val3} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <Part part="Number of exercises" exercises={props.totalExercises} />
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  return (
    <div>
      <Header title = {course}/>
      <Content part1={parts[0].name} val1={parts[0].exercises} 
      part2={parts[1].name} val2={parts[1].exercises} 
      part3={parts[2].name} val3={parts[2].exercises}/>
      <Total totalExercises={parts[0].exercises + parts[1].exercises + parts[2].exercises} />
    </div>
  )
}

export default App