
const botao = document.getElementById('botão');  
const mensagem = document.getElementById('mensagem'); 

const textoOriginal = "Clique no botão para alterar esse texto e mudar a cor da página";
const corOriginal = "#f0f0f0"; 

let alterado = false;

function exibirCarregamento() {
    const loader = document.createElement('div');
    loader.classList.add('loader'); // Corrigido o erro de vírgula
    document.body.appendChild(loader);
    return loader;
}

function alterarconteudo() {
    const loader = exibirCarregamento(); // Aqui você pode passar o id se necessário
    setTimeout(() => {
        if (!alterado) {
            mensagem.innerHTML = "Você clicou no botão! O conteúdo foi alterado.";
            document.body.style.backgroundColor = '#FFD700'; // Mudança de cor
        } else {
            mensagem.innerHTML = textoOriginal;
            document.body.style.backgroundColor = corOriginal; // Voltar para a cor original
        }
        alterado = !alterado;
        loader.remove(); // Remover o loader após a mudança
    }, 2000);
}

botao.addEventListener('click', alterarconteudo);
