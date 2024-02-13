const studentQueryQueries = require('../../interfaces/enquiryQuery');
const studentQueryService = {};
studentQueryService.getAllQueries = async () => {
  try {
    return await studentQueryQueries.getAllQueries();
  } catch (error) {
    throw new Error('Failed to fetch student queries');
  }
};

studentQueryService.getQueryById = async (queryId) => {
  try {
    return await studentQueryQueries.getQueryById(queryId);
  } catch (error) {
    throw new Error('Failed to fetch student query');
  }
};

studentQueryService.createStudentQuery = async (queryData) => {
  try {
    return await studentQueryQueries.createStudentQuery(queryData);
  } catch (error) {
    throw new Error('Failed to create student query');
  }
};

studentQueryService.updateStudentQuery = async (queryId, queryData) => {
  try {
    return await studentQueryQueries.updateStudentQuery(queryId, queryData);
  } catch (error) {
    throw new Error('Failed to update student query');
  }
};

studentQueryService.deleteStudentQuery = async (queryId) => {
  try {
    return await studentQueryQueries.deleteStudentQuery(queryId);
  } catch (error) {
    throw new Error('Failed to delete student query');
  }
};

module.exports = studentQueryService;
