const camisa = document.querySelector(".camisa");
const sec1 = document.querySelector(".sec1");

const coturno = document.querySelector(".coturno");
const sec2 = document.querySelector(".sec2");

const calça = document.querySelector(".calça");
const sec3 = document.querySelector(".sec3");

const gorro = document.querySelector(".gorro");
const sec4 = document.querySelector(".sec4");

const menu = document.querySelector('.menu')
const lista = document.querySelector('.lista')

menu.addEventListener('click', function(){
   if (lista.style.display === 'block'){
    lista.style.display = 'none'
   } else if (lista.style.display = 'none'){
       lista.style.display = 'block'
   }

});

camisa.addEventListener("click", function(){
    sec1.style.display = 'flex'
    sec2.style.display = 'none'
    sec3.style.display = 'none'
    sec4.style.display = 'none'
  });
  

coturno.addEventListener("click", function(){
  sec1.style.display = 'none'
  sec2.style.display = 'flex'
  sec3.style.display = 'none'
  sec4.style.display = 'none'
});

calça.addEventListener("click", function(){
    sec1.style.display = 'none'
    sec2.style.display = 'none'
    sec3.style.display = 'flex'
    sec4.style.display = 'none'
  });

  gorro.addEventListener("click", function(){
    sec1.style.display = 'none'
    sec2.style.display = 'none'
    sec3.style.display = 'none'
    sec4.style.display = 'flex'
  });
