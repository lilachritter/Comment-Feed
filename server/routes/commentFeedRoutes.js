'use strict';
module.exports = function(app) {
    var commentFeed = require('../controllers/commentFeedController');

    app.route('/comments')
        .get(commentFeed.listAllComments)
        .post(commentFeed.createComment);
};