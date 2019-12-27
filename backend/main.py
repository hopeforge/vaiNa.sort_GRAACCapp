from sanic import Sanic
from sanic.response import json
from sanic_cors import CORS
import config


app = Sanic()
CORS(app)

@app.get('/penalizacoes')
def penalizacoes_get(requests):

    config.mycursor.execute("SELECT * FROM {}".format(config.table_fetch))
    return json(config.mycursor.fetchall())


@app.put('/penalizacoes/<entry_id>')
def penalizacoes_put(request, entry_id):

    db_query = "UPDATE {} SET favorito = {} WHERE id = {}".format(config.table_fetch,
                                                                  request.json["favorito"],
                                                                  entry_id)

    config.mycursor.execute(db_query)
    config.mydb.commit()

    return json({"response": "Success"})


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=8000)
