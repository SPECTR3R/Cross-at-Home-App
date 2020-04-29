const { Schema, model } = require('mongoose');

const wodCommentSchema = new Schema({
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    body: {type: String, max: 150}
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model('WodComment', wodCommentSchema);