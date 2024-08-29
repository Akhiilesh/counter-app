export default function Title({ locked }) {
  return (
    <h1 className="title">
      {locked ? (
        <span>
          Limit Reached! Pro for <b>&gt;5</b>{" "}
        </span>
      ) : (
        "Fancy Counter"
      )}
    </h1>
  );
}
