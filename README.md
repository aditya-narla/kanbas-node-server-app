# Kanbas Tool

Welcome to the Kanbas Tool repository! This project is a robust Learning Management System (LMS) built using the MERN stack, which comprises MongoDB, Express, React, and Node.js.

## Table of Contents

- [Features](#features)
- [Architecture](#architecture)
- [Hosting](#hosting)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Learning Management System (LMS)**: A comprehensive LMS with features to manage courses, users, and roles.
- **CRUD Functionality**: Create, Read, Update, and Delete operations for various entities within the system.
- **Role-Based Access Control**: Secure access control to manage different user roles and permissions.
- **User Management**: Efficient user management system to handle user registrations, logins, and profiles.

## Architecture

The application is architectured using the MERN stack:

- **MongoDB**: A NoSQL database to store data.
- **Express**: A web application framework for Node.js that handles the backend.
- **React**: A JavaScript library for building user interfaces and handling the frontend.
- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine to handle server-side operations.

## Hosting

The application is hosted on the following platforms:

- **Frontend**: Hosted on Netlify, ensuring a fast and reliable user experience.
- **Backend**: Hosted on Render, providing a scalable and secure backend service.
- **Database**: MongoDB Atlas is used to manage the database, supporting 100+ concurrent users.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:

   ```sh
   git clone https://github.com/aditya-narla/kanbas-react-web-app.git
   cd kanbas-react-web-app
   ```

2. **Install dependencies**:

   # Install backend dependencies
   ```sh
   cd backend
   npm install
   ```

   # Install frontend dependencies
   ```sh
   cd ../frontend
   npm install
   ```

4. **Set up environment variables**:
   - Create a `.env` file in the `backend` directory and add the following variables:

     ```sh
     MONGO_URI=<your-mongodb-uri>
     JWT_SECRET=<your-jwt-secret>
     ```

5. **Run the application**:

   # Run backend server
   ```sh
   cd backend
   npm start
   ```

   # Run frontend server
   ```sh
   cd ../frontend
   npm start
   ```

7. **Access the application**:
   Open your browser and navigate to `http://localhost:3000` to access the frontend.

## Usage

- **Admin**: Manage courses, users, and roles.
- **Instructor**: Create and manage courses.
- **Student**: Enroll in courses and view content.

## Contributing

We welcome contributions to improve the Kanbas React Web App. To contribute, follow these steps:

1. **Fork the repository**.
2. **Create a new branch**:

   ```sh
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**.
4. **Commit your changes**:

   ```sh
   git commit -m "Add your message here"
   ```

5. **Push to the branch**:

   ```sh
   git push origin feature/your-feature-name
   ```

6. **Create a pull request**.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

Thank you for using the Kanbas Tool! If you have any questions or feedback, feel free to open an issue or contact me.
