"use client";
import { useState } from "react";

export type Produto = {
  produto_id: string;
  produto_nome: string;
  descricao: string;
  preco: string;
};

const VerProduto = () => {
  const [produtoId, setProdutoId] = useState("");
  const [produto, setProduto] = useState<Produto | null>(null);
  const [erro, setErro] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Buscando produto ID:", produtoId);

    // Simulação de busca de produto (substituir pela lógica de chamada à API)
    try {
      const mockProduto = {
        produto_id: "123",
        produto_nome: "Produto Exemplo",
        descricao: "Descrição do produto exemplo.",
        preco: "R$ 100,00",
      };

      if (produtoId === mockProduto.produto_id) {
        setProduto(mockProduto);
        setErro("");
      } else {
        setProduto(null);
        setErro("Produto não encontrado.");
      }
    } catch (err) {
      console.error(err);
      setErro("Erro ao buscar o produto. Tente novamente.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-yellow-500 to-black">
      <form
        onSubmit={handleSubmit}
        className="bg-black text-white p-8 rounded-lg shadow-lg w-96"
      >
        <h1 className="text-2xl font-bold text-center text-yellow-500 mb-6">
          Ver Produto
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
          className="w-full bg-yellow-500 text-black font-bold py-2 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-700"
        >
          Buscar Produto
        </button>
      </form>

      {erro && (
        <div className="bg-red-500 text-white p-4 rounded-md shadow-md w-96 mt-4 text-center">
          {erro}
        </div>
      )}

      {produto && (
        <div className="bg-black text-white p-6 rounded-lg shadow-lg w-96 mt-6">
          <h2 className="text-xl font-bold text-yellow-500 mb-4">
            Detalhes do Produto
          </h2>
          <p>
            <span className="font-semibold">ID:</span> {produto.produto_id}
          </p>
          <p>
            <span className="font-semibold">Nome:</span> {produto.produto_nome}
          </p>
          <p>
            <span className="font-semibold">Descrição:</span>{" "}
            {produto.descricao}
          </p>
          <p>
            <span className="font-semibold">Preço:</span> {produto.preco}
          </p>
        </div>
      )}
    </div>
  );
};

export default VerProduto;
