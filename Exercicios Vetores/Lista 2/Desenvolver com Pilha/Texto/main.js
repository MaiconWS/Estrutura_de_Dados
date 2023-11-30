const editor = document.getElementById('editor');
const historico = [];

// Função para salvar o estado atual no histórico
function salvarEstado() {
    historico.push(editor.value);
}

// Função para desfazer a última alteração
function desfazer() {
    if (historico.length > 1) {
        // Remova o estado atual
        historico.pop();

        // Restaure o estado anterior
        const estadoAnterior = historico[historico.length - 1];
        editor.value = estadoAnterior;
    }
}

// Adicione um ouvinte de evento para capturar a combinação de teclas Ctrl+Z
document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.key === 'z') {
        desfazer();
    }
});