var ant="acao";
  //ant é uma variável referente ao 'tipo' anterior, que servirá para verificar se o usuário já clicou em um dos operadores. Ela impede que haja a digitação de vários operadores, permitindo apenas um. 

function calcular(tipo, valor) {
     //tipo: recebe valor ou ação, informando o que o próximo parâmetro. Ação seria o cálculo, o valor seria os números. 
     //valor: valor do parâmetro tipo (números ou operações.)
    if(ant==="acao") {
      if (valor === "c"){
        document.getElementById("resultado").value = "";
        //limpa o resultado (clean).
        //foi necessário add o btn de clean aqui também, pois permite o usuário apagar o reader enquanto digita a expressão matemática. 
      }
      document.getElementById("resultado").value += "";
    } 

    if (tipo === "acao" && ant != "acao") {
       //ação são as operações.
      ant=tipo;
      if (valor === "c"){
        document.getElementById("resultado").value = "";
          //limpa o resultado (clean).
      }
      if (
        valor === "/" ||
        valor === "*" ||
        valor === "-" ||
        valor === "+" ||
        valor === "."
      ) {
          //Se valor recebe operador como parâmetro, soma-se o valor no leitor (input). É apenas uma concatenação.
        document.getElementById("resultado").value += valor;
      }
      if (valor === "=") {
          //Quando o botão '=' for clicado, usa-se o método eval para transformar a string do leitor em uma expressão matemática. Ou seja, tudo o que foi implementado como string no leitor, torna-se um resultado desse cálculo.
        let campResult = eval(document.getElementById("resultado").value);
        document.getElementById("resultado").value = campResult;
        ant=''; //reset var ant. 
      }
    } else if (tipo === "valor") {
        //Se o tipo for valor, apenas adiciona-se o valor, como string, no leitor. Ou seja, implementação de números no HTML. 
      document.getElementById("resultado").value += valor;
      ant='';
    }
}
  