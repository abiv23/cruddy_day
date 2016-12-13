
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE movie; ALTER SEQUENCE movie_id_seq restart with 11;')
    .then(() => {
      const movies = [{
        id: 1,
        title: "Eternal Sunshine of the Spotless Mind",
        director: "Micheal Gondry",
        genre: "Drama",
        year: 2004,
        watched: true,
      }, {
        id: 2,
        title: "12 Angry Men",
        director: "Sidney Lumet",
        genre: "Classic",
        year: 1957,
        watched: true
      }, {
        id: 3,
        title: "The Thing",
        director: "John Carpenter",
        genre: "Horror",
        year: 1982,
        watched: true
      }, {
        id: 4,
        title: "Predator",
        director: "John McTiernan",
        genre: "Action",
        year: 1987,
        watched: true
      }, {
        id: 5,
        title: "Alien",
        director: "Ridley Scott",
        genre: "Classic",
        year: 1979,
        watched: true
      }, {
        id: 6,
        title: "Aliens",
        director: "James Cameron",
        genre: "Sci-Fi",
        year: 1986,
        watched: true
      }, {
        id: 7,
        title: "Blade Runner",
        director: "Ridley Scott",
        genre: "Classic",
        year: 1982,
        watched: false
      }, {
        id: 8,
        title: "Dune",
        director: "David Lynch",
        genre: "Sci-Fi",
        year: 1984,
        watched: false
      }, {
        id: 9,
        title: "Big Trouble in Little China",
        director: "John Carpenter",
        genre: "Fantasy",
        year: 1986,
        watched: true
      }, {
        id: 10,
        title: "The Fellowship of the Ring",
        director: "Peter Jackson",
        genre: "Fantasy",
        year: 2001,
        watched: true
      }];
      return knex('movie').insert(movies);
    });
};
