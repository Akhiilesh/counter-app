import { MinusCircledIcon, PlusCircledIcon } from "@radix-ui/react-icons";

export default function CountButtons() {
  return (
    <div className="button-container">
      <button className="count-btn">
        <MinusCircledIcon className="count-btn-icon" />
      </button>
      <button className="count-btn">
        <PlusCircledIcon className="count-btn-icon" />
      </button>
    </div>
  );
}
