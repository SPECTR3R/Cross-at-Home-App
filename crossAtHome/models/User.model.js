const { Schema, model } = require('mongoose');
const PLM = require('passport-local-mongoose');

const userSchema = new Schema(
  {
    name: { type: String },
    email: { type: String },
    password: { type: String },
    facebookId: { type: String },
    googleId: { type: String },
  },
  { timestamps: true }
);

userSchema.plugin(PLM, { usernameField: 'email' });

module.exports = model('User', userSchema);
