function runCode() {
    const code = document.getElementById('codeInput').value;
    const output = document.getElementById('output');

    try {
        // Limpa o conteúdo anterior
        output.textContent = '';

        // Redefine a função console.log para exibir a saída no <pre>
        console.log = function (message) {
            output.textContent += message + '\n';
        };

        // Executa o código fornecido
        new Function(code)();
    } catch (error) {
        output.textContent = 'Erro: ' + error.message;
    }
}