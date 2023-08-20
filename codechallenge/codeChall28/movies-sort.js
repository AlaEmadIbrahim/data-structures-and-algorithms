"use strict";

class Movie {
  constructor(title, year, genres) {
    this.title = title;
    this.year = year;
    this.genres = genres;
  }
}

function swap(arr, i, low) {
  var temp = arr[i];
  arr[i] = arr[low];
  arr[low] = temp;
}

function partition(arr, left, right, compareFn) {
  let pivot = arr[right];
  let low = left - 1;

  for (let i = left; i < right; i++) {
    if (compareFn(arr[i], pivot) <= 0) {
      low++;
      swap(arr, i, low);
    }
  }
  swap(arr, right, low + 1);

  return low + 1;
}

function quickSort(arr, left, right, compareFn) {
  if (left < right) {
    let position = partition(arr, left, right, compareFn);
    quickSort(arr, left, position - 1, compareFn);
    quickSort(arr, position + 1, right, compareFn);
  }
  return arr;
}

function sortByYearCompare(a, b) {
  return b.year - a.year;
}

function sortByTitleCompare(a, b) {
  const ignorePrefixes = ["A ", "An ", "The "];

  function removePrefix(title) {
    for (const prefix of ignorePrefixes) {
      if (title.startsWith(prefix)) {
        return title.slice(prefix.length);
      }
    }
    return title;
  }

  const titleA = removePrefix(a.title);
  const titleB = removePrefix(b.title);
  return titleA.localeCompare(titleB);
}

const recentMovies = [
  new Movie("you're next", 2011, ["Horror", "Thriller "]),
  new Movie("Inception", 2010, ["Sci-Fi", "Thriller"]),
  new Movie("Dune", 2021, ["Sci-Fi", "Adventure"]),
  new Movie("Spider-Man: No Way Home", 2021, ["Action", "Adventure"]),
  new Movie("Avatar 2", 2022, ["Action", "Adventure", "Sci-Fi"]),
];

const sortedByYear = quickSort(
  [...recentMovies],
  0,
  recentMovies.length - 1,
  sortByYearCompare
);
const sortedByTitle = quickSort(
  [...recentMovies],
  0,
  recentMovies.length - 1,
  sortByTitleCompare
);

console.log("Sorted by year:", sortedByYear);
console.log("Sorted by title:", sortedByTitle);
