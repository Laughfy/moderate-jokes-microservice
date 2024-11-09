const db = require("../db");

// Get a joke to moderate
const getNextJoke = (callback) => {
  const query = "SELECT * FROM jokes WHERE approved = 0 LIMIT 1";
  db.query(query, (error, results) => {
    if (error) return callback(error, null);
    callback(null, results[0]);
  });
};

// Approve or edit a joke
const updateJoke = (id, updatedData, callback) => {
  const { type, content } = updatedData;
  const query =
    "UPDATE jokes SET type = ?, content = ?, approved = 1 WHERE id = ?";
  db.query(query, [type, content, id], (error, results) => {
    if (error) return callback(error, null);
    callback(null, results);
  });
};

// Reject and delete a joke
const deleteJoke = (id, callback) => {
  const query = "DELETE FROM jokes WHERE id = ?";
  db.query(query, [id], (error, results) => {
    if (error) return callback(error, null);
    callback(null, results);
  });
};

module.exports = {
  getNextJoke,
  updateJoke,
  deleteJoke,
};
