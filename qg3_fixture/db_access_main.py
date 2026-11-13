import sqlite3
conn = sqlite3.connect("app.db")
user_id = input("id: ")
rows = conn.execute("SELECT * FROM users WHERE id = " + user_id).fetchall()
print(rows)
# QG3-02 recheck
