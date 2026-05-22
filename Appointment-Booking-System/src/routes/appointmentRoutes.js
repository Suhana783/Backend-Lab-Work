const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const {
  createAppointment,
  getAllAppointments,
  getAppointmentById,
  updateAppointment,
  deleteAppointment,
} = require('../controllers/appointmentController');

// Create router
const router = express.Router();

// Create appointment
router.post('/', authMiddleware, createAppointment);

// Get all appointments
router.get('/', getAllAppointments);

// Get single appointment
router.get('/:id', getAppointmentById);

// Update appointment
router.put('/:id', authMiddleware, updateAppointment);

// Delete appointment
router.delete('/:id', authMiddleware, deleteAppointment);

module.exports = router;
