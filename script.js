// const numberOfFilms = +prompt("сколько фильмов вы уже посмотрели?", "");

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   prive: false,
// };
// console.log(personalMovieDB);

// const a = prompt("Один из последних просмотренных фильмов ?", "");
// b = prompt("на скольуо отцените его  ?", "");
// c = prompt("Один из последних просмотренных фильмов ?", "");
// d = prompt("на скольуо отцените его  ?", "");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;
// console.log(personalMovieDB);

// if (num < 49) {
//   console.log("Error");
// } else if (num > 100) {
//   console.log("Ok!");
// }
// console.log("Ok!");

// num === 50 ? console.log("Ok!") : console.log("Error");

// const num = 50;
// switch (num) {
//   case 49:
//     console.log("Неверно");
//     break;
//   case 100:
//     console.log("Неверно");
//     break;
//   case 51:
//     console.log("Верно!");
//     break;
//   default:
//     console.log("Не в этот ");
//     break;
// }

// первый цикл

// let num = 50;

// while (num <= 55) {
//   console.log(num);
//   num++;
// }

// цикл 2

// let num = 50;

// do {
//   console.log(num);
//   num++;
// } while (num <= 55);

// let num = 50;

// for (let i = 1; i < 10; i++) {
//   if (i === 6) {
//     // break; прерывает цикл
//     // continue; позволяет пропустить шаг который нам не нужен
//   }
//   console.log(i);
// }

// задача на вложность

let result = "";
const length = 7;

for (let i = 1; i < length; i++) {
  for (let j = 0; j < i; j++) {
    result += "*";
  }

  result += "\n";
}

console.log(result);
// *
// **
// ***
// ****
// *****
// ******
