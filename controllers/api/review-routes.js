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

router.delete('/:id', withAuth, async (req, res) => {
    try {
      const reviewData = await Review.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!reviewData) {
        res.status(404).json({ message: 'No review found with this id!' });
        return;
      }
  
      res.status(200).json(reviewData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  // router.put('/:id', withAuth, async (req, res) => {
  //   try {
  //     const reviewData = await Post.update(
  //       {
  //         ...req.body
  //       },
  //       {
  //       where: {
  //         id: req.params.id,
  //         user_id: req.session.user_id,
  //       },
  //     });
  
  //     if (!postData) {
  //       res.status(404).json({ message: 'No review found with this id!' });
  //       return;
  //     }
  
  //     res.status(200).json(reviewData);
  //   } catch (err) {
  //     res.status(500).json(err);
  //   }
  // });

module.exports = router;