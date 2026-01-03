# Neural-Minds

🌍 GlobeTrotter Lite

GlobeTrotter Lite is a lightweight trip planning web application that allows users to create trips, manage itineraries, track budgets, and visualize travel plans through an interactive dashboard.

Demo Video link : https://drive.google.com/drive/u/0/folders/1Uey4Vv4YJ-X41LKLEQ6Tx0AheqnB2YPR

This project is ideal for hackathons, academic projects, and portfolio demonstrations.

🚀 Features
🧭 Trip Management

Create new trips with name, dates, and budget

View all trips from the dashboard

Delete trips when no longer needed

💰 Budget Tracking

View total budget and remaining budget

Cost breakdown by transport, stay, food, and activities

Visual budget bars for easy understanding

🗓️ Timeline / Calendar View

Day-wise trip itinerary

Timeline-style visualization of activities

🔗 Shared Itinerary

Public, read-only trip view

Shareable itinerary link

Option to copy an existing trip

👤 User Profile

View and update profile details

Profile picture display

Preferences & settings page

🎨 Modern UI

Blue gradient background

Card-based layout

Responsive and clean design

Beginner-friendly frontend structure

🛠️ Tech Stack
Frontend

HTML5

CSS3

JavaScript (Vanilla JS)

Backend

Python (Flask)

SQLite database

Flask-CORS

project structure

GlobeTrotter-Lite/
│
├── backend/
│   ├── app.py                # Main server entry point
│   ├── budget_engine.py      # Automated budget estimation logic
│   ├── database.db           # Relational database (SQLite)
│   ├── models.py             # Database schema & table relationships
│   ├── routes.py             # API endpoints for trips and users
│   └── requirements.txt      # Backend dependencies
│
├── frontend/
│   ├── activity_search.html  # Activity discovery screen
│   ├── admin.html           # (Optional) Analytics dashboard
│   ├── budget.html          # Financial breakdown & charts
│   ├── city_search.html     # Destination search screen
│   ├── dashboard.html       # Central hub/home screen
│   ├── index.html           # Landing page
│   ├── itinerary_view.html  # Structured plan view
│   ├── itinerary.html       # Day-wise plan builder
│   ├── login.html           # Authentication entry
│   ├── mytrips.html         # Trip list view
│   ├── profile.html         # User settings & preferences
│   ├── shared_itinerary.html# Public/Sharable trip view
│   ├── signup.html          # User registration
│   ├── timeline.html        # Visual journey timeline
│   ├── trip_summary.html    # Quick trip overview
│   │
│   ├── css/
│   │   └── style.css        # Professional global styling
│   │
│   └── js/
│       ├── activity.js      # Activity search functionality
│       ├── app.js           # Core frontend logic
│       ├── budget.js        # Budget calculations & charts
│       ├── city.js          # City search functionality
│       ├── dashboard.js     # Dashboard state management
│       ├── itinerary_view.js# Itinerary rendering logic
│       ├── itinerary.js     # Builder interaction logic
│       ├── mytrips.js       # Trip list management
│       ├── profile.js       # User preference logic
│       ├── shared.js        # Public link/sharing logic
│       └── timeline.js      # Visual timeline interactivity
│
└── ReadMe.txt               # Project documentation

How to Run the Project
1️⃣ Start Backend (Flask)
cd backend
python3 app.py

Backend should show:

GlobeTrotter Lite Backend is Running 🚀

Runs on:

http://127.0.0.1:5000

2️⃣ Start Frontend Server
cd frontend
python3 -m http.server 8000

Open in browser:

http://127.0.0.1:8000/dashboard.html

🔍 How to Check if Everything Works

✅ Create a trip → success message

✅ See trip listed on dashboard

✅ Enter Trip ID → view budget

✅ Open budget, timeline, shared itinerary pages

✅ Backend logs show API calls

✅ SQLite database updates automatically

| Method | Endpoint       | Description     |
| ------ | -------------- | --------------- |
| GET    | `/`            | Backend status  |
| POST   | `/create-trip` | Create new trip |
| GET    | `/trips`       | Get all trips   |
| GET    | `/budget/<id>` | Budget details  |
| DELETE | `/trip/<id>`   | Delete trip     |

🎯 Future Enhancements

Authentication (Login / Signup)

Real activity & city search APIs

Drag-and-drop timeline

Charts using Chart.js

Cloud database support

Admin analytics dashboard

Author

Keerthi Shree T S
Computer Science Student | Aspiring Entrepreneur 🚀

my teammates:
jayadharani 
keerthana


