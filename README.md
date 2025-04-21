# School Management API

Overview
A backend system built with Node.js, Express, and MongoDB for managing students, teachers, courses, and enrollments.

Folder Structure
school-management-api/
|
|-- config/ # Environment config, DB connection
|-- controllers/ # Route logic
|-- middlewares/ # Auth and validation middlewares
|-- models/ # Mongoose models
|-- routes/ # Express route definitions
|-- services/ # Business logic
|-- utils/ # Utility functions (e.g. upload)
|-- uploads/ # Uploaded files (dev only)
|-- .env # Environment variables
|-- app.js # Express app setup
|-- server.js # App entry point

Suggested Models
1. User (Admin, Teacher, Student)
2. Course
3. Enrollment
4. CourseAttachment

Required NPM Packages
Install the following packages:
npm install express mongoose dotenv bcryptjs jsonwebtoken express-validator cors multer
cloudinary
For development:
npm install --save-dev nodemon

Architecture
Architecture Style: MVC + Service Layer
- Models: Handle data schemas
- Controllers: Handle request/response logic
- Services: Handle business logic
- Routes: Define endpoints and link to controllers
- Middlewares: For auth, error handling, validation

Setup Steps
1. Initialize project: npm init -y
2. Install required packages
3. Setup `.env` file with MongoDB URL, JWT secret, etc.
4. Connect MongoDB in config/db.js
5. Define models in models/
6. Create auth middleware (JWT)
7. Build routes/controllers/services for each model
8. Add cloudinary config for uploads
9. Use multer for file handling
10. Test with Postman
11. Deploy on Render, Cyclic, or Railway

User {
  name,
  email,
  password,
  role: 'student' | 'teacher' | 'admin',
  bio,
  profilePhoto
}
Course {
  title,
  description,
  tags: [],
  teacher: ObjectId (ref: 'User'),
  createdAt,
  coverImage
}
CourseAttachment {
  course: ObjectId (ref: 'Course'),
  title,
  fileUrl,
  uploadedAt
}
Enrollment {
  student: ObjectId (ref: 'User'),
  course: ObjectId (ref: 'Course'),
  status: 'enrolled' | 'completed',
  enrolledAt
}
Role	    Can Do
Admin	    Manage everything
Teacher	    Create/edit/delete own courses, view students
Student	    Enroll, view course content