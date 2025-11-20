let cardContainer = document.getElementById('.cards-container');
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
        article.innerHTML = 
        `
        <img src="${dado.imagem}" alt="${dado.titulo}">
        <h3>${dado.titulo}</h3>
        <p>${dado.descricao}</p>
        `;
        cardContainer.appendChild(article);
    }
}
renderizarCards(dados);
