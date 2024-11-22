import Link from "next/link";

export default function Rodape() {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto text-center">
        <div className="text-yellow-500 text-lg font-bold mb-4">RenovaTec</div>
        <p className="text-sm text-white mb-6">
          © {new Date().getFullYear()} RenovaTec. Todos os direitos reservados.
        </p>
        <div className="mt-4">
          <p className="text-sm text-white">
            Desenvolvido por{" "}
            <Link href="/integrantes" className="text-yellow-500">
              RenovaTec Team
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
