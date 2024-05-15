import { useState } from "react";

const Head = (props) => <h1>{props.text}</h1>;

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);
const Display = (props) => (
  <p>
    {props.text} {props.value}
  </p>
);

const Statistics = (props) => (
  <div>
    <Head text={props.textHead1} />

    <Button handleClick={props.handle1} text={props.textButton1} />
    <Button handleClick={props.handle2} text={props.textButton2} />
    <Button handleClick={props.handle3} text={props.textButton3} />

    <Head text={props.textHead2} />

    <Display text={props.textDisplay1} value={props.valueDisplay1} />
    <Display text={props.textDisplay2} value={props.valueDisplay2} />
    <Display text={props.textDisplay3} value={props.valueDisplay3} />
    <Display text={props.textDisplay4} value={props.valueDisplay4} />
    <Display text={props.textDisplay5} value={props.valueDisplay5} />
  </div>
);

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const setToStatisc = (value, set) => {
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
    let total = good + 0.01 + neutral + bad; // el + 0.01 es para no dejar vacio el objeto y salir el valor naN
    const percent = () => {
      let valor = (good * 100) / total;
      let roundValor = Math.ceil(valor);
      return roundValor + "%";
    };
    return percent();
  };

  return (
    <div>
      <Statistics
        textHead1="Give Feedback"
        handle1={() => setToStatisc(good, setGood)}
        textButton1="Good"
        textDisplay1="Good: "
        valueDisplay1={good}
        textHead2="Statiscs"
        handle2={() => setToStatisc(neutral, setNeutral)}
        textButton2="Neutral"
        textDisplay2="Neutral: "
        valueDisplay2={neutral}
        handle3={() => setToStatisc(bad, setBad)}
        textButton3="Bad"
        textDisplay3="Bad: "
        valueDisplay3={bad}
        textDisplay4="Average: "
        valueDisplay4={average(good, neutral, bad)}
        textDisplay5="Positive: "
        valueDisplay5={percentage(good, neutral, bad)} />

    </div>
  );
};

export default App;
