//Aqui fica a classe da calculadora de porcentagem.
export default class Calculadora {
    //os métodos estáticos funcionam como funções independentes da classe. Ou seja, isso é uma classe apenas com métodos estáticos, para facilitar na hora de chamar as funções
    //o default é um método padrão de export, podemos fazê-lo seme ele também, mas lá no arquivo que vamos importar é preciso colocar o nome da função/classe/variável importada entre {} 
    static calcNormal(valor, porc) { 
       return valor*(porc/100)
    } 
    static calcAumentar(valor, porc) {
        return parseInt(valor)+(parseInt(valor)*(porc/100))
        //É preciso dizer que o retorno de um elemento HTML é sempre uma string, mesmo que o input, por exemplo, seja do tipo number. Na verdade, informar o tipo no HTML é somente para o browser saber a forma que deve apresentar o input ao usuário. Por isso, precisei tranformar valor2 para inteiro. Entretanto, no calcNormal, é possível fazer a conta mesmo sendo com string. Acredito que isso aconteça porque o JavaScript consiga entender que aquilo é um número e faz a conta normalmente (afinal, pega-se o .value do elemento), mas entra em conflito quando envolve o operador '+', já que ele serve para concatenar também. 
    } 
    static calcDiminuir(valor, porc) {
        return parseInt(valor)-(parseInt(valor)*(porc/100))
    } 
}