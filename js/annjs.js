
'use strict';
let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
 count: numberOfFilms,
 movies:{}, //пустой обьект
 actors: {}, 
 genres: [], //пустой массив
 privat: false //булинговое значение
};

const a = prompt('Один из последних фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a]=b;
personalMovieDB.movies[c]=d;

console.log(personalMovieDB);