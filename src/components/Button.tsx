import clsx from "clsx"
import type { FC, ReactNode } from "react"

type Props = {
    children?: ReactNode
    color?: "azul" | "verde" | "amarrillo"
    onClick?: () => void
}
const Button: FC<Props> = ({ children, color, onClick }) => {
    return (
        <button
            type="button"
            className={clsx(
                "rounded-sm px-2 py-3 text-xl font-bold text-white",
                "transition duration-200 ease-in-out",
                "uppercase hover:scale-105",
                {
                    "bg-sky-600": color === undefined,
                    "bg-green-400": color === "verde",
                    "bg-blue-300": color === "azul",
                    "bg-yellow-500": color === "amarrillo",
                }
            )}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button
