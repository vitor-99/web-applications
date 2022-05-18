def verificaCpf(cpf):
    global num
    num = 10 
      #num é o valor para multiplicação, de 10 à 2 e de 11 à 2

    while num < 12:
       #A primeira iteração verifica o primeiro dígito pós '-'. A segunda, o segundo dígito.
       global mediaP
       mediaP = 0 

       i = 0
       aux = num
       while aux >= 2:
            #esse loop servirá para fazer a média ponderada.          
            mediaP = mediaP +(int(cpf[i]) * aux) 
            aux -= 1
            i += 1
     
       verificador = 11 - (mediaP % 11) if (11 - (mediaP % 11)) < 10 else 0    
       posV = 'primeiroV' if num == 10 else 'segundoV' 
          #posV servirá para verificar se estamos trabalhando com o primeiro verificador ou o segundo. Ela recebe 'primeiroV' na primeira iteração, e 'segundoV' na segunda. 
       res = verificaVerificador(cpf, verificador, posV)

       num += 1 

    if len(cpf) != 11: 
      print('quantidade de números do cpf inválida. Somente 11 digitos são permitidos')
    else:    
      if(res == True):
         #Eu fiz o retorno da função ser true, para que seja mais intuitivo na hora de eu importar ela no exercício de classe.  
         return True
      return False 

def verificaVerificador(cpf, verificador, posV):
    #Essa função verifica se o verificador é igual aos últimos dois dígitos do cpf.
    global boolV1, boolV2
       #Essas váriaveis servirá para saber se os verificadores realmente são iguais ao do cpf

    if(posV == 'primeiroV'):
       boolV1 = False
       if(verificador == int(cpf[9])):
          boolV1 = True
      
    if(posV == 'segundoV'): 
       boolV2 = False
       if(verificador == int(cpf[10])):
          boolV2 = True
          if(boolV1 == True & boolV2 == True):
              return True      
              #Precisa se colocar o retorno aqui, pois a função é chamada duas vezes e queremos fazer essa condição na segunda vez que ela for chamada, já que teremos os dois verificadores 
  