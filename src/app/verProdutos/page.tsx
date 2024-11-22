"use client";

import { useState, useEffect } from "react";

// Tipo para representar o Produto
export type Produto = {
  id: number;
  nome: string;
  tipo: string;
  consumoEnergetico: number;
  custoMensal: number;
};

const VerProdutos = () => {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [erro, setErro] = useState("");

  // Função para buscar todos os produtos
  const buscarProdutos = async () => {
    try {
      const response = await fetch("http://localhost:8080/produtos", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors", // FORÇA CORS
      });

      const status = response.status; // Log do status
      console.log("Status:", status);

      if (!response.ok) {
        throw new Error("Erro ao buscar produtos.");
      }

      const produtos: Produto[] = await response.json();
      console.log("Produtos recebidos:", produtos); // Log dos produtos
      setProdutos(produtos);
      setErro("");
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
      setErro((error as Error).message || "Erro ao buscar produtos.");
      setProdutos([]);
    }
  };

  // Buscar produtos ao carregar a página
  useEffect(() => {
    buscarProdutos();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-yellow-500 to-black">
      <h1 className="text-2xl font-bold text-center text-yellow-500 mb-6">
        Lista de Produtos
      </h1>

      {erro && (
        <div className="bg-red-500 text-white p-4 rounded-md shadow-md w-96 mb-4 text-center">
          {erro}
        </div>
      )}

      {!erro && produtos.length === 0 && (
        <div className="text-white text-center">
          <p>Nenhum produto cadastrado no momento.</p>
        </div>
      )}

      {produtos.length > 0 && (
        <div className="grid grid-cols-1 gap-4 w-full max-w-4xl px-4">
          {produtos.map((produto) => (
            <div
              key={produto.id}
              className="bg-black text-white p-4 rounded-lg shadow-md border border-yellow-500"
            >
              <p>
                <span className="font-semibold">ID:</span> {produto.id}
              </p>
              <p>
                <span className="font-semibold">Nome:</span> {produto.nome}
              </p>
              <p>
                <span className="font-semibold">Tipo:</span> {produto.tipo}
              </p>
              <p>
                <span className="font-semibold">Consumo Energético:</span>{" "}
                {produto.consumoEnergetico} kWh
              </p>
              <p>
                <span className="font-semibold">Custo Mensal:</span> R${" "}
                {produto.custoMensal}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default VerProdutos;
