export default function Title({ locked }) {
  return (
    <h1 className="title">
      {locked ? <span>Limit! Reached Pro for &gt;5</span> : "Fancy Counter"}
    </h1>
  );
}
