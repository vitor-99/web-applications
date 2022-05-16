//variáveis das div's das médias:
var allDivs=document.querySelectorAll(".div-calcMedia") //todas divs

var bimestre=allDivs[0]
var trimestre=allDivs[1]
var outrasFormas=allDivs[2]
    //Divs individuais.
    //Essas variáveis apontam para os span's (usado como botões). A partir deles, faz-se as funções de abrir a div para o cálculo.

var spnOpcao=document.querySelectorAll(".spn-opcao");
   //para facilitar o processo de abrir as divs, coloquei todos os 'botões' numa mesma variável. Irei usar o indice para indica-las precisamente, quando quiser abrir elas.   

spnOpcao.forEach((value, index) => {
    //Para cada elemento span, adiciona-se um evento de click.
    spnOpcao[index].addEventListener("click", function(){
       openCalcDiv(index)
    });
       //Para poder passar parâmetros no EventListener, é preciso usar uma função anônima como acima. Caso contrário, não dará certo.
});

function openCalcDiv(index) {
    console.log(index)
    //Essa função abrirá a div, onde o usuário realizará o cálculo.
    //Obs: faça, por meio de uma estrutura if, abrir divs diferentes. Ou seja, quero utilizar a mesma estrutura para abrir 3 divs diferentes. Isso poderá ser de acordo com o valor do index. 
    console.log(bimestre.style.display)
    console.log(trimestre.style.display)
    console.log(outrasFormas.style.display)
    if(index==0) {
       //Se o botão (spnOpcao), do indice zero, ter no innerHTML o valor da condição, o comando a seguir é executado.
       bimestre.style.display='flex';
    } else if(index==1) {
       trimestre.style.display='flex';
    } else if(index==2) {
       outrasFormas.style.display='flex';
    }
}

function closeDiv(elemento) {
    //fecha a div de acordo com o valor do parâmetro elemento.
    //Essa função é um 'onclick', que recebe, no html, valores referentes a sua div. Por exemplo, o span de fechar div estará dentro de determinada div, elemento recebe o valor referente a essa div. Ou seja, com essa função, pode-se fechar 3divs diferentes.
     switch(elemento) {
         case "bimestre":
            bimestre.style.display='none';
         case "trimestre":
            trimestre.style.display='none'
         case "outrasFormas":
            outrasFormas.style.display='none';  
     }
}

//Funções de cálculos das divs:
var allBtns=document.querySelectorAll('.btn-calcMed'); //todos btn calcular
var allResults=document.querySelectorAll(".resultado")
var allBtn_recalc=document.querySelectorAll(".btn-recalc") 
    //Para reutilizar as funções, criei variáveis que pegam todos os botões, resultados, inputs, etc. Irei separar cada uma de acordo com os indíceis, como visto abaixo. Assim, posso reaproveitar as funções.   

var btn_medBimestral=allBtns[0];
var btn_medTrimestral=allBtns[1];
var btn_medOutrasFormas=allBtns[2];

var resBimestre=allResults[0];
var resTrimestre=allResults[1];
var resOutrasFormas=allResults[2];
    //divs onde aparecerá o resultado. Inicialmente, ela tem display=none.

var btnRecalc_bi=allBtn_recalc[0];
var btnRecalc_tri=allBtn_recalc[1];
var btnRecalc_outrasFormas=allBtn_recalc[2];


var input;
var notas=[]; 
    //Notas é o array onde será armazenado todos os dados do input
var media, totalMedia=0; 
    //variáveis para armazenar a média individual(do bimestre, trimestre, etc) e a total.


btn_medBimestral.addEventListener("click", function() {
   btn_medBimestral.style.display='none'; 
   resBimestre.style.display='flex';

      //Retira-se o botão para mostrar o resultado
   btnRecalc_bi.style.display='flex';
      //exibe o botão de recalcular.
      
   calculo(resBimestre) 
      //chama a função calculo.     
})

btn_medTrimestral.addEventListener("click", function() {
   btn_medTrimestral.style.display='none'; 
   resTrimestre.style.display='flex';

   btnRecalc_tri.style.display='flex'; 

   calculo(resTrimestre)     
})

btn_medOutrasFormas.addEventListener("click", function() {
   btn_medOutrasFormas.style.display='none'; 
   resOutrasFormas.style.display='flex';

   btnRecalc_outrasFormas.style.display='flex';

   calculo(resOutrasFormas)
})


//Os parâmetros medType indicam qual a div que é, a partir delas, trabalha-se com as divs individualmente.(útil para reaproveitar função)
function calculo(medType) { 
   input=document.querySelectorAll(".input");
   //input recebe todos os inputs (de todas as divs). 
    
   input.forEach((valor, index) => {
      //Depois do evento 'click' no botão calculo for acionado, colocaremos cada valor do input no array 'notas'.
      
      if(input[index].value==undefined || input[index].value==0) {
         console.log('sem incremento de valores no array notas')
            //Já que os input são contados com todas as divs, apenas desconsiderei aqueles com valores indefinidos. Ou seja, aqueles inputs que o usuário não digitou nada, são descartados. Assim, o cálculo ocorre apenas com os valores informados na sua respectiva div :).
      } else {
          notas.push(input[index].value);   
         }
   })

   for(i=0; i<notas.length; i++) {
       console.log(notas.length)
       media=notas[i]/notas.length
         //Cada nota será dividida por 4 e armazenada na var media. Ou seja, divide-se cada valor individualmente. Isso para que seja possível trabalhar com X valores, e não uma quantidade específica de parâmetros.
       totalMedia+=media; 
         //A cada iteração, incrementa-se à variável media o valor da media de cada nota.   
   }
   
   //Condições dizendo se o usuário passou ou reprovou:
   if(totalMedia>=6) { 
      medType.innerHTML=totalMedia.toFixed(2) + " - aprovado."
         //toFixed faz com que apresente apenas duas casas decimais.
      medType.style.color='green'
   } else {
      medType.innerHTML=totalMedia.toFixed(2) + " - reprovado."
      medType.style.color='red'
   }
} 

function recalc(medType) {//func de recalcular.
   switch (medType) {
     case 'bimestre': 
       btnRecalc_bi.style.display='none';
       resBimestre.style.display='none';
       btn_medBimestral.style.display='flex'; 
       
       input.forEach((value, index) => {
           input[index].value='';
             //Todos os inputs são reinicializados
       }) 
       media, totalMedia=0;
       notas=[];
          //'reinicialização' das variáveis.
       break;
     case 'trimestre':
      btnRecalc_tri.style.display='none';
      resTrimestre.style.display='none';
      btn_medTrimestral.style.display='flex'; 
      
      input.forEach((value, index) => {
          input[index].value='';
            
      }) 
      media, totalMedia=0;
      notas=[];
      break;

     case 'outrasFormas':
        btnRecalc_outrasFormas.style.display="none";
        resOutrasFormas.style.display='none';

        input.forEach((value, index) => {
         input[index].value='';
           
        }) 
        media, totalMedia=0;
        notas=[];

        wrapper_inputInfo.style.display='flex';
        form_wrapperParticular.style.display='none';

        form_wrapperParticular.removeChild(wrapper_ipt, wrapper_btn);
        break;
          //Devido ao formato da div, é necessário fazer o 'recalc' de forma diferente. É simples! Basta tirar suas divs e remover os filhos criados na função criaInput().
   }  
   //Usei switch case, pois acho mais fácil de trabalhar com ela. Mas, a utilidade mesmo é que posso acrescentar mais casos. Com o 'if',  seria mais complicado(minha opinião).
}


//-> Função para trabalhar com números indefinidos de parâmetros: 
var nInputs; //Qtd de inputs a ser criado.
var ipt; //input
var paragrafo;

var wrapper_inputInfo=document.querySelector(".wrapper-inputInfo") 
    //Input que ficará com display=none depois do usuário informar os parâmetros.

var form_wrapperParticular=document.querySelector(".form-wrapperParticular")
    //div aparecerá quando o usuário clicar no botão 'enviar'    

var wrapper_ipt; //div que será criada
                 //Ela servirá para armazentas os inputs criados na função abaixo.
const wrapper_btn=document.querySelector('.wrapper-btn');
   //Essa div foi feita apenas para alinhar os elementos dentro dela abaixo do wrapper_ipt;

function criaInput() {
   //Essa função cria os inputs.
   nInputs=document.querySelector(".numOfInputs").value; 
   wrapper_inputInfo.style.display='none';
   form_wrapperParticular.style.display='flex';
   
   wrapper_ipt=document.createElement("div");
   form_wrapperParticular.appendChild(wrapper_ipt);
      //Form_wrapper recebe o div criado como filho. 
   wrapper_ipt.setAttribute("class", "iptParticular input-wrapper");
      //wrapper_ipt recebe classes, uma particular, e outra padrão (que são para outras divs tmb).

   form_wrapperParticular.insertBefore(wrapper_ipt, wrapper_btn);   

   for(i=0; i<nInputs; i++) {
      //Esse loop cria os inputs, que serão guardado na div vazia 'wrapper_ipt'
      ipt=document.createElement("input");
      wrapper_ipt.appendChild(ipt);

      ipt.setAttribute("placeholder", "insira o valor aqui");
      ipt.setAttribute("class", "input");
         //Adiciona-se classe no input.

      paragrafo=document.createElement("p");
      paragrafo.innerText='valor '+(i+1) +":";
                                 //Precisa-se incrementar um a 'i', pois usarei-a como contador para mostrar o número do valor (valor1, valor2...). Já que o i é indicador da posição, começando do zero, faço ele começar do 1.
      wrapper_ipt.appendChild(paragrafo);

      wrapper_ipt.insertBefore(paragrafo, ipt);
         //Insert before() insere um elemento antes do outro na div especificado. Claro, antes de tudo, precisamos 'pegar' essa div com o dom. O primeiro parâmetro é o a ser colocado antes do segundo.
   }
   btn_medOutrasFormas.style.display='flex';  
     //faz o btn calcular aparecer.
}