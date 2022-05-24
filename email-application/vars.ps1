$env:MAIL_SERVER="smtp-mail.outlook.com"
$env:MAIL_PORT=587
$env:MAIL_USE_TLS=1
$env:MAIL_USE_SSL=0
$env:MAIL_USERNAME="vitxr3022@outlook.com"
$env:MAIL_PASSWORD="fakepassword1"
$env:FLASK_CONFIG="default"
  #Assim colocamos as credenciais na variáveis de ambiente. Ou seja, elas estão muito mais seguras.
  #O powershell não aceita true ou false, apenas 1 e 0
  #Podemos acessar os valores pelos terminal usando: .\vars.ps1 e dps $env:MAIL_SERVER (isso no terminal)
  #o arquivo do powershell não 'gosta' de espaço!