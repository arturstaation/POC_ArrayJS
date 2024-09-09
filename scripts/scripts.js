const code = document.getElementById('codeInput');
const textarea = document.getElementById("codeInput");
function runCode() {
    const output = document.getElementById('output');

    try {
        output.textContent = '';

        console.log = function (message) {
            output.textContent += message + '\n';
        };

        new Function(code.value)();
    } catch (error) {
        output.textContent = 'Erro: ' + error.message;
    }
}

textarea.addEventListener("input", function () {
    this.style.height = "auto";
    this.style.height = (this.scrollHeight) + "px";
});


function changeInputSort() {
    code.value = `
    let itens = [40, 100, 1, 5, 25, 10, 'Banana', 'Maçã', 'Laranja'];
    itens.sort();
    console.log(itens); // Resultado: [1, 10, 100, 25, 40, 5, 'Banana', 'Laranja', 'Maçã']
    `
    adjustTextareaHeight(textarea);

}

function changeInputReduce() {
    code.value = `
    let numeros = [1, 2, 3, 4, 5];
    let soma = numeros.reduce(function(acumulador, valorAtual) {
                    return acumulador + valorAtual;
                }, 0);
    console.log(soma);  // Resultado: 15
    `
    adjustTextareaHeight(textarea);
}

function changeInputFilter() {
    code.value = `
    // Array de números
    let numeros = [10, 20, 30, 40, 50];

    // Valor limite para filtrar os números
    let limite = 25;

    // Função de callback para filtrar números maiores que o limite
    function filtrarMaioresQue(valor) {
        return valor > limite;
    }

    // Usando o filter sem segundo parâmetro
    let resultado = numeros.filter(filtrarMaioresQue);

    console.log(resultado); // Resultado: [30, 40, 50]
    `
    adjustTextareaHeight(textarea);
}

function changeInputSpread() {
    code.value = `
    let frutas = ['Maçã', 'Banana'];
    let citricos = ['Laranja', 'Limão'];

    // Combinando arrays usando o operador spread
    let todasFrutas = [...frutas, ...citricos];

    console.log(todasFrutas); // Resultado: ['Maçã', 'Banana', 'Laranja', 'Limão']
    `
    adjustTextareaHeight(textarea);
}

function changeInputMap() {
    code.value = `
    // Array de objetos representando produtos
    let produtos = [
        { nome: 'Camisa', preco: 29.99 },
        { nome: 'Calça', preco: 49.99 },
        { nome: 'Sapato', preco: 79.99 }
    ];

    // Usando map para extrair apenas os nomes dos produtos
    let nomesProdutos = produtos.map(function(produto) {
        return produto.nome;
    });

    console.log(nomesProdutos); // Resultado: ['Camisa', 'Calça', 'Sapato']
    `
    adjustTextareaHeight(textarea);
}

function adjustTextareaHeight(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = (textarea.scrollHeight) + 'px';
}