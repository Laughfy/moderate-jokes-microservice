const {
  getNextJoke,
  updateJoke,
  deleteJoke,
} = require("../services/jokes.service");

function fetchNextJoke(req, res) {
  const joke = getNextJoke();
  if (!joke) return res.status(404).send("No more jokes to moderate");
  res.json(joke);
}

function approveOrEditJoke(req, res) {
  const { id } = req.params;
  const joke = updateJoke(parseInt(id), req.body);
  if (!joke) return res.status(404).send("Joke not found");
  res.json(joke);
}

function rejectJoke(req, res) {
  const { id } = req.params;
  const success = deleteJoke(parseInt(id));
  if (!success) return res.status(404).send("Joke not found");
  res.send("Joke rejected and deleted");
}

module.exports = { fetchNextJoke, approveOrEditJoke, rejectJoke };
