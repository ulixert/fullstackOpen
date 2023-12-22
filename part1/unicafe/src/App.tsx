import { useState } from 'react';

import { Feedbacks } from '@/components/Feedbacks.tsx';
import { Statistics } from '@/components/Statistics.tsx';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Feedbacks
        onGood={() => setGood(good + 1)}
        onNeutral={() => setNeutral(neutral + 1)}
        onBad={() => setBad(bad + 1)}
      />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
}

export default App;
