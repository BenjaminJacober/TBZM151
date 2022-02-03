import json

from flask import Flask
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/profile')
def my_profile():
    response_body = {
        "name": "Nagato",
        "about" :"Hello! I'm a full stack developer that loves python and javascript"
    }

    return response_body

@app.route('/')
def hello_world():
    return "<p>Test</p>"

@app.route('/stock')
@cross_origin()
def getStock():
    print("got")
    response_body = [
        {
        "name": "Carrotssssss",
        "qrCode": "asdf",
        "unitType": "Kg",
        "amount": 123,
        "bestBeforeDate": "12.05.2003"
        },
        {
            "name": "Carrotssssss",
            "qrCode": "asdf",
            "unitType": "Kg",
            "amount": 123,
            "bestBeforeDate": "12.05.2003"
        },
        {
            "name": "Carrotssssss",
            "qrCode": "asdf",
            "unitType": "Kg",
            "amount": 123,
            "bestBeforeDate": "12.05.2003"
        },
        {
            "name": "Carrotssssss",
            "qrCode": "asdf",
            "unitType": "Kg",
            "amount": 123,
            "bestBeforeDate": "12.05.2003"
        },
        {
            "name": "Carrotssssss",
            "qrCode": "asdf",
            "unitType": "Kg",
            "amount": 123,
            "bestBeforeDate": "12.05.2003"
        },
        {
            "name": "Carrotssssss",
            "qrCode": "asdf",
            "unitType": "Kg",
            "amount": 123,
            "bestBeforeDate": "12.05.2003"
        },
        {
            "name": "Carrotssssss",
            "qrCode": "asdf",
            "unitType": "Kg",
            "amount": 123,
            "bestBeforeDate": "12.05.2003"
        },
    ]
    return response_body

if __name__ == '__main__':
    app.run()
