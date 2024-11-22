"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Produtos = () => {
  const [acao, setAcao] = useState<
    "criarProdutos" | "excluirProdutos" | "alterarProdutos" | ""
  >("");
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (acao) {
      router.push(`/${acao}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-yellow-500 to-black">
      <form
        onSubmit={handleSubmit}
        className="bg-black text-white p-8 rounded-lg shadow-lg w-96"
      >
        <h1 className="text-2xl font-bold text-center text-yellow-500 mb-6">
          Gerenciar Produtos
        </h1>
        <div className="mb-6">
          <label
            htmlFor="acao"
            className="block text-sm font-bold mb-2 text-white ml-1"
          >
            Escolha uma ação
          </label>
          <select
            id="acao"
            value={acao}
            onChange={(e) =>
              setAcao(
                e.target.value as
                  | "criarProdutos"
                  | "excluirProdutos"
                  | "alterarProdutos"
              )
            }
            className="block w-full p-3 border border-yellow-500 rounded-md bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          >
            <option value="" disabled>
              Escolha uma ação
            </option>
            <option value="criarProdutos">Criar Produto</option>
            <option value="excluirProdutos">Excluir Produto</option>
            <option value="alterarProdutos">Alterar Produto</option>
            <option value="verProdutos">Ver Produto</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-500 text-black font-bold py-2 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-700"
        >
          Continuar
        </button>
      </form>
    </div>
  );
};

export default Produtos;
