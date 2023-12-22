type StatisticLineProps = {
  text: string;
  value: string;
};

export function StatisticLine({ text, value }: StatisticLineProps) {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
}
