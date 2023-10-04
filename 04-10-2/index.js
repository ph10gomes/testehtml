const btNovo = document.querySelector('main button');
const btSalvar = document.querySelector('form button');
const modal = document.querySelector('div');
let sequencial = 1;



btNovo.addEventListener('click',() =>{
   
    modal.classList.add('mostrarModal');
});

btSalvar.addEventListener('click',(event) =>{
    event.preventDefault();
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');    
    const td2 = document.createElement('td');    
    const td3 = document.createElement('td');    
    const td4 = document.createElement('td');    
    const btRemover = document.createElement('button');

     td1.innerText = sequencial;
     sequencial  = sequencial + 1;

     td2.innerText = document.querySelector('#nome').value;
     td3.innerText = document.querySelector('#idade').value;
     
    btRemover.classList.add('btn-remover');
    btRemover.innerText = "❌"
    
     td4.append(btRemover);
     
    btRemover.addEventListener('click',(event) =>{
       const tr  = event.target.closest('tr')
        tr.remove();
       
    });

     tr.append(td1,td2, td3, td4);

     document.querySelector('tbody').append(tr);

    modal.classList.remove('mostrarModal');

    


});


