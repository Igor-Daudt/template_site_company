let currentIndex = 0;
  const totalSlides = document.querySelectorAll('.slide').length;

function changeSlide(direction) {
    currentIndex += direction;
    let numero_base_lista = 2;
    if(parseFloat(window.innerWidth) < 980){
      numero_base_lista-=1;
    }

    if (currentIndex < 0) {
      currentIndex = totalSlides - (numero_base_lista+1);
    } else if (currentIndex >= totalSlides -numero_base_lista){
      currentIndex = 0;
    }
    
    var divElement = document.querySelector('.slide');

    var estiloComputado = window.getComputedStyle(divElement);
    const slideWidth = document.querySelector('.slide').offsetWidth + parseFloat(estiloComputado.getPropertyValue('margin-right')) + parseFloat(estiloComputado.getPropertyValue('margin-left'));
    let newTransformValue = -currentIndex * slideWidth;

    document.querySelector('.slides').style.transform = `translateX(${newTransformValue}px)`;
  }

function scrollToBottom() {
    var alturaTotal = document.body.scrollHeight;
    window.scrollTo({
      top: alturaTotal,
      behavior: 'smooth'
    });
}

var minhaDiv = document.getElementById('button_back_products');

minhaDiv.addEventListener('click', function() {
  window.location.href = 'catalogue.html';
});

function alterarEstilos() {
  var elemento = document.getElementById('title_applications');
  elemento.classList.toggle('changeable_item_description');
  elemento = document.getElementById('title_caracteristics');
  elemento.classList.toggle('changeable_item_description');
  elemento = document.getElementById('applications');
  elemento.classList.toggle('hidden');
  elemento = document.getElementById('characteristics');
  elemento.classList.toggle('hidden');
}


var applications = document.getElementById('title_applications');

applications.addEventListener('click', function() {
  alterarEstilos('title_applications');
});

var caracteristics = document.getElementById('title_caracteristics');

caracteristics.addEventListener('click', function() {
  alterarEstilos('title_caracteristics');
});