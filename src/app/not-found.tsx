import Link from "next/link";

export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h1 className="text-8xl font-extrabold mb-3 text-yellow-500">404</h1>
      <h2 className="text-4xl font-bold mb-2">Página não encontrada</h2>

      <p className="text-lg text-white">
        Parece que essa página não está disponível.
      </p>

      <p className="text-lg text-white mb-8">
        Clique no botão abaixo para voltar à página inicial!
      </p>

      <Link href="/" passHref>
        <button className="px-6 py-3 bg-yellow-500 text-black font-bold rounded hover:bg-yellow-600 transition-all">
          Voltar ao início
        </button>
      </Link>
    </div>
  );
}
