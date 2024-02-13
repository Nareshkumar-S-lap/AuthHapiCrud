# My Awesome API

Welcome to the documentation of My Awesome API! This API provides endpoints for managing student enquiries.

## Endpoints

### Authentication

#### Login
- **Method**: POST
- **Endpoint**: /login
- **Description**: Endpoint for user authentication.
- **Authentication Required**: No

### Student Queries

#### Get All Queries
- **Method**: GET
- **Endpoint**: /queries
- **Description**: Get all student enquiries.
- **Authentication Required**: Yes (User or Admin)

#### Get Query by ID
- **Method**: GET
- **Endpoint**: /queries/{id}
- **Description**: Get a specific student enquiry by ID.
- **Authentication Required**: Yes (User or Admin)

#### Create Query
- **Method**: POST
- **Endpoint**: /queries
- **Description**: Create a new student enquiry.
- **Authentication Required**: Yes (Admin)

#### Update Query
- **Method**: PUT
- **Endpoint**: /queries/{id}
- **Description**: Update an existing student enquiry by ID.
- **Authentication Required**: Yes (Admin)

#### Delete Query
- **Method**: DELETE
- **Endpoint**: /queries/{id}
- **Description**: Delete a student enquiry by ID.
- **Authentication Required**: Yes (Admin)

## Authentication

- The login endpoint `/login` is used to authenticate users.
- For user-specific actions, such as retrieving enquiries, both user and admin authentication are allowed.
- Admin authentication is required for actions like creating, updating, and deleting enquiries.

## Usage

1. Make sure you have valid credentials for authentication.
2. Use the provided endpoints with the appropriate HTTP methods to perform CRUD operations on student enquiries.

## Examples

### Login
- POST /login
- Request Body: { "username": "user", "password": "password" }

### Get All Queries
- GET /queries
- Authentication: User or Admin

### Create Query
- POST /queries
- Request Body: { "name": "John Doe", "email": "Math@.com", "message": "I need help with calculus" }
- Authentication: Admin

