document.getElementById('gerar-senha').addEventListener('click', function() {
    const maiusculo = document.getElementById('maiusculo').checked;
    const minusculo = document.getElementById('minusculo').checked;
    const numero = document.getElementById('numero').checked;
    const simbolo = document.getElementById('simbolo').checked;
    const campoSenha = document.getElementById('campo-senha');

    const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
    const numeros = '0123456789';
    const simbolos = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let caracteres = '';
    if (maiusculo) caracteres += letrasMaiusculas;
    if (minusculo) caracteres += letrasMinusculas;
    if (numero) caracteres += numeros;
    if (simbolo) caracteres += simbolos;

    if (caracteres === '') {
        campoSenha.value = 'Selecione pelo menos uma opção';
        return;
    }

    const comprimento = 12;
    let senha = '';
    for (let i = 0; i < comprimento; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[indiceAleatorio];
    }

    campoSenha.value = senha;
});