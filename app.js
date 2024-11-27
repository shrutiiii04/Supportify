if(process.env.NODE_ENV != "production"){
    require('dotenv').config();
}

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const listingRoute = require("./routes/listing.js");
const reviewRoute =  require("./routes/review.js");
const userRoute =  require("./routes/user.js");
const session = require("express-session");
const MongoStore = require('connect-mongo');
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
const port = 8091;
const app = express();
 
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", "ejs");
app.engine("ejs", ejsMate);
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));

async function main() {
    const connectionString = "mongodb+srv://shruti23022004:OLCFzr8GG5Ok1JUc@cluster0.byowpix.mongodb.net/myDatabaseName?retryWrites=true&w=majority";

    try {
        console.log("Attempting MongoDB connection...");
        await mongoose.connect(connectionString);
        console.log("MongoDB connected successfully!");
    } catch (err) {
        console.error("Failed to connect to MongoDB:", err.message);
        console.error("Stack Trace:", err.stack);
        process.exit(1); // Exit if the connection fails
    }
}

main();


const store = MongoStore.create({
    mongoUrl:"mongodb+srv://shruti23022004:OLCFzr8GG5Ok1JUc@cluster0.byowpix.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    crypto:{
        secret: "ui4ihjriendkewndwj",
    },
    touchAfter: 24*3600,
})

store.on('error', (error) => {
    console.log("Error in MongoDB session store:", error);
});
const sessionOptions = {
    store,
    secret: "ui4ihjriendkewndwj",
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    }
};
app.use(session(sessionOptions));
app.use(flash());

//passport 
app.use(passport.initialize());
app.use(passport.session());
// use static authenticate method of model in LocalStrategy
passport.use(new LocalStrategy(User.authenticate()));

// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Flash messages
app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
});
app.get("/",(req,res)=>{
    res.render("welcome/startpg.ejs");
})
app.use("/listings", listingRoute);
app.use("/listings/:id/reviews", reviewRoute);
app.use("/",userRoute);

//create demo user
// app.get("/demoUser",async(req,res)=>{
//     let fakeUser = new User({
//         email:"shru@gmail.com",
//         username: "shru"
//     });
//     //to save user using passport
//     let registeredUser = await User.register(fakeUser,"spy");
//     res.send(registeredUser);
// })



// Default route for undefined pages
app.all("*", (req, res, next) => {
    next(new ExpressError(404, "Page not found"));
});

// Error handling middleware
app.use((err, req, res, next) => {
    const { statusCode = 500, message = "Something went wrong!!" } = err;
    res.status(statusCode).render("listings/error.ejs", { message });
});

app.listen(port, () => {
    console.log("SERVER CONNECTED!!!");
});
