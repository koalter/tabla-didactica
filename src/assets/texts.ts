const colors = new Map();
colors.set("es-ES", ["rojo", "verde", "amarillo", "blanco", "negro", "celeste", "rosa", "gris", "marrón", "violeta"]);
colors.set("en-US", ["red", "green", "yellow", "white", "black", "light blue", "pink", "grey", "brown", "violet"]);
colors.set("pt-PT", ["vermelho", "verde", "amarelo", "branco", "preto", "céu azul", "rosa", "cinza", "marrom", "tolet"]);

const animals = new Map();
animals.set("es-ES", ["perro", "gato", "vaca", "pato", "caballo", "tortuga", "loro", "elefante", "jirafa", "león"]);
animals.set("en-US", ["dog", "cat", "cow", "duck", "horse", "turtle", "parrot", "elephant", "giraffe", "lion"]);
animals.set("pt-PT", ["cachorro", "gato", "vaca", "pato", "cavalo", "tartaruga", "papagaio", "girafa", "leão"]);

const numbers = new Map();
numbers.set("es-ES", ["uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez"]);
numbers.set("en-US", ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"]);
numbers.set("pt-PT", ["um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez"]);

export { colors, animals, numbers };