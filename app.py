from flask import Flask
from models import init_db
from routes import init_routes

app = Flask(__name__)
init_db(app)
init_routes(app)

if __name__ == '__main__':
    app.run(debug=True)