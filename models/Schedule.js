const mongoose = require('mongoose');

const { Schema } = mongoose;


const scheduleSchema = new Schema({
    is_active:{
        type: Boolean,
        default: true
    },
    date:{
        type: Date,
        required: true
    },
    time:{
        type: String,
        required: true
    },
    note:{
        type: String,
        required: true
    },
    user: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      }]
},
   {
    timestamps: true,
    versionKey: false
   }
);



const Schedule = mongoose.model('Schedule', scheduleSchema);

module.exports = Schedule