const express = require("express");
const router = express.Router();
const Listing = require("../models/listing");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const flash = require("connect-flash");
const { isLoggedIn, isOwner,validateListing } = require("../middleware.js"); 
const multer  = require('multer');
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage })  //store the images at cloud
const ListingController = require("../controllers/listings.js");

//create new route
router.get("/new",isLoggedIn,ListingController.renderNewForm);
router.post("/",upload.single('listing[image]'), 
     validateListing, 
     
     wrapAsync(ListingController.createNewListing));


//index route-> all listings
router.get("/",isLoggedIn,wrapAsync(ListingController.index));

//show route
router.get("/:id",wrapAsync(ListingController.showListings));

//edit route
router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(ListingController.renderEditForm));
router.put("/:id", upload.single('listing[image]'), validateListing, isLoggedIn,isOwner, wrapAsync(ListingController.editListing));

router.delete("/:id", isLoggedIn, isOwner,wrapAsync(ListingController.destroyListing));

module.exports = router;