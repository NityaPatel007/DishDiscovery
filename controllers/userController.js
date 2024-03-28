const bcrypt = require('bcrypt');
const User = require('../models/userModel');

async function registerUser(req, res) {
    try {
        // Extract user details from request body
        const { fullname, email, phone, gender, username, password } = req.body;

        // Check if the username is already taken
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: "Username already exists" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user instance
        const newUser = new User({
            fullname,
            email,
            phone,
            gender,
            username,
            password: hashedPassword
        });

        // Save the user to the database
        await newUser.save();

        // Redirect the user to the home page after successful registration
        res.redirect('/');
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

async function loginUser(req, res) {
    try {
        // Extract username and password from request body
        const { username, password } = req.body;

        // Find user by username
        const user = await User.findOne({ username });

        // If user does not exist, send error message
        if (!user) {
            return res.status(400).json({ message: "Invalid username or password" });
        }

        // Check if the password is correct
        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        // If password is incorrect, send error message
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid username or password" });
        }

        // Set session data to indicate user is logged in
        req.session.isLoggedIn = true;
        req.session.user = user;

        // Redirect the user to the home page after successful login
        res.redirect('/');
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    registerUser,
    loginUser
};
