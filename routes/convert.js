const express = require('express');
const hexToRgb = require('../utils/hexToRgb');
const router = express.Router();

router.get('/hex-to-rgb/:hex', (req, res) => {
  try {
    const result = hexToRgb(req.params.hex);
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
