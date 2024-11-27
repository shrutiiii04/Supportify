const express = require("express");
const router = express.Router({mergeParams:true}); //to get id from "listings/:id/reviews"
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const {reviewSchema} = require("../schema.js");
const { isLoggedIn , isAuthor} = require("../middleware.js");  
const ReviewController = require("../controllers/reviews.js");

const validateReview = (req, res, next)=>{
    let {error} = reviewSchema.validate(req.body);
    if(error){
        throw new ExpressError(400, error);
    }else{
        next();
    }
}

//routes for review
//post route
router.post("/",isLoggedIn,validateReview, wrapAsync(ReviewController.createReview));

//delete route
router.delete("/:reviewId",isLoggedIn,isAuthor,wrapAsync(ReviewController.deleteReview));

module.exports = router;