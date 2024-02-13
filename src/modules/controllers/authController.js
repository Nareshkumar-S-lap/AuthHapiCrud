const bcrypt = require('bcryptjs');
//const User = require('../models/Authuser');
const User = require('../../modules/services/userService');
const loginHandler = async (request, h) => {
  try {
    const { username, password } = request.payload;
    // Find the user by username
    const user = await User.findUserByUsername({ username });

    // If user not found or password doesn't match, return an error response
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return h.response({ error: 'Invalid username or password' }).code(401);
    }

    // If user is found, check user's role
    // if (user.role !== 'admin') {
    //   return h.response({ error: 'Unauthorized. Only admin users allowed' }).code(403);
    // }
    // Check user's role
    if (user.role === 'admin') {
      return h.response({ message: 'Admin login successful, Access all opertion ', user }).code(200);
    } else {
      return h.response({ message: 'User login successful, Access read only ', user }).code(200);
    }

    // If user is an admin, return success response
   // return h.response({ message: 'Login successful', user }).code(200);
  } catch (error) {
    console.error('Error during login:', error);
    return h.response({ error: 'An internal server error occurred' }).code(500);
  }
};

module.exports = {
  loginHandler
};
