const { Schema, model } = require('mongoose');

const wodSchema = new Schema({
  wodName: { type: String },
  wodFocus: { type: String, enum: ['Fuerza', 'Técnica', 'Metcon'] },
  duration: { type: String },
  desc: { type: String },
  level: { type: String, enum: ['Principiante', 'Escalado', 'RX'] },
});

module.exports = model('WodAPI', wodSchema);
