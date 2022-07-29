AOS.init();
let header = document.getElementById('header');

let fondo = document.getElementById('fondo');
let paisaje = document.getElementById('paisaje');
let pasto1 = document.getElementById('pasto1');
let pasto2 = document.getElementById('pasto2');
let pasto3 = document.getElementById('pasto3');
let fondo_arbol1 = document.getElementById('fondo_arbol1');
let fondo_arbol2 = document.getElementById('fondo_arbol2');
let fondo_arbol3 = document.getElementById('fondo_arbol3');
let fondo_arbol4 = document.getElementById('fondo_arbol4');
let fondo_arbol5 = document.getElementById('fondo_arbol5');
let ruina = document.getElementById('ruina');
let slogan = document.getElementById('slogan');
let ban_btn = document.getElementById('ban_btn');
let arbol = document.getElementById('arbol');
let enredadera = document.getElementById('enredadera');

window.addEventListener('scroll', function(){
    let value = window.scrollY;

    paisaje.style.marginBottom = value * 0.25 + 'px';
    fondo_arbol1.style.marginLeft = value * 0.25 + 'px';
    fondo_arbol2.style.marginLeft = value * 0.25 + 'px';
    fondo_arbol3.style.marginLeft = value * -0.25 + 'px';
    fondo_arbol4.style.marginLeft = value * -0.25 + 'px';
    fondo_arbol5.style.marginLeft = value * 0.25 + 'px';
    enredadera.style.top = value * -2.75 + 'px';
    ruina.style.top = value * 0.1 + 'px';
    slogan.style.marginTop = value * 0.7 + 'px';
    ban_btn.style.marginTop = value * 0.7 + 'px';
});

const navigation = document.querySelector('nav');

document.querySelector('.menu').onclick = function(){
    this.classList.toggle('active');
    navigation.classList.toggle('active');
}
