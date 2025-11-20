let cardContainer = document.getElementById('card-container');
let dados=[];
async function iniciarBusca(){
    let resposta = await fetch('data.json');
    dados = await resposta.json();
    renderizarCards(dados);
}
function renderizarCards(dados){
    for(let dado of dados){
        let article = document.createElement('article');
        article.classList.add('card');
        article.innerHTML = `
            <h2>JavaScript</h2>
            <p>Este é um parágrafo de exemplo para mostrar como o texto aparece. <strong>Termo importante:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript">Leia mais</a>

        `;
        cardContainer.appendChild(article);
    }
}
iniciarBusca();