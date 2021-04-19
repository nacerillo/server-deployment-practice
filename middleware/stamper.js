"user strict";
//middleware is about capturing/modifiying a request

//unless it starts with (err), if the callback
//signature contains "next", it is considered middlewar
module.exports = (req, res, next) => {
  req.timestamp = new Date();
  next();
};
