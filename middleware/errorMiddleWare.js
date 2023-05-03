const errorCatcher = (err, req, res, next) => {
  res.json({
    message: err.message,
    status: err.statusCode,
  });
};
module.exports = errorCatcher;
