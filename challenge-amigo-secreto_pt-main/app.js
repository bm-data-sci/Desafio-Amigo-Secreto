let amigos = [];

function adicionarAmigo() {
    let campoAmigo = document.getElementById('amigo').value;
    if (campoAmigo === '') {
        alert('Por favor, insira um nome.');
        campoAmigo.focus();
        return;
    }
    if (amigos.includes(campoAmigo)) {
        alert('Amigo já adicionado.');
        campoAmigo.focus();
        return;
    }
    amigos.push(campoAmigo);
    document.getElementById('listaAmigos').innerHTML += `<li>${campoAmigo}</li>`;
    document.getElementById('amigo').value = '';
    document.getElementById('amigo').focus();
}

function sortearAmigo() {
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    
    if (amigos.length < 3) {
        resultado.innerHTML = 'É necessário ter pelo menos 3 amigos para sortear.';
    } else {
        let amigoEscolhido = amigos[Math.floor(Math.random() * amigos.length)];
        resultado.innerHTML = `Amigo sorteado é: <strong>${amigoEscolhido}</strong>`;
        document.getElementById('amigo').focus();
        return;
    }

}

document.getElementById('amigo').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        adicionarAmigo();
    }
});