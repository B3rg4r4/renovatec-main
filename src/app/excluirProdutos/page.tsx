"use client";
import { useState } from "react";

export type BancoProdExcluir = {
  produto_id: string;
  produto_nome: string;
};

const ExcluirProduto = () => {
  const [produtoId, setProdutoId] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Excluindo produto ID:", produtoId);
    // Chamada para API em Java para excluir o produto
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-yellow-500 to-black">
      <form
        onSubmit={handleSubmit}
        className="bg-black text-white p-8 rounded-lg shadow-lg w-96"
      >
        <h1 className="text-2xl font-bold text-center text-yellow-500 mb-6">
          Excluir Produto
        </h1>
        <div className="mb-6">
          <label
            htmlFor="produtoId"
            className="block text-sm font-medium mb-2 text-white"
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
        <button
          type="submit"
          className="w-full bg-red-500 text-white font-bold py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-700"
        >
          Excluir Produto
        </button>
      </form>
    </div>
  );
};

export default ExcluirProduto;
