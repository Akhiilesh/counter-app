import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function CountButton({ setCount, type, locked }) {
  const handleClick = () => {
    setCount((prev) => {
      if (type === "minus") {
        const newCount = prev - 1;
        if (newCount < 0) {
          return 0;
        } else {
          return newCount;
        }
      } else {
        const newCount = prev + 1;
        if (newCount > 5) {
          return 5;
        } else {
          return newCount;
        }
      }
    });
  };

  return (
    <div className="button-container">
      <button disabled={locked} onClick={handleClick} className="count-btn">
        {type === "plus" ? (
          <PlusIcon className="count-btn-icon" />
        ) : (
          <MinusIcon className="count-btn-icon" />
        )}
      </button>
    </div>
  );
}
