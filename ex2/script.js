// Pilha para rastrear as alterações de texto
let textHistory = [];
let currentText = '';

// Função chamada ao carregar a página
window.onload = function () {
    const editor = document.getElementById('editor');

    // Adiciona um listener para detectar alterações no texto
    editor.addEventListener('input', function () {
        const newText = editor.value;
        saveToHistory(currentText);
        currentText = newText;
    });

    // Adiciona um listener para desfazer usando Ctrl+Z
    document.addEventListener('keydown', function (event) {
        if (event.ctrlKey && event.key === 'z') {
            undo();
        }
    });
};

// Salva o texto atual na pilha de histórico
function saveToHistory(text) {
    textHistory.push(text);
}

// Desfaz a última alteração de texto
function undo() {
    if (textHistory.length > 0) {
        const editor = document.getElementById('editor');
        currentText = textHistory.pop();
        editor.value = currentText;
    }
}
