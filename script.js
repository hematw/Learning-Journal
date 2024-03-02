const menuBtn = document.getElementById('menu-btn');
const navMenu = document.getElementById('menu');


menuBtn.addEventListener('click', ()=>  {
  navMenu.classList.toggle('open');
})
