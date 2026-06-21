export default function Locais() {
  const locais = [
    { id: 1, nome: "Biblioteca Municipal", status: "Totalmente Acessível", cor: "text-green-600", img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=400&q=80" },
    { id: 2, nome: "Terminal de Ônibus Central", status: "Parcialmente Acessível", cor: "text-yellow-600", img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=400&q=80" },
    { id: 3, nome: "Praça do Cidadão", status: "Não Acessível", cor: "text-red-600", img: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=400&q=80" },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800 border-b pb-2">Locais Mapeados</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {locais.map((local) => (
          <div key={local.id} className="bg-white rounded-lg shadow overflow-hidden border border-gray-200">
            <img src={local.img} alt={local.nome} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-xl mb-1">{local.nome}</h3>
              <p className={`font-semibold ${local.cor}`}>{local.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}