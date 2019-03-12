const express = require('express');

const router = express.Router();

router.all('*', (req, res)=>{
    let route = req.originalUrl;
    res.send(JSON.stringify({success: false, reason: `Invalid Route: ${route}, accessed`}));
});

module.exports = router;