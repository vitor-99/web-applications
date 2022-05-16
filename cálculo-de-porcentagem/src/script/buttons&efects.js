var lamp=document.querySelector('.turn-mode__img').addEventListener("mouseover", function() { 
    //efeito hover quando o mouse for passado acima da lamp, indicando que é algo a pressionar.
    this.setAttribute('src', 'src/img/dark-lamp.png');
});

var lamp=document.querySelector('.turn-mode__img').addEventListener("mouseout", function() { 
    //fazendo o inverso do primeiro evento. 
    this.setAttribute('src', 'src/img/light-lamp.png');
});

var lampOn=true;
   /*LampOn é uma variável para controlar se a página está no darkmode ou não. Inicialmente, a página inicia com lightmode, por isso podemos setar lampOn como true.*/
function turn_mode() {
    //essa função mudará para modo claro/escuro.
    let darkMode=document.createElement('link');
    let head=document.querySelector(".head");
    darkMode.setAttribute("rel", "stylesheet");
    darkMode.setAttribute("href", "src/style/dark-mode.css");

    let bg=document.querySelector('.background');
      /*bg serve para alterar a imagem de fundo, de acordo o modo (dark ou light)*/

    if(lampOn===true) {
         /*Na primeira vez, essa condição sempre vai ser executada*/
        head.appendChild(darkMode);
        lampOn=false;
         /*setamos lampOn como false, já que o darkMode está on. Na próxima execução ele cai na próxima condição que irá ativar o lightOn.*/
         bg.setAttribute("src", "src/img/darkmode-bg.jpg")
    } else {
        let darkMode_element=document.getElementsByTagName("link");
        head.removeChild(darkMode_element[3]);
           /*é preciso pegar o elemento com o DOM, pois o removeChild() não reconhece a variável darkMode como um elemento. Já que trabalharei com apenas duas folhas de estilo, fica bem tranquilo de manipular usando getElementsByTagName()*/
           /*o indíce [1] sempre especificará a stylesheet dark-mode*/
        lampOn=true;
        bg.setAttribute("src", "src/img/background.jpg")
    }
}


var paragrafos=document.querySelectorAll(".p-style")
    //paragrafos estão dentro da div metTypes.
    //Declarar a essa variável dentro da função estava dando bug...

function openClose_Div() {
    //Função para abrir a div, onde o usuário escolhe o método de cálculo.
   let traces=document.querySelectorAll(".trace")
   let metTypes_div=document.querySelector(".met-types");

   console.log(paragrafos); 

   if(traces[0].style.position != 'absolute') {
    //este comando só executado quando os traçados não estiverem com posição absoluta. Ou seja, eles terão o estilo de 'abrir' a div. 
    for(i=0; i<traces.length; i++) {
        traces[i].style.position='absolute';
        traces[i].style.height='18px'
        traces[i].style.left='12px'
            //devido à posição virar absolute, precisa-se aumentar a altura dos 'traces', já que eles 'encurtariam' por causa da sobreposição entre eles.
            //É preciso setar um left também, pois como postion:absolute, ele não respeitaria o alinhamento imposta pela div pai.

        metTypes_div.style.display='flex';   
           //motra a div de métodos de cálculo. 
        metTypes_div.style.animationName='slide-downDiv';
          //Adiciona-se uma animação de slide-down a div (efeito de abrir)
        }
        for (i=0; i<3; i++) {
              //adiciona-se o estilo aos paragrafos. 
            paragrafos[i].style.animationName='slide-downP'
        }
    } else {
        for(i=0; i<traces.length; i++) {
            traces[i].style.position='inherit';
            traces[i].style.left='0';
            traces[i].style.height='10px';
              //Nesse comando, voltamos os traçados a seu estilo inicial. Ou seja, aqui é como se fechassemos a div e os traçados assumiriam a forma de 'abrir' a div novamente. 
            /* metTypes_div.style.display='none'; */
            metTypes_div.style.animationName='slide-upDiv'
        }
        for (i=0; i<3; i++) {
            paragrafos[i].style.animationName='slide-upP'
            paragrafos[i].style.animationDuration='.3s'
             /*É necessário encurtar o tempo de 'subida' (fechamento)da div. */
        }
    }
}

var container1=document.querySelector(".calc-container1");
var container2=document.querySelector(".calc-container2");
var container3=document.querySelector(".calc-container3");

container1.style.display='none'
container2.style.display='none'
container3.style.display='none'
  //Por algum motivo, o javascript, em primeiro momento, não reconhece o display='none' dos containers. Ele reconhece a partir da segunda verificação, porém preciso que ele reconheça logo na primeira, para abrir a div de maneira adequada, sem precisar que o usuário clique duas vezes no botão. Por isso, defini o estilo do display da variável aqui.

function openCloseMet(metDiv) {
   //Essa função abre as div's dos cálculos. Usei um switc case para cada caso, abrindo a div de seu respectivo botão. 

   switch (metDiv) {
    case 'div1':
        if(container1.style.display==='none') {
            container1.style.display='flex'; 
        } else {
            container1.style.display='none';
        } 
        break;
    case 'div2':
        if(container2.style.display==='none') {
            container2.style.display='flex'; 
        } else {
            container2.style.display='none';
        } 
        break;
    case 'div3':
        if(container3.style.display==='none') {
            container3.style.display='flex'; 
        } else {
            container3.style.display='none';
        }       
   }
}

//-> Animações: 
//1°Animação: efeito de hover no btn-close. Altera-se o 'rotate' dos traçados
var btnClose=document.querySelectorAll('.btn-close')

var closeTrace=document.querySelectorAll(".close-trace")

btnClose[0].addEventListener('mouseover', animationClose1)
btnClose[0].addEventListener('mouseout', animationClose2)

btnClose[1].addEventListener('mouseover', animationClose1)
btnClose[1].addEventListener('mouseout', animationClose2)

btnClose[2].addEventListener('mouseover', animationClose1)
btnClose[2].addEventListener('mouseout', animationClose2)
   //É preciso percorrer todos os botões (não dá para usar loop, já que é trabalhado com eventListener)

//AnimationClose são quase iguais, mas uma é para o evento mouseover, outra para o mouseout.
function animationClose1() {
   //animação, acionada com o hover, do botão de fechar.

   closeTrace[0].style.transform='rotate(45deg)'
   closeTrace[1].style.transform='rotate(-45deg)'

   closeTrace[2].style.transform='rotate(45deg)'
   closeTrace[3].style.transform='rotate(-45deg)'

   closeTrace[4].style.transform='rotate(45deg)'
   closeTrace[5].style.transform='rotate(-45deg)'
}

function animationClose2() {
    closeTrace[0].style.transform='rotate(-45deg)'
    closeTrace[1].style.transform='rotate(45deg)'

    closeTrace[2].style.transform='rotate(-45deg)'
    closeTrace[3].style.transform='rotate(45deg)'

    closeTrace[4].style.transform='rotate(-45deg)'
    closeTrace[5].style.transform='rotate(45deg)'
}

