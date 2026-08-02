# Phase 4 — Static Visual Presentation Layer

## Sports Club Management System

Phase 4 implements the complete static visual presentation layer for the
Sports Club Management System.

The objective of this phase is to transform the functional backend-oriented
system into a professional and responsive user interface while maintaining
strict separation between the presentation layer and the backend services.

The interfaces in this phase are intentionally built using custom mock data
variables. No live backend API integration is performed in Phase 4.

---

## Phase 4 Objectives

The following objectives were completed:

- Build a complete Student Member Portal dashboard.
- Build a separate Administrative Workspace.
- Implement professional static layouts using HTML and CSS.
- Use vanilla JavaScript for dynamic rendering of mock data.
- Display available sports and club information.
- Display training schedules and timing windows.
- Provide a static sport registration interface.
- Display mock active memberships.
- Display mock administrative membership requests.
- Display tabular club roster information.
- Provide mock administrative user-management actions.
- Provide club capacity information.
- Maintain a decoupled presentation layer before live backend integration.

---

# 1. Technology Stack

## Frontend

- HTML5
- CSS3
- Vanilla JavaScript

## Data Source

Custom JavaScript mock data variables.

---

# 2. Project Structure

```text
Phase-4/
│
├── templates/
│   ├── student.html
│   └── admin.html
│
├── static/
│   ├── css/
│   │   └── style.css
│   │
│   └── js/
│       ├── student.js
│       └── admin.js
│
├── Output/
│   ├── student-dashboard.png
│   ├── student-sports.png
│   ├── student-registration.png
│   ├── student-schedule.png
│   ├── student-memberships.png
│   ├── admin-requests.png
│   ├── admin-roster.png
│   ├── admin-user-management.png
│
└── README.md

---

Student Member Portal

The Student Portal is designed as a clean and responsive member dashboard.
It includes sport selection cards showing coaches, available spaces,
capacity status, and training times. A registration form allows students to
select a sport and preferred training window and submit a mock registration
request. Training schedules and active memberships are also rendered from
custom JavaScript mock data.

Administrative Workspace

The Administrative Workspace provides a separate interface for managers.
Mock membership requests are displayed with approve and reject actions,
while the roster section provides member information in a searchable and
filterable table. Additional administrative interface elements include
user management actions and visual club capacity indicators.

Mock Data and Interactions

All information displayed in Phase 4 is generated from custom JavaScript
mock data variables. Vanilla JavaScript is used to render the dashboards and
provide presentation-layer interactions such as sport selection,
registration feedback, membership request actions, roster searching,
club filtering, and capacity visualization.

