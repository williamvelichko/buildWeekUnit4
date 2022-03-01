const model = require("./items-model");

const router = require("express").Router();

router.get("/", (req, res) => {
  model
    .getItems()
    .then((items) => {
      res.json(items);
    })
    .catch((err) => {
      res.json(err);
    });
});
router.get("/:item_id", (req, res) => {
  const { item_id } = req.params;
  model
    .getItemsById(item_id)
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((err) => {
      res.json(err);
    });
});
router.post("/", (req, res) => {
  const item = req.body;
  model
    .addItem(item)
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((err) => {
      res.json(err);
    });
});
router.put("/:item_id", (req, res) => {
  const { item_id } = req.params;
  const item = req.body;
  model
    .updateItem(item_id, { item })
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((err) => {
      res.json(err);
    });
});
router.delete("/", (req, res) => {});

module.exports = router;
