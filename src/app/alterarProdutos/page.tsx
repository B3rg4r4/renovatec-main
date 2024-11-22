"use client";
import { useState } from "react";

export type Produto = {
  nome: string;
  tipo: string;
  consumoEnergetico: number;
  custoMensal: number;
};

const AlterarProduto = () => {
  const [produtoId, setProdutoId] = useState("");
  const [dados, setDados] = useState<Produto>({
    nome: "",
    tipo: "",
    consumoEnergetico: 0,
    custoMensal: 0,
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/produtos/${produtoId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: dados.nome,
          tipo: dados.tipo,
          consumoEnergetico: dados.consumoEnergetico,
          custoMensal: dados.custoMensal,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Erro ao alterar o produto");
      }

      const updatedProduto = await response.json();
      console.log("Produto alterado com sucesso:", updatedProduto);
      alert("Produto alterado com sucesso!");
    } catch (error) {
      const appError = error as Error;
      console.error("Erro ao alterar o produto:", appError.message || "Erro desconhecido");
      alert(appError.message || "Erro ao alterar o produto.");
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
        <div className="mb-6">
          <label
            htmlFor="tipo"
            className="block text-sm font-bold mb-2 text-white"
          >
            Tipo
          </label>
          <input
            type="text"
            id="tipo"
            placeholder="Digite o tipo do produto"
            value={dados.tipo}
            onChange={(e) => setDados({ ...dados, tipo: e.target.value })}
            className="block w-full p-3 border border-yellow-500 rounded-md bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="consumoEnergetico"
            className="block text-sm font-bold mb-2 text-white"
          >
            Consumo Energético (kWh)
          </label>
          <input
            type="number"
            id="consumoEnergetico"
            placeholder="Digite o consumo energético"
            value={dados.consumoEnergetico}
            onChange={(e) =>
              setDados({
                ...dados,
                consumoEnergetico: Number(e.target.value),
              })
            }
            className="block w-full p-3 border border-yellow-500 rounded-md bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="custoMensal"
            className="block text-sm font-bold mb-2 text-white"
          >
            Custo Mensal (R$)
          </label>
          <input
            type="number"
            id="custoMensal"
            placeholder="Digite o custo mensal"
            value={dados.custoMensal}
            onChange={(e) =>
              setDados({
                ...dados,
                custoMensal: Number(e.target.value),
              })
            }
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
