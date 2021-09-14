const router = require('express').Router();
const { reservation } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newRes = await reservation.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newRes);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const resData = await reservation.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!resData) {
      res.status(404).json({ message: 'No reservation found with this id!' });
      return;
    }

    res.status(200).json(resData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;