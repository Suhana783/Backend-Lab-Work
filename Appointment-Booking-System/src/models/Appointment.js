const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  patientName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  phone: {
    type: String,
    required: true,
  },

  appointmentDate: {
    type: Date,
    required: true,
  },

  appointmentTime: {
    type: String,
    required: true,
  },

  doctorName: {
    type: String,
    required: true,
  },

  department: {
    type: String,
    required: true,
  },

  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled'],
    default: 'pending',
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Appointment', appointmentSchema);
