const express = require('express');
const router = express.Router();

// Login/Landing Page route 
// GET / 
router.get('/', (req, res) => {
    res.render('login')
})

// Dashboard Page route 
// GET /dashboard
router.get('/dashboard', (req, res) => {
    res.render('dashboard')
})

module.exports = router;