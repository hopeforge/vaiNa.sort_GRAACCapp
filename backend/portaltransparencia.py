import requests
import os
import config
import re

CURRENT_FOLDER = os.path.dirname(__file__)

URL = "http://www.transparencia.gov.br/api-de-dados/cnep"

PARAMETERS = {
    "pagina": 1
}

def update_data():

    resp = requests.get(URL, params=PARAMETERS)
    resp = resp.json()

    while len(resp) > 0:

        outputs = []

        for entry in resp:

            output = {}

            for key in config.db_fields:

                fields = key.split("_")
                levels = len(fields)

                temp = entry[fields[0]]

                for i in range(1, levels):
                    temp = temp[fields[i]]

                if temp == "":
                    temp = "Sem Informação"

                elif type(temp) == str and re.match(r"^[\d\,\.]+$", temp):
                    temp = temp.replace(".", "")
                    temp = temp.replace(",", ".")

                output[key] = temp

            if output["pessoa_razaoSocialReceita"] == "RUCKUS WIRELESS,INC" and output["pessoa_municipio_uf_sigla"] == "-1":
                output["pessoa_municipio_uf_sigla"] = "SC"

            outputs.append(output)

        columns = ",".join(list(outputs[0].keys()))
        values = ",".join(["(\"" + "\",\"".join([str(entry).replace("\"", "\\\"") for entry in out.values()]) + "\")"
                           for out in outputs])

        db_query = "INSERT INTO {} ({}) VALUES{};".format(config.table_save, columns, values)

        config.mycursor.execute(db_query)
        config.mydb.commit()

        print(config.mycursor.rowcount)

        PARAMETERS["pagina"] += 1
        resp = requests.get(URL, params=PARAMETERS)
        resp = resp.json()
