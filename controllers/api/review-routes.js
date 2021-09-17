const router = require('express').Router();
const { Review } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/reviews', withAuth, async (req, res) => {
    
    try {
        const newReview = await Review.create({
          ...req.body
        });
    
        res.status(200).json(newReview);
      }
    catch (err) {
        // console.log(err)
        res.status(400).json(err);
    }
})


module.exports = router;