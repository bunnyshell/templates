const db = require("../models");
const Book = db.books;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  if (!req.body.title) {
    res.status(400).send({
      message: "The title can not be empty"
    });
    return;
  }

  const book = {
    title: req.body.title,
    description: req.body.description,
    available: req.body.available ? req.body.available : false
  };

  Book.create(book)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "An error occurred while adding the Book"
      });
    });
};

exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

  Book.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "An error occurred while retrieving the Books"
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Book.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find the Book with ID ${id}`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `An error occurred while retrieving Book with ID ${id}`
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Book.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "The Book was updated successfully"
        });
      } else {
        res.send({
          message: `Cannot update the Book with ID ${id}`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `An error occurred while updating Book with ID ${id}`
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Book.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "The Book was deleted successfully"
        });
      } else {
        res.send({
          message: `Cannot delete the Book with ID ${id}`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `An error occurred while deleting the Book with ID ${id}`
      });
    });
};

exports.deleteAll = (req, res) => {
  Book.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Books were deleted successfully` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "An error occurred while removing all the Books"
      });
    });
};

exports.findAllAvailable = (req, res) => {
  Book.findAll({ where: { available: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "An error occurred while retrieving the Books"
      });
    });
};
