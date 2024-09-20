## Routes
# Student Routes
Overview
The student routes in the placement management system allow students to manage their profiles, view job listings, apply for jobs, and track their application status.

Base URL
/api/students

# Routes
# Register a Student

Endpoint: POST /register
Description: Register a new student.
Request Body:

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "studentId": "STU001"
}
Response:
201 Created: Returns the registered student details.
400 Bad Request: If required fields are missing or invalid.

# Login
Endpoint: POST /login
Description: Authenticate a student and return a token.
Request Body:

{
  "email": "john@example.com",
  "password": "password123"
}
Response:
200 OK: Returns a JWT token for authentication.
401 Unauthorized: If credentials are incorrect.

# View Profile
Endpoint: GET /profile
Description: Retrieve the logged-in student’s profile information.
Authorization: Bearer Token
Response:
200 OK: Returns the student’s profile details.
401 Unauthorized: If the token is invalid or missing.

# Update Profile
Endpoint: PUT /profile
Description: Update the logged-in student’s profile information.
Authorization: Bearer Token
Request Body:
{
  "name": "John Doe",
  "email": "john@example.com",
  "resume": "link_to_resume.pdf"
}

Response:
200 OK: Returns the updated profile details.
400 Bad Request: If required fields are missing or invalid.
401 Unauthorized: If the token is invalid or missing.

# View Job Listings
Endpoint: GET /jobs
Description: Retrieve a list of available job postings.
Response:
200 OK: Returns a list of jobs.

# Apply for a Job
Endpoint: POST /jobs/:jobId/apply
Description: Apply to a specific job using the job ID.
Authorization: Bearer Token
Response:
200 OK: Confirms the application submission.
400 Bad Request: If job ID is invalid or missing.
401 Unauthorized: If the token is invalid or missing.

# View Application Status
Endpoint: GET /applications
Description: View the status of all job applications submitted by the student.
Authorization: Bearer Token
Response:
200 OK: Returns a list of applications with their statuses.
401 Unauthorized: If the token is invalid or missing.


## README: Admin Routes
Overview
The admin routes in the placement management system allow admins to manage students, job postings, and monitor applications.

Base URL
/api/admin

# Routes
Admin Login

Endpoint: POST /login
Description: Authenticate an admin and return a token.
Request Body:

{
  "email": "admin@example.com",
  "password": "adminpassword"
}
Response:
200 OK: Returns a JWT token for authentication.
401 Unauthorized: If credentials are incorrect.

# View All Students
Endpoint: GET /students
Description: Retrieve a list of all registered students.
Authorization: Bearer Token
Response:
200 OK: Returns a list of students.
401 Unauthorized: If the token is invalid or missing.

# View a Specific Student
Endpoint: GET /students/:studentId
Description: Retrieve detailed information about a specific student using their student ID.
Authorization: Bearer Token
Response:
200 OK: Returns student details.
404 Not Found: If the student ID does not exist.
401 Unauthorized: If the token is invalid or missing.

# Create a Job Posting
Endpoint: POST /jobs
Description: Create a new job posting.
Authorization: Bearer Token
Request Body:
{
  "title": "Software Engineer",
  "description": "Job description here",
  "requirements": "Job requirements here",
  "company": "Tech Corp"
}
Response:
201 Created: Returns the created job posting details.
400 Bad Request: If required fields are missing or invalid.
401 Unauthorized: If the token is invalid or missing.

# View All Job Postings

Endpoint: GET /jobs
Description: Retrieve a list of all job postings.
Authorization: Bearer Token
Response:
200 OK: Returns a list of jobs.
401 Unauthorized: If the token is invalid or missing.

# Update a Job Posting

Endpoint: PUT /jobs/:jobId
Description: Update an existing job posting using the job ID.
Authorization: Bearer Token
Request Body:
{
  "title": "Software Engineer",
  "description": "Updated job description",
  "requirements": "Updated job requirements"
}

Response:
200 OK: Returns the updated job posting details.
400 Bad Request: If required fields are missing or invalid.
404 Not Found: If the job ID does not exist.
401 Unauthorized: If the token is invalid or missing.

# Delete a Job Posting
Endpoint: DELETE /jobs/:jobId
Description: Delete an existing job posting using the job ID.
Authorization: Bearer Token
Response:
204 No Content: Job posting deleted successfully.
404 Not Found: If the job ID does not exist.
401 Unauthorized: If the token is invalid or missing.


# View All Applications
Endpoint: GET /applications
Description: Retrieve a list of all job applications submitted by students.
Authorization: Bearer Token
Response:
200 OK: Returns a list of applications.
401 Unauthorized: If the token is invalid or missing.


# Update Application Status

Endpoint: PUT /applications/:applicationId/status
Description: Update the status of a job application.
Authorization: Bearer Token
Request Body:
{
  "status": "Accepted"
}
Response:
200 OK: Returns the updated application status.
400 Bad Request: If required fields are missing or invalid.
404 Not Found: If the application ID does not exist.
401 Unauthorized: If the token is invalid or missing.
