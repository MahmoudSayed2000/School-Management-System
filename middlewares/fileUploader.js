const uploadLocal = require('./uploadLocal');
const uploadCloud = require('./uploadCloud');

const strategy = process.env.UPLOAD_STRATEGY;

const uploader = strategy === 'cloud' ? uploadCloud : uploadLocal;

module.exports = uploader;
