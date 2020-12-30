const Product = require('../models/product')

// Tworzę nowy produkt => /api/v1/product/new
exports.newProduct = async (req, res, next) => {
    const product = await Product.create(req.body)

    res.status(201).json({
        success: true,
        product
    })
}


exports.getProducts = async (req, res, next) => {

    const products = await Product.find()

    res.status(200).json({
        success: true,
        count: products.length,
        products
    })
}

// Get single product details   =>   /api/v1/product/:id
exports.getSingleProduct = async (req, res, next) => {

    const product = await Product.findById(req.params.id);
    // cg skąd to id?
    // cg skąd w produktach bierze się id ? w modelu tego nie definiowałem

    if (!product) {
        return res.status(404).json({
            success: false,
            message: "Produktu nie znaleziono"
        })
    }
    res.status(200).json({
        success: true,
        product
    })

}

// _________________________________________________________________

// Update Product   =>   /api/v1/admin/product/:id
exports.updateProduct = async (req, res, next) => {

    let product = await Product.findById(req.params.id);
    // cg czemu do licha on szuka

    if (!product) {
        return res.status(404).json({
            success: false,
            message: "Produktu nie znaleziono"
        })
    }


    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    res.status(200).json({
        success: true,
        product
    })

}

// _________________________________________________________________

// Delete Product   =>   /api/v1/admin/product/:id
exports.deleteProduct = async (req, res, next) => {

    const product = await Product.findById(req.params.id);

    if (!product) {
        return res.status(404).json({
            success: false,
            message: "Produktu nie znaleziono"
        })
    }

    await product.remove();

    res.status(200).json({
        success: true,
        message: 'Produkt usunięto z sukcesem.'
    })

}