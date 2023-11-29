// switch

const fruta = ['peras'];

switch (fruta[0]) {
  case 'pera':
  case 'manzana':
    console.log('caso 2', fruta);
    break;
  default:
    console.log('ninguno');
}
const letra = 'a';
switch (letra) {
  case 'b':
  case 'c':
    console.log('caso 2', fruta);
    break;
}

// console.log(fruta);

// continue / break en loops

// while (true) {
//   const num = prompt('Escribe number');
//   if (num > 100) {
//     break;
//   }
// }

const week = ['lunes', 'martes', 'viernes', 'miercoles', 'jueves', 'sabado', 'domingo'];


// for(let i = 0; i < week.length; i++){
//   const day = week[i];
//   if (day === 'viernes') {
//     break;
//   }
//   console.log(day);
// }



// const arr = [1, 2, 3, 4, 5]; // 1 2 3 4 5

// for(let i = 0; i < arr.length; i++) {
//   const num = arr[i];
//   if (i === 2) {
//     continue;
//   }
//   console.log(num)
// }

let n = 1;

for( let i = 1; i < 100; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  n = n + i;
}