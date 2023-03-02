module.exports = app => {
  const books = require("../controllers/book.controller.js");

  var router = require("express").Router();

  router.post("/", books.create);

  router.get("/", books.findAll);

  router.get("/available", books.findAllAvailable);

  router.get("/:id", books.findOne);

  router.put("/:id", books.update);

  router.delete("/:id", books.delete);

  router.delete("/", books.deleteAll);

  app.use("/books", router);
};
