import clsx from "clsx"
import type { FC, ReactNode } from "react"
import hoverBoton from "../assets/musics/hover-boton.mp3"
import clickBoton from "../assets/musics/click-botn.mp3"

const Button: FC<{
  children?: ReactNode
  color?: "azul" | "verde" | "amarrillo"
  onClick?: () => void
}> = (props) => {
  const audioButtonHover = new Audio(hoverBoton)
  const audioButtonClick = new Audio(clickBoton)

  const handleMouseEnter = () => {
    audioButtonHover.play()
  }
  const handleClick = () => {
    audioButtonClick.play()
    if (props.onClick) props.onClick()
  }

  return (
    <button
      type="button"
      className={clsx(
        "rounded-sm px-2 py-3 text-xl font-bold text-white",
        "transition duration-200 ease-in-out",
        "uppercase hover:scale-105",
        {
          "bg-sky-600": props.color === undefined,
          "bg-green-400": props.color === "verde",
          "bg-blue-300": props.color === "azul",
          "bg-yellow-500": props.color === "amarrillo",
        }
      )}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
    >
      {props.children}
    </button>
  )
}

export default Button
