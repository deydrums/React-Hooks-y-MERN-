const {Schema, model} = require('mongoose');

var EventSchema = Schema({
    title: {
        type: String,
        require: true,
    },
    notesActive: {
        type: String,
    },
    start: {
        type: Date,
        require: true,
    },
    end: {
        type: Date,
        require: true,
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'Usuario'
    }
});


module.exports = model('Event', UserSchema);
