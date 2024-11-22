import Link from "next/link";

export default function Cabecalho() {
  return (
    <header className="bg-black text-white py-5">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-3xl font-light text-yellow-500 ml-12">
          <Link href="/">RenovaTec</Link>
        </div>
        <ul className="flex space-x-12 text-lg mr-20">
          <li>
            <Link
              href="/"
              className="hover:text-yellow-500 relative group font-semibold"
            >
              Home
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-500 transition-all group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link
              href="/integrantes"
              className="hover:text-yellow-500 relative group font-semibold"
            >
              Integrantes
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-500 transition-all group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link
              href="/analise"
              className="hover:text-yellow-500 relative group font-semibold"
            >
              Análise
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-500 transition-all group-hover:w-full"></span>
            </Link>
          </li>
          <li>
            <Link
              href="/banco"
              className="hover:text-yellow-500 relative group font-semibold"
            >
              Gerenciar produtos
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-500 transition-all group-hover:w-full"></span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
