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

btMudarConteudo.addEventListener('click', function() {
    let titulo = document.getElementById('h01');
    titulo.innerText = 'Novo Titulo';
    titulo.style.textAlign = 'center';
    titulo.style.textDecoration = 'underline';
    titulo.style.fontFamily= 'Arial';
    titulo.style.fontStyle = 'italic';
    //alert('Testar mudar o conteudo');
});

btMudarCSS.addEventListener('click', function() {
    let para = document.getElementById('p01');
    para.style.backgroundColor = 'beige';
    para.style.textAlign = 'right';
    //alert('Testar mudar o CSS');
});

btGerarConteudo.addEventListener('click', function() {
    alert('Testar Gerar conteudo');
});


//console.log(btMudarConteudo);