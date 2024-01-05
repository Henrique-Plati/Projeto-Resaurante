document.querySelector('.esqueciSenhaLink').addEventListener('click', function () {
    window.location.href = 'senha/senha.html'
});



document.querySelector('.button').addEventListener('click', function () {
    let name = document.querySelector('.name').value;
    let password = document.querySelector('.password').value;

    console.log(name, password);
    if (name !== '' && password !== '') {
        window.location.href = 'principal/paginaPrincipal.html';
    } else {
        alert('Por favor insira seus dados')
    }
});


