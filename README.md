📘 School Management System API – Documentation
📌 Table of Contents
Project Overview

Technologies Used

Project Structure

Environment Setup

API Endpoints

Auth

User

Course

Course Attachment

Enrollment

Validation

Authentication & Authorization

File Upload (Local & Cloudinary)

Error Handling

Deployment Instructions

License & Authors

1. 📖 Project Overview
This backend API serves as a school management system where:

Teachers can create and manage courses.

Students can enroll in courses.

Admins can manage users and data.

Files can be uploaded either locally or to Cloudinary.

Inspired by a blog platform like MaharahTech but adapted for school-related functionalities.

2. 🛠️ Technologies Used
Node.js & Express – server and routing

MongoDB & Mongoose – database and models

JWT – authentication

Bcryptjs – password hashing

dotenv – environment variables

express-validator – route validation

Joi – schema-based request validation

Multer – file uploading

Cloudinary – cloud-based file storage

Nodemon – development auto-restart

Cors – cross-origin access

3. 📁 Project Structure
bash
Copy
Edit
/school-api
│
├── config/                # DB connection, cloudinary config
├── controllers/           # Logic for routes
├── middlewares/           # Auth, validators, error handling
├── models/                # Mongoose models (User, Course, etc.)
├── routes/                # Express routes
├── uploads/               # Uploaded files (for local storage)
├── utils/                 # Helpers (e.g., file upload)
├── .env                   # Environment variables
├── server.js              # Entry point
4. ⚙️ Environment Setup
.env File
env
Copy
Edit
PORT=5000
MONGO_URI=mongodb://localhost:27017/schoolDB
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=1d
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
5. 🔌 API Endpoints
✅ Auth

Method	Endpoint	Description
POST	/api/auth/register	Register user
POST	/api/auth/login	Login and get JWT
👤 User

Method	Endpoint	Access	Description
GET	/api/users/	Admin	Get all users
GET	/api/users/profile	User	Get my profile
📚 Course

Method	Endpoint	Access	Description
GET	/api/courses/	Public	List all courses
GET	/api/courses/:id	Public	View course
POST	/api/courses/add-course	Teacher	Add new course
PUT	/api/courses/edit-course/:id	Teacher	Edit course
DELETE	/api/courses/delete-course/:id	Teacher	Delete course
📎 Course Attachment

Method	Endpoint	Access	Description
POST	/api/attachments/upload	Teacher	Upload file to course
📥 Enrollment

Method	Endpoint	Access	Description
POST	/api/enrollments/enroll	Student	Enroll in a course
GET	/api/enrollments/my-courses	Student	View enrolled courses
6. ✅ Validation
express-validator: used for simple inline route validation (e.g. courses)

Joi: used in separate schemas for more complex validation (e.g. registration)

7. 🔐 Authentication & Authorization
Uses JWT tokens stored in headers (Authorization: Bearer <token>)

Roles: admin, teacher, student

Middleware: auth, authorizeRoles(...)

8. 📁 File Upload
Local Storage (with Multer)
Files uploaded to /uploads/

Sample usage in utils/uploadLocal.js

Cloudinary Storage
Uses Cloudinary SDK

Upload with:

js
Copy
Edit
cloudinary.uploader.upload(filePath, {
  folder: 'school-attachments'
});
9. 🚨 Error Handling
Custom middleware errorHandler.js

Validations return 400 with error array

JWT failures return 401 Unauthorized

10. 🚀 Deployment Instructions
bash
Copy
Edit
# Clone the repo
git clone https://github.com/your-username/school-api.git

# Navigate to project
cd school-api

# Install packages
npm install

# Set your .env file

# Run in dev mode
npm run dev
11. 📄 License & Authors
Created by [Your Name & Partner]

For Node.js Course Project (ITI/Your Institute)

1 - Add Payment using stripe or paypal
2 - make enrollment pending in enum then admin accept the pending after payment
3 - upload profile photo of user
4 - Filtering by price range
5 - Sorting (e.g., newest first)
6 - Pagination (skip, limit)