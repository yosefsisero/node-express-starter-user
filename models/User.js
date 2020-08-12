const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

const { Schema } = mongoose;


const userSchema = new Schema({
    is_active:{
        type: Boolean,
        default: true
    },
    first_name:{
        type: String,
        required: true
    },
    last_name:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    comunity:{
        type: String,
        required: true
    },
    country:{
        type: String,
        required: true
    },
    tel:{
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
},
   {
    timestamps: true,
    versionKey: false
   }
);

    userSchema.pre('save', function (next) {
        const user = this;
      
        // only hash the password if it has been modified (or is new)
        if (!user.isModified('password')) return next();
      
        // generate a salt
        return bcrypt.genSalt(SALT_WORK_FACTOR, function (errSalt, salt) {
          if (errSalt) return next(errSalt);
      
          // hash the password using our new salt
          return bcrypt.hash(user.password, salt, function (errHash, hash) {
            if (errHash) return next(errHash);
      
            // override the cleartext password with the hashed one
            user.password = hash;
            return next();
          });
        });
      });
      

const User = mongoose.model('User', userSchema);
module.exports = User