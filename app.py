from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3

app = Flask(__name__)

# Allow frontend (port 8000) to talk to backend (port 5000)
CORS(app, resources={r"/*": {"origins": "*"}})

DATABASE = "database.db"


# =========================
# DATABASE INITIALIZATION
# =========================
def init_db():
    conn = sqlite3.connect(DATABASE)
    cur = conn.cursor()
    cur.execute("""
        CREATE TABLE IF NOT EXISTS trips (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            start_date TEXT,
            end_date TEXT,
            budget INTEGER
        )
    """)
    conn.commit()
    conn.close()


# Initialize DB when backend starts
init_db()


# =========================
# HOME
# =========================
@app.route("/", methods=["GET"])
def home():
    return "GlobeTrotter Lite Backend is Running 🚀"


# =========================
# CREATE TRIP
# =========================
@app.route("/create-trip", methods=["POST", "OPTIONS"])
def create_trip():
    if request.method == "OPTIONS":
        return jsonify({"status": "ok"}), 200

    data = request.json

    name = data.get("name")
    start = data.get("start")
    end = data.get("end")
    budget = data.get("budget")

    if not all([name, start, end, budget]):
        return jsonify({"error": "Missing trip details"}), 400

    conn = sqlite3.connect(DATABASE)
    cur = conn.cursor()

    cur.execute(
        "INSERT INTO trips (name, start_date, end_date, budget) VALUES (?, ?, ?, ?)",
        (name, start, end, budget)
    )

    conn.commit()
    conn.close()

    return jsonify({"message": "Trip created successfully"}), 200


# =========================
# GET ALL TRIPS
# =========================
@app.route("/trips", methods=["GET"])
def get_trips():
    conn = sqlite3.connect(DATABASE)
    cur = conn.cursor()

    cur.execute("SELECT id, name, start_date, end_date, budget FROM trips")
    rows = cur.fetchall()
    conn.close()

    trips = []
    for row in rows:
        trips.append({
            "id": row[0],
            "name": row[1],
            "start_date": row[2],
            "end_date": row[3],
            "budget": row[4]
        })

    return jsonify(trips), 200


# =========================
# BUDGET DETAILS
# =========================
@app.route("/budget/<int:trip_id>", methods=["GET"])
def budget(trip_id):
    conn = sqlite3.connect(DATABASE)
    cur = conn.cursor()

    cur.execute("SELECT budget FROM trips WHERE id = ?", (trip_id,))
    row = cur.fetchone()
    conn.close()

    if not row:
        return jsonify({"error": "Trip not found"}), 404

    budget = row[0]

    return jsonify({
        "total_cost": 0,
        "remaining_budget": budget,
        "status": "UNDER BUDGET"
    }), 200


# =========================
# DELETE TRIP
# =========================
@app.route("/trip/<int:trip_id>", methods=["DELETE"])
def delete_trip(trip_id):
    conn = sqlite3.connect(DATABASE)
    cur = conn.cursor()

    cur.execute("DELETE FROM trips WHERE id = ?", (trip_id,))
    conn.commit()
    conn.close()

    return jsonify({"message": "Trip deleted"}), 200


# =========================
# RUN SERVER
# =========================
if __name__ == "__main__":
    app.run(debug=True)
