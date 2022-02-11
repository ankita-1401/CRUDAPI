const express = require('express');
const itemsContoller = require("../controllers/item.controller.js");
const router = express.Router();

 // Create a new Item
 router.post("/", itemsContoller.create);
  
 // Retrieve all Items
 router.get("/", itemsContoller.findAll);

 // Retrieve a single Item with id
 router.get("/:id",itemsContoller.findOne);

 // Update a Item with id
 router.put("/:id", itemsContoller.update);

 // Delete a Item with id
 router.delete("/:id", itemsContoller.delete);

module.exports = router;

  