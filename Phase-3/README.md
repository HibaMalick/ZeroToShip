# Phase 3 - Operational Business Logic & Club Enrollment Management

## Overview

Phase 3 focuses on implementing the core business logic for the Sports Club Management System. This phase introduces secure CRUD endpoints that allow authenticated members to view available sports clubs, enroll in clubs, and leave clubs.

Business rules are enforced to maintain data integrity, including preventing duplicate enrollments and ensuring that club capacity limits are never exceeded. The enrollment process is executed within a MySQL transaction so that all validation and database operations occur atomically, maintaining consistency even if an error occurs during the process.

All endpoints were developed as REST APIs and thoroughly tested using Postman.

---

## Objectives

The main objectives completed in this phase are:

- Implement club management API endpoints
- Display all available sports clubs
- Allow authenticated members to enroll in sports clubs
- Allow members to leave enrolled clubs
- Prevent duplicate enrollments
- Enforce maximum club capacity constraints
- Execute enrollment using MySQL transactions
- Maintain database consistency using commit and rollback operations
- Protect all club endpoints using JWT authentication
- Verify all APIs through Postman testing

---

## Technologies Used

### Backend
- Node.js
- Express.js

### Database
- MySQL
- mysql2 (Promise API)

### Authentication
- JSON Web Token (JWT)

### Environment Configuration
- dotenv

### Development Tools
- Visual Studio Code
- Postman
- Nodemon
- MySQL Workbench
- Git & GitHub

---

## Project Structure

```text
Phase-3
│
├── Backend
│   ├── src
│   │   ├── controllers
│   │   │   └── clubController.js
│   │   ├── models
│   │   │   └── clubModel.js
│   │   ├── routes
│   │   │   └── clubRoutes.js
│   │   └── app.js
│
├── Output
└── README.md
```

---

## API Endpoints

### Get All Clubs

**GET** `/api/clubs/listings`

Returns a list of all available sports clubs. This endpoint requires a valid JWT token.

---

### Enroll in Club

**POST** `/api/clubs/enroll`

Allows an authenticated member to enroll in a sports club.

Before enrollment, the system validates:

- Club exists
- Member is not already enrolled
- Club has available capacity

If all validations succeed, the member is added to the club roster.

---

### Leave Club

**DELETE** `/api/clubs/leave/:clubId`

Removes the authenticated member from the selected sports club.

---

## Business Logic

The enrollment process includes several validation steps before inserting data into the database.

The application performs the following checks:

- Verify that the requested club exists.
- Check whether the member is already enrolled.
- Count the current number of enrolled members.
- Compare the current count with the club's maximum capacity.
- Allow enrollment only if space is available.

These rules ensure that invalid or duplicate enrollments cannot occur.

---

## Transaction Management

The enrollment process is executed within a MySQL transaction.

The transaction performs the following operations:

1. Begin Transaction
2. Validate club existence
3. Check duplicate enrollment
4. Verify club capacity
5. Insert roster record
6. Commit Transaction

If any validation or database operation fails, the transaction is rolled back automatically to maintain database consistency.

---

## Authentication

All Phase 3 endpoints are protected using JWT authentication middleware.

Only authenticated members with a valid token can:

- View club listings
- Enroll in clubs
- Leave clubs

Unauthorized requests are rejected before accessing the business logic.

---

## Testing Performed

The following API tests were completed successfully using Postman:

- Retrieve all sports clubs
- Successful club enrollment
- Duplicate enrollment validation
- Leave club successfully
- Re-enroll after leaving
- Club capacity validation
- JWT authentication verification

---

## Output Evidence

The `Output` folder contains screenshots demonstrating:

- Club listings retrieved successfully
- Successful enrollment
- Duplicate enrollment prevented
- Successful club withdrawal
- Successful re-enrollment
- Capacity validation when the club is full
