import clsx from "clsx";
import type { FC, ReactNode } from "react";

type Props = {
  children?: ReactNode;
  color?: "azul" | "verde" | "amarrillo";
};
const Button: FC<Props> = ({ children, color }) => {
  return (
    <button
      type="button"
      className={clsx(
        "text-white text-xl py-3 px-2 rounded-sm  font-bold",
        "transition duration-200 ease-in-out",
        "uppercase hover:scale-105",
        {
          "bg-sky-600": color === undefined,
          "bg-green-400": color === "verde",
          "bg-blue-300": color === "azul",
          "bg-yellow-500": color === "amarrillo",
        },
      )}
    >
      {children}
    </button>
  );
};

export default Button;
