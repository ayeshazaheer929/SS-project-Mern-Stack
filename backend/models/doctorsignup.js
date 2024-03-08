// models/doctor.js
const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  specialty: { type: String, required: true },
  experience: { type: String, required: true },
  importantDocs: { type: String, required: true },
  license: { type: String, required: true, unique: true },
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
