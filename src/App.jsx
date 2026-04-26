import { useState } from 'react';
import catalogo from './catalogo'; // Importa seu banco de dados
import './App.css'; // Importa seus estilos

function App() {
  // Estados do React (as variáveis que fazem o site reagir)
  const [carrinho, setCarrinho] = useState({});
  const [painelAberto, setPainelAberto] = useState(false);
  const [categoriasAtivas, setCategoriasAtivas] = useState([]);
  const [tituloPainel, setTituloPainel] = useState('Itens');

  // Funções de lógica
  const abrirLoja = (listaCategorias, titulo) => {
    setCategoriasAtivas(listaCategorias);
    setTituloPainel(titulo);
    setPainelAberto(true);
  };

  const alterarQtd = (id, delta) => {
    setCarrinho(prev => {
      const novaQtd = (prev[id] || 0) + delta;
      return { ...prev, [id]: novaQtd < 0 ? 0 : novaQtd };
    });
  };

  const calcularTotais = () => {
    let preco = 0;
    let slots = 0;
    Object.entries(carrinho).forEach(([id, qtd]) => {
      if (qtd > 0) {
        // Busca o item em todas as categorias do catálogo
        const item = Object.values(catalogo).flat().find(i => i.id === id);
        if (item) {
          preco += item.preco * qtd;
          slots += item.espaco * qtd;
        }
      }
    });
    return { preco, slots };
  };

  const { preco, slots } = calcularTotais();

  return (
    <div className="room">
      <h1>Balcão da Jadis</h1>
      <div style={{ position: 'absolute', bottom: '20%', left: '40%', fontSize: '100px' }}>🐦‍⬛</div>

      {/* Objetos Interativos */}
      <div id="box-preparados" className="interact-obj" onClick={() => abrirLoja(['preparados'], 'Maleta de Preparados')}>
        <span>⚗️<br/>Preparados</span>
      </div>

      <div id="box-catalisadores" className="interact-obj" onClick={() => abrirLoja(['catalisadores'], 'Maleta de Catalisadores')}>
        <span>💎<br/>Catalisadores</span>
      </div>

      <div id="shelf-pocoes" className="interact-obj" onClick={() => abrirLoja(['pocoes', 'venenos'], 'Estante de Frascos')}>
        <div>🍷</div><div>🧪</div><div>🏺</div>
      </div>

      {/* Painel Lateral (Carrinho) */}
      <div id="shop-panel" className={painelAberto ? 'open' : ''}>
        <div className="panel-header">
          <h2>{tituloPainel}</h2>
          <span className="close-btn" onClick={() => setPainelAberto(false)}>✖</span>
        </div>

        <div id="items-container">
          {categoriasAtivas.map(cat => (
            <div key={cat}>
              <div className="category-divider">[ {cat.toUpperCase()} ]</div>
              {catalogo[cat]?.map(item => (
                <div key={item.id} className={`shop-item ${cat === 'venenos' ? 'item-veneno' : ''}`}>
                  <div className="item-info">
                    <h4>{item.nome}</h4>
                    <div className="item-details">T$ {item.preco} | 📦 {item.espaco}</div>
                    <div className="tooltip"><strong>Descrição:</strong><br/>{item.descricao}</div>
                  </div>
                  <div className="item-controls">
                    <button className="qty-btn" onClick={() => alterarQtd(item.id, -1)}>-</button>
                    <span style={{ width: '20px', textAlign: 'center' }}>{carrinho[item.id] || 0}</span>
                    <button className="qty-btn" onClick={() => alterarQtd(item.id, 1)}>+</button>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="panel-footer">
          <div className="total-row">
            <span>Total:</span>
            <span>T$ {preco}</span>
          </div>
          <div className="slots-row">Espaço: {slots} slots</div>
          <button className="finalize-btn" onClick={() => alert(`Total: T$ ${preco}`)}>Confirmar Compra</button>
        </div>
      </div>
    </div>
  );
}

export default App;