const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_ROUNDS = 12;

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 4
    },
    cohort_name: { 
        type: String,
        required: true
    },
    skills: {  
        type: String,
        required: false
    },
    job_interests: {
        type: String,
        required: false,
    },
    about: {
        type:String,
        required: false
    }

});

UserSchema.pre("save", function(next){
    return bcrypt
        .hash(this.password, SALT_ROUNDS)
        .then(hash => {
            this.password = hash;
            return next();
        })
        .catch(err => {
            return next(err.message);
        });
});

UserSchema.methods.validatePassword = function(userGuess) {
    return bcrypt.compare(userGuess, this.password);
}

const UserModel = mongoose.model("User", UserSchema, "users");



module.exports = UserModel;

