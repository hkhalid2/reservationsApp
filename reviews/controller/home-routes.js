const router = require('express').Router();
//import  models
const user = require('/reviews/models/user.js')
const reviews = require('/reviews/models/reviews.js')

//get all posts on homepage
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


//get a single post


//get route to login (render login handlebars file)

//get route to sign up (render signup hbs)

module.exports= router;