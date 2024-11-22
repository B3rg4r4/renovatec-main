import { NextResponse } from "next/server";
import { ErroRoute } from "@/types/types";

// Base URL do backend Java
const BASE_URL = "http://localhost:8080/produtos";

// Função genérica para lidar com respostas do backend
async function handleFetchResponse(response: Response) {
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Erro na requisição ao backend");
  }
  return response.json();
}

// GET - Listar Produtos
export async function GET() {
  try {
    const response = await fetch(BASE_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const produtos = await handleFetchResponse(response);
    return NextResponse.json(produtos);
  } catch (error) {
    const erro: ErroRoute = {
      message: (error as Error).message || "Erro ao buscar produtos",
      status: 500,
    };
    return NextResponse.json(erro, { status: erro.status });
  }
}

// POST - Cadastrar Produto
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await handleFetchResponse(response);
    return NextResponse.json(data);
  } catch (error) {
    const erro: ErroRoute = {
      message: (error as Error).message || "Erro ao cadastrar produto",
      status: 500,
    };
    return NextResponse.json(erro, { status: erro.status });
  }
}

// PUT - Atualizar Produto
export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { id, ...produto } = body; // Certifique-se de enviar o ID junto com o payload
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(produto),
    });

    const data = await handleFetchResponse(response);
    return NextResponse.json(data);
  } catch (error) {
    const erro: ErroRoute = {
      message: (error as Error).message || "Erro ao atualizar produto",
      status: 500,
    };
    return NextResponse.json(erro, { status: erro.status });
  }
}

// DELETE - Excluir Produto
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id"); // Obter o ID do produto a ser excluído

    if (!id) {
      throw new Error("ID do produto não fornecido");
    }

    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await handleFetchResponse(response);
    return NextResponse.json(data);
  } catch (error) {
    const erro: ErroRoute = {
      message: (error as Error).message || "Erro ao excluir produto",
      status: 500,
    };
    return NextResponse.json(erro, { status: erro.status });
  }
}
