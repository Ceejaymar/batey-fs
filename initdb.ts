const sql = require("better-sqlite3");
const db = sql("products.db");

const { products } = require("./src/config/product-list.js");

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
    INSERT INTO products (slug, name, description, price, restock_date, images, colors)
    VALUES (@slug, @name, @description, @price, @restockDate, @images, @colors)
  `);

  const result = insertProductStmt.run({
    slug: product.slug,
    name: product.name,
    description: product.description,
    price: product.price,
    restockDate: product.restockDate,
    images: JSON.stringify(product.images),
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
