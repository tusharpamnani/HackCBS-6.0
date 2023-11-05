const express = require('express');
const router = express.Router();
const { Patient, Prescription, Appointment } = require('./models');

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Find the user by username in the database
        const user = await User.findOne({ username }).exec();

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Compare the provided password with the stored password hash
        const isPasswordValid = user.comparePassword(password);

        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid password' });
        }

        // At this point, the user is successfully authenticated
        res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/register', async (req, res) => {
    try {
        const {
            name,
            gender,
            age,
            contactNumber,
            medicalHistory,
            bloodGroup,
            isDisabled,
        } = req.body;

        const newPatient = new Patient({
            name,
            gender,
            age,
            contactNumber,
            medicalHistory,
            bloodGroup,
            isDisabled,
        });

        await newPatient.save();
        res.status(201).json(newPatient);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/add-prescription', async (req, res) => {
    try {
        const { patientId, prescriptionData } = req.body;

        const patient = await Patient.findById(patientId);
        if (!patient) {
            return res.status(404).json({ error: 'Patient not found' });
        }

        const prescription = new Prescription({
            prescriptionData,
            timestamp: Date.now(),
        });

        patient.prescriptions.push(prescription);
        await patient.save();

        res.status(201).json(prescription);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});



router.post('/appointments', async (req, res) => {
    try {
        const { patientId, date, time, description } = req.body;

        const newAppointment = new Appointment({
            patientId,
            date,
            time,
            description,
        });

        await newAppointment.save();
        res.status(201).json(newAppointment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});



// Get all appointments for a specific patient
router.get('/appointments/:patientId', async (req, res) => {
    try {
        const patientId = req.params.patientId;

        const appointments = await Appointment.find({ patientId }).exec();
        res.status(200).json(appointments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// Update an appointment
router.put('/appointments/:appointmentId', async (req, res) => {
    try {
        const appointmentId = req.params.appointmentId;
        const { date, time, description } = req.body;

        if (!mongoose.Types.ObjectId.isValid(appointmentId)) {
            return res.status(400).json({ error: 'Invalid appointmentId' });
        }

        const appointment = await Appointment.findByIdAndUpdate(
            appointmentId,
            { date, time, description },
            { new: true }
        );

        if (!appointment) {
            return res.status(404).json({ error: 'Appointment not found' });
        }

        res.status(200).json(appointment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
// Delete an appointment
router.delete('/appointments/:appointmentId', async (req, res) => {
    try {
        const appointmentId = req.params.appointmentId;

        const appointment = await Appointment.findByIdAndDelete(appointmentId);

        if (!appointment) {
            return res.status(404).json({ error: 'Appointment not found' });
        }

        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


module.exports = router;
