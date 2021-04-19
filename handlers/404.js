"use strict";
//modules exports holds EVERYTHING that you make with nodejs

//this redirects every time someone
module.exports = (req, res) => {
  res.status(404).send({
    error: 404,
    route: req.path,
    message: "Not Found",
  });
};
