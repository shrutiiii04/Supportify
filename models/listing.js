const mongoose = require("mongoose");
const Review = require("./review");
const User = require("./user");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    image: {
        url: String,
        filename: String,
    },
    price: Number,
    location: {
        type: String,
        required: true
    },
    country: String,
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: "Review",
    }],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    // New field for contact details
    contactDetails: {
        email: {
            type: String,
            required: true,  // Set this to true if you want it to be mandatory
            match: [/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/, "Please enter a valid email address."]
        },
        phone: {
            type: String,
            required: true,  // Optional, depending on your requirements
            match: [/^\d{10}$/, "Please enter a valid 10-digit phone number."]
        }
    }
});

listingSchema.post("findOneAndDelete", async (listing) => {
    if (listing) {
        await Review.deleteMany({ _id: { $in: listing.reviews } });
    }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
