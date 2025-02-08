import clsx from "clsx"
import { useEffect, type FC } from "react"
import { useNavigate } from "react-router"
import triunfo from "../assets/musics/triunfo.mp3"

const VentanaGanador: FC<{
  nombreGanador: string
}> = (props) => {
  const navigate = useNavigate()
  const audioTriunfo = new Audio(triunfo)

  useEffect(() => {
    audioTriunfo.play()
    setTimeout(() => {
      navigate("/")
      location.reload()
    }, 8500)
  })

  return (
    <>
      <div
        className={clsx(
          "absolute top-0 left-0 h-full w-full bg-[rgb(0,0,0,0.8)]"
        )}
      />
      <article
        className={clsx(
          "absolute top-1/2 left-0 h-[370px] w-full -translate-y-1/2 px-2",
          "bg-gradient-to-br from-zinc-800 from-10% via-sky-500 via-50% to-zinc-800 to-90%",
          "flex flex-wrap items-center justify-center py-24 max-[710px]:h-[270px] max-[710px]:py-19"
        )}
      >
        <h2
          className={clsx(
            "self-start text-8xl text-black italic",
            "max-[710px]:text-5xl"
          )}
        >
          Ganador
        </h2>
        <h2
          className={clsx(
            "self-end text-9xl font-bold text-white italic",
            "max-[710px]:text-6xl"
          )}
        >
          {props.nombreGanador}
        </h2>
      </article>
    </>
  )
}

export default VentanaGanador
