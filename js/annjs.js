
'use strict';
let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
 count: numberOfFilms,
 movies:{}, //пустой обьект
 actors: {}, 
 genres: [], //пустой массив
 privat: false //булинговое значение
};

for (let i = 0; i < 2; i++){
    const a = prompt('Один из последних фильмов?', ''),
          b = prompt('На сколько оцените его?', '');

    if (a != null && b != null  && a !='' && b != '' && a.length < 50){
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;//возвращает на одну итерацию цикла назад
    }
}

 if (personalMovieDB.count < 10){
     console.log("Просмотрено довольно мало фильмов");  
 }  else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log("Вы классический зритель");
 }  else if (personalMovieDB.count >= 30){
     console.log("Вы киноман");
 }  else {
     console.log("Произошла ошибка");
 }

console.log(personalMovieDB);