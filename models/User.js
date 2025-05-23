

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role : {
        type: String,
        enum: ['admin', 'teacher', 'student'],
        default: 'student'    
    },
    profilePicture: {
        type: String,
        default: 'default.jpg',
    },
    bio: {
        type: String,
        default: '',
    }
 
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
