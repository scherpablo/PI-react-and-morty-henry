// Definimos array de cadenas de texto que se mostrarán y borrarán en el efecto.
const texts = ["Rick & Morty.", "HTML.", "CSS.", "JavaScript.", "React.", "Redux.", "Vite."];

// Establecemos una cadena de texto fija que no cambiará.
const fixedText = "Proyecto Integrador";

// Buscamos un elemento HTML con la clase "fixedText" y lo guardamos en la variable fixedTextElement.
const fixedTextElement = document.querySelector(".fixedText");

// Buscamos un elemento HTML con la clase "changingText" y lo guardamos en la variable changingTextElement.
const changingTextElement = document.querySelector(".changingText");

// Creamos e inicializamos las variables para rastrear el índice de texto actual y el índice de carácter actual.
let textIndex = 0;
let charIndex = 0;

// Establecemos el contenido del elemento "fixedTextElement" con la cadena de texto fija.
fixedTextElement.textContent = fixedText;

// Definimos una función llamada que implementa el efecto de escritura.
function type() {
  // Verificamos si el índice de carácter actual es menor que la longitud del texto actual.
  if (charIndex < texts[textIndex].length) {
    // Agregamos el siguiente carácter al contenido del elemento "changingTextElement".
    changingTextElement.textContent += texts[textIndex].charAt(charIndex);
    // Incrementamos el índice de carácter.
    charIndex++;
    // Se programa una llamada recursiva a la función "type" después de 150 milisegundos.
    setTimeout(type, 150);
  } else {
    // Cuando se han escrito todos los caracteres, se programa una llamada a la función "erase" después de 600 milisegundos.
    setTimeout(erase, 600);
  }
}

// Se define una función llamada "erase" que implementa el efecto de borrado.
function erase() {
  // Verificamos si el índice de carácter actual es mayor que cero.
  if (charIndex > 0) {
    // Eliminamos el último carácter del contenido del elemento "changingTextElement".
    changingTextElement.textContent = texts[textIndex].substring(0, charIndex - 1);
    // Se decrementa el índice de carácter.
    charIndex--;
    // Se programa una llamada recursiva a la función "erase" después de 80 milisegundos.
    setTimeout(erase, 80);
  } else {
    // Cuando se han borrado todos los caracteres, se actualiza el índice de texto  
    textIndex = (textIndex + 1) % texts.length;
    // Se programa una llamada a la función "type" después de 600 milisegundos.
    setTimeout(type, 600);
  }
}

// Se llama a la función "type" para iniciar el efecto de escritura.
type();
