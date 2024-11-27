const Listing = require("../models/listing");

module.exports.index = async (req, res) => {
    const { user } = req;
    let allListings;
    if (user.role == 'organization') {
        allListings = await Listing.find({});
    }
    else {
        allListings = await Listing.find({ owner: user._id })
    }
    return res.render("listings/index.ejs", { allListings });
};

module.exports.renderNewForm = (req, res) => {
    return res.render("listings/new.ejs");
};
module.exports.createNewListing = async (req, res) => {
    console.log(req.body)
    let url = req.file.path;
    let filename = req.file.filename;

    let listing = req.body.listing;
    const newListing = new Listing(listing);
    //to save owner id while posting listing
    newListing.owner = req.user._id;
    newListing.image = { url, filename };
    await newListing.save();
    req.flash("success", "New listing is added!!!");
    res.redirect("/listings");
};
module.exports.showListings = async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id)
        .populate({
            path: 'reviews',
            populate: {
                path: 'author',
                model: 'User'
            }
        })
        .populate("owner");
    if (!listing) {
        req.flash("error", "Listing does not exit");
        res.redirect("/listings");
    }
    res.render("listings/show.ejs", { listing });
};
module.exports.renderEditForm = async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Listing does not exit");
        res.redirect("/listings");
    }
    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload/w_100");
    res.render("listings/edit.ejs", { listing, originalImageUrl });
}
module.exports.editListing = async (req, res) => {
    const { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    if (typeof req.file !== "undefined") {
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = { url, filename };
        await listing.save();
    }
    req.flash("success", "Listing has been edited!!!");
    res.redirect(`/listings/${id}`);
};
module.exports.destroyListing = async (req, res) => {
    let { id } = req.params;
    if (!id) {
        return res.status(400).send({ error: "Listing ID is required" });
    }
    const result = await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing has been deleted!!!");
    res.redirect("/listings");
};