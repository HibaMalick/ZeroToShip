# Phase 2 - Authentication & Backend Authorization

## Overview

Phase 2 focuses on building the fundamental backend server structure, secure user onboarding, and internal authorization controls for the Sports Club Management System.

This phase was implemented as a headless backend and tested using Postman. The main goal was to create secure authentication routes for registration and login, followed by custom middleware to protect administrative routes from unauthorized access.

---

## Objectives

The main objectives completed in this phase are:

- Set up the backend server structure
- Configure the Express application with MySQL
- Implement secure user registration
- Implement secure user login
- Hash passwords using bcrypt
- Generate JWT tokens for authenticated sessions
- Create authentication middleware
- Create role-based authorization middleware
- Restrict admin-only routes
- Verify all APIs using Postman

---

## Project Structure

```text
Phase-2
│
├── Backend
│   ├── src
│   │   ├── config
│   │   │   └── db.js
│   │   ├── controllers
│   │   │   └── authController.js
│   │   ├── middleware
│   │   │   ├── authMiddleware.js
│   │   │   └── roleMiddleware.js
│   │   ├── models
│   │   │   └── memberModel.js
│   │   ├── routes
│   │   │   ├── authRoutes.js
│   │   │   └── adminRoutes.js
│   │   ├── utils
│   │   │   └── jwt.js
│   │   └── app.js
│   ├── server.js
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   └── package-lock.json
│
├── Output
└── README.md
---
## Authentication Flow

### Registration
The registration API accepts user details, validates the input, checks for duplicate email addresses, hashes the password using bcrypt, and stores the member in the MySQL database.

### Login
The login API verifies the provided email and password, compares the password against the stored bcrypt hash, and generates a JWT token upon successful authentication.

### Authorization
The custom middleware checks the JWT token and user role before allowing access to admin-only routes.

---

## API Endpoints

### Public Authentication Routes

#### `POST /api/auth/register`
Registers a new member.

#### `POST /api/auth/login`
Authenticates an existing member and returns a JWT token.

### Protected Admin Route

#### `GET /api/admin/dashboard`
Accessible only to authenticated users with the `Admin` role.

---

## Middleware

### `authMiddleware.js`
This middleware verifies the JWT token sent in the `Authorization` header. If the token is missing, invalid, or expired, the request is blocked with a `401 Unauthorized` response.

### `roleMiddleware.js`
This middleware checks whether the authenticated user has the `Admin` membership type. If not, access is blocked with a `403 Forbidden` response.

---

## Testing Performed

The following tests were completed in Postman:

- Successful user registration
- Duplicate email validation
- Successful login
- Invalid password handling
- Login token generation
- Protected route access without token
- Protected route access with student token
- Protected route access with admin token

---

## Output Evidence

The `Output` folder contains screenshots and evidence of:

- Server running successfully
- Register API success response
- Login API success response
- Invalid login test
- Missing token test
- Student access forbidden test
- Admin access granted test

---

---

## Conclusion

Phase 2 successfully established a secure backend foundation for the Sports Club Management System.

