import { useState } from "react";

const Head = (props) => <h1>{props.text}</h1>;

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);
const StatisticLine = (props) => {
  return (
    <p>
      {props.text} {props.value}
    </p>
  );
};

const Statistics = (props) => {
  if (props.allClicks === 0) {
    return <div>No feedback given</div>;
  }
  return (
    <div>
      <StatisticLine text="Good: " value={props.valueDisplay1} />
      <StatisticLine text="Neutral: " value={props.valueDisplay2} />
      <StatisticLine text="Bad: " value={props.valueDisplay3} />
      <StatisticLine text="Average: " value={props.valueDisplay4} />
      <StatisticLine text="Positive: " value={props.valueDisplay5} />
    </div>
  );
};

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [allClicks, setAllClicks] = useState(0);

  const setToStatisc = (value, set, allClicks, setAllClicks) => {
    setAllClicks(allClicks + 1);
    set(value + 1);
  };

  const average = (good, neutral, bad) => {
    let total = good + neutral + bad;
    const totalDiv = () => {
      let valor = total / 3;
      return valor;
    };
    return totalDiv();
  };

  const percentage = (good, neutral, bad) => {
    let total = good + neutral + bad; 
    const percent = () => {
      let valor = (good * 100) / total;
      let roundValor = Math.ceil(valor);
      return roundValor + "%";
    };
    return percent();
  };

  return (
    <div>
      <Head text="Give Feedback" />

      <Button
        handleClick={() => setToStatisc(good, setGood, allClicks, setAllClicks)}
        text="Good"
      />
      <Button
        handleClick={() =>
          setToStatisc(neutral, setNeutral, allClicks, setAllClicks)
        }
        text="Neutral"
      />
      <Button
        handleClick={() => setToStatisc(bad, setBad, allClicks, setAllClicks)}
        text="Bad"
      />

      <Head text="Statiscs" />

      <Statistics
        allClicks={allClicks}
        valueDisplay1={good}
        valueDisplay2={neutral}
        valueDisplay3={bad}
        valueDisplay4={average(good, neutral, bad)}
        valueDisplay5={percentage(good, neutral, bad)}
      />
    </div>
  );
};

export default App;
