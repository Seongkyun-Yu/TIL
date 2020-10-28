const models = require('../../models');

exports.get_products = (_, res) => {
  models.Products.findAll({}).then((products) => {
    res.render('admin/products.html', { products });
  });
};

exports.get_products_write = (_, res) => {
  res.render('admin/write.html');
};

exports.post_products_write = (req, res) => {
  // res.send(req.body);
  models.Products.create({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
  }).then(() => {
    res.redirect('/admin/products');
  });
};
