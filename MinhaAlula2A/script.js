let cardContainer = document.getElementById('card-container');
let dados=[];
async function iniciarBusca(){
    let resposta = await fetch('data.json');
    dados = await resposta.json();
    renderizarCards(dados);
}
function renderizarCards(dados)
{
    for(let dado of dados)
    {
        let article = document.createElement('article');
        article.classList.add('card');
        article.innerHTML = `
            <h2>${dado.name}</h2>
            <p>${dado.ano}</p>
            <p>${dado.description}</p>
            <a href="${dado.link}">Leia mais</a>
        `;
        cardContainer.appendChild(article);
    }
}
iniciarBusca();