import clsx from "clsx"
import type { FC } from "react"
import imgReiniciar from "../assets/images/replay.png"
import { useNavigate } from "react-router"

type Props = {
  turno: string
}
const BarraOpcs: FC<Props> = ({ turno }) => {
  const navigate = useNavigate()

  const handleButtonReiniciar = () => {
    navigate("/")
    location.reload()
  }

  return (
    <article
      className={clsx(
        "flex w-[400px] justify-between",
        "border-b-2 border-zinc-500 pb-2"
      )}
    >
      <section className="flex">
        <p className="text-3xl font-bold text-yellow-300">X</p>
        <p className="text-3xl font-bold text-blue-300">O</p>
      </section>
      <section
        className={clsx(
          "flex gap-2 rounded-lg border-2 border-zinc-400 px-2 py-1",
          "h-fit"
        )}
      >
        <p className="font-bold text-white uppercase">Turno</p>
        <p className="w-fit bg-zinc-500 ps-1 pe-6 text-white">{turno}</p>
      </section>

      <button
        className={clsx("h-fit w-fit rounded-lg bg-purple-600 p-2")}
        type="button"
        onClick={handleButtonReiniciar}
      >
        <img
          className="h-6 w-6 transition duration-500 ease-out hover:rotate-180"
          src={imgReiniciar}
          alt="Botón reiniciar"
        />
      </button>
    </article>
  )
}

export default BarraOpcs
