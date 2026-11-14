import sqlite3
import json
from pathlib import Path

BASE_DB = Path(__file__).parent

DB_PATH = BASE_DB / "resturant.db"
JSON_PATH = BASE_DB / "menu.json"

def seed_database():

    conn = sqlite3.connect(DB_PATH)

    cursor = conn.cursor()

    # create table

    cursor.execute("""
        CREATE TABLE IF NOT EXISTS dishes (
            id INTEGER PRIMARY KEY,
            name TEXT NOT NULL,
            description TEXT,
            price INTEGER NOT NULL,
            category TEXT NOT NULL,
            available INTEGER NOT NULL DEFAULT 1
                CHECK (available IN (0, 1))
        );
    """)

    # read the json data

    with open(JSON_PATH, "r", encoding="utf-8") as file:
        dishes = json.load(file)

    # Insert dishes into the table

    cursor.executemany("""
    INSERT INTO dishes (id, name, description, price, category, available)
    VALUES(?, ?, ?, ?, ?, ?)
    """, [(
            dish['id'],
            dish["name"],
            dish["description"],
            dish["price"],
            dish["category"],
            int(dish["available"])
        ) for dish in dishes
    ])

    conn.commit()
    conn.close()

    print("Database seeded successfully!")

if __name__ == "__main__":
    seed_database()