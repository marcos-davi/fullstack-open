const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Contents = ({ parts }) => {
  return (
    <div>
      {parts.map(item =>
        <p key={item.name}>{item.name} {item.exercises}</p>)}
    </div>
  )
}

const Total = ({ parts }) => {
  
  return (
    <div>
    <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[1].exercises}</p>
    </div>
    
  )
}

const App = () => {

  const course = 'Half Stack application development'

  const parts = [{
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
  }]




 
  return (
    <div>
      <Header course={course} />
      <Contents parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App