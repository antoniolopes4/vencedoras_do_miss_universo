const $searchButton = document.getElementById('searchButton');
// Obtém o elemento HTML com o ID 'searchButton' e armazena em $searchButton.
// O símbolo '$' é comum em JavaScript para indicar variáveis que referenciam elementos DOM.

const $searchResults = document.getElementById('searchResults');
// Obtém o elemento HTML com o ID 'searchResults' e armazena em $searchResults.
// Este elemento será usado para exibir os resultados da pesquisa.

$searchButton.onclick = function pesquisar() {
  // Função que será executada quando o botão de pesquisa for clicado.

  let fragment = '';
  // Inicializa uma string vazia para armazenar o HTML dos resultados da pesquisa.
  // Utilizaremos template literals para construir o HTML de forma mais legível.

  for (let miss of misses) {
    // Itera sobre cada elemento (miss) do array 'misses'.
    // Assumimos que 'misses' é um array de objetos, cada um representando uma 'miss'.

    fragment += `
      <div class="itemResult">
        <img src="${miss.image}" alt="miss ${miss.name}">
        <div class="itemText">
          <h2><a href="${miss.link}">${miss.name}</a></h2>
          <p id="itemYear">${miss.year}</p>
          <p id="itemCountry">${miss.country}</p>
          <p id="itemDescription">${miss.description}</p>
          <a href="${miss.link}">Mais informações</a>
        </div>
      </div>
    `;
  }

  $searchResults.innerHTML = fragment;
  // Atribui o HTML gerado para o elemento 'searchResults',
  // substituindo o conteúdo anterior pelos novos resultados.
};