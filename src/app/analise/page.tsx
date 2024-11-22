"use client";
import React, { useState } from "react";

export default function CadastroAnalise() {
  const [dados, setDados] = useState({
    nome: "",
    tipo: "",
    consumoEnergetico: 0,
    custoMensal: 0,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setDados((prevState) => ({
      ...prevState,
      [name]:
        name === "consumoEnergetico" || name === "custoMensal"
          ? parseFloat(value) || 0
          : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (!dados.nome || !dados.tipo) {
        alert("Todos os campos são obrigatórios!");
        return;
      }

      const response = await fetch("http://localhost:8080/produtos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dados),
      });

      if (!response.ok) {
        throw new Error("Erro ao cadastrar produto.");
      }

      alert("Produto cadastrado com sucesso!");
      setDados({
        nome: "",
        tipo: "",
        consumoEnergetico: 0,
        custoMensal: 0,
      });
    } catch (error) {
      console.error("Erro ao cadastrar produto:", error);
      alert("Ocorreu um erro ao cadastrar o produto. Tente novamente.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-yellow-500 to-black">
      <form
        onSubmit={handleSubmit}
        className="bg-black text-white p-6 rounded-lg shadow-lg w-96"
        aria-label="formulario de cadastro de analise"
      >
        <h1 className="text-2xl font-bold mb-6 text-yellow-500 text-center">
          Cadastro de Produto para Análise
        </h1>
        <div className="mb-4">
          <label
            htmlFor="nome"
            className="block text-sm mb-2 text-white font-bold"
          >
            Nome do Produto
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={dados.nome}
            onChange={handleChange}
            className="w-full border border-yellow-500 bg-black text-white rounded px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Digite o nome do produto"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="tipo"
            className="block text-sm font-bold mb-2 text-white"
          >
            Tipo do Produto
          </label>
          <select
            id="tipo"
            name="tipo"
            value={dados.tipo}
            onChange={handleChange}
            className="w-full border border-yellow-500 bg-black text-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          >
            <option value="">Selecione</option>
            <option value="eletrodoméstico">Eletrodoméstico</option>
            <option value="eletrônico">Eletrônico</option>
            <option value="outro">Outro</option>
          </select>
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
            name="consumoEnergetico"
            value={dados.consumoEnergetico}
            onChange={handleChange}
            className="w-full border border-yellow-500 bg-black text-white rounded px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Digite o consumo energético (kWh)"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="custoMensal"
            className="block text-sm font-bold mb-2 text-white"
          >
            Custo Mensal (R$)
          </label>
          <input
            type="number"
            id="custoMensal"
            name="custoMensal"
            value={dados.custoMensal}
            onChange={handleChange}
            className="w-full border border-yellow-500 bg-black text-white rounded px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Digite o custo mensal (R$)"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-500 text-black font-bold py-2 px-4 rounded hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-700"
        >
          Cadastrar Produto
        </button>
      </form>
    </div>
  );
}
