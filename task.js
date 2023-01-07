const crontab = require("crontab");

exports.start = (req, res, next) => {
  var job = crontab.create("ls -la", "2 * * * * *");
};

exports.stop = (req, res, next) => {
  crontab.remove(job);
};
