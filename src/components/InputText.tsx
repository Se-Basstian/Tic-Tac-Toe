import clsx from "clsx"
import { type ChangeEvent, useState, type FC } from "react"

type Props = {
  titulo: string
  setValorTexto: (value: string) => void
  valorTexto: string
}
const InputText: FC<Props> = ({ titulo, setValorTexto, valorTexto }) => {
  const [tituloEnFoco, setTituloEnFoco] = useState(false)

  const handleFocus = () => {
    setTituloEnFoco(true)
  }
  const handleBlur = () => {
    if (valorTexto === "") {
      setTituloEnFoco(false)
    }
  }
  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (setValorTexto) {
      setValorTexto(e.target.value)
    }
  }

  return (
    <label className={clsx("relative")}>
      <b
        className={clsx(
          "absolute left-1 uppercase",
          "text-gray-500",
          "transition duration-400 ease-linear",
          {
            "top-1/2 -translate-y-1/2": !tituloEnFoco,
            "-top-5 text-sm text-white": tituloEnFoco,
          }
        )}
      >
        {titulo}
      </b>
      <input
        type="text"
        required
        className={clsx("h-8 rounded-sm bg-white outline-none", "p-1")}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChangeInput}
      />
    </label>
  )
}

export default InputText
