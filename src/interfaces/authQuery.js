const User = require('../models/Authuser');

const userQueries = {
  findUserByUsername: async (username) => {
    try {
      const user = await User.findOne(username);
      return user;
    } catch (error) {
      console.error('Error finding user by username:', error);
      throw new Error('Error finding user');
    }
  },
};

module.exports = userQueries;
