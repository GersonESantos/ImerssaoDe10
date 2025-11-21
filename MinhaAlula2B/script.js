let cardContainer = document.getElementById('card-container');
let campoBusca = document.getElementById('busca');
let dados = [];

async function iniciarBusca(){
    if (!cardContainer) {
        console.error('Elemento #card-container não encontrado');
        return;
    }

    try {
        const resposta = await fetch('data.json');
        if (!resposta.ok) {
            throw new Error(`Falha ao carregar data.json: ${resposta.status} ${resposta.statusText}`);
        }
        dados = await resposta.json();
    } catch (err) {
        console.error('Erro ao buscar dados:', err);
        return;
    }

    renderizarCards(dados);

    const termoBusca = (campoBusca?.value || '').toLowerCase();
    if (termoBusca) {
        const dadosFiltrados = dados.filter(dado =>
            (dado.name || '').toLowerCase().includes(termoBusca) ||
            (dado.description || '').toLowerCase().includes(termoBusca)
        );

        renderizarCards(dadosFiltrados);
    }
}
function renderizarCards(dados)
{
    // limpar container antes de renderizar para evitar duplicações
    cardContainer.innerHTML = '';
    for (let dado of dados || []) {
        let article = document.createElement('article');
        article.classList.add('card');

        const nome = dado.name || '';
        const ano = dado.ano || '';
        const descricao = dado.description || '';
        const link = dado.link || '#';

        const h2 = document.createElement('h2');
        h2.textContent = nome;
        const pAno = document.createElement('p');
        pAno.textContent = ano;
        const pDesc = document.createElement('p');
        pDesc.textContent = descricao;
        const a = document.createElement('a');
        a.textContent = 'Leia mais';
        a.setAttribute('href', link);
        a.setAttribute('target', '_blank');
        a.setAttribute('rel', 'noopener');

        article.appendChild(h2);
        article.appendChild(pAno);
        article.appendChild(pDesc);
        article.appendChild(a);

        cardContainer.appendChild(article);
    }
}
iniciarBusca();