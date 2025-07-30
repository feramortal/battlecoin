import { useState } from "react";

const mockMoedas = [
  {
    nome: "1 Real (Brasil)",
    valor: 1,
    personagem: "Efígie da República",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/1_Real_2010_-_obverse.jpg/200px-1_Real_2010_-_obverse.jpg"
  },
  {
    nome: "1 Dollar (EUA)",
    valor: 1,
    personagem: "George Washington",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/US_One_Dollar_Obverse.png/200px-US_One_Dollar_Obverse.png"
  },
  {
    nome: "2 Euros (UE)",
    valor: 2,
    personagem: "Mapa da Europa",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/2_euro_coin_common_reverse.png/200px-2_euro_coin_common_reverse.png"
  }
];

export default function GachaPage() {
  const [resultados, setResultados] = useState([]);

  const rolar = () => {
    const novas = Array.from({ length: 5 }, () => {
      const index = Math.floor(Math.random() * mockMoedas.length);
      return mockMoedas[index];
    });
    setResultados(novas);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ color: '#facc15' }}>BattleCoin</h1>
      <p>Rolar 5 moedas históricas!</p>
      <button onClick={rolar} style={{ background: '#facc15', color: 'black', padding: 10, marginBottom: 20 }}>
        Rolar 5 Moedas
      </button>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
        {resultados.map((moeda, i) => (
          <div key={i} style={{ background: 'white', color: 'black', borderRadius: 10, padding: 10, width: 150 }}>
            <img src={moeda.imagem} alt={moeda.nome} style={{ width: '100%', borderRadius: 8 }} />
            <h3>{moeda.personagem}</h3>
            <p>{moeda.nome}</p>
            <strong>Poder: {moeda.valor}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}
