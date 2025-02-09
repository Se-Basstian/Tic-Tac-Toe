const valorDeArregloAleatorio = (
  arreglo: (number | string)[]
): { valor: number | string; indice: number } => {
  const indiceRandon = Math.floor(Math.random() * arreglo.length)

  return {
    valor: arreglo[indiceRandon],
    indice: indiceRandon,
  }
}

const valorDeArregloNoRepetido = (arreglo: (number | string)[]): number => {
  for (let i = 0; i < arreglo.length; i++) {
    const valorTemporal = valorDeArregloAleatorio(arreglo)

    if (valorTemporal.valor !== "X" && valorTemporal.valor !== "O") {
      return valorTemporal.indice
    }
  }

  return -1
}

export { valorDeArregloNoRepetido }
