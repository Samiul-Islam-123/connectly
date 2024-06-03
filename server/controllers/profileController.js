// controllers/profileController.js

const Profile = require('../models/profileModel');
const User = require('../models/userModel');

// Create User Profile
exports.createProfile = async (req, res) => {
    const { bio, interests, location, profilePicture, socialLinks } = req.body;

    const profileFields = {};
    profileFields.user = req.user.id;
    if (bio) profileFields.bio = bio;
    if (interests) profileFields.interests = interests.split(',').map(interest => interest.trim());
    if (location) profileFields.location = location;
    if (profilePicture) profileFields.profilePicture = profilePicture;
    if (socialLinks) profileFields.socialLinks = socialLinks;

    try {
        // Check if profile already exists
        let profile = await Profile.findOne({ user: req.user.id });
        if (profile) {
            return res.status(400).json({ message: 'Profile already exists. Use update endpoint to modify.' });
        }

        // Create new profile
        profile = new Profile(profileFields);
        await profile.save();
        res.json(profile);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Read Current User Profile
exports.getCurrentProfile = async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.user.id }).populate('user', ['name', 'email']);

        if (!profile) {
            return res.status(400).json({ message: 'There is no profile for this user' });
        }

        res.json(profile);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Read User Profile by User ID
exports.getProfileById = async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.params.userId }).populate('user', ['name', 'email']);

        if (!profile) return res.status(404).json({ message: 'Profile not found' });

        res.json(profile);
    } catch (err) {
        console.error(err.message);
        if (err.kind == 'ObjectId') {
            return res.status(404).json({ message: 'Profile not found' });
        }
        res.status(500).send('Server error');
    }
};

// Update User Profile
exports.updateProfile = async (req, res) => {
    const { bio, interests, location, profilePicture, socialLinks } = req.body;

    const profileFields = {};
    if (bio) profileFields.bio = bio;
    if (interests) profileFields.interests = interests.split(',').map(interest => interest.trim());
    if (location) profileFields.location = location;
    if (profilePicture) profileFields.profilePicture = profilePicture;
    if (socialLinks) profileFields.socialLinks = socialLinks;

    try {
        let profile = await Profile.findOne({ user: req.user.id });

        if (profile) {
            // Update existing profile
            profile = await Profile.findOneAndUpdate(
                { user: req.user.id },
                { $set: profileFields },
                { new: true }
            );

            return res.json(profile);
        } else {
            return res.status(400).json({ message: 'Profile not found. Use create endpoint to create a new profile.' });
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Delete User Profile
exports.deleteProfile = async (req, res) => {
    try {
        // Remove profile
        await Profile.findOneAndRemove({ user: req.user.id });

        res.json({ message: 'Profile deleted' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
