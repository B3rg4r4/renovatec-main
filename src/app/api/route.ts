import { NextResponse } from "next/server";
import { ErroRoute } from "@/types/types";

async function fetchProdutos() {
  const response = await fetch("http://localhost:8080/produtos", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Erro ao buscar produtos");
  }

  const data = await response.json();
  return data;
}

export async function GET() {
  try {
    const produtos = await fetchProdutos();
    return NextResponse.json(produtos);
  } catch (error) {
    const erro: ErroRoute = {
      message: (error as Error).message || "Erro ao buscar produtos",
      status: 500,
    };
    return NextResponse.json(erro, { status: erro.status });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const response = await fetch("http://localhost:8080/produto", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error("Erro ao cadastrar produto");
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    const erro: ErroRoute = {
      message: (error as Error).message || "Erro ao cadastrar produto",
      status: 500,
    };
    return NextResponse.json(erro, { status: erro.status });
  }
}
