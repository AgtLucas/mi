var fs = require('fs');
var async = require('async');

function css(res) {
  res.writeHead(200, {"Content-Type": "text/css"});

  async.eachSeries(
    ['app.css', 'foo.css'],

    function (filename, cb) {
      fs.readFile(filename, function (err, content) {
        if (!err) {
          res.write(content);
        }

        cb(err);
      });
    },

    function (err) {
      response.end();
    }
  );
}
