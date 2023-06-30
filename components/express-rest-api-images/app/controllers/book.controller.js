const db = require("../models");
const Book = db.books;
const Op = db.Sequelize.Op;
const AWS = require("aws-sdk");

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
})

exports.create = (req, res) => {
  // import fetch from "node-fetch";
  const nodeFetch = import("node-fetch");

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
      // get a random image, different on each URL call
      const imageURL = 'https://picsum.photos/237/132';

      // upload
      nodeFetch.then(fetch => {
        return fetch.default(imageURL);
      }).then(res => {
        return res.buffer();
      }).then(blob => {
        s3.upload({
          Bucket: process.env.AWS_S3_BUCKET_NAME,
          Key: data.id + '.jpg',
          Body: blob,
          ACL: 'public-read',
        }, function(s3Err, data) {
          if (data) {
            console.log('S3 upload successful', data);
          }
          if (s3Err) {
            console.log('Error uploading to S3: ', s3Err);
          }
          res.send(data);
        });
      });
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
      data.forEach((book, index) => data[index].dataValues.image = getImageUrlById(book.id));
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
        data.image = getImageUrlById(data.id);
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
      data.forEach((book, index) => data[index].dataValues.image = getImageUrlById(book.id));
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "An error occurred while retrieving the Books"
      });
    });
};

function getImageUrlById(id) {
  return `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_S3_BUCKET_REGION}.amazonaws.com/${id}.jpg`;
}
