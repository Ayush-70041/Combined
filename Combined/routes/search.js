const express = require("express");
const router = express.Router();
const { federatedSearch } = require("../services/queryFederation");

router.post("/", async (req, res) => {
  const { location, date } = req.body;

  try {
    const results = await federatedSearch({ location, date });
    res.render("search-results", results);
  } catch (error) {
    console.error("Error during search:", error);
    res.status(500).send("Error fetching search results.");
  }
});

module.exports = router;
