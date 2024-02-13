const User = require('../../interfaces/authQuery');
const userService = {
  findUserByUsername: async (username) => {
    try {
      return await User.findUserByUsername(username);
    } catch (error) {
      throw new Error(error.message);
    }
  }
};

module.exports = userService;
