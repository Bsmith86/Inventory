const mongoose = require('mongoose');

// Schemas are the structure of our data, and the data types

const itemsSchema = new mongoose.Schema({
    price: Number,
    inventory: Number,
    nextDelivery: Date,
    delivery: Number,
    name: String
    
})

const Items = mongoose.model('Items', itemsSchema)


module.exports = Items;