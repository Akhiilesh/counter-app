export default function Title({ locked }) {
  return (
    <div className="title">
      <span>
        {locked ? (
          <span>Limit Reached! Pro for &gt;5 </span>
        ) : (
          "Fantasy Counter"
        )}
      </span>
    </div>
  );
}
