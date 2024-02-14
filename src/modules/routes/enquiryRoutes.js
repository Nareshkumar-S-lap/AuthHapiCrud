const API_CONST = require('../../common/constants/apiConst');
const StudentQueryController = require('../controllers/enquiryController');
const AuthController = require('../controllers/authController');

const routes = [
  // Authentication route
  {
    method: API_CONST.METHOD_API.POST,
    path: API_CONST.ENDPOINT_API.LOGIN,
    handler: AuthController.loginHandler,
    options: {
      auth: false
    }
  },
  // Student query routes
  {
    method: API_CONST.METHOD_API.GET,
    path: API_CONST.ENDPOINT_API.QUERIES,
    handler: StudentQueryController.getAllStudentEnquiries,
    options: {
      auth:  'user'
    }
  },
  {
    method: API_CONST.METHOD_API.GET,
    path: API_CONST.ENDPOINT_API.QUERY_BY_ID,
    handler: StudentQueryController.getStudentEnquiryById,
    options: {
      auth:  'user'
    }
  },
  // Admin-only routes for CRUD operations
  {
    method: API_CONST.METHOD_API.POST,
    path: API_CONST.ENDPOINT_API.QUERIES,
    handler: StudentQueryController.createStudentEnquiry,
    options: {
      auth: 'admin'
    }
  },
  {
    method: API_CONST.METHOD_API.PUT,
    path: API_CONST.ENDPOINT_API.QUERY_BY_ID,
    handler: StudentQueryController.updateStudentEnquiry,
    options: {
      auth: 'admin'
    }
  },
  {
    method: API_CONST.METHOD_API.DELETE,
    path: API_CONST.ENDPOINT_API.QUERY_BY_ID,
    handler: StudentQueryController.deleteStudentEnquiry,
    options: {
      auth: 'admin'
    }
  }
];

module.exports = routes;
