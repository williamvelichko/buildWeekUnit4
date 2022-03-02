const model = require("./items-model");

const router = require("express").Router();
const { validateId, validateBody } = require("./items-middleware");

router.get("/", (req, res) => {
  model
    .getItems()
    .then((items) => {
      res.json(items);
    })
    .catch((err) => {
      res.json(err.message);
    });
});
router.get("/:item_id", validateId, (req, res) => {
  const { item_id } = req.params;
  model
    .getItemsById(item_id)
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((err) => {
      res.json(err.message);
    });
});
router.post("/", validateBody, (req, res) => {
  const item = req.body;
  model
    .addItem(item)
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((err) => {
      res.json(err.message);
    });
});
router.put("/:item_id", validateId, validateBody, (req, res) => {
  const { item_id } = req.params;
  const item = req.body;
  model
    .updateItem(item_id, { item })
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((err) => {
      res.json(err.message);
    });
});
router.delete("/:item_id", validateId, (req, res) => {
  const { item_id } = req.params;
  model
    .deleteItem(item_id)
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((err) => {
      res.json(err.message);
    });
});

module.exports = router;
