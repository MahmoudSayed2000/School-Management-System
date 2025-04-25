
# 🎓 School Management System API

A backend RESTful API for managing a school system where students can enroll in courses, teachers can manage their own courses, and admins oversee users and data. Built using Node.js, Express, MongoDB, and more.

## 📦 Technologies Used

- Node.js & Express – server and routing
- MongoDB & Mongoose – database and models
- JWT for authentication 
- Bcrypt.js for password hashing
- dotenv for environment config
- express-validator & Joi for validation
- Multer & Cloudinary for file uploads
- Nodemon for development
- CORS for cross-origin resource sharing

## 📁 Project Structure

```
/school-api
├── config/                # DB & Cloudinary setup
├── controllers/           # Route logic
├── middlewares/           # Auth, validation, errors
├── models/                # Mongoose schemas
├── routes/                # API route handlers
├── uploads/               # Local file uploads
├── utils/                 # File upload helpers
├── .env                   # Secrets & keys
├── server.js              # App entry point
```

## ⚙️ Setup

1. Clone the repository
```bash
git clone https://github.com/your-username/school-api.git
cd school-api
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file in the root:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/schoolDB
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=1d
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

4. Run the server
```bash
npm run dev
```

## 🔐 Auth Endpoints

| Method | Endpoint             | Description         |
|--------|----------------------|---------------------|
| POST   | `/api/auth/register` | Register new user   |
| POST   | `/api/auth/login`    | Login & get token   |

## 👤 User Endpoints

| Method | Endpoint             | Access | Description      |
|--------|----------------------|--------|------------------|
| GET    | `/api/users/`        | Admin  | List all users   |
| GET    | `/api/users/profile` | User   | Get user profile |

## 📚 Course Endpoints

| Method | Endpoint                      | Access   | Description      |
|--------|-------------------------------|----------|------------------|
| GET    | `/api/courses/`               | Public   | List all courses |
| GET    | `/api/courses/:id`            | Public   | View course      |
| POST   | `/api/courses/add-course`     | Teacher  | Add new course   |
| PUT    | `/api/courses/edit-course/:id`| Teacher  | Edit course      |
| DELETE | `/api/courses/delete-course/:id`| Teacher| Delete course    |

## 📎 Course Attachments

| Method | Endpoint                  | Access  | Description            |
|--------|---------------------------|---------|------------------------|
| POST   | `/api/attachments/upload` | Teacher | Upload files to course |

## 📥 Enrollment

| Method | Endpoint                      | Access  | Description         |
|--------|-------------------------------|---------|---------------------|
| POST   | `/api/enrollments/enroll`     | Student | Enroll in a course  |
| GET    | `/api/enrollments/my-courses` | Student | List my enrollments |

## 🛡️ Validation

- **Joi** is used in schemas for detailed object validation.
- **express-validator** is used directly in route files for quick checks.

## 🗂️ Uploads

- **Multer** handles both local and Cloudinary uploads.
- Local files stored in `/uploads`
- Cloudinary files uploaded via `cloudinary.uploader.upload()`

## 🚨 Error Handling

- Centralized error middleware
- All validation, JWT, DB errors are handled gracefully

## 🚀 Deployment

```bash
git clone https://github.com/your-username/school-api.git
cd school-api
npm install
npm run dev
```

## 👥 Authors

Created by Mahmoud Mohamed Sayed & Osama Mohamed Ali
For the Node.js Backend Course Final Project.

## 📄 License

This project is licensed under the MIT License.
