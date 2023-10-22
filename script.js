
function escrevendoLetra(){
    function ativaLetra(elemento){
        const arrTexto = elemento.innerHTML.split('');
        elemento.innerHTML  = '';
        arrTexto.forEach((letra, i)=>{
            setTimeout(()=>{
                elemento.innerHTML += letra; 
            }, 75 * i);
        });
    }

    const titulo = document.querySelector('.digitando');
    ativaLetra(titulo);
} 

escrevendoLetra()

function ativacaoMenu(){
    const ativaMenu = document.querySelector('.fa-bars');
    const navMenu = document.querySelector('header .navegacao-primaria')


    ativaMenu.addEventListener('click', ()=>{
        ativaMenu.classList.toggle('fa-x')
        navMenu.classList.toggle('ativado')
    })
}

ativacaoMenu()



// função para alternar entre as seções "Experiência" e "Educação"
function sobreMim(){
    const experiencia = document.querySelectorAll('.experience_content div');
    const botao = document.querySelectorAll('.experience_content ul li')
    const education = document.querySelectorAll('.education_content div');
    const botaoEducation = document.querySelectorAll('.education_content ul li')

    experiencia[0].classList.add('ativo')
    botao[0].classList.add('ativo')
    education[0].classList.add('ativo')
    botaoEducation[0].classList.add('ativo')

    function slideShow(index){
        experiencia.forEach((divisao)=>{
            divisao.classList.remove('ativo');
        });
        botao.forEach((item)=>{
            item.classList.remove('ativo')
        });
        experiencia[index].classList.add('ativo')
        botao[index].classList.add('ativo')
    }


    function slideShow2(index){
        education.forEach((divisao)=>{
            divisao.classList.remove('ativo');
        });
        botaoEducation.forEach((item)=>{
            item.classList.remove('ativo')
        });
        education[index].classList.add('ativo')
        botaoEducation[index].classList.add('ativo')
    }


    botao.forEach((event,index)=>{
        event.addEventListener('click', ()=>{
            slideShow(index)
        });
    });

    botaoEducation.forEach((div, index)=>{
        div.addEventListener('click', ()=>{
            slideShow2(index)
        })
    })
}
sobreMim();




const listaALL = document.querySelectorAll('.projects_armazenamento ul li');
const buttonGeral = document.querySelectorAll('.projects_navegacao li');
const buttonALL = document.querySelector('.project_models .all');

listaALL.forEach((item)=>{
    item.classList.add('ativo');
})

// função para alternar os botões de filtragem de projetos
function removeClick(index){
    buttonGeral.forEach((item)=>{
        item.classList.remove('ativo');
    })
    buttonGeral[index].classList.add('ativo')
}

buttonGeral.forEach((event,index)=>{
    event.addEventListener('click', ()=>{
        removeClick(index)
    })
})

// função para mostrar projetos com base no botão de filtragem
function showLista(lista, buttom = "all"){
    lista.forEach((item)=>{
        item.classList.remove('ativo');
    });

    if(buttom == 'design'){
        lista[3].classList.add('ativo')
    }
    if(buttom == 'graphic'){
        lista[1].classList.add('ativo');
    }

    if(buttom == 'website'){
        lista[0].classList.add('ativo');
        lista[2].classList.add('ativo');
    }

    if(buttom == 'all'){
        lista[0].classList.add('ativo')
        lista[1].classList.add('ativo')
        lista[2].classList.add('ativo');
        lista[3].classList.add('ativo');
    }
}

buttonGeral.forEach((item)=>{
    item.addEventListener('click', (e)=>{
        let currentButton = e.target;
        if(currentButton.classList.contains('all')){
            showLista(listaALL);
        } if(currentButton.classList.contains('design')){
            showLista(listaALL, "design")
        }

        if(currentButton.classList.contains('graphic')){
            showLista(listaALL, "graphic")
        }

        if(currentButton.classList.contains('website')){
            showLista(listaALL, "website")
        }

        if(currentButton.classList.contains('all')){
            showLista(listaALL, "all")
        }
    });
});

const cabecalho = document.querySelector('header');
const menuLinks = document.querySelectorAll('.scroll-link'); // Adicione a classe scroll-link aos links do cabeçalho

menuLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const idTarget = link.getAttribute('href').substring(1);
    const elementoTarget = document.getElementById(idTarget);
    if (elementoTarget) {
      window.scrollTo({
        top: elementoTarget.offsetTop - cabecalho.offsetHeight,
        behavior: 'smooth',
      });
    }
  });
});


document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('formulario-contato');
    const mensagemEnviada = document.getElementById('mensagem-enviada');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // impede o envio padrão do formulário
  
      // exibe a mensagem "Mensagem enviada"
      mensagemEnviada.style.display = 'block';
  
      // esconde a mensagem após 2 segundos
      setTimeout(function() {
        mensagemEnviada.style.display = 'none';
      }, 2000);

      form.reset();
    });
  });
  