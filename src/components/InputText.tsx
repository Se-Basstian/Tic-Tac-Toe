import clsx from "clsx"
import type { ChangeEvent, FC } from "react"
import { useState, useEffect } from "react"
import audioKeydown from "../assets/musics/teclado-mecanico.mp3"

type Props = {
  titulo: string
  setValorTexto: (value: string) => void
  valorTexto: string
}
const InputText: FC<Props> = ({ titulo, setValorTexto, valorTexto }) => {
  const [tituloEnFoco, setTituloEnFoco] = useState(false)
  const [inputDisabled, setInputDisabled] = useState(false)

  const audiokeyDown = new Audio(audioKeydown)

  useEffect(() => {
    if (valorTexto === "") {
      setTituloEnFoco(false)
    } else {
      setTituloEnFoco(true)
    }

    if (valorTexto === "Máquina") {
      setInputDisabled(true)
    } else {
      setInputDisabled(false)
    }
  }, [valorTexto])

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
  const handleKeyDown = () => {
    audiokeyDown.play()
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
        value={valorTexto}
        className={clsx("h-8 rounded-sm bg-white outline-none", "p-1")}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChangeInput}
        disabled={inputDisabled}
        onKeyDown={handleKeyDown}
      />
    </label>
  )
}

export default InputText
