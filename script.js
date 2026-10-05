const formulario=document.getElementById('formulario')
const mensagem=document.getElementById('mensagem')

formulario.addEventListener('submit', function(event){ 
 event.preventDefault; 
  
const nome=document.getElementById('nome').Value;  const email=document.getElementById('email').value; 
const telefone=document.getElementById('telefone').value;  

if(nome===""||email===""||telefone==="")
{mensagem.textContent='preencha todo o cadastro por favor'} 

else{mensagem.textContent='dados preenchidos com sucesso'}


});


let body = document.getElementById('body');
let titulo = document.getElementById('titulo'); 

function mudartema() { 
    body.style.backgroundColor = "black";
    body.style.color = "white"; // Adicionado: faz todas as letras do corpo ficarem brancas
    titulo.style.color = "white"; 
}

function retornartema() { 
    body.style.backgroundColor = "white";
    body.style.color = "black"; // Adicionado: faz as letras voltarem a ser pretas
    titulo.style.color = "black";
}
