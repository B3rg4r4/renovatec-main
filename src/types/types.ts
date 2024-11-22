export type RecebeDadosProd = {
  nome: string;
  tipo: string;
  consumoEnergetico: number;
  custoMensal: number;
};

export type Roi = {
  produto_id: number;
  recomendado_id: number;
};

export type BancoProd = {
  produto_id: string;
  produto_nome: string;
};

export type Erro = {
  erro: string;
};

export type ErroRoute = {
  message: string;
  status?: number;
};
