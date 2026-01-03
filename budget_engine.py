import sqlite3

def calculate_budget(trip_id):
    conn = sqlite3.connect("database.db")
    cur = conn.cursor()

    cur.execute("""
    SELECT SUM(Activity.cost)
    FROM Activity
    JOIN City ON Activity.city_id = City.id
    WHERE City.trip_id = ?
    """, (trip_id,))

    total_cost = cur.fetchone()[0]
    conn.close()

    return total_cost if total_cost else 0
