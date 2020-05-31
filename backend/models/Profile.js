const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
    userId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user' 
    },
    name: {
        type: String
    }, 
    passion: {
        type: String
    },
    year: {
        type: String
    }
    
});

module.exports = Profile = mongoose.model('profile', profileSchema);