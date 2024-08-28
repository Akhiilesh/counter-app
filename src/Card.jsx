import Title from "./Title";
import Count from "./Count";
import ResetButton from "./ResetButton";
import ButtonContainer from "./ButtonContainer";
import { useState } from "react";

export default function Card() {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      {/* <h1 className="flex bg-lime-200 p-3 text-black-600 text-xl  rounded shadow-md">
        Akhiilesh
      </h1> */}
      <Title />
      <Count count={count} />
      <ResetButton setCount={setCount} />
      <ButtonContainer setCount={setCount} />
    </div>
  );
}
