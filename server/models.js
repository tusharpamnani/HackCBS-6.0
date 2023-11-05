const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
    userName: String,
    password: String,
});

const prescriptionSchema = new mongoose.Schema({
    prescriptionData: String,
    timestamp: Number,
});

const patientSchema = new mongoose.Schema({
    name: String,
    gender: String,
    age: Number,
    contact: String,
    medicalHistory: [prescriptionSchema], // Modify to store prescriptions in an array
    bloodGroup: String,
    isDisabled: Boolean,
});

const appointmentSchema = new mongoose.Schema({
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient' },
    date: Date,
    time: String,
    description: String,
});

const Patient = mongoose.model('Patient', patientSchema);
const Prescription = mongoose.model('Prescription', prescriptionSchema);
const Appointment = mongoose.model('Appointment', appointmentSchema);
const Login = mongoose.model("Login", loginSchema);

module.exports = {
    Patient,
    Prescription,
    Appointment,
    Login
};
