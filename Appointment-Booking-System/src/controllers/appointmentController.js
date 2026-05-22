const Appointment = require('../models/Appointment');

// POST /api/appointments
const createAppointment = async (req, res) => {
  try {
    const {
      patientName,
      email,
      phone,
      appointmentDate,
      appointmentTime,
      doctorName,
      department,
    } = req.body;

    const newAppointment = new Appointment({
      patientName,
      email,
      phone,
      appointmentDate,
      appointmentTime,
      doctorName,
      department,
    });

    await newAppointment.save();

    res.status(201).json({
      success: true,
      message: 'Appointment created successfully',
      data: newAppointment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error creating appointment: ' + error.message,
    });
  }
};

// GET /api/appointments
const getAllAppointments = async (req, res) => {
  try {
    const { department, status, sort } = req.query;

    let filter = {};
    if (department) {
      filter.department = department;
    }
    if (status) {
      filter.status = status;
    }

    let query = Appointment.find(filter);

    if (sort === 'appointmentDate') {
      query = query.sort({ appointmentDate: 1 });
    }

    const appointments = await query;

    res.status(200).json({
      success: true,
      message: 'Appointments fetched successfully',
      count: appointments.length,
      data: appointments,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching appointments: ' + error.message,
    });
  }
};

// GET /api/appointments/:id
const getAppointmentById = async (req, res) => {
  try {
    const { id } = req.params;

    const appointment = await Appointment.findById(id);

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: 'Appointment not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Appointment fetched successfully',
      data: appointment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching appointment: ' + error.message,
    });
  }
};

// PUT /api/appointments/:id
const updateAppointment = async (req, res) => {
  try {
    const { id } = req.params;

    const updateData = req.body;

    const updatedAppointment = await Appointment.findByIdAndUpdate(
      id,
      updateData,
      { new: true }
    );

    if (!updatedAppointment) {
      return res.status(404).json({
        success: false,
        message: 'Appointment not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Appointment updated successfully',
      data: updatedAppointment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating appointment: ' + error.message,
    });
  }
};

// DELETE /api/appointments/:id
const deleteAppointment = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedAppointment = await Appointment.findByIdAndDelete(id);

    if (!deletedAppointment) {
      return res.status(404).json({
        success: false,
        message: 'Appointment not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Appointment deleted successfully',
      data: deletedAppointment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting appointment: ' + error.message,
    });
  }
};

module.exports = {
  createAppointment,
  getAllAppointments,
  getAppointmentById,
  updateAppointment,
  deleteAppointment,
};
