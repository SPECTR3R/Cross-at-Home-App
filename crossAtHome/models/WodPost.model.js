const { Schema, model } = require('mongoose');

const wodPostSchema = new Schema({
  wodName: { type: String },
  wodFocus: { type: String, enum: ['Fuerza', 'Técnica', 'Metcon'] },
  duration: { type: String },
  desc: { type: String },
  level: { type: String, enum: ['Principiante', 'Escalado', 'RX'] },
  record: { type: String, max: 200 },
  userId: { type: Schema.Types.ObjectId, ref: 'User.model' },
  comments: [ { type: Schema.Types.ObjectId, ref: 'WodComment.model' } ]
});

module.exports = model('WodPost', wodPostSchema);