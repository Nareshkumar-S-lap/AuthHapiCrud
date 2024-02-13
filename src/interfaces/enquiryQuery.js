const StudentQuery = require('../models/Studentenquiry');

const studentQueryQueries = {};

studentQueryQueries.getAllQueries = async () => {
  try {
    return await StudentQuery.find();
  } catch (error) {
    throw new Error('Failed to fetch student queries');
  }
};

studentQueryQueries.getQueryById = async (queryId) => {
  try {
    return await StudentQuery.findById(queryId);
  } catch (error) {
    throw new Error('Failed to fetch student query');
  }
};

studentQueryQueries.createStudentQuery = async (queryData) => {
  try {
    return await StudentQuery.create(queryData);
  } catch (error) {
    throw new Error('Failed to create student query');
  }
};

studentQueryQueries.updateStudentQuery = async (queryId, queryData) => {
  try {
    return await StudentQuery.findByIdAndUpdate(queryId, queryData, { new: true });
  } catch (error) {
    throw new Error('Failed to update student query');
  }
};

studentQueryQueries.deleteStudentQuery = async (queryId) => {
  try {
    return await StudentQuery.findByIdAndDelete(queryId);
  } catch (error) {
    throw new Error('Failed to delete student query');
  }
};

module.exports = studentQueryQueries;
