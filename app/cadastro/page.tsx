"use client";

export default function Cadastro() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h2 className="text-3xl font-bold text-gray-800 border-b pb-2">Sugerir Novo Ponto</h2>
      <p className="text-gray-600">Encontrou um local com boa acessibilidade ou que precisa urgentemente de reformas? Envie para nós!</p>
      
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <form className="bg-white p-6 rounded-lg shadow border border-gray-200 space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nome do Local</label>
            <input type="text" placeholder="Ex: Farmácia Central" className="w-full p-2 border rounded outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Avaliação</label>
            <select className="w-full p-2 border rounded outline-none">
              <option>Acessível</option>
              <option>Parcialmente Acessível</option>
              <option>Inacessível</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white font-bold py-2 rounded">Enviar Sugestão</button>
        </form>
        <div>
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500&q=80" 
            alt="Formulário" 
            className="rounded-lg shadow w-full h-64 object-cover"
          />
        </div>
      </div>
    </div>
  );
}
