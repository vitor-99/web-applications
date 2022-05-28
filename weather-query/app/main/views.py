import os

from traitlets import default  
from app.main import main  
from flask import make_response, redirect, render_template, request, current_app, request, url_for, flash
from app.static.py.getWeatherData import getWeather

@main.route("/")
def index(citySearched = None):
    global citySearchedData
    citySearchedData = getWeather('Campinas') #cidade padrão
    if citySearched != None: 
        print(citySearched)
        citySearchedData = getWeather(str(citySearched))

    if citySearchedData == 404:
        #se citySearched retorna um erro de requisição, aqui se trata o erro. 
        citySearchedData = getWeather('Campinas')
        error='cidade inválida!'
        return render_template("pages/weather_page.html", dataWeather=citySearchedData, error=error)

    return render_template("pages/weather_page.html", dataWeather=citySearchedData)


cidades = ''
@main.route('/cidades')
def cidades_info():
    global cidades
    if cidades == '':
        #para evitar várias requisições na api, declara-se cidades como uma variável global. A condição só será executada quando a variável for vazia, ou seja, na primeira execução do código.
        cidades = {
            'curitiba': getWeather('curitiba'), 
            'paranagua': getWeather('paranagua'),
            'londrina': getWeather('londrina'),
            'maringa': getWeather('maringa'),
            'cascavel': getWeather('cascavel'),
            'apucarana': getWeather('apucarana'),
            'sao paulo': getWeather('sao paulo'),
            'campinas': getWeather('campinas'),
            'guarulhos': getWeather('guarulhos'),
            'santos': getWeather('santos'),
        }
    print(cidades)
    return render_template("pages/cidades.html", cidades=cidades)

@main.route('/search', methods=['GET', 'POST'])
def searchCity():
    citySearched = request.form.get("search-input")
    return index(citySearched)