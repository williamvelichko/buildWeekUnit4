const db = require("./../data/db-config");

function getItems() {
  return db("items");
}

function getItemsById(item_id) {
  return db("items").where("item_id", item_id).first();
}

async function addItem(item) {
  const [result] = await db("items").insert(item).returning("*");
  return result;
}
async function updateItem(item_id, item) {
  const result = await db("items").where("item_id", item_id).update({
    name: item.name,
    description: item.description,
    price: item.price,
  });
  return result;
}

function deleteItem(item_id) {
  return db("items").where("item_id", item_id).del();
}

module.exports = {
  getItems,
  getItemsById,
  addItem,
  updateItem,
  deleteItem,
};