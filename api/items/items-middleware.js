const db = require("../data/db-config");
const model = require("./items-model");

const validateId = async (req, res, next) => {
  const { item_id } = req.params;
  const result = await model.getItemsById(item_id);

  if (!result) {
    res.status(401).json({ message: "item doesnt exist" });
  } else {
    next();
  }
};
const validateBody = (req, res, next) => {
  const { description, name, price } = req.body;
  if (!name || !description || !price) {
    res.status(401).json({ message: "name, description, and price required!" });
  } else {
    next();
  }
};

module.exports = {
  validateId,
  validateBody,
};
