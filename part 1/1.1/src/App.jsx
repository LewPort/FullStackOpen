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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header title = {course}/>
      <Content part1={part1} val1={exercises1} part2={part2} val2={exercises2} part3={part3} val3={exercises3}/>
      <Total totalExercises={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App