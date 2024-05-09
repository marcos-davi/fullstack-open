const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};



const Contents = ({arrayProp}) => {
  return (
    <div>
    {arrayProp.map(item =>
    <p key={item.name}>{item.name} {item.exercises}</p>)}
     
    </div>
  );
};



const Total = (props) => {
  return <p>Number of exercises {props.exercises}</p>;
};

const App = () => {
  const course = "Half Stack application development";

  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];
  
  

  return (
    
    <div>   
    
      <Header course={course} />
      <Contents arrayProp={parts}
      
      
      /*
        part1={parts[0].name}
        part2={parts[1].name}
        part3={parts[2].name}
        exercises1={parts[0].exercises}
        exercises2={parts[1].exercises}
        exercises3={parts[2].exercises}
        */
      />
{console.log(parts)}
      <Total
        exercises={parts[0].exercises + parts[1].exercises + parts[2].exercises}
      />
    </div>
  );
};

export default App;
