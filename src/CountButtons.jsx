import { MinusCircledIcon, PlusCircledIcon } from "@radix-ui/react-icons";

export default function CountButtons({ setCount, type, locked }) {
  const handleClick = (event) => {
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
