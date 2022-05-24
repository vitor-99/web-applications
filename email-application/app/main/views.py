import os
from app.main import main
from app import mail
from flask import render_template, request, current_app
from flask_mail import Message, Mail
from config import config

@main.route('/')
def index():
    return render_template('index.html')

@main.route('/', methods=['POST'])   
def sendEmail():
    if request.method == 'POST':
        nome = request.form.get('name')
        email = request.form.get('email')
        message = request.form.get('message')

        print(f"mail => {mail}")

        msg = Message("Email system - vitor", sender="vitxr3022@outlook.com", recipients=[email])
        msg.body = f"nome: {nome};\n email: {email};\n message: {message};\n"
    
        """with main.open_resource("static/img/Screenshot_1.png") as print:
           msg.attach('static/img/Screenshot_1.png', 'application/jpeg', print.read())
              #é assim que se envia imagem na mensagem."""
        #mail.connect()
        mail.send(msg)

    return render_template('mail.html')