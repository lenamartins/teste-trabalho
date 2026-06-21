export default function Sobre() {
  return (
    <div className="max-w-3xl mx-auto space-y-6 my-4">
      <h2 className="text-3xl font-bold text-gray-800">Sobre o Projeto</h2>
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <p className="text-gray-600 leading-relaxed md:w-1/2">
          Este sistema nasceu como uma iniciativa estudantil para a disciplina de Desenvolvimento Web. Nosso objetivo é dar visibilidade aos obstáculos enfrentados diariamente por pessoas com deficiência (PCD).
        </p>
        <div className="md:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1531206715517-5c0ba140e2b8?auto=format&fit=crop&w=500&q=80" 
            alt="Estudantes colaborando" 
            className="rounded-lg shadow border"
          />
        </div>
      </div>
    </div>
  );
}