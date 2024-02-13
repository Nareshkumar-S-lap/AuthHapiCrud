const bcrypt = require('bcryptjs');
const User = require('../models/Authuser');

const validateAdmin = async (request, username, password, h) => {
  try {
    // Find the user by username
    const user = await User.findOne({ username });

    // If user not found or not an admin or password doesn't match, return false
    if (!user || user.role !== 'admin' || !bcrypt.compareSync(password, user.password)) {
      return { credentials: null, isValid: false };
    }

    // If user is found, return user credentials and set isValid to true
    return { credentials: user, isValid: true };
  } catch (error) {
    console.error('Error validating admin:', error);
    return { credentials: null, isValid: false };
  }
};

const validateUser = async (request, username, password, h) => {
  try {
    // Find the user by username
    const user = await User.findOne({ username });

    // If user not found or password doesn't match, return false
    if (!user || user.role !== 'user' || !bcrypt.compareSync(password, user.password)) {
      return { credentials: null, isValid: false };
    }

    // If user is found, return user credentials and set isValid to true
    return { credentials: user, isValid: true };
  } catch (error) {
    console.error('Error validating user:', error);
    return { credentials: null, isValid: false };
  }
};

module.exports = {
  validateAdmin,
  validateUser,
};
