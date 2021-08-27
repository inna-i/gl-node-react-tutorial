const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
	{
        _id: { type: String, required: true },
		type: { type: String, required: true },
		price: { type: Number, required: true },
		quantity: { type: Number, required: false },
	},
    {
        bufferCommands: false, capped: { size: 1000000, max: 100 }
    }
);

module.exports = mongoose.model('products', ProductSchema);
