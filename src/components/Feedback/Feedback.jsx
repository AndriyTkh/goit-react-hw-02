export default function Feedback({ data: { good, neutral, bad }, total }) {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {Math.round((good / total) * 100)}%</p>
    </div>
  );
}
