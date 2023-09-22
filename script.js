const numberOfFilms = +prompt("сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  prive: false,
};
console.log(personalMovieDB);

const a = prompt("Один из последних просмотренных фильмов ?", "");
b = prompt("на скольуо отцените его  ?", "");
c = prompt("Один из последних просмотренных фильмов ?", "");
d = prompt("на скольуо отцените его  ?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

// if (num < 49) {
//   console.log("Error");
// } else if (num > 100) {
//   console.log("Ok!");
// }
// console.log("Ok!");

// num === 50 ? console.log("Ok!") : console.log("Error");

const num = 50;
switch (num) {
  case 49:
    console.log("Неверно");
    break;
  case 100:
    console.log("Неверно");
    break;
  case 51:
    console.log("Верно!");
    break;
  default:
    console.log("Не в этот ");
    break;
}
