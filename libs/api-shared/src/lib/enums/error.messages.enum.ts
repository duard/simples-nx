export enum ERROR_MESSAGES {
  BAD_REQUEST = 'Dados mal formatados.',
  INTERNAL_SERVER_ERROR = 'Erro interno no servidor.',
  NOT_FOUND = 'Dados não encontrados.',
  SERVICE_UNAVAILABLE = 'Serviço indisponível.',
  NOT_ACCEPTABLE = 'Não aceitável',
  TOKEN_FORBIDDEN = 'Acesso negado! Token inválido ou não informado',
  ROLE_FORBIDDEN = 'Acesso negado! Sem permissão',
  FIREBASE_TOKEN_NOT_FOUND = 'Token não encontrado',
  ICX_INTERNAL_SERVER_ERROR = 'Erro ao tentar conectar com o ICX',
  ICX_REF_NOT_FOUND = 'Id de referência do ICX não foi encontrado',
  ORDER_NOT_FOUND = 'Pedido não encontrado.'
}
