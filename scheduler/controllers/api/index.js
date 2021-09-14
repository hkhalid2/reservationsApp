const router = require('express').Router();
const userRoutes = require('./userRoutes');
const schedRoutes = require('./schedRoutes');

router.use('/users', userRoutes);
router.use('/reservations', schedRoutes);

module.exports = router;