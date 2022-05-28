#Utiliza-se a api 'openWeather', para obter os dados climáticos.

import requests

def getWeather(cidade): 
    resp = requests.get(f"https://api.openweathermap.org/data/2.5/weather?q={cidade}&appid=93c65fd06d6b86dc113d65701951f1f2&units=metric")

    print(resp.status_code)

    if resp.status_code == 404:
        #se retornar not_found, retorna-se o status_code em vez de resp em si. 
        return resp.status_code

    return resp.json()