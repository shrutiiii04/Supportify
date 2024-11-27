const Listing = require("./models/listing");
const Review = require("./models/review");
module.exports.isLoggedIn =  (req,res,next)=>{
if(!req.isAuthenticated()){
    //to redirect from where the login has been come
    req.session.redirectUrl = req.originalUrl;
    req.flash("error", "You need to login first");
    return res.redirect("/login");
}
next();
}

module.exports.saveRedirectUrl = (req, res, next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
}

module.exports.isOwner = async(req,res,next)=>{
    let {id} = req.params;
    let listing = await Listing.findById(id);
    if(!listing.owner._id.equals(res.locals.currUser._id)){
        req.flash("error","You are not the owner of this listing");
        return res.redirect(`/listings/${id}`);
    }
    next();
}

module.exports.validateListing=(req, res, next) =>{
    console.log(req.body)
    const { listing } = req.body;
    if (!listing) {
      return next(new ExpressError('"listing" is required', 400));
    }
    next();
  }

  module.exports.isAuthor = async(req,res,next)=>{
    let {id,reviewId} = req.params;
    let review = await Review.findById(reviewId);
    if(!review.author._id.equals(res.locals.currUser._id)){
        req.flash("error","You have not created this review");
        return res.redirect(`/listings/${id}`);
    }
    next();
}