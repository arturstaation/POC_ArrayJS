# Prova de Conceito: Manipulação de Arrays em JavaScript

## Feito Por:
Artur Valladares Hernandez Giacummo - 10389053 <br>
Gabriel Marques Gonçalves Almeida - 10375711

## Como Executar o Código

Para acessar o site proposto por esta prova de conceito (POC), você tem duas opções:

### Opção 1: Acesso Online

Você pode visualizar o projeto diretamente no navegador acessando o seguinte link:
[**https://arturstaation.github.io/POC_ArrayJS/**](https://arturstaation.github.io/POC_ArrayJS/)

### Opção 2: Acesso Local

Se preferir trabalhar com uma cópia local do projeto, siga os passos abaixo:

1. **Baixar o Projeto**
   - Acesse o repositório do projeto e clique em **"Código"**.
   - Selecione a opção **"Baixar ZIP"** para obter o arquivo compactado do projeto.

2. **Descompactar o Arquivo**
   - Após o download, localize o arquivo ZIP em seu computador.
   - Descompacte o arquivo para uma pasta de sua escolha.

3. **Abrir o Arquivo HTML**
   - Navegue até a pasta descompactada.
   - Abra o arquivo `index.html` em um navegador web de sua preferência (como Google Chrome, Mozilla Firefox, etc.).

Com esses passos, você poderá visualizar e interagir com a prova de conceito localmente em seu computador.

Se precisar de ajuda adicional ou encontrar algum problema, sinta-se à vontade para entrar em contato!

## Visão Geral

Este projeto é uma prova de conceito (POC) para demonstrar a utilização de métodos de manipulação de arrays em JavaScript. O objetivo é fornecer uma compreensão prática de vários métodos importantes, como `sort()`, `reduce()`, `filter()`, `map()`, e o operador spread. Além disso, o projeto inclui exemplos e soluções que ilustram como esses métodos podem ser usados em situações reais.

## Estrutura do Projeto

O projeto é estruturado em várias seções, cada uma abordando um conceito específico relacionado a arrays em JavaScript. Abaixo está uma descrição detalhada de cada seção.

### 1. Definição Array

**Descrição:** Esta seção introduz o conceito de arrays em JavaScript. É explicado o que são arrays e como eles podem ser usados para armazenar múltiplos valores em uma única variável. Também são abordadas técnicas para acessar e manipular itens em um array.

**Exemplos:**

- Declaração de arrays.
- Acesso a itens no array usando índices.
- Adição e remoção de itens do array usando métodos como `push()`, `pop()`, `shift()`, e `splice()`.

### 2. Método Sort

**Descrição:** Esta seção explica o método `sort()`, que é utilizado para ordenar os elementos de um array. O método `sort()` pode ordenar os elementos como strings ou usando uma função de comparação personalizada.

**Exemplos:**

- Ordenação padrão (alfabética).
- Ordenação numérica com função de comparação.

### 3. Método Reduce

**Descrição:** O método `reduce()` é detalhado nesta seção. Este método é usado para reduzir um array a um único valor, aplicando uma função acumuladora a cada item do array.

**Exemplos:**

- Soma dos valores de um array.
- Uso de um valor inicial para o acumulador.

### 4. Método Filter

**Descrição:** Esta seção descreve o método `filter()`, que cria um novo array com todos os elementos que passam em um teste definido por uma função de callback.

**Exemplos:**

- Filtragem de elementos com base em uma condição.
- Uso de um segundo parâmetro para definir o contexto `this`.

### 5. Método Spread

**Descrição:** O operador spread é introduzido nesta seção. Ele permite expandir elementos de um array ou objeto iterável em locais onde múltiplos elementos são esperados.

**Exemplos:**

- Combinação de arrays.
- Adição de um novo elemento a um array existente.

### 6. Método Map

**Descrição:** O método `map()` é explorado nesta seção. Ele cria um novo array com os resultados da aplicação de uma função em cada elemento do array original.

**Exemplos:**

- Multiplicação de valores em um array.
- Trabalhando com arrays de objetos para extrair propriedades.

### 7. Testar Metodos

**Descrição:** Nesta seção, você pode testar e experimentar com o código JavaScript diretamente no navegador. O objetivo é permitir que você explore a funcionalidade dos métodos discutidos, como `sort()`, `filter()`, `spread`, `map()`, e `reduce()`.

**Instruções:**

Digite seu código JavaScript no espaço fornecido abaixo e clique em "Executar Código" para ver a saída. Você pode usar esta área para experimentar com diferentes exemplos e entender melhor como cada método funciona. 

### 8. Aplicações

**Descrição:** Nesta seção, são apresentadas aplicações práticas dos métodos discutidos. Usamos um array de objetos representando vendas de produtos para demonstrar como ordenar, calcular totais, filtrar e adicionar novos itens.

**Exemplos:**

- Ordenação de produtos por preço.
- Cálculo do total de vendas.
- Filtragem de produtos com base em quantidade.
- Adição de um novo produto.
- Extração de nomes dos produtos.

### 9. Referências

**Descrição:** Aqui estão listadas as referências e recursos adicionais para aprofundar o conhecimento sobre métodos de arrays e outras funcionalidades do JavaScript.

## Prova de Conceito

Nesta seção, exploraremos como os exemplos fornecidos na seção de Aplicações demonstram a funcionalidade dos métodos `sort()`, `reduce()`, `filter()`, `spread`, e `map()`. Cada exemplo ilustra um uso prático desses métodos para processar e manipular dados em um array de objetos representando vendas de produtos. Vamos analisar como cada método contribui para a solução de problemas específicos e provar a eficácia e utilidade desses métodos em JavaScript.

### 1. Ordenar os Produtos por Preço com `sort()`

O método `sort()` foi utilizado para ordenar os produtos com base no preço. A função de comparação fornecida ao `sort()` permite que o array de objetos seja reordenado em ordem crescente de preços. 

**Como Prova o Conceito:**
O uso do `sort()` demonstra como a função de comparação pode ser aplicada para organizar os dados de acordo com critérios específicos, neste caso, o preço. Isso é útil em muitas situações práticas, como exibir produtos em uma loja online de forma que os clientes possam visualizar as opções mais baratas primeiro ou as mais caras.

### 2. Calcular o Total de Vendas com `reduce()`

O método `reduce()` foi empregado para calcular o total das vendas multiplicando a quantidade pelo preço de cada produto e somando os resultados. O `reduce()` acumula um valor final (o total de vendas) a partir dos valores individuais do array.

**Como Prova o Conceito:**
Este exemplo prova como o `reduce()` pode ser usado para transformar um array de valores em um único resultado acumulado. É uma demonstração prática da capacidade do `reduce()` de realizar cálculos agregados, que é essencial para tarefas como somar totais, calcular médias, e muitas outras operações que exigem a combinação de todos os elementos de um array.

### 3. Filtrar Produtos com Quantidade Maior que 5 com `filter()`

O método `filter()` foi utilizado para criar um novo array contendo apenas os produtos cuja quantidade é maior que 5. O `filter()` aplica uma função de teste e inclui apenas os elementos que passam nessa verificação.

**Como Prova o Conceito:**
Esse exemplo ilustra a capacidade do `filter()` de selecionar elementos específicos com base em condições definidas, demonstrando seu uso para extrair subconjuntos de dados que atendem a critérios determinados. Isso é útil para separar dados relevantes em relatórios, exibir apenas itens que atendem a certos requisitos, e outras aplicações similares.

### 4. Adicionar um Novo Produto à Lista com `spread`

O operador `spread` foi utilizado para adicionar um novo produto ao array de vendas existente. Através do spread, o novo produto foi incorporado ao array sem modificar o array original.

**Como Prova o Conceito:**
O uso do operador `spread` demonstra como ele pode expandir elementos de um array ou objeto em um novo array. Isso é crucial para situações onde é necessário adicionar ou combinar dados sem alterar os dados originais, promovendo a imutabilidade e facilitando operações de concatenação e combinação.

### 5. Criar um Array Apenas com os Nomes dos Produtos com `map()`

O método `map()` foi utilizado para transformar o array de objetos de vendas em um novo array contendo apenas os nomes dos produtos. O `map()` aplica uma função a cada elemento e gera um novo array com os resultados.

**Como Prova o Conceito:**
Esse exemplo evidencia como o `map()` pode ser usado para extrair e transformar dados de um array. É uma prova da capacidade do `map()` de aplicar transformações consistentes a todos os elementos de um array, o que é útil para preparar dados para visualizações, relatórios, ou qualquer outra forma de apresentação que exija uma forma específica de dados.


