from flask import Blueprint, request, jsonify
import sqlite3
from models import init_db
from budget_engine import calculate_budget

api = Blueprint("api", __name__)

# Initialize database
init_db()

def get_connection():
    return sqlite3.connect("database.db")

@api.route("/create-trip", methods=["POST"])
def create_trip():
    data = request.json
    conn = get_connection()
    cur = conn.cursor()

    cur.execute(
        "INSERT INTO Trip (name, start_date, end_date, budget) VALUES (?,?,?,?)",
        (data["name"], data["start"], data["end"], data["budget"])
    )

    conn.commit()
    conn.close()

    return jsonify({"message": "Trip created successfully"})

@api.route("/add-city", methods=["POST"])
def add_city():
    data = request.json
    conn = get_connection()
    cur = conn.cursor()

    cur.execute(
        "INSERT INTO City (trip_id, name) VALUES (?,?)",
        (data["trip_id"], data["name"])
    )

    conn.commit()
    conn.close()

    return jsonify({"message": "City added successfully"})

@api.route("/add-activity", methods=["POST"])
def add_activity():
    data = request.json
    conn = get_connection()
    cur = conn.cursor()

    cur.execute(
        "INSERT INTO Activity (city_id, name, cost) VALUES (?,?,?)",
        (data["city_id"], data["name"], data["cost"])
    )

    conn.commit()
    conn.close()

    return jsonify({"message": "Activity added successfully"})

@api.route("/budget/<int:trip_id>", methods=["GET"])
def get_budget(trip_id):
    total_cost = calculate_budget(trip_id)

    conn = get_connection()
    cur = conn.cursor()
    cur.execute("SELECT budget FROM Trip WHERE id = ?", (trip_id,))
    budget_limit = cur.fetchone()[0]
    conn.close()

    return jsonify({
        "total_cost": total_cost,
        "remaining_budget": budget_limit - total_cost,
        "status": "OVER BUDGET" if total_cost > budget_limit else "UNDER BUDGET"
    })

from flask import request, jsonify
import sqlite3

def auth_routes(app):

    @app.route("/signup", methods=["POST"])
    def signup():
        data = request.json
        email = data["email"]
        password = data["password"]

        conn = sqlite3.connect("database.db")
        cur = conn.cursor()
        try:
            cur.execute("INSERT INTO users (email, password) VALUES (?, ?)", (email, password))
            conn.commit()
            return jsonify({"message": "Signup successful"})
        except:
            return jsonify({"message": "User already exists"}), 400
        finally:
            conn.close()

    @app.route("/login", methods=["POST"])
    def login():
        data = request.json
        email = data["email"]
        password = data["password"]

        conn = sqlite3.connect("database.db")
        cur = conn.cursor()
        cur.execute("SELECT * FROM users WHERE email=? AND password=?", (email, password))
        user = cur.fetchone()
        conn.close()

        if user:
            return jsonify({"message": "Login successful"})
        else:
            return jsonify({"message": "Invalid credentials"}), 401
