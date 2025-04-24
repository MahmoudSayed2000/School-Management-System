
const mongoose = require('mongoose');

const CourseAttachmentSchema = new mongoose.Schema({
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true,
    },
    file: {
        type: String,
        required: true,
    }, 
    public_id: String, // for Cloudinary delete
    filetype: {
        type: String,
        enum: ['pdf', 'image', 'doc', 'video', 'other'],
        default: 'other'
      }
    
}, { timestamps: true });

module.exports = mongoose.model('CourseAttachment', CourseAttachmentSchema);