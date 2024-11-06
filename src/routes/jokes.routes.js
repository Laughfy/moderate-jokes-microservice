const express = require("express");
const {
  fetchNextJoke,
  approveOrEditJoke,
  rejectJoke,
} = require("../controllers/jokes.controller");
const authenticateToken = require("../middlewares/auth.middleware");
const router = express.Router();

router.get("/next", authenticateToken, fetchNextJoke);
router.put("/:id", authenticateToken, approveOrEditJoke);
router.delete("/:id", authenticateToken, rejectJoke);

module.exports = router;
