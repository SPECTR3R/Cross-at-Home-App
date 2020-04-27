const { Schema, model } = require('mongoose');
const PLM = require('passport-local-mongoose');

const wodSchema = new Schema(
  {
    name: { type: String },
    email: { type: String },
    password: { type: String },
    facebookId: { type: String },
    googleId: { type: String },
  },
  { timestamps: true }
);

wodSchema.plugin(PLM, { usernameField: 'email' });

module.exports = model('User', wodSchema);
