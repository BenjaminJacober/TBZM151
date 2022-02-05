from flask import Flask, jsonify
from flask_cors import CORS, cross_origin
from repositories.stock import getUserProducts, addUserProduct
from flask import request

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/stock')
@cross_origin()
def stock():
    print("got")
    response_body = getUserProducts()
    return jsonify(response_body)

@app.route('/add', methods=['POST'])
@cross_origin()
def add():
    print("got")
    if request.method == "POST":
        productName = request.headers.get("productName")
        userId = request.headers.get("userId")
        amount = request.headers.get("amount")
        unitId = request.headers.get("unitId")
        addUserProduct(userId, productName, amount, unitId)
        print(productName, userId, amount)
        return {}

if __name__ == '__main__':
    app.run()
