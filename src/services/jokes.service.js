const jokes = require("../models/jokes.model");

function getNextJoke() {
  return jokes.find((joke) => !joke.approved);
}

function updateJoke(id, data) {
  const joke = jokes.find((j) => j.id === id);
  if (joke) {
    Object.assign(joke, data);
    return joke;
  }
  return null;
}

function deleteJoke(id) {
  const index = jokes.findIndex((j) => j.id === id);
  if (index !== -1) {
    jokes.splice(index, 1);
    return true;
  }
  return false;
}

module.exports = { getNextJoke, updateJoke, deleteJoke };
