const router = require('express').Router();
const { reservation } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newRes = await reservation.create({
      ...req.body
 
    });

    res.status(200).json(newRes);
  } catch (err) {
    res.status(400).json(err);
  }
});



module.exports = router;