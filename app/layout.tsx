import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'Acessibilidade Urbana',
  description: 'Mapeando a acessibilidade na nossa cidade',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-50 text-gray-800 min-h-screen flex flex-col">
        {/* Barra de Navegação global */}
        <header className="bg-blue-600 text-white shadow-md">
          <nav className="container mx-auto p-4 flex justify-between items-center">
            <h1 className="text-xl font-bold tracking-wide">AcessaUrbano</h1>
            <div className="space-x-6 font-medium">
              <Link href="/" className="hover:text-blue-200 transition">Início</Link>
              <Link href="/locais" className="hover:text-blue-200 transition">Locais</Link>
              <Link href="/sobre" className="hover:text-blue-200 transition">Sobre</Link>
              <Link href="/cadastro" className="hover:text-blue-200 transition">Contribuir</Link>
            </div>
          </nav>
        </header>

        {/* Conteúdo dinâmico das páginas */}
        <main className="flex-grow container mx-auto p-6">
          {children}
        </main>

        {/* Rodapé global */}
        <footer className="bg-gray-800 text-white text-center p-4 text-sm mt-8">
          <p>&copy; 2026 Projeto AcessaUrbano. Desenvolvido para a AV3.</p>
        </footer>
      </body>
    </html>
  );
}
