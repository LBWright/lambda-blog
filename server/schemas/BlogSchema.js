const mongoose = require('mongoose');

const definition = {
    blog_title: {
        type: String,
        required: true
    },
    blog_body: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        required: true,
    },
    createdOn: {
        type: Date,
        default: Date.now
    }
};

const options = {
    timestamps: true
}

const BlogSchema = new mongoose.Schema(definition, options);

const BlogModel = mongoose.model("Blog", BlogSchema, "blogs");

module.exports = BlogModel;

