const { Schema, model } = require('mongoose');
const PLM = require('passport-local-mongoose');

const userSchema = new Schema(
  {
    name: { type: String },
    email: { type: String },
    password: { type: String },
    facebookId: { type: String },
    googleId: { type: String },
    weight: { type: String },
    height: { type: String },
    age: { type: String },
    imagePath: {
      type: String,
      default:'http://res.cloudinary.com/dqvjffch3/image/upload/v1588091302/ProfilePics/Profile_Picture.jpg.jpg'
        },
    imageName: {
      type: String,
      default:'Profile_Picture.jpg'
    },
  },
  { timestamps: true }
);

userSchema.plugin(PLM, { usernameField: 'email' });

module.exports = model('User', userSchema);
