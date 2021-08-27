const Product = require('../models/product-model');

const createProduct = (req, res) => {
	const body = req.body;

	if (!body) {
		return res.status(400).json({
			success: false,
			error: 'You must provide a product',
		});
	}

	const product = new Product(body);

	if (!product) {
		return res.status(400).json({ success: false, error: err });
	}

	product
		.save()
		.then(() => {
			return res.status(201).json({
				success: true,
				id: product._id,
				message: 'Product created',
			});
		})
		.catch(error => {
			return res.status(400).json({
				error,
				message: 'Product not created',
			});
		});
};

const updateProduct = async (req, res) => {
	const body = req.body;

	if (!body) {
		return res.status(400).json({
			success: false,
			error: 'You must provide a body to update',
		});
	}

	Product.findOne({ _id: req.params.id }, (err, product) => {
		if (err) {
			return res.status(404).json({
				err,
				message: 'Product not found!',
			});
		}
		product.type = body.type;
		product.price = body.price;
		product.quantity = body.quantity;
		product
			.save()
			.then(() => {
				return res.status(200).json({
					success: true,
					id: product._id,
					message: 'Product updated!',
				});
			})
			.catch(error => {
				return res.status(404).json({
					error,
					message: 'Product not updated!',
				});
			});
	});
};

const deleteProduct = async (req, res) => {
	await Product.findOneAndDelete({ _id: req.params.id }, (err, product) => {
		if (err) {
			return res.status(400).json({ success: false, error: err });
		}

		if (!product) {
			return res.status(404).json({ success: false, error: `Product not found` });
		}

		return res.status(200).json({ success: true, data: product });
	}).catch(err => console.log(err));
};

const getProductById = async (req, res) => {
	await Product.findOne({ "_id": req.params.id}, (err, product) => {
        console.log(req.params.id, ' type --------- ', typeof Number(req.params.id));
        
		if (err) {
			return res.status(400).json({ success: false, error: err });
		}

		return res.status(200).json({ success: true, data: product });
	}).catch(err => console.log(err));
};

const getProducts = async (req, res) => {
	await Product.find({}, (err, products) => {
		if (err) {
			return res.status(400).json({ success: false, error: err });
		}
		if (!products.length) {
			return res.status(404).json({ success: false, error: `Product not found` });
		}
		return res.status(200).json({ success: true, data: products });
	}).catch(err => console.log(err));
};

module.exports = {
	createProduct,
	updateProduct,
	deleteProduct,
	getProducts,
	getProductById,
};
