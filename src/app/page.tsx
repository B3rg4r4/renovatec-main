import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-black text-white">
      {/* Banner principal */}
      <section className="relative bg-gradient-to-b from-yellow-500 to-black py-40">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto text-center px-6 max-w-screen-lg">
          <div className="text-white inline-block px-6 py-4 rounded-md">
            <h1 className="text-5xl font-extrabold mb-4 animate-fade-in">
              RenovaTec
            </h1>
            <p className="text-lg font-bold animate-fade-in delay-2">
              Eficiência energética ao alcance das suas mãos! Descubra como
              reduzir o consumo energético da sua casa com soluções
              inteligentes.
            </p>
          </div>
        </div>
      </section>

      {/* Seção de Introdução */}
      <section className="bg-yellow-500 py-16">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center max-w-screen-lg">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold mb-6 text-black">
              Sobre o Projeto
            </h2>
            <p className="text-lg leading-relaxed text-black">
              Desenvolvemos um software inovador que analisa o consumo de
              energia de aparelhos eletrônicos e recomenda modelos mais
              eficientes, ajudando você a economizar e contribuir para um futuro
              mais sustentável.
            </p>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0 flex ml-72">
            <Image
              src="/img/energia-bonita.png"
              alt="Análise de energia"
              width={300}
              height={300}
              className="rounded-lg shadow-lg hover:scale-105 transition-transform ml-34"
            />
          </div>
        </div>
      </section>

      {/* Seção de Funcionalidades */}
      <section className="bg-gray-800 py-10">
        <div className="container mx-auto px-6 flex flex-col items-center max-w-screen-lg">
          <h2 className="text-3xl font-bold text-center text-yellow-500 mb-10">
            Nossas Funcionalidades
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Funcionalidade 1 */}
            <div className="flex flex-col items-center text-center w-full md:w-1/3 transition-transform hover:scale-105">
              <Image
                src="/img/ventilador.png"
                alt="Cadastro de Aparelhos"
                width={100}
                height={100}
                className="mb-2"
              />
              <h4 className="font-bold text-lg text-yellow-500">
                Cadastro de Aparelhos
              </h4>
              <p className="text-sm text-gray-300">
                Insira informações detalhadas sobre seus aparelhos, como consumo
                e custo, para uma análise precisa do seu consumo energético.
              </p>
            </div>
            {/* Funcionalidade 2 */}
            <div className="flex flex-col items-center text-center w-full md:w-1/3 transition-transform hover:scale-105">
              <Image
                src="/img/energia-renovavel.png"
                alt="Cálculo de Consumo"
                width={100}
                height={100}
                className="mb-2"
              />
              <h4 className="font-bold text-lg text-yellow-500">
                Cálculo de Consumo
              </h4>
              <p className="text-sm text-gray-300">
                Calcule o consumo energético médio dos seus aparelhos e saiba
                quanto eles impactam na sua conta de luz.
              </p>
            </div>
            {/* Funcionalidade 3 */}
            <div className="flex flex-col items-center text-center w-full md:w-1/3 transition-transform hover:scale-105">
              <Image
                src="/img/recomendacao.png"
                alt="Recomendações"
                width={100}
                height={100}
                className="mb-2"
              />
              <h4 className="font-bold text-lg text-yellow-500">
                Recomendações
              </h4>
              <p className="text-sm text-gray-300">
                Descubra modelos mais eficientes disponíveis no mercado,
                ajudando você a economizar e preservar recursos naturais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Final */}
      <section className="bg-yellow-500 text-black py-32">
        <div className="container mx-auto text-center px-6 max-w-screen-lg">
          <h2 className="text-3xl font-bold mb-6">
            Junte-se à revolução energética!
          </h2>
          <p className="text-lg mb-6">
            Comece agora a reduzir seu consumo e fazer escolhas mais conscientes
            para um planeta sustentável.
          </p>
          <Link href="/banco" passHref>
            <button className="mt-6 px-6 py-3 bg-black text-yellow-500 font-bold rounded hover:bg-gray-800 transition-all">
              Saiba Mais
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
