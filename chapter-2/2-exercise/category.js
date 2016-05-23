var mongoose = require('mongoose');

var categorySchema = {
    _id: {
        type: String
    },
    parent: {
        type: String,
        ref 'Category'
    },
    ancestor: [
        {
            type: String,
            ref: 'Category'
        }
    ]
};

module.exports = new mongoose.Schema(categorySchema);
module.exports.categorySchema = categorySchema;
