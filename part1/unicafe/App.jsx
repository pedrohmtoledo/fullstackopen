import { useState } from 'react';

const Display = ({ text, value }) => {
  console.log(text);
  return (
    <p>
      {text}: {value}
    </p>
  );
};

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;
const App = () => {
  console.log('test');
  const [clicks, setClicks] = useState({ good: 0, neutral: 0, bad: 0 });
  const [score, setScore] = useState(0);

  const handleGoodClick = () => {
    const updatedGood = clicks.good + 1;
    setScore(score + 1);
    setClicks({ ...clicks, good: updatedGood });
  };
  const handleNeutralClick = () => {
    const updatedNeutral = clicks.neutral + 1;
    setClicks({ ...clicks, neutral: updatedNeutral });
  };
  const handleBadClick = () => {
    const updatedBad = clicks.bad + 1;
    console.log('2');
    setScore(score - 1);
    setClicks({ ...clicks, bad: updatedBad });
  };

  const handleAverage = () => {
    const average = score / (clicks.good + clicks.bad + clicks.neutral);
    console.log(average);
    return average;
  };

  return (
    <div>
      <p>Give feedback</p>
      <Button onClick={handleGoodClick} text={'good'} />
      <Button onClick={handleNeutralClick} text={'neutral'} />
      <Button onClick={handleBadClick} text={'bad'} />
      <p>Statistics</p>
      <Display text={'good'} value={clicks.good} />
      <Display text={'neutral'} value={clicks.neutral} />
      <Display text={'d'} value={clicks.bad} />
      <Display text={'average'} value={'2'} />
    </div>
  );
};
export default App;
