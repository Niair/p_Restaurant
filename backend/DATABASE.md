uv run python

>>> import sqlite3
>>> conn = sqlite3.connect("resturant.db")

>>> cursor = conn.cursor()
>>> cursor.execute(""" 
... CREATE TABLE IF NOT EXISTS dishes (
...     id INTEGER PRIMARY KEY,
...     name TEXT NOT NULL,
...     description TEXT,
...     price INTEGER NOT NULL,
...     category TEXT NOT NULL,
...     available INTEGER NOT NULL DEFAULT 1
... );
... """)

>>> conn.commit()

>>> cursor.execute("""
... INSERT INTO dishes
... (id, name, description, price, category, available)
... VALUES (6, 'Paneer Tikka', 'Grilled paneer with spices', 250, 'starters', 1)
... """)
>>> conn.commit()    

>>> cursor.execute(""" SELECT * FROM dishes """)
>>> rows = cursor.fetchall()

>>> for r in rows: print(r)
... 
(6, 'Paneer Tikka', 'Grilled paneer with spices', 250, 'starters', 1)
>>> for row in rows:
...     print(row)
... 
(6, 'Paneer Tikka', 'Grilled paneer with spices', 250, 'starters', 1)

>>> cursor.execute("""
... UPDATE dishes     
... SET price = 275
... WHERE id = 6;
... """)              
>>> conn.commit()

>>> conn.close()
>>> exit()