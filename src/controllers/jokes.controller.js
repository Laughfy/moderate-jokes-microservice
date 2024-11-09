const jokesRepository = require("../services/jokesRepository");

// Controller to get the next joke for moderation
const fetchNextJoke = (req, res) => {
  jokesRepository.getNextJoke((error, joke) => {
    if (error) {
      return res.status(500).json({ error: "Failed to fetch joke" });
    }
    if (!joke) {
      return res.status(404).json({ message: "No more jokes to moderate" });
    }
    res.json(joke);
  });
};

// Controller to approve or edit a joke
const approveOrEditJoke = (req, res) => {
  const { id } = req.params;
  const { type, content } = req.body;

  jokesRepository.updateJoke(id, { type, content }, (error, result) => {
    if (error) {
      return res.status(500).json({ error: "Failed to update joke" });
    }
    res.json({ message: "Joke updated and approved successfully" });
  });
};

// Controller to reject and delete a joke
const rejectJoke = (req, res) => {
  const { id } = req.params;

  jokesRepository.deleteJoke(id, (error, result) => {
    if (error) {
      return res.status(500).json({ error: "Failed to delete joke" });
    }
    res.json({ message: "Joke rejected and deleted successfully" });
  });
};

module.exports = {
  fetchNextJoke,
  approveOrEditJoke,
  rejectJoke,
};

// const {
//   getNextJoke,
//   updateJoke,
//   deleteJoke,
// } = require("../services/jokes.service");

// function fetchNextJoke(req, res) {
//   const joke = getNextJoke();
//   if (!joke) return res.status(404).send("No more jokes to moderate");
//   res.json(joke);
// }

// function approveOrEditJoke(req, res) {
//   const { id } = req.params;
//   const joke = updateJoke(parseInt(id), req.body);
//   if (!joke) return res.status(404).send("Joke not found");
//   res.json(joke);
// }

// function rejectJoke(req, res) {
//   const { id } = req.params;
//   const success = deleteJoke(parseInt(id));
//   if (!success) return res.status(404).send("Joke not found");
//   res.send("Joke rejected and deleted");
// }

// module.exports = { fetchNextJoke, approveOrEditJoke, rejectJoke };
