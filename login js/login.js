function logar(){

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if((login == "admin" && senha == "admin")||(login == "root" && senha == "root")) {
        alert('Sucesso');
        location.href = "paginaInicial.html";
    }else{
        alert('Usuario ou senha incorretos');
    }
}