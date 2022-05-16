from logging import raiseExceptions
from flask import Flask, request, render_template
from cpf import verificaCpf

app = Flask(__name__)
  #__name__ é uma variável interna. Ou seja, é um variável pré-estabelecidadas do python.

@app.route("/")
def index():
     return render_template("index.html")

@app.route('/', methods = ['GET', 'POST'])
def cpf_data():
      if request.method == "POST":
        cpf = request.form.get("cpf")
         #get input com o name do elemento.
         #essa variável armazena o valor do dado informado no input.
      if cpf == '':
         raise Exception("O valor não pode ser nulo")

      res = verificaCpf(cpf)

      return render_template("index.html", res=res, cpf=cpf)

if __name__ == "__main__": 
    app.run(debug=True)