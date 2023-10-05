// Número de filas y columnas en la cuadrícula
const numRows = 10;
const numCols = 17;

// Calcula el total de burbujas en la cuadrícula
const totalBurbujas = numRows * numCols;

// Obtén el contenedor de las burbujas
const burbujasContainer = document.getElementById("burbujasContainer");

// Genera y agrega las burbujas en una cuadrícula
for (let i = 0; i < totalBurbujas; i++) {
  const burbuja = document.createElement("div");
  burbuja.classList.add("burbuja");
  burbuja.style.setProperty("--i", i + 1);

  // Calcula la fila y la columna actual
  const filaActual = Math.floor(i / numCols);
  const columnaActual = i % numCols;

  // Establece el estilo de posición para la burbuja
  burbuja.style.top = `${filaActual * 80}px`;
  burbuja.style.left = `${columnaActual * 93}px`;

  burbujasContainer.appendChild(burbuja);
}
