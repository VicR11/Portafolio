const menuBars= document.querySelector('.fa-bars');
const nav = document.querySelector('nav');
const xMark = document.querySelector('i.fa-xmark');

const menuMovilToggle = ()=>{
    nav.classList.toggle('active');
    xMark.classList.toggle('active')
    menuBars.classList.toggle('active')
    
}

const toggleBtnClaro  = document.getElementById('boton-toggle-claro');
const toggleBtnOscuro = document.getElementById('boton-toggle-oscuro');

const toggleModoBackground = ()=>{
  document.body.classList.toggle('modo-oscuro');
  console.log(document.body);
  
};

menuBars.addEventListener('click', menuMovilToggle);
xMark.addEventListener('click', menuMovilToggle);

toggleBtnClaro.addEventListener('click', toggleModoBackground);
toggleBtnOscuro.addEventListener('click', toggleModoBackground);