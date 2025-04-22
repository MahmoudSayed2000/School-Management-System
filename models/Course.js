
const { Date} = require('joi');

const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    tags: {
        type: [String],
        required: true,
    },
    teacher : { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    },

    createdAt : {
        type : Date,
        required : true
    },
    coverImg : {
        type : String,
        
    }

}, { timestamps: true });

module.exports = mongoose.model('Course', CourseSchema);