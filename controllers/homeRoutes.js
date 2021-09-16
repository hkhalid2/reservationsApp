const router = require('express').Router();
const { reservation, user } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all reservations and JOIN with user data
    const resData = await reservation.findAll({
      include: [
        {
          model: user,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const reservations = resData.map((reservation) => reservation.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      reservations, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/reservation/:id', async (req, res) => {
  try {
    const resData = await reservation.findByPk(req.params.id, {
      include: [
        {
          model: user,
          attributes: ['name'], 
        },
      ],
    });

    const reservation = resData.get({ plain: true });

    res.render('reservation', {
      ...reservation,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await user.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: reservation }],
    });

    const User = userData.get({ plain: true });

    res.render('profile', {
      ...User,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/reviewPage', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await user.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: reservation }],
    });

    const User = userData.get({ plain: true });

    res.render('reviewPage', {
      ...User,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;