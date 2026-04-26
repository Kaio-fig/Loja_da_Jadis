// --- O CATÁLOGO DEFINITIVO ---
const catalogo = {
    preparados: [
        { id: 'pr1', nome: 'Ácido', preco: 10, espaco: 0.5, descricao: "...", imagem: "acido.png" },
        { id: 'pr2', nome: 'Bálsamo restaurador', preco: 10, espaco: 0.5, descricao: "...", imagem: "balsamo.png" },
        { id: 'pr3', nome: 'Bomba', preco: 50, espaco: 0.5, descricao: "...", imagem: "bomba.png" },
        { id: 'pr4', nome: 'Cosmético', preco: 30, espaco: 0.5, descricao: "...", imagem: "cosmetico.png" },
        { id: 'pr5', nome: 'Elixir do amor', preco: 100, espaco: 0.5, descricao: "...", imagem: "elixir_amor.png" },
        { id: 'pr6', nome: 'Essência de mana', preco: 50, espaco: 0.5, descricao: "...", imagem: "essencia_mana.png" },
        { id: 'pr7', nome: 'Fogo alquímico', preco: 10, espaco: 0.5, descricao: "...", imagem: "fogo_alquimico.png" },
        { id: 'pr8', nome: 'Pó do desaparecimento', preco: 100, espaco: 0.5, descricao: "...", imagem: "po_desaparecimento.png" }
    ],
    catalisadores: [
        { id: 'c1', nome: 'Baga-de-fogo', preco: 30, espaco: 0.5, descricao: "...", imagem: "baga_fogo.png" },
        { id: 'c2', nome: 'Dente-de-dragão', preco: 45, espaco: 0.5, descricao: "...", imagem: "dente_dragao.png" },
        { id: 'c3', nome: 'Essência abissal', preco: 150, espaco: 0.5, descricao: "...", imagem: "essencia_abissal.png" },
        { id: 'c4', nome: 'Líquen lilás', preco: 30, espaco: 0.5, descricao: "...", imagem: "liquen_lilas.png" },
        { id: 'c5', nome: 'Musgo púrpura', preco: 45, espaco: 0.5, descricao: "...", imagem: "musgo_purpura.png" },
        { id: 'c6', nome: 'Ossos de monstro', preco: 45, espaco: 0.5, descricao: "...", imagem: "ossos_monstro.png" },
        { id: 'c7', nome: 'Pó de cristal', preco: 30, espaco: 0.5, descricao: "...", imagem: "po_cristal.png" },
        { id: 'c8', nome: 'Pó de giz', preco: 30, espaco: 0.5, descricao: "...", imagem: "po_giz.png" },
        { id: 'c9', nome: 'Ramo verdejante', preco: 45, espaco: 0.5, descricao: "...", imagem: "ramo_verdejante.png" },
        { id: 'c10', nome: 'Saco de sal', preco: 45, espaco: 0.5, descricao: "...", imagem: "saco_sal.png" },
        { id: 'c11', nome: 'Seixo de âmbar', preco: 30, espaco: 0.5, descricao: "...", imagem: "seixo_ambar.png" },
        { id: 'c12', nome: 'Terra de cemitério', preco: 30, espaco: 0.5, descricao: "...", imagem: "terra_cemiterio.png" }
    ],
    pocoes: [
        { id: 'po_01', nome: 'Abençoar Alimentos', preco: 30, espaco: 0.5, descricao: "...", imagem: "abencoar.png" },
        { id: 'po_02', nome: 'Área Escorregadia', preco: 30, espaco: 0.5, descricao: "...", imagem: "area.png" },
        { id: 'po_03', nome: 'Arma Mágica (óleo)', preco: 30, espaco: 0.5, descricao: "...", imagem: "arma1.png" },
        { id: 'po_04', nome: 'Compreensão', preco: 30, espaco: 0.5, descricao: "...", imagem: "comp.png" },
        { id: 'po_05', nome: 'Curar Ferimentos (2d8+2)', preco: 30, espaco: 0.5, descricao: "...", imagem: "cura1.png" },
        { id: 'po_06', nome: 'Disfarce Ilusório', preco: 30, espaco: 0.5, descricao: "...", imagem: "disfarce.png" },
        { id: 'po_07', nome: 'Escuridão (óleo)', preco: 30, espaco: 0.5, descricao: "...", imagem: "esc.png" },
        { id: 'po_08', nome: 'Luz (óleo)', preco: 30, espaco: 0.5, descricao: "...", imagem: "luz.png" },
        { id: 'po_09', nome: 'Névoa (granada)', preco: 30, espaco: 0.5, descricao: "...", imagem: "nevoa.png" },
        { id: 'po_10', nome: 'Primor Atlético', preco: 30, espaco: 0.5, descricao: "...", imagem: "primor.png" },
        { id: 'po_11', nome: 'Proteção Divina', preco: 30, espaco: 0.5, descricao: "...", imagem: "prot.png" },
        { id: 'po_12', nome: 'Resistência a Energia', preco: 30, espaco: 0.5, descricao: "...", imagem: "resist.png" },
        { id: 'po_13', nome: 'Sono', preco: 30, espaco: 0.5, descricao: "...", imagem: "sono.png" },
        { id: 'po_14', nome: 'Suporte Ambiental', preco: 30, espaco: 0.5, descricao: "...", imagem: "suporte.png" },
        { id: 'po_15', nome: 'Tranca Arcana (óleo)', preco: 30, espaco: 0.5, descricao: "...", imagem: "tranca.png" },
        { id: 'po_16', nome: 'Visão Mística', preco: 30, espaco: 0.5, descricao: "...", imagem: "visao.png" },
        { id: 'po_17', nome: 'Vitalidade Fantasma', preco: 30, espaco: 0.5, descricao: "...", imagem: "vitalidade.png" },
        { id: 'po_18', nome: 'Escudo da Fé (Cena)', preco: 120, espaco: 0.5, descricao: "...", imagem: "escudo.png" },
        { id: 'po_19', nome: 'Alterar Tamanho', preco: 270, espaco: 0.5, descricao: "...", imagem: "alt.png" },
        { id: 'po_20', nome: 'Aparência Perfeita', preco: 270, espaco: 0.5, descricao: "...", imagem: "apa.png" },
        { id: 'po_21', nome: 'Armamento da Natureza', preco: 270, espaco: 0.5, descricao: "...", imagem: "arm.png" },
        { id: 'po_22', nome: 'Bola de Fogo (granada)', preco: 270, espaco: 0.5, descricao: "...", imagem: "bola1.png" },
        { id: 'po_23', nome: 'Camuflagem Ilusória', preco: 270, espaco: 0.5, descricao: "...", imagem: "camu.png" },
        { id: 'po_24', nome: 'Concentração de Combate', preco: 270, espaco: 0.5, descricao: "...", imagem: "conc.png" },
        { id: 'po_25', nome: 'Curar Ferimentos (4d8+4)', preco: 270, espaco: 0.5, descricao: "...", imagem: "cura2.png" },
        { id: 'po_26', nome: 'Físico Divino', preco: 270, espaco: 0.5, descricao: "...", imagem: "fisico1.png" },
        { id: 'po_27', nome: 'Mente Divina', preco: 270, espaco: 0.5, descricao: "...", imagem: "mente.png" },
        { id: 'po_28', nome: 'Metamorfose', preco: 270, espaco: 0.5, descricao: "...", imagem: "meta.png" },
        { id: 'po_29', nome: 'Purificação', preco: 270, espaco: 0.5, descricao: "...", imagem: "puri.png" },
        { id: 'po_30', nome: 'Velocidade', preco: 270, espaco: 0.5, descricao: "...", imagem: "velo.png" },
        { id: 'po_31', nome: 'Vestimenta da Fé', preco: 270, espaco: 0.5, descricao: "...", imagem: "vesti.png" },
        { id: 'po_32', nome: 'Voz Divina', preco: 270, espaco: 0.5, descricao: "...", imagem: "voz.png" },
        { id: 'po_33', nome: 'Arma Mágica (+3)', preco: 750, espaco: 0.5, descricao: "...", imagem: "arma2.png" },
        { id: 'po_34', nome: 'Curar Ferimentos (7d8+7)', preco: 1080, espaco: 0.5, descricao: "...", imagem: "cura3.png" },
        { id: 'po_35', nome: 'Físico Divino (3 Atrib)', preco: 1080, espaco: 0.5, descricao: "...", imagem: "fisico2.png" },
        { id: 'po_36', nome: 'Invisibilidade', preco: 1080, espaco: 0.5, descricao: "...", imagem: "invis.png" },
        { id: 'po_37', nome: 'Bola de Fogo (10d6)', preco: 1470, espaco: 0.5, descricao: "...", imagem: "bola2.png" },
        { id: 'po_38', nome: 'Curar Ferimentos (11d8+11)', preco: 3000, espaco: 0.5, descricao: "...", imagem: "cura4.png" }
    ],
    venenos: [
        { id: 'v1', nome: 'Beladona', preco: 1500, espaco: 0.5, descricao: "Dano massivo se ingerido.", imagem: "beladona.png" },
        { id: 'v2', nome: 'Bruma sonolenta', preco: 150, espaco: 0.5, descricao: "Faz o alvo adormecer se falhar no teste.", imagem: "bruma.png" },
        { id: 'v3', nome: 'Cicuta', preco: 60, espaco: 0.5, descricao: "Causa fraqueza extrema e dano.", imagem: "cicuta.png" },
        { id: 'v4', nome: 'Essência de sombra', preco: 100, espaco: 0.5, descricao: "Causa dano e cegueira temporária.", imagem: "essencia_sombra.png" },
        { id: 'v5', nome: 'Névoa tóxica', preco: 30, espaco: 0.5, descricao: "Nuvem de gás venenoso em área.", imagem: "nevoa.png" },
        { id: 'v6', nome: 'Peçonha comum', preco: 15, espaco: 0.5, descricao: "Perde 1d12 PV se falhar no teste Fortitude.", imagem: "peconha1.png" },
        { id: 'v7', nome: 'Peçonha concentrada', preco: 90, espaco: 0.5, descricao: "Versão mais letal da peçonha comum.", imagem: "peconha2.png" },
        { id: 'v8', nome: 'Peçonha potente', preco: 600, espaco: 0.5, descricao: "Veneno mortífero de ação rápida.", imagem: "peconha3.png" },
        { id: 'v9', nome: 'Pó de lich', preco: 3000, espaco: 0.5, descricao: "Pó necromântico de altíssimo perigo.", imagem: "po_lich.png" },
        { id: 'v10', nome: 'Riso de Nimb', preco: 150, espaco: 0.5, descricao: "Causa alucinações e confusão mental.", imagem: "riso_nimb.png" }
    ]
};

let carrinho = {};

function encontrarItem(idDesejado) {
    for (const categoria in catalogo) {
        const itemEncontrado = catalogo[categoria].find(item => item.id === idDesejado);
        if (itemEncontrado) return itemEncontrado;
    }
    return null;
}

// ATUALIZADO: Agora cria títulos entre as categorias
function abrirLoja(listaCategorias, titulo) {
    const panel = document.getElementById('shop-panel');
    const container = document.getElementById('items-container');

    document.getElementById('panel-title').innerText = titulo;
    container.innerHTML = '';

    listaCategorias.forEach(categoria => {
        if (catalogo[categoria] && catalogo[categoria].length > 0) {

            // 1. Cria o Separador Visual (O "Vidro")
            let nomeBonito = categoria.toUpperCase();
            if (categoria === 'venenos') nomeBonito = "ÁREA RESTRITA: VENENOS";
            if (categoria === 'pocoes') nomeBonito = "POÇÕES COMUNS";

            const divider = document.createElement('div');
            divider.className = 'category-divider';
            divider.innerText = `[ ${nomeBonito} ]`;
            container.appendChild(divider);

            // 2. Adiciona os itens da categoria
            catalogo[categoria].forEach(item => {
                const qtdAtual = carrinho[item.id] || 0;
                const itemDiv = document.createElement('div');

                // Se for veneno, adiciona a classe CSS extra para ficar verde
                itemDiv.className = categoria === 'venenos' ? 'shop-item item-veneno' : 'shop-item';

                itemDiv.innerHTML = `
                    <div class="item-info">
                        <h4>${item.nome}</h4>
                        <div class="item-details">T$ ${item.preco} | 📦 ${item.espaco}</div>
                        <div class="tooltip">
                            <strong>Descrição:</strong><br>${item.descricao}
                        </div>
                    </div>
                    <div class="item-controls">
                        <button class="qty-btn" onclick="alterarQtd('${item.id}', -1)">-</button>
                        <span id="qtd-${item.id}" style="width:20px; text-align:center">${qtdAtual}</span>
                        <button class="qty-btn" onclick="alterarQtd('${item.id}', 1)">+</button>
                    </div>
                `;
                container.appendChild(itemDiv);
            });
        }
    });

    panel.classList.add('open');
    atualizarTotais();
}

function fecharLoja() {
    document.getElementById('shop-panel').classList.remove('open');
}

function alterarQtd(idItem, delta) {
    if (!carrinho[idItem]) carrinho[idItem] = 0;
    carrinho[idItem] += delta;
    if (carrinho[idItem] < 0) carrinho[idItem] = 0;

    const displayQtd = document.getElementById(`qtd-${idItem}`);
    if (displayQtd) displayQtd.innerText = carrinho[idItem];

    atualizarTotais();
}

function atualizarTotais() {
    let totalPreco = 0;
    let totalEspaco = 0;

    for (const [id, qtd] of Object.entries(carrinho)) {
        if (qtd > 0) {
            const item = encontrarItem(id);
            if (item) {
                totalPreco += item.preco * qtd;
                totalEspaco += item.espaco * qtd;
            }
        }
    }

    document.getElementById('total-price').innerText = totalPreco;
    document.getElementById('total-slots').innerText = totalEspaco;
}

function finalizarCompra() {
    if (document.getElementById('total-price').innerText == '0') {
        alert("Carrinho vazio!");
        return;
    }
    alert(`Compra finalizada com a Jades!\nTotal gasto: T$ ${document.getElementById('total-price').innerText}`);
    carrinho = {};
    atualizarTotais();
    fecharLoja();
}

export default catalogo;