let trilho = document.getElementById('trilho');
let body = document.querySelector('body');
let texto = document.getElementsByClassName('texto');
let carousel_slide = document.getElementsByClassName('carousel__slide');
let img_destaque = document.getElementById('img_destaque');

trilho.addEventListener('click', () => {
  trilho.classList.toggle('dark');
  body.classList.toggle('dark');
  img_destaque.classList.toggle('dark');

  // Iterar pela coleção de elementos com a classe 'texto'
  for (let i = 0; i < texto.length; i++) {
    texto[i].classList.toggle('dark');
  }
  
  // Iterar pela coleção de elementos com a classe 'carousel__slide'
  for (let i = 0; i < carousel_slide.length; i++) {
    carousel_slide[i].classList.toggle('dark');
  }
});
