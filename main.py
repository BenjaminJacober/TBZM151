import json

import flask
from flask import Flask

app = Flask(__name__)

@app.route("/", methods=['GET', 'POST'])
def homePage():
    if(flask.request.method == 'GET'):
        return flask.render_template("home.html")
    if (flask.request.method == 'POST'):
        fname = flask.request.form.get('firstname')
        lname = flask.request.form.get('lastname')
        bdate = flask.request.form.get('birthdate')
        mail = flask.request.form.get('email')
        ahv = flask.request.form.get('ahv')
        pnumber = flask.request.form.get('pnumber')
        section = flask.request.form.get('section')
        job = flask.request.form.get('job')
        return

@app.route("/getPersons", methods=['GET'])
def persons():
    if (flask.request.method == 'GET'):
        file = open("test_data/persons.json")
        data = json.load(file)
        file.close()
        return flask.jsonify(data)



if __name__ == '__main__':
    app.run()

