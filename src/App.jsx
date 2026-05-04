import { useState } from 'react';
import catalogo from './catalogo'; 
import './App.css';

function App() {
  const [carrinho, setCarrinho] = useState({});
  const [painelAberto, setPainelAberto] = useState(false);
  const [categoriasAtivas, setCategoriasAtivas] = useState([]);
  const [tituloPainel, setTituloPainel] = useState('Itens');

  // --- SISTEMA DE CÂMERA ---
  // Default: Escala 1 (100%), Posição X e Y no centro (0vw, 0vh)
  const [camera, setCamera] = useState({ scale: 1, x: '0vw', y: '0vh' });
  const [isScrolling, setIsScrolling] = useState(false); // Evita "lag" na câmera

  const abrirLoja = (listaCategorias, titulo) => {
    setCategoriasAtivas(listaCategorias);
    setTituloPainel(titulo);
    setPainelAberto(true);
    setIsScrolling(false); // Transição suave ao clicar

    // LÓGICA DE FOCO (Direção da Câmera)
    if (listaCategorias.includes('preparados')) {
      // Move a câmera para a Maleta 1 (Aumenta 80% e puxa o cenário pra direita)
      setCamera({ scale: 1.8, x: '25vw', y: '15vh' }); 
    } 
    else if (listaCategorias.includes('catalisadores')) {
      // Move a câmera para a Maleta 2
      setCamera({ scale: 1.8, x: '10vw', y: '15vh' });
    } 
    else if (listaCategorias.includes('pocoes')) {
      // Estante: Zoom de 60% (1.6). Começa focando no hemisfério esquerdo (-5vw)
      setCamera({ scale: 1.6, x: '-5vw', y: '5vh' });
    }
  };

  const fecharLoja = () => {
    setPainelAberto(false);
    setIsScrolling(false);
    // Volta a câmera pro Default 100%
    setCamera({ scale: 1, x: '0vw', y: '0vh' }); 
  };

  // --- EVENTO: Câmera Reativa ao Scroll ---
  const handleScroll = (e) => {
    // Só ativa esse efeito se estivermos na estante de poções
    if (!categoriasAtivas.includes('pocoes')) return;
    
    setIsScrolling(true); // Deixa o movimento rápido para acompanhar o mouse

    const { scrollTop, scrollHeight, clientHeight } = e.target;
    const maxScroll = scrollHeight - clientHeight;
    
    if (maxScroll <= 0) return;

    // Calcula a % da rolagem (de 0.0 no topo até 1.0 no final)
    const porcentagem = scrollTop / maxScroll;
    
    // PANNING MÁGICO: Começa no hemisfério esquerdo (-5vw) e desliza para o direito (-35vw)
    const startX = -5;
    const endX = -35; 
    const currentX = startX + ((endX - startX) * porcentagem);

    setCamera(prev => ({ ...prev, x: `${currentX}vw` }));
  };

  // Funções de Carrinho
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
      
      {/* CAMADA 1: O CENÁRIO (Sofre Zoom) */}
      <div 
        className="scenario"
        style={{
          transform: `translate(${camera.x}, ${camera.y}) scale(${camera.scale})`,
          // Se estiver rolando, transição rápida (0.1s). Se for clique, animação cinematográfica (0.6s)
          transition: isScrolling ? 'transform 0.1s ease-out' : 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)'
        }}
      >
        <h1 style={{ position: 'absolute', top: '20px', left: '20px' }}>Balcão da Jadis</h1>
        <div style={{ position: 'absolute', bottom: '20%', left: '40%', fontSize: '100px' }}>🐦‍⬛</div>

        {/* Maletas e Estante */}
        <div id="box-preparados" className="interact-obj" onClick={() => abrirLoja(['preparados'], 'Maleta de Preparados')}>
          <span>⚗️<br/>Preparados</span>
        </div>

        <div id="box-catalisadores" className="interact-obj" onClick={() => abrirLoja(['catalisadores'], 'Maleta de Catalisadores')}>
          <span>💎<br/>Catalisadores</span>
        </div>

        <div id="shelf-pocoes" className="interact-obj" onClick={() => abrirLoja(['pocoes', 'venenos'], 'Estante de Frascos')}>
          <div className="shelf-item">🍷</div>
          <div className="shelf-item">🧪</div>
          <div className="shelf-item">🏺</div>
        </div>
      </div>

      {/* CAMADA 2: A INTERFACE (Não sofre Zoom, fica por cima) */}
      <div id="shop-panel" className={painelAberto ? 'open' : ''}>
        <div className="panel-header">
          <h2>{tituloPainel}</h2>
          {/* Botão de Fechar agora chama a função que reseta a câmera */}
          <span className="close-btn" onClick={fecharLoja}>✖</span> 
        </div>

        {/* Adicionamos o evento onScroll aqui! */}
        <div id="items-container" onScroll={handleScroll}>
          {categoriasAtivas.map(cat => (
            <div key={cat}>
              <div className="category-divider">[ {cat === 'venenos' ? 'ÁREA RESTRITA: VENENOS' : cat.toUpperCase()} ]</div>
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