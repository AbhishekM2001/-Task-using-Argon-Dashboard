var n1=document.querySelector('#n1')
var n2=document.querySelector('#n2')
var n3=document.querySelector('#n3')
var c1=document.querySelector('#c1')
var c2=document.querySelector('#c2')
var c3=document.querySelector('#c3')

fetch('https://run.mocky.io/v3/f3feef1c-9bfa-43fd-b2a0-bbe9abadb4f6')
.then(res => {
    return res.json();
})
.then(data => {
    n1.innerText=data.clients[0].name;
    n2.innerText=data.clients[1].name;
    n3.innerText=data.clients[2].name;

    c1.innerText=data.clients[0].company;
    c2.innerText=data.clients[1].company;
    c3.innerText=data.clients[2].company;
})