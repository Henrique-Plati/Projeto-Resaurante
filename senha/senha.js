function concluir() {
    let button = document.querySelector('.submit-button');
    let emailInput = document.querySelector('.email');

   
    if (emailInput.value !== '' && validateEmail(emailInput.value) && !button.classList.contains('done')) {
      button.classList.add('done');
      button.innerHTML = 'Enviado'
    }else{
        alert('Por favor digite seu email')
    }
  }

  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
