const btnGerador = document.querySelector('#btnGerador');
const btnLimpar = document.querySelector('#btnLimpar');
const btnCopiar = document.querySelector('#btnCopiar');
const quadroSenha = document.querySelector('#quadro-senha');

btnGerador.addEventListener('click', function () {
    const caracteres = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'U', 'V', 'W',
        'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 'u', 'v',
        'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '!', '@', '#', '$', '%', '&', '*'
    ];

    let senhas = '';

    for (let i = 1; i <= 20; i++) {
        senhas = senhas + caracteres[Math.floor(Math.random() * caracteres.length)];
    }

    quadroSenha.textContent = senhas;
});

// Função para limpar o campo de senha
btnLimpar.addEventListener('click', function () {
    quadroSenha.textContent = '';
});

// Função para copiar a senha para a área de transferência
btnCopiar.addEventListener('click', function () {
    const senha = quadroSenha.textContent;
    if (senha) {
        navigator.clipboard.writeText(senha).then(() => {
            alert('Senha copiada para a área de transferência!');
        }).catch(err => {
            console.error('Erro ao copiar senha:', err);
        });
    } else {
        alert('Nada para copiar!');
    }
});
