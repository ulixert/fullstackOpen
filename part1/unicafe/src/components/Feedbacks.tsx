import { Button } from './Button.tsx';

type FeedbacksProps = {
  onGood: () => void;
  onNeutral: () => void;
  onBad: () => void;
};

export function Feedbacks({ onGood, onBad, onNeutral }: FeedbacksProps) {
  return (
    <div>
      <h2>give feedback</h2>
      <Button onClick={onGood}>good</Button>
      <Button onClick={onNeutral}>neutral</Button>
      <Button onClick={onBad}>bad</Button>
    </div>
  );
}
