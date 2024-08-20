import { useState } from "react";

export default function Count() {
  const [count, setCount] = useState(4);

  return (
    <p
      onClick={() => {
        setCount(count + 1);
      }}
      className="count"
    >
      {count}
    </p>
  );
}
