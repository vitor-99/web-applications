import Alert from './alertf.js';
import Calculadora  from './calculadora.js';

//função de cálculo:
var res=document.querySelectorAll('.resultado'); //todos elemento resultado.
var valor=document.querySelectorAll(".valor"); //todos elemento valor
var porc=document.querySelectorAll(".porcentagem"); //todos elementos porcentagem
var btn_calc = document.querySelectorAll('.btn-calc');
var btn_recalc=document.querySelectorAll('.btn-recalc');

btn_calc[0].addEventListener('click', calcNormal);
btn_calc[1].addEventListener('click', calcAumentar);
btn_calc[2].addEventListener('click', calcDiminuir);

var inputs = document.querySelectorAll('input');
function calcNormal() {
      //método de porcentagem normal.   
      btn_recalc[0].style.display='block';   
      let valor1=valor[0].value;
      let porc1=porc[0].value;

      if(valor1==0 || porc1==0) {
        //tratamento de quando o usuário não entrar com ambos os valores.
        const alertF = new Alert('40vw', '15vh', 'Ambos campos precisam ser preenchidos!', 'white', 'black');
        alertF.appendTo(document.querySelector('body'));

        //Animação (efeito de inválido) do input:
        inputs.forEach((e, index) => {
          inputs[index].setAttribute("class", "anima-invalid");
        })
        setTimeout(() => {
          inputs.forEach((e, index) => {
            inputs[index].removeAttribute("class");
          })
        }, 500)

      } else {
        res[0].innerHTML= Calculadora.calcNormal(valor1, porc1)
      }
}

function calcAumentar() {
    //método de porcentagem para aumentar o valor.
    btn_recalc[1].style.display='block';  
    let valor2=valor[1].value;
    let porc2=porc[1].value;

    if(valor2==0 || porc2==0) {
      const alertF = new Alert('500px', '150px', 'Ambos campos precisam ser preenchidos!', 'white', 'black');
      alertF.appendTo(document.querySelector('body'));

      //Animação (efeito de inválido) do input:
      inputs.forEach((e, index) => {
        inputs[index].setAttribute("class", "anima-invalid");
      })
      setTimeout(() => {
        inputs.forEach((e, index) => {
          inputs[index].removeAttribute("class");
        })
      }, 500)

    } else {
      btn_recalc[2].style.display='block';  
      res[1].innerHTML=Calculadora.calcAumentar(valor2, porc2)
      
    }
}

function calcDiminuir() {
    //método de porcentagem para diminuir o valor. 
    btn_recalc[2].style.display='block'; 
    let valor3=valor[2].value;
    let porc3=porc[2].value;

    if(valor3==0 || porc3==0) {
      const alertF = new Alert('500px', '150px', 'Ambos campos precisam ser preenchidos!', 'white', 'black');
      alertF.appendTo(document.querySelector('body'));

      //Animação (efeito de inválido) do input:
       inputs.forEach((e, index) => {
        inputs[index].setAttribute("class", "anima-invalid");
      })
      setTimeout(() => {
        inputs.forEach((e, index) => {
          inputs[index].removeAttribute("class");
        })
      }, 500)

    } else {
      /* res[2].innerHTML=parseInt(valor3)-(parseInt(valor3)*(porc3/100)); */
      res[2].innerHTML=Calculadora.calcDiminuir(valor3, porc3);
    }
}

//reset de todas as váriaveis: 
btn_recalc[0].addEventListener('click', function() {
  btn_recalc[0].style.display='none';  
  valor[0].value=0;
  porc[0].value=0;
  res[0].innerHTML=''; 
});
btn_recalc[1].addEventListener('click', function() {
  btn_recalc[1].style.display='none';  
  valor[1].value=0;
  porc[1].value=0;
  res[1].innerHTML=''; 
});

btn_recalc[2].addEventListener('click', function() {
  btn_recalc[2].style.display='none';  
  valor[2].value=0;
  porc[2].value=0;
  res[2].innerHTML='';  
});