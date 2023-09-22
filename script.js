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

console.log(personalMovieDB);
