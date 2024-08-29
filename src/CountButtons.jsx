import { MinusCircledIcon, PlusCircledIcon } from "@radix-ui/react-icons";

export default function CountButtons({ setCount, type, locked }) {
  const handleClick = (event) => {
    setCount((prev) => {
      if (type === "minus" && prev > 0) {
        return prev - 1;
      } else if (type === "plus") {
        const newCount = prev + 1;
        {
          if (newCount > 5) {
            return 5;
          }
        }
        return prev + 1;
      } else {
        return 0;
      }
    });
    event.currentTarget.blur();
  };

  return (
    <button disabled={locked} onClick={handleClick} className="count-btn">
      {type === "minus" ? (
        <MinusCircledIcon className="count-btn-icon" />
      ) : (
        <PlusCircledIcon className="count-btn-icon" />
      )}
    </button>
  );
}
