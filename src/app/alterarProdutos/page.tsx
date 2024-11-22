"use client";
import { useState } from "react";
import { RecebeDadosProd } from "@/app/criarProdutos/page";

const AlterarProduto = () => {
  const [produtoId, setProdutoId] = useState("");
  const [dados, setDados] = useState<RecebeDadosProd>({
    nome: "",
    tipo: "",
    consumoEnergetico: 0,
    custoMensal: 0,
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      console.log("Alterando produto ID:", produtoId);
      const produtoExiste = true; // Simula verificação
      if (!produtoExiste) throw new Error("Produto não encontrado!");
      console.log("Novos dados do produto:", dados);
    } catch (error) {
      const appError = error as Error;
      console.error(appError.message || "Erro desconhecido");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-yellow-500 to-black">
      <form
        onSubmit={handleSubmit}
        className="bg-black text-white p-8 rounded-lg shadow-lg w-96"
      >
        <h1 className="text-2xl font-bold text-center text-yellow-500 mb-6">
          Alterar Produto
        </h1>
        <div className="mb-4">
          <label
            htmlFor="produtoId"
            className="block text-sm font-bold mb-2 text-white"
          >
            ID do Produto
          </label>
          <input
            type="text"
            id="produtoId"
            placeholder="Digite o ID do Produto"
            value={produtoId}
            onChange={(e) => setProdutoId(e.target.value)}
            className="block w-full p-3 border border-yellow-500 rounded-md bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="novoNome"
            className="block text-sm font-bold mb-2 text-white"
          >
            Novo Nome
          </label>
          <input
            type="text"
            id="novoNome"
            placeholder="Digite o novo nome do produto"
            value={dados.nome}
            onChange={(e) => setDados({ ...dados, nome: e.target.value })}
            className="block w-full p-3 border border-yellow-500 rounded-md bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-500 text-black font-bold py-2 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-700"
        >
          Alterar Produto
        </button>
      </form>
    </div>
  );
};

export default AlterarProduto;
