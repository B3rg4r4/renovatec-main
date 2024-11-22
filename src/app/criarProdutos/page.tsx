"use client";
import { useState } from "react";

export type RecebeDadosProd = {
  nome: string;
  tipo: string;
  consumoEnergetico: number;
  custoMensal: number;
};

const CriarProduto = () => {
  const [produto, setProduto] = useState<RecebeDadosProd>({
    nome: "",
    tipo: "",
    consumoEnergetico: 0,
    custoMensal: 0,
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Criando produto:", produto);
    // Chamada para API em Java para criar o produto
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-yellow-500 to-black">
      <form
        onSubmit={handleSubmit}
        className="bg-black text-white p-8 rounded-lg shadow-lg w-96"
      >
        <h1 className="text-2xl font-extrabold text-center text-yellow-500 mb-6">
          Criação de produtos para formulário
        </h1>
        <div className="mb-4">
          <label
            htmlFor="nome"
            className="block text-sm font-bold mb-2 text-white"
          >
            Nome do Aparelho
          </label>
          <input
            type="text"
            id="nome"
            placeholder="Nome do Aparelho"
            value={produto.nome}
            onChange={(e) => setProduto({ ...produto, nome: e.target.value })}
            className="block w-full p-3 border border-yellow-500 rounded-md bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="tipo"
            className="block text-sm font-bold mb-2 text-white"
          >
            Tipo de Aparelho
          </label>
          <input
            type="text"
            id="tipo"
            placeholder="Tipo de Aparelho"
            value={produto.tipo}
            onChange={(e) => setProduto({ ...produto, tipo: e.target.value })}
            className="block w-full p-3 border border-yellow-500 rounded-md bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="consumoEnergetico"
            className="block text-sm font-bold mb-2 text-white"
          >
            Consumo Energético (kWh)
          </label>
          <input
            type="number"
            id="consumoEnergetico"
            placeholder="Consumo Energético (kWh)"
            value={produto.consumoEnergetico}
            onChange={(e) =>
              setProduto({
                ...produto,
                consumoEnergetico: Number(e.target.value),
              })
            }
            className="block w-full p-3 border border-yellow-500 rounded-md bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
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
            placeholder="Custo Mensal (R$)"
            value={produto.custoMensal}
            onChange={(e) =>
              setProduto({ ...produto, custoMensal: Number(e.target.value) })
            }
            className="block w-full p-3 border border-yellow-500 rounded-md bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-500 text-black font-bold py-2 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-700"
        >
          Criar Produto
        </button>
      </form>
    </div>
  );
};

export default CriarProduto;
