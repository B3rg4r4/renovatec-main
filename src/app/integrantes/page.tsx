import Image from "next/image";
import Link from "next/link";

export default function Membros() {
  return (
    <section
      id="integrantes"
      className="min-h-screen flex justify-center items-center py-10 bg-gradient-to-b from-yellow-500 to-black"
    >
      <div className="flex flex-col items-center max-w-screen-lg w-full px-4">
        <h2 className="text-black text-4xl font-black mb-4">
          Integrantes da RenovaTec
        </h2>
        <h3 className="text-black text-xl mb-8 font-medium">
          Formada por integrantes da turma 1TDSPW
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-10 mb-36 ">
          {/* Pedro Henrique */}
          <div className="flex flex-col items-center text-center bg-white p-4 rounded-lg shadow-lg">
            <Image
              src="/img/pedroimage.png"
              alt="Pedro Henrique"
              width={200}
              height={200}
              className="rounded-lg mb-2"
            />
            <p className="mt-4 text-black font-semibold">RM556639</p>
            <p className="text-black">Pedro Henrique Bergara</p>
            <Link
              href="https://github.com/B3rg4r4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-500 hover:underline mt-2"
            >
              Git: B3rg4r4
            </Link>
            <Link
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-500 hover:underline mt-2"
            >
              Linkedin: Pedro Bergara
            </Link>
          </div>

          {/* Victor Nieves */}
          <div className="flex flex-col items-center text-center bg-white p-4 rounded-lg shadow-lg">
            <Image
              src="/img/victorimage.png"
              alt="Victor Nieves"
              width={200}
              height={200}
              className="rounded-lg mb-2"
            />
            <p className="mt-4 text-black font-semibold">RM554557</p>
            <p className="text-black">Victor Nieves Britto Medeiros</p>
            <Link
              href="https://github.com/victornbm7405"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-500 hover:underline mt-2"
            >
              Git: victornbm7405
            </Link>
            <Link
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-500 hover:underline mt-2"
            >
              Linkedin: Victor Nieves
            </Link>
          </div>

          {/* Marcos Ramalho */}
          <div className="flex flex-col items-center text-center bg-white p-4 rounded-lg shadow-lg">
            <Image
              src="/img/ramalhoimage.png"
              alt="Marcos Ramalho"
              width={200}
              height={200}
              className="rounded-lg mb-2"
            />
            <p className="mt-4 text-black font-semibold">RM554611</p>
            <p className="text-black">Marcos Antônio Ramalho Neto</p>
            <Link
              href="https://github.com/Ramalho011"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-500 hover:underline mt-2"
            >
              Git: Ramalho011
            </Link>
            <Link
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-500 hover:underline mt-2"
            >
              Linkedin: Marcos Ramalho
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
