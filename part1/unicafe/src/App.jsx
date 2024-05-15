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
const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const setToStatisc = (value, set) => {
    set(value + 1);
  };

  return (
    <div>
      <Head text="Give Feedback" />

      <Button handleClick={() => setToStatisc(good, setGood)} text="Good" />
      <Button
        handleClick={() => setToStatisc(neutral, setNeutral)}
        text="Neutral"
      />
      <Button handleClick={() => setToStatisc(bad, setBad)} text="Bad" />

      <Head text="Statics" />

      <Display text="Good: " value={good} />
      <Display text="Neutral: " value={neutral} />
      <Display text="Bad: " value={bad} />
    </div>
  );
};

export default App;
