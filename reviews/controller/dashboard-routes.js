const router = require('express').Router();
//import models
const user = require('/reviews/models/user.js')
const reviews = require('/reviews/models/reviews.js')
//import authentication fucntion
const withAuth = require('/reviews/utils/auth.js')


//route to get all posts (check to see if a user is loggedIn )
router.get(':/reviews', async (req, res) => {
    // find all posts
    try {
      const reviewData = await  reviews.findAll({
        include: [{ model: Product }],
      });
      res.status(200).json(reviewData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//route to render form to create a new post (should only respond with handlebars file)




module.exports = router;