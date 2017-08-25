var express = require('express');

// Create our app
var   app   = express();
const PORT  = process.env.PORT || 3100;

app.use(function (req, resp, next) {
  if(req.headers['x-forwarded-proto'] !== 'https') {
    resp.redirect('https://' + req.hostname + req.url)
  }
  else {
    next();
  }
});

app.use(express.static('public'));

app.listen(PORT, function () {
    console.log("Express loaded at port " + PORT);
})
