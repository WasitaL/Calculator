type ButtonProps = {
  text: string;
  isSolid?: boolean;
  onClick: (value: string) => void;
};

export const Button = ({
  text,
  isSolid,
  onClick: handleClick,
}: ButtonProps) => {
  return (
    <button
      className={` ${isSolid ? "solid" : "dark:btn-dark"} ${
        text.toString() === "=" ? "col-span-2" : ""
      } `}
      onClick={() => handleClick(text)}
    >
      {text}
    </button>
  );
};
