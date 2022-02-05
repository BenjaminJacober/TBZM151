import mysql.connector

# Todo: add error handling for connection

connection = mysql.connector.connect(host='localhost',
                                     database='m151',
                                     user='m151',
                                     password='m151')

# todo: Send user id to backend so that we can fetch where needed
def getUserProducts():
    cursor = connection.cursor(dictionary=True)
    cursor.execute(
        "SELECT user.id, products.name, units.unitName, products.costPerUnit, "
        "productsUser.amount, productsUser.bestBefore FROM `productsuser` "
        "inner join `products` on productsuser.idProduct=products.id "
        "inner join `user` on productsuser.idUser=user.id "
        "inner join `units` on productsuser.idProduct=units.id "
        "WHERE user.id = 4;")
    return cursor.fetchall()

def addUserProduct(idUser, productName, amount, unitId):
    cursor = connection.cursor()
    sql = "SELECT id, name FROM products " \
          "WHERE name = '" + productName + "';"
    val = productName
    cursor.execute(sql)
    records = cursor.fetchone()

    productId = None

    if (records != None):
        productId = records[0]
    else:
        sql = "INSERT INTO `products`(`name`, `unitId`, `costPerUnit`) VALUES (%s, %s, %s)"
        val = (productName, unitId, 10)
        cursor.execute(sql, val)
        connection.commit()
        productId = cursor.lastrowid

    if (productId != None):
        sql = "INSERT INTO `productsuser`(`idUser`, `idProduct`, `amount`) VALUES (%s, %s, %s)"
        val = (idUser, productId, amount)
        cursor.execute(sql, val)
        connection.commit()