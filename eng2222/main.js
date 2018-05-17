const cidade = document.querySelector('#cidade');
const rua = document.querySelector('#rua');
const estado = document.querySelector('#estado');
const numero = document.querySelector('#numero');
const name = document.querySelector('#name');
const informecurso = document.querySelector('form#informelugar');
const select = document.querySelector('select#start');
const select1 = document.querySelector('select#end');
informecurso.addEventListener('submit', function(e) {
    e.preventDefault();
        const nome = name.value;
        const valor = rua.value + ", " + numero.value + " " + cidade.value + "," + estado.value;
        const adcs = `<option value="${valor}">${nome}</option>`;
        console.log(adcs)
        select.innerHTML += adcs;
        select1.innerHTML += adcs;
    });