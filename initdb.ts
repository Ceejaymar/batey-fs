// const sql = require("better-sqlite3");
// const db = sql("products.db");

// const products = [
//   {
//     slug: "shirt-1",
//     name: "shirt 1",
//     description: "shirt",
//     price: 100,
//     stock: { xs: 10, s: 20, m: 30, l: 40, xl: 50, xxl: 60 },
//     images: ["/images/shirt-1.jpg"],
//     categories: ["tops"],
//     reviews: [{ reviewId: 1, rating: 5, comment: "Great product" }],
//     tags: ["Tag 1", "Tag 2"],
//     colors: ["black"],
//     restockDate: "2021-01-01",
//   },
// ];

// db.prepare(
//   `
//    CREATE TABLE IF NOT EXISTS meals (
//        id INTEGER PRIMARY KEY AUTOINCREMENT,
//        slug TEXT NOT NULL UNIQUE,
//        name TEXT NOT NULL,
//        images TEXT NOT NULL,
//        description TEXT NOT NULL,
//        price INTEGER NOT NULL,
//        stock TEXT NOT NULL,
//        categories TEXT NOT NULL,
//        restockDate TEXT NOT NULL,
//        material TEXT NOT NULL,
//        reviews TEXT NOT NULL,
//        dateAdded TEXT NOT NULL,
//        tags TEXT NOT NULL,
//        colors TEXT NOT NULL
//     )
// `
// ).run();

// async function initData() {
//   const stmt = db.prepare(`
//       INSERT INTO meals VALUES (
//          null,
//          @slug,
//          @name,
//          @images,
//          @description,
//          @price,
//          @stock,
//          @categories,
//          @restockDate,
//          @material,
//          @reviews,
//          @dateAdded,
//          @tags,
//          @colors
//       )
//    `);

//   for (const product of products) {
//     stmt.run(product);
//   }
// }

// initData();

const sql = require("better-sqlite3");
const db = sql("products.db");

const products = [
  {
    slug: "shirt-1",
    name: "shirt 1",
    images: ["/images/shirt-1.jpg"],
    description: "shirt",
    price: 100,
    colors: ["black"],
    stock: { xs: 10, s: 20, m: 30, l: 40, xl: 50, xxl: 60 },
    categories: ["tops"],
    reviews: [{ rating: 5, comment: "Great product" }],
    restockDate: "2021-01-01",
    tags: ["limited edition", "bestseller"],
  },
];

db.exec(`
  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL,
    description TEXT,
    price INTEGER NOT NULL,
    restock_date TEXT,
    images TEXT,
    colors TEXT
  );

  CREATE TABLE IF NOT EXISTS stock (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    product_id INTEGER NOT NULL,
    size TEXT NOT NULL,
    quantity INTEGER NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products(id)
  );

  CREATE TABLE IF NOT EXISTS categories (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT UNIQUE
  );

  CREATE TABLE IF NOT EXISTS product_categories (
    product_id INTEGER,
    category_id INTEGER,
    FOREIGN KEY (product_id) REFERENCES products(id),
    FOREIGN KEY (category_id) REFERENCES categories(id)
  );

  CREATE TABLE IF NOT EXISTS tags (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT UNIQUE
  );

  CREATE TABLE IF NOT EXISTS product_tags (
    product_id INTEGER,
    tag_id INTEGER,
    FOREIGN KEY (product_id) REFERENCES products(id),
    FOREIGN KEY (tag_id) REFERENCES tags(id)
  );

  CREATE TABLE IF NOT EXISTS reviews (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    product_id INTEGER,
    rating INTEGER,
    comment TEXT,
    created_at TEXT,
    FOREIGN KEY (product_id) REFERENCES products(id)
  );
`);

function getOrCreateId(table, name) {
  const existing = db
    .prepare(`SELECT id FROM ${table} WHERE name = ?`)
    .get(name);
  if (existing) return existing.id;
  const insert = db.prepare(`INSERT INTO ${table} (name) VALUES (?)`);
  const result = insert.run(name);
  return result.lastInsertRowid;
}

function insertProduct(product) {
  const insertProductStmt = db.prepare(`
    INSERT INTO products (slug, name, description, price, restock_date, date_added, images, material, colors)
    VALUES (@slug, @name, @description, @price, @restockDate, @dateAdded, @images, @material, @colors)
  `);

  const result = insertProductStmt.run({
    slug: product.slug,
    name: product.name,
    description: product.description,
    price: product.price,
    restockDate: product.restockDate,
    dateAdded: product.dateAdded,
    images: JSON.stringify(product.images),
    material: JSON.stringify(product.material),
    colors: JSON.stringify(product.colors),
  });

  const productId = result.lastInsertRowid;

  const insertStock = db.prepare(`
    INSERT INTO stock (product_id, size, quantity)
    VALUES (?, ?, ?)
  `);
  for (const [size, quantity] of Object.entries(product.stock)) {
    insertStock.run(productId, size, quantity);
  }

  const insertProdCat = db.prepare(
    `INSERT INTO product_categories (product_id, category_id) VALUES (?, ?)`
  );
  product.categories.forEach((category) => {
    const categoryId = getOrCreateId("categories", category);
    insertProdCat.run(productId, categoryId);
  });

  const insertProdTag = db.prepare(
    `INSERT INTO product_tags (product_id, tag_id) VALUES (?, ?)`
  );
  product.tags.forEach((tag) => {
    const tagId = getOrCreateId("tags", tag);
    insertProdTag.run(productId, tagId);
  });

  const insertReview = db.prepare(
    `INSERT INTO reviews (product_id, rating, comment, created_at) VALUES (?, ?, ?, ?)`
  );
  product.reviews.forEach((review) => {
    insertReview.run(
      productId,
      review.rating,
      review.comment,
      new Date().toISOString()
    );
  });
}

products.forEach(insertProduct);
