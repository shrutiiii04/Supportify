const sampleListings = [
    {
        title: "Serene Seaside Retreat",
        description: "Oceanfront property with stunning views",
        image:{url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbWpE1X6ZC8w41yLDoRRUlVczNLfGl8fXopg&s",
               filename:"listingimage"
        },
        price: 2500,
        location: "Beach Road, Malibu",
        country: "USA"
    },
    {
        title: "Mountain Escape",
        description: "Cozy cabin in the mountains",
        image:{
            url: "https://i.pinimg.com/736x/f6/dd/e7/f6dde7c8241e56f22df0c5a4302c4b31.jpg",
            filename:"listingimage"
        },
        price: 1500,
        location: "Pine Hill, Colorado",
        country: "USA"
    },
    {
        title: "Urban Oasis",
        description: "Luxury apartment in the city center",
        image:{
            url: "https://www.intechnic.com/hubfs/Blog/Featured%20Images/Best%20Hotel%20Website%20Designs.jpg",
            filename:"listingimage"
        },
        price: 3000,
        location: "Downtown, Tokyo",
        country: "Japan"
    },
    {
        title: "Countryside Cottage",
        description: "Charming cottage surrounded by nature",
        image:{
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa6PxKfHNUVo-S8xog9smUJMXtIfp_zDC7yw&s",
            filename:"listingimage"
        },
        price: 1800,
        location: "Green Valley, Surrey",
        country: "UK"
    },
    {
        title: "Desert Mirage",
        description: "Exclusive villa in the desert",
        image:{
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-23qR0RglKNq_QMhhMxJj3bo52vyFoaPEeA&s",
            filename:"listingimage"
        },
        price: 2200,
        location: "Palm Springs, California",
        country: "USA"
    },
    {
        title: "Lakeside Lodge",
        description: "Rustic lodge by the lake",
        image:{
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuz-VtVv_ToRUh_xH71k6ex9BTm_ukYbhA7w&s",
            filename:"listingimage"
        },
        price: 1700,
        location: "Crystal Lake, Ontario",
        country: "Canada"
    },
    {
        title: "Historic Inn",
        description: "Elegant inn with historical significance",
        image:{
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEouxBsA4EVihhph5_IZ3cm9DtDrYAzYBnNg&s",
            filename:"listingimage"
        },
        price: 1900,
        location: "Old Town, Edinburgh",
        country: "Scotland"
    },
    {
        title: "Tropical Paradise",
        description: "Beach bungalow in a tropical setting",
        image:{
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReELXwoDCTf4WUp858zqwz-zIO2vPhh4xLdA&s",
            filename:"listingimage"
        },
        price: 2300,
        location: "Bora Bora, French Polynesia",
        country: "French Polynesia"
    },
    {
        title: "City Loft",
        description: "Modern loft in the heart of the city",
        image:{
            url: "https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2018/03/HEADER-1.jpg?fit=1300%2C731&ssl=1",
            filename:"listingimage"
        },
        price: 2800,
        location: "Midtown, New York",
        country: "USA"
    },
    {
        title: "Alpine Chalet",
        description: "Chalet with stunning mountain views",
        image:{
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXOx3XpQ7BNdGEvKmETjyGVLYH9-IVw9k33g&s",
            filename:"listingimage"
        },
        price: 2600,
        location: "Alps, Switzerland",
        country: "Switzerland"
    },
    {
        title: "Secluded Sanctuary",
        description: "Hidden retreat in the heart of nature",
        image:{
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeUoGmWjwqKigO30x1NQmOcRkZKt9kEqtjGw&s",
            filename:"listingimage"
        },
        price: 2100,
        location: "Rainforest, Costa Rica",
        country: "Costa Rica"
    },
    {
        title: "Clifftop Castle",
        description: "Luxurious castle with panoramic sea views",
        image:{
            url: "https://symphony.cdn.tambourine.com/sea-breeze-beach-house/media/seabreezebeachhouse-homepage-header-62f26b6e960fe.jpg",
            filename:"listingimage"
        },
        price: 3500,
        location: "Cliffs of Moher, Ireland",
        country: "Ireland"
    },
    {
        title: "Vineyard Villa",
        description: "Charming villa surrounded by vineyards",
        image:{
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzoJrWdQwi6PZYH2rX0vjmWrMUCanS5p9roQ&s",
            filename:"listingimage"
        },
        price: 2700,
        location: "Napa Valley, California",
        country: "USA"
    },
    {
        title: "Desert Dome",
        description: "Unique dome house in the desert",
        image:{
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-JHso0sm_yk9rInWH562jLRSYV_FN7bLVXA&s",
            filename:"listingimage"
        },
        price: 1800,
        location: "Joshua Tree, California",
        country: "USA"
    },
    {
        title: "Island Hideout",
        description: "Private island with luxurious amenities",
        image:{
            url: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/106338924.jpg?k=c68c41eb5b84df1bf00b1c7e2da047b8b7422ab7a9d141b1e502d5904a07716a&o=&hp=1",
            filename:"listingimage"
        },
        price: 5000,
        location: "Fiji Islands",
        country: "Fiji"
    },
    {
        title: "Forest Treehouse",
        description: "Eco-friendly treehouse in the forest",
        image:{
            url: "https://i.pinimg.com/474x/30/c4/52/30c4528996ff27777a671c71aecbc7e2.jpg",
            filename:"listingimage"
        },
        price: 1600,
        location: "Black Forest, Germany",
        country: "Germany"
    },
    {
        title: "Ski Chalet",
        description: "Cozy chalet with direct ski access",
        image:{
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUjrq6jWLoN8ee5Sl9evMjgnC2CgshHfeamw&s",
            filename:"listingimage"
        },
        price: 2900,
        location: "Aspen, Colorado",
        country: "USA"
    },
    {
        title: "Historic Manor",
        description: "Grand manor with historical charm",
        image:{
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlNhlYFf8Q87FKLTFo1a0qWVBPB6nnezQtpQ&s",
            filename:"listingimage"
        },
        price: 3200,
        location: "Cotswolds, England",
        country: "UK"
    },
    {
        title: "City Penthouse",
        description: "Penthouse with stunning city skyline views",
        image:{
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzA2fg25CH6HKbr8ygRTudZPnTXrXJiD_msw&s",
            filename:"listingimage"
        },
        price: 3400,
        location: "Downtown, Sydney",
        country: "Australia"
    },
    {
        title: "Lakeside Cabin",
        description: "Cabin with serene lake views",
        image:{
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7B_9nbYgH3xqLVjJAfmjxUm0hTE3PIe6J6g&s",
            filename:"listingimage"
        },
        price: 2000,
        location: "Lake District, England",
        country: "UK"
    }
];

module.exports = {data: sampleListings};