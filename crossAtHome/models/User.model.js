const mongoose = require('mongoose');
const { Schema, model } = mongoose.Schema;
const PLM = require('passport-local-mongoose');

const userSchema = new Schema(
  {
    userName: { type: String },
    email: { type: String },
    password: { type: String },
    facebookId: { type: String },
    googleId: { type: String },

  },
  { timestamps: true }
);
userSchema.plugin(PLM, { usernameField: 'userName' });
const User = mongoose.model('User', userSchema);

module.exports = User;
