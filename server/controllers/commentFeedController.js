'use strict';

var mongoose = require('mongoose'),
    Comment = mongoose.model('Comments');

exports.listAllComments = function(req, res) {
    Comment.find({}, function(err, comment) {
        if (err)
            res.send(err);
        res.json(comment);
    });
};

exports.createComment = function(req, res) {
    var newComment = new Comment(req.body);
    newComment.save(function(err, comment) {
        if (err)
            res.send(err);
        res.json(comment);
    });
};
