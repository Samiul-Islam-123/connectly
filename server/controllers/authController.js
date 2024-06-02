const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const sendEmail = require('../utils/sendEmail');
const crypto = require('crypto');

// Helper function to generate a 6-digit OTP
const generateOtp = () => {
    return Math.floor(100000 + Math.random() * 900000).toString(); // Generates a 6-digit OTP
};

// User Registration
exports.register = async (req, res, next) => {
    const { name, email, password } = req.body;

    try {
        let user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        user = new User({
            name,
            email,
            password
        });

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        // Generate OTP
        const otp = generateOtp();
        const otpExpires = Date.now() + 10 * 60 * 1000; // OTP expires in 10 minutes

        user.otp = otp;
        user.otpExpires = otpExpires;

        await user.save();

        // Send OTP email
        const subject = 'Verify Your Email for Connectly';
        const message = `Dear ${name},\n\nWelcome to Connectly! Please verify your email address using the following OTP:\n\n${otp}\n\nThis OTP is valid for 10 minutes.\n\nThank you,\nTeam Connectly`;

        await sendEmail(email, subject, message);

        res.status(201).json({ message: 'OTP sent to your email. Please verify your account.' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// User Login
exports.login = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: 'Invalid Credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid Credentials' });
        }

        if (!user.isVerified) {
            return res.status(400).json({ message: 'Please verify your email first' });
        }

        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: '1h' },
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            }
        );
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Verify OTP
exports.verifyOtp = async (req, res, next) => {
    const { email, otp } = req.body;

    try {
        let user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: 'Invalid Credentials' });
        }

        if (user.otp !== otp || user.otpExpires < Date.now()) {
            return res.status(400).json({ message: 'OTP is invalid or has expired' });
        }

        user.isVerified = true;
        user.otp = undefined;
        user.otpExpires = undefined;

        await user.save();

        res.status(200).json({ message: 'Email verified successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
