export default class Alert {
    //cria-se uma classe construtora.
    constructor(width, height, textContent, color, bg) {
      this.isCreated();
       //Antes de tudo, é preciso verificar se o alert já está criado. Caso sim, lançamos um erro e não se cria o alert novamente.

      //estilos padrões do alertf (os estilos estão no css): 
        this.div = document.createElement('div');
        this.div.setAttribute('class', 'alert-div');
      
      //estilos personalizados: 
        this.div.style.width = width;
        this.div.style.height = height;
        this.div.style.backgroundColor = bg
        this.div.style.color = color
  
      //elementos dentro do alert:  
        const p = document.createElement('p');
        p.innerText = textContent;
          //esse novo elemento <p> é o texto que irá ir no alert.
        this.div.append(p);
  
        var btn = document.createElement('button');
        btn.innerText = 'OK'
        btn.setAttribute('class', 'btn-confirm');
        btn.addEventListener('click', this.closeAlert)
          //Para adicionar o método no addEventListener basta refenciar ao próprio objeto usando 'this'.
        this.div.append(btn);
    }

    isCreated() {
       if(document.querySelector(".alert-div") != null) {
          throw console.error('alert já está criado!');
       }
    }

    appendTo(target) {
       if(target) {
          target.append(this.div);
       }
    }
    
    closeAlert() {
      document.querySelector('.alert-div').remove()
    }
} 