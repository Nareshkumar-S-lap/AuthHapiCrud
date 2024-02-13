const StudentService = require('../../modules/services/enquiryService');
const StudentController = {};

StudentController.createStudentEnquiry = async (request, h) => {
    try {
        const enquiryData = request.payload;
        const newEnquiry = await StudentService.createStudentQuery(enquiryData);
        return h.response(newEnquiry).code(201);
    } catch (error) {
        console.error('Error creating student enquiry:', error);
        return h.response({ error: 'Failed to create student enquiry' }).code(500);
    }
};

StudentController.getAllStudentEnquiries = async (request, h) => {
    try {
        const enquiries = await StudentService.getAllQueries();
        return h.response(enquiries).code(200);
    } catch (error) {
        console.error('Error retrieving student enquiries:', error);
        return h.response({ error: 'Failed to retrieve student enquiries' }).code(500);
    }
};

StudentController.getStudentEnquiryById = async (request, h) => {
    try {
        const enquiryId = request.params.id;
        const enquiry = await StudentService.getQueryById(enquiryId);
        if (!enquiry) {
            return h.response({ error: 'Student enquiry not found' }).code(404);
        }
        return h.response(enquiry).code(200);
    } catch (error) {
        console.error('Error retrieving student enquiry by ID:', error);
        return h.response({ error: 'Failed to retrieve student enquiry' }).code(500);
    }
};

StudentController.updateStudentEnquiry = async (request, h) => {
    try {
        const enquiryId = request.params.id;
        const updatedData = request.payload;
        const updatedEnquiry = await StudentService.updateStudentQuery(enquiryId, updatedData);
        if (!updatedEnquiry) {
            return h.response({ error: 'Student enquiry not found' }).code(404);
        }
        return h.response(updatedEnquiry).code(200);
    } catch (error) {
        console.error('Error updating student enquiry by ID:', error);
        return h.response({ error: 'Failed to update student enquiry' }).code(500);
    }
};

StudentController.deleteStudentEnquiry = async (request, h) => {
    try {
        const enquiryId = request.params.id;
        const deletedEnquiry = await StudentService.deleteStudentQuery(enquiryId);
        if (!deletedEnquiry) {
            return h.response({ error: 'Student enquiry not found' }).code(404);
        }
        return h.response({ message: 'its deleted successfully', deletedEnquiry }).code(200);
    } catch (error) {
        console.error('Error deleting student enquiry by ID:', error);
        return h.response({ error: 'Failed to delete student enquiry' }).code(500);
    }
};

module.exports = StudentController;
