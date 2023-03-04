const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>{props.part} {props.exercises}</p>
  )
  
}

const Content = (props) => {
  const parts = props.content[0]
  const exercises = props.content[1]
  return(
    <div>
      <Part part={parts[0]} exercises={exercises[0]} />
      <Part part={parts[1]} exercises={exercises[1]} />
      <Part part={parts[2]} exercises={exercises[2]} />
    </div>
  )
}

const Total = (props) => {
  return(
    <p>Number of exercises {props.total}</p>
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
      <Header course={course} /> 
      <Content content={[[part1,part2,part3],[exercises1,exercises2,exercises3]]} />
      <Total total={exercises1+exercises2+exercises3}/>
    </div>
  )
}

export default App