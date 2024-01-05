function scrollParaBaixo() {
    // Obtem a posicao da proxima secao 
    let proximaSecao = document.querySelector('.secao');
    
    // Realiza a animaoo de rolagem ate a proxima secao
    window.scrollTo({
      top: proximaSecao.offsetTop,
      behavior: 'smooth'
    })};

  
