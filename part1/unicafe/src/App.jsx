import { useState } from 'react';

const Display = ({ text, value }) => {
  return (
    <p>
      {text}: {value}
    </p>
  );
};

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Statistics = ({ clicks, total, average, positive }) => {
  if (total === 0) {
    return (
      <div>
        <h2>Statistics</h2>
        <p>No feedback given</p>
      </div>
    );
  }
  return (
    <div>
      <h2>Statistics</h2>
      <table>
        <StatisticLine text={'good'} value={clicks.good} />
        <StatisticLine text={'bad'} value={clicks.bad} />
        <StatisticLine text={'neutral'} value={clicks.neutral} />
        <StatisticLine text={'all'} value={total} />
        <StatisticLine text={'average'} value={average} />
        <StatisticLine text={'positive'} value={positive} />
      </table>
    </div>
  );
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};
const App = () => {
  const [clicks, setClicks] = useState({ good: 0, neutral: 0, bad: 0 });
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState('');

  const handleGoodClick = () => {
    const updatedGood = clicks.good + 1;
    const updatedScore = score + 1;
    const updatedTotal = total + 1;
    const updatedPositive = (updatedGood / updatedTotal) * 100;
    allSetter(updatedScore, updatedTotal, updatedPositive);
    setClicks({ ...clicks, good: updatedGood });
  };
  const handleNeutralClick = () => {
    const updatedNeutral = clicks.neutral + 1;
    const updatedTotal = total + 1;
    const updatedPositive = (clicks.good / updatedTotal) * 100;
    allSetter(score, updatedTotal, updatedPositive);
    setClicks({ ...clicks, neutral: updatedNeutral });
  };
  const handleBadClick = () => {
    const updatedBad = clicks.bad + 1;
    const updatedScore = score - 1;
    const updatedTotal = total + 1;
    const updatedPositive = (clicks.good / updatedTotal) * 100;
    allSetter(updatedScore, updatedTotal, updatedPositive);
    setClicks({ ...clicks, bad: updatedBad });
  };

  const allSetter = (updatedScore, updatedTotal, updatedPositive) => {
    setScore(updatedScore);
    setTotal(updatedTotal);
    setPositive(`${updatedPositive}%`);
    getAverage(updatedTotal, updatedScore);
  };

  const getAverage = (total, score) => {
    const updatedAverage = score / total;
    setAverage(updatedAverage);
  };

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={handleGoodClick} text={'good'} />
      <Button onClick={handleNeutralClick} text={'neutral'} />
      <Button onClick={handleBadClick} text={'bad'} />
      <Statistics
        clicks={clicks}
        total={total}
        average={average}
        positive={positive}
      />
    </div>
  );
};
export default App;
