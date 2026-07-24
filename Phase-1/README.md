# Phase 1 - Database Design & Project Setup

## 📌 Overview

Phase 1 focuses on establishing the foundation of the Sports Club Management System by designing the relational database structure, defining entity relationships, applying database constraints, and manually verifying database integrity.

The objective of this phase was to create isolated database tables and validate structural relationships before implementing backend logic or frontend views.

---

# 🎯 Objectives

The main objectives completed in this phase are:

- Setup project environment
- Design relational database schema
- Create database entities
- Define primary and foreign key relationships
- Apply integrity constraints
- Perform manual database testing
- Document database structure and validation results

---

# 🛠️ Technologies Used

## Database

- MySQL 8.0

## Database Management Tool

- MySQL Workbench

## Documentation & Design Tools

- Draw.io (ER Diagram)
- Visual Studio Code

## Version Control

- Git
- GitHub

---

# 🗄️ Database Design

The database consists of three main entities:

## 1. Members Table

Stores information about system users.

Columns:

| Column | Description |
|-|-|
| member_id | Unique member identifier |
| name | Member name |
| email | Member email |
| password_hash | Encrypted password |
| membership_type | Student or Admin role |

---

## 2. SportsClubs Table

Stores available sports clubs.

Columns:

| Column | Description |
|-|-|
| club_id | Unique club identifier |
| club_name | Name of sports club |
| coach_name | Assigned coach |
| max_capacity | Maximum allowed members |

---

## 3. Rosters Table

Acts as the relationship table between members and sports clubs.

Columns:

| Column | Description |
|-|-|
| roster_id | Unique roster identifier |
| member_id | Foreign key referencing Members |
| club_id | Foreign key referencing SportsClubs |
| join_date | Date of enrollment |

---

# 🔗 Database Relationships

The system implements relational relationships:

## Members → Rosters

One member can have multiple roster entries.

## SportsClubs → Rosters

One sports club can have multiple roster entries.

The Rosters table acts as a bridge between members and clubs.

---

# 🔐 Constraints Implemented

## Primary Keys

Implemented on:

- Members.member_id
- SportsClubs.club_id
- Rosters.roster_id


## Foreign Keys

Implemented:

- Rosters.member_id references Members.member_id
- Rosters.club_id references SportsClubs.club_id


## Cascade Rules

Implemented:

```
ON DELETE CASCADE
ON UPDATE CASCADE
```

This ensures related roster records are automatically maintained when parent records are updated or deleted.

---

# 🧪 Manual Testing Performed

Database testing was performed using MySQL Workbench.

Testing included:

- Database creation verification
- Table structure verification
- Data insertion testing
- Foreign key constraint validation
- Join query testing
- Cascade delete testing

---

# 📂 Phase 1 Structure

```
Phase-1
│
├── Database
│   ├── schema.sql
│   ├── sample_data.sql
│   ├── queries.sql
│   └── ER_Diagram.drawio
│
├── Output
│
└── README.md
```

---

# 📸 Output Evidence

The Output folder contains:

- Table structure screenshots
- Query execution results
- Foreign key validation screenshots
- Cascade delete testing screenshots
- ER Diagram

---

# ⚠️ Technology Approach

The provided phase instructions included Django examples; however, the program announcement allowed participants to select their preferred technology stack.

Therefore, this project implements the required relational database design using:

- MySQL database
- SQL schema scripts

Backend development will be implemented in upcoming phases using Node.js and Express.js.

---

# ✅ Phase 1 Completion

Phase 1 successfully established the database foundation of the Sports Club Management System.

The database schema, relationships, constraints, and validation testing have been completed successfully.
