const colors = new Map();
colors.set("es-ES", ["rojo", "verde", "amarillo", "blanco", "negro"]);
colors.set("en-US", ["red", "green", "yellow", "white", "black"]);
colors.set("pt-PT", ["vermelho", "verde", "amarelo", "branco", "preto"]);

const animals = new Map();
animals.set("es-ES", ["perro", "gato", "vaca", "pato", "caballo"]);
animals.set("en-US", ["dog", "cat", "cow", "duck", "horse"]);
animals.set("pt-PT", ["cachorro", "gato", "vaca", "pato", "cavalo"]);

const numbers = new Map();
numbers.set("es-ES", ["uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez"]);
numbers.set("en-US", ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"]);
numbers.set("pt-PT", ["um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez"]);

export { colors, animals, numbers };