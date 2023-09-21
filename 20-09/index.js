/*let msg = 'Teste';
let idade = 25;

/*alert(idade);
if(idade >= 18) {
    alert('Adulto.');
}else{
    alert('Criança ou adolescente.');
}*/

//console.log(idade);

/*
let vetor = [1, 2, 3,'Teste', 'PH'];
vetor.push('Outro');
//console.log(vetor);

for(let i = 0; i < vetor.length; i++){
    alert(vetor[i]);
}*/

/*
let obj = {
    nome: 'PH',
    idade: 22,
    cpf:'14874661610'
};

alert(obj.nome);
//alert(obj.idade);
//alert(obj.cpf);
console.log(obj);*/


//MANEIRAS DIFERENTES DE DECLARAR UMA FUNÇAO
/*const funcao = function(){
    alert('Teste')
}*/

/*let btMudarConteudo = document.getElementById('bt01');
btMudarConteudo.addEventListener('click', () => {
    alert('Teste 2 ');
});
*/
let btMudarConteudo = document.getElementById('bt01');
let btMudarCSS = document.getElementById('bt02');
let btGerarConteudo = document.getElementById('bt03');
let btMudarAtributo = document.getElementById('bt04');
let links = document.querySelectorAll('a')

const images = [
    'cruzeiro1.webp',
    'cruzeiro2.webp',
    'cruzeiro3.webp'

];

let index = 0;

btMudarConteudo.addEventListener('click', function() {
    let titulo = document.getElementById('h01');
    titulo.innerText = 'Novo Titulo';
    titulo.style.textAlign = 'center';
    titulo.style.textDecoration = 'underline';
    titulo.style.fontFamily= 'Arial';
    titulo.style.fontStyle = 'italic';
    titulo.style.border = '1px solid';
    //alert('Testar mudar o conteudo');
});

btMudarCSS.addEventListener('click', function() {
    let para = document.getElementById('p01');
    para.style.backgroundColor = 'beige';
    para.style.textAlign = 'right';
    //alert('Testar mudar o CSS');
});

btGerarConteudo.addEventListener('click', function() {
    let tabela =document.querySelector('table');
    let linha =document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    td1.innerText = '98745654';
    td2.innerText =  'Cuzeiro so me faz raiva';
    linha.append(td1);
    linha.append(td2);
    tabela.append(linha);


});
btMudarAtributo.addEventListener('click', function() {
      let imagem  = document.querySelector('img');
      index = index + 1;
      console.log (images);
      if (index >= images.length){
         index = 0;
      }

      imagem.setAttribute('src','./images/'+ images[index]);
    

});
for(let i = 0; i < links.length; i++){
    links[i].addEventListener('click', (event) => {
        event.preventDefault();
        alert('Clicou em: ' + event.target.innerText);
    });
}

