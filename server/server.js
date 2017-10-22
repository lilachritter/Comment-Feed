var express = require('express'),
    path = require('path'),
    app = express(),
    mongoose = require('mongoose'),
    Comment = require('./models/commentFeedModel'),
    bodyParser = require('body-parser');
    config = require('../config.js');
    port = process.env.PORT || config.server.port,
    db = config.database;
    user = db.CommentsDBUser;
    mongoUrl =  'mongodb://' + user.userName + ':' + user.pswd + '@' + db.host + '/' + db.commentsDBName;

mongoose.Promise = global.Promise;
mongoose.connect(mongoUrl);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes/commentFeedRoutes');
routes(app);

app.use(express.static(path.join(__dirname, '..', 'public')));

app.listen(port);

console.log('comment feed API server started on: ' + port);