let express = require('express');

// Create the app
let app = express();
const PORT = process.env.PORT || 3000;

// redirect https to http for using heroku live web deployment
app.use(function(req, res, next) {
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url)
  } else {
    next()
  }
});

app.use(express.static('public'));

app.listen(PORT, function() {
    console.log('Express server is up on port ' + PORT);
})
