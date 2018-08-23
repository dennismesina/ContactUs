var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var messageModel = new Schema({
    user: {
        type: String
    },
    subject: {
        type: String
    },
    message: {
        type: String
    },
    read: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Message', messageModel);