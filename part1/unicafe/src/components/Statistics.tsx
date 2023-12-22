import { StatisticLine } from './StatisticLine.tsx';

type StatisticsProps = {
  good: number;
  neutral: number;
  bad: number;
};

export function Statistics({ good, neutral, bad }: StatisticsProps) {
  const all = good + neutral + bad;

  return (
    <div>
      <h2>statistics</h2>
      {all === 0 ? (
        <p>No feedback given</p>
      ) : (
        <table>
          <tbody>
            <StatisticLine text="good" value={good.toString()} />
            <StatisticLine text="neutral" value={neutral.toString()} />
            <StatisticLine text="bad" value={bad.toString()} />
            <StatisticLine text="all" value={all.toString()} />
            <StatisticLine
              text="average"
              value={((good - bad) / all).toFixed(1)}
            />
            <StatisticLine
              text="positive"
              value={`${((good / all) * 100).toFixed(1)} %`}
            />
          </tbody>
        </table>
      )}
    </div>
  );
}
