import flask
from flask import Flask
app = Flask(__name__)

@app.route("/")
def page():
    return flask.render_template("home.html")

if __name__ == '__main__':
    app.run()

