import sqlite3
from flask import Flask, request, render_template

conn = sqlite3.connect('test.db')
cur = conn.cursor()
cur.execute("select * from result")
rows = cur.fetchall()

app = Flask(__name__)

@app.route('/')
def home():
    TYPE = rows[0][1]
    Desc = rows[0][2]
    return render_template('index.html', type=TYPE, desc=Desc)

if __name__ == '__main__':
    app.run(debug=True)
    

conn.close()