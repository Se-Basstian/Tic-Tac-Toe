type Comprobar = (casillas: number[]) => boolean

const porFila: Comprobar = (casillas) => {
  const filasGanadoras = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]

  for (const fila of filasGanadoras) {
    if (
      casillas.includes(fila[0]) &&
      casillas.includes(fila[1]) &&
      casillas.includes(fila[2])
    ) {
      return true
    }
  }

  return false
}

const porColumna: Comprobar = (casillas) => {
  const columnasGanadoras = [
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
  ]

  for (const columna of columnasGanadoras) {
    if (
      casillas.includes(columna[0]) &&
      casillas.includes(columna[1]) &&
      casillas.includes(columna[2])
    ) {
      return true
    }
  }

  return false
}

const porDiagonal: Comprobar = (casillas) => {
  const diagonalesGanadoras = [
    [1, 5, 9],
    [3, 5, 7],
  ]

  for (const diagonal of diagonalesGanadoras) {
    if (
      casillas.includes(diagonal[0]) &&
      casillas.includes(diagonal[1]) &&
      casillas.includes(diagonal[2])
    ) {
      return true
    }
  }

  return false
}

const comprobarGanadorPor = (
  opc: "fila" | "columna" | "diagonal"
): Comprobar => {
  switch (opc) {
    case "fila":
      return porFila
    case "columna":
      return porColumna
    case "diagonal":
      return porDiagonal
  }
}

const aGanado = (casillas: number[]): boolean => {
  const opciones: ("fila" | "columna" | "diagonal")[] = [
    "fila",
    "columna",
    "diagonal",
  ]

  for (const opc of opciones) {
    const gana = comprobarGanadorPor(opc)(casillas)

    if (gana) return true
  }

  return false
}

export { aGanado }
