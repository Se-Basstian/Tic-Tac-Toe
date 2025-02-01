import clsx from "clsx";
import { useState, type FC } from "react";

type Props = {
  titulo: string;
};
const InputText: FC<Props> = ({ titulo }) => {
  const [tituloEnFoco, setTituloEnFoco] = useState(false);

  const handleFocus = () => {
    setTituloEnFoco(true);
  };
  const handleBlur = () => {
    setTituloEnFoco(false);
  };

  return (
    <label className={clsx("relative")}>
      <b
        className={clsx(
          "absolute left-1 uppercase",
          "text-gray-500",
          "transition duration-400 ease-linear",
          {
            "top-1/2 -translate-y-1/2": !tituloEnFoco,
            "-top-5 text-white text-sm": tituloEnFoco,
          },
        )}
      >
        {titulo}
      </b>
      <input
        type="text"
        required
        className={clsx("h-8 bg-white rounded-sm outline-none", "p-1")}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </label>
  );
};

export default InputText;
