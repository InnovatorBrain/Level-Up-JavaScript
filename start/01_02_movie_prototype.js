// Declairing Object with function method:
// function Movie(title, director, genre, releaseYear, rating) {
//   this.title = title;
//   this.director = director;
//   this.genre = genre;
//   this.releaseYear = releaseYear;
//   this.rating = rating;
// }
// Movie.prototype.getOverview = function () {
//   return `${this.title}, a ${this.genre} film directted by ${this.director}, released in ${this.releaseYear}. It recieved a ratting of ${this.rating}`;
// };
// const John_Wick = new Movie("John Wick", "legend", "action", 2023);
// const Batman = new Movie("The Dark Night", "legend,action", 2023);
// console.log(John_Wick.getOverview());
// console.log(Batman.getOverview());
// _______________________________________________
// I can also declair an object in class method
class Movie {
  constructor(title, director, genre, releaseYear, rating) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.rating = rating;
  }
  getOverview = function () {
    return `${this.title}, a ${this.genre} film directted by ${this.director}, released in ${this.releaseYear}. It recieved a ratting of ${this.rating}`;
  };
}
const John_Wick = new Movie("John Wick", "legend", "action", 2023);
const Batman = new Movie("The Dark Night", "legend,action", 2023);
console.log(John_Wick.getOverview());
console.log(Batman.getOverview());
