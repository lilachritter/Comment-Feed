'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CommentSchema = new Schema({
    email: {
        type: String,
        required: 'Kindly enter email'
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
    text: {
        type: String,
        required: 'Kindly enter text'
    }
});

module.exports = mongoose.model('Comments', CommentSchema);