import { createContext } from "react";

export const DataContext = createContext(
  {} as {
    jugador: {
      value: "one" | "two";
      setValue: (value: "one" | "two") => void;
    };
  },
);
