const fs = require("fs");
const path = require("path");

const db = require("../database/models");

const productosController = {
  test: (req, res) => {
    res.render("test");
  },
  productslists: (req, res) => {
    db.products
      .findAll({
        include: [{ association: "categories" }, { association: "materials" }],
      })
      .then((products) => {
        res.render("productslists", { productos: products });
      });
  },
  cart: (req, res) => {
    res.render("cart");
  },

  details: (req, res) => {
    db.products
      .findByPk(req.params.id, {
        include: [
          {
            association: "categories",
          },
        ],
      })
      .then((productFound) => {
        res.render("details", { producto: productFound });
      });
  },
  editproduct: (req, res) => {
    let productsRequest = db.products.findByPk(req.params.id);
    let materialsRequest = db.materials.findAll();
    let categoriesRequest = db.categories.findAll();
    let intermediate = db.categories_products.findOne({
      where: { products_id: req.params.id },
    });
    let c2Request = db.products.findByPk(req.params.id);

    Promise.all([
      productsRequest,
      materialsRequest,
      categoriesRequest,
      intermediate,
      c2Request,
    ]).then(([products, materiales, categoria, intermediate, categoriaxPk]) => {
      res.render("editproduct", {
        materials: materiales,
        categories: categoria,
        producto: products,
        intermediate: intermediate,
        categoriaxPk: categoriaxPk,
      });
    });
  },

  update: async (req, res) => {
    let producte = await db.products.update(
      {
        name: req.body.name,
        price: req.body.price,
        detail: req.body.description,
        stock: req.body.stock,
        status: 1,
      },
      { where: { id: req.params.id } }
    );

    await db.categories_products.update(
      {
        products_id: producte.id,
        categories_id: req.body.category,
        material_id: req.body.materials,
      },
      { where: { products_id: req.params.id } }
    );

    res.redirect("/productslists" + "/details/" + req.params.id);
  },

  erase: async (req, res) => {
    let imagedb = db.products.image;

    await db.categories_products.destroy(
      {
        where: {
          products_id: req.params.id,
        },
      }
    );

    await db.products.destroy({
     where: {
       id: req.params.id,
     },
   });

    // if(imagedb==null) {

    //      fs.unlinkSync(path.join(__dirname, '../../public/images/products/', imagedb));
    // }

    res.redirect("/");
  },

  createproduct: (req, res) => {
    let materialsRequest = db.materials.findAll();
    let categoriesRequest = db.categories.findAll();

    Promise.all([materialsRequest, categoriesRequest]).then(
      ([materiales, categoria]) => {
        res.render("createproduct", {
          materials: materiales,
          categories: categoria,
        });
      }
    );
  },
  store: async (req, res) => {
    let producte = await db.products.create({
      name: req.body.name,
      price: req.body.price,
      detail: req.body.detail,
      image: req.file.filename,
      stock: req.body.stock,
      status: 1,
    });
    await db.categories_products.create({
      products_id: producte.id,
      categories_id: req.body.category,
      material_id: req.body.materials,
    });

    res.redirect("/");
  },
  productslistsApi: (req, res) => {
    let productsRequest = db.products.findAll();
    let categories1 = db.categories_products.count({
      where: { categories_id: "1" },
    });
    let categories2 = db.categories_products.count({
      where: { categories_id: "2" },
    });
    let categories3 = db.categories_products.count({
      where: { categories_id: "3" },
    });
    let categories4 = db.categories_products.count({
      where: { categories_id: "4" },
    });
    let categories5 = db.categories_products.count({
      where: { categories_id: "5" },
    });

    Promise.all([
      productsRequest,
      categories1,
      categories2,
      categories3,
      categories4,
      categories5,
    ])
    .then(
      ([
        products,
        categories1,
        categories2,
        categories3,
        categories4,
        categories5,
      ]) => {
        res.json({
          aro: categories1,
          cadenita: categories2,
          dije: categories3,
          pulsera: categories4,
          anillo: categories5,
          count: products.length,
          productos: products,
        });
      }
    );
  },

  productslistsApitrap: (req, res) => {
      db.products.findAll()
        .then((resultado)=>{
         
          res.json({products:resultado})
        })
  },
  productsbypkApi: (req, res) => {
    db.products
      .findByPk(req.params.id, {
        include: [{ association: "categories" }, { association: "materials" }],
      })
      .then((productFound) => {
        res.json({ product: productFound });
      });
  },

  categoriesApi: (req, res) => {
    db.categories.findAll().then((categorie) => {
      res.json({
        total_de_categorias: categorie.length,
      });
    });
  },
};
module.exports = productosController;
