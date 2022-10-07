// values.

let text = "Hola Mundo";
let text2 = "Hola mundo adios mundo";
let text3 = "Salas";
let text4 = "xyz1, xyz2, xyz3, xyz4 y xyz5";

// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

const stringLength = (str) => str.length;

// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

const stringSplice = (str, limit) => str.split("").splice(0, limit).join("");

const stringSlice = (str, limit) => str.slice(0, limit);

// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

const stringSplit = (str, pattern) => str.split(pattern);

// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

const stringRepeat = (str, repeat) => new Array(repeat).fill(str).join(" "); // str.repeat(repeat);

// result

console.log(stringLength(text));
console.log(stringSplice(text, 4));
console.log(stringSlice(text, 4));
console.log(stringSplit(text, " "));
console.log(stringRepeat(text, 3));

// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

const stringReverse = (str) => {
  let strNew = "";

  for (let i = str.length - 1; i >= 0; i--) {
    strNew += str[i];
  }

  return strNew;
};

const stringReverseTwo = (str) => str.split("").reverse().join("");

// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

const stringFind = (str, pattern) => {
  let count = 0;

  stringSplit(str, " ").forEach((item) => {
    if (item === pattern) {
      ++count;
    }
  });

  return count;
};

// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

const palindrome = (str) =>
  str.toLowerCase() === stringReverse(str.toLowerCase());

// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

const stringRemove = (str, pattern) => stringSplit(str, pattern).join("");

const stringRemoveTwo = (str, pattern) => str.replaceAll(pattern, "");

const stringRemoveThree = (str, pattern) =>
  str.replace(new RegExp(pattern, "gi"), "");

// result

console.log(stringReverse(text));
console.log(stringReverseTwo(text));
console.log(stringFind(text2, "mundo"));
console.log(palindrome(text3));
console.log(stringRemove(text4, "xyz"));
console.log(stringRemoveTwo(text4, "xyz"));
console.log(stringRemoveThree(text4, "xyz"));

// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

const random = (min = 501, max = 600) =>
  Math.floor(Math.random() * (min - max) + min);

// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
const capicua = (num) => {
  const newNum = num.toString();
  const reverseNum = newNum.split("").reverse().join("");
  return newNum === reverseNum;
};

// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

const factorial = (num) => {
  if (num === 1) {
    return num;
  }

  return num * factorial(num - 1);
};

// result
console.log(random());
console.log(capicua(2002));
console.log(factorial(5));
