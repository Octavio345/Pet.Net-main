let trilho = document.getElementById('trilho');
let body = document.querySelector('body');
let texto = document.getElementsByClassName('texto');
let carousel_slide = document.getElementsByClassName('carousel__slide');
let img_destaque_servicos = document.getElementById('img_destaque_servicos'); // Corrigido
let faq_container = document.getElementsByClassName('faq_container');

trilho.addEventListener('click', () => {
  trilho.classList.toggle('dark');
  body.classList.toggle('dark');
  img_destaque_servicos.classList.toggle('dark'); // Aplicando a classe no elemento correto

  // Iterar pela coleção de elementos com a classe 'texto'
  for (let i = 0; i < texto.length; i++) {
    texto[i].classList.toggle('dark');
  }
  
  // Iterar pela coleção de elementos com a classe 'carousel__slide'
  for (let i = 0; i < carousel_slide.length; i++) {
    carousel_slide[i].classList.toggle('dark');
  }

  // Iterar pela coleção de elementos com a classe 'faq-container'
  for (let i = 0; i < faq_container.length; i++) {
    faq_container[i].classList.toggle('dark');
  }
});
