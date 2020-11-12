# Estoque-API
Projeto acadêmico de uma API REST para estoque de produtos.
Node.Js, Express e MongoDB.

---
## Requisitos mínimos do projeto acadêmico

### Models - produto, estoque e categoria
- produto 
  - descricao String;
  - valor number;
  - created Date, 
  - DBREF categoria;
  - ativo (bool)
- estoque 
  - DBREF produto;
  - quantidadeEstoque number;
  - quantidadeMinimaEstoque number;
  - created
- pedidos
  - pedinte String;
  - quantidade Number;
  - created Date;
  - dbref Produto;
- categoria 
  - descricao


### Validadores: 

  - valor deve ser positivo. 
  - created preenchimento automático. 
  - Produto novo deve ser ativo verdadeiro por padrão.
  - quantidade em estoque nunca pode ser negativo
  - quantidade mínima em estoque deve ser maior ou igual a 1.
  - todos os atributos (exceto os que tem default, devem ser obrigatórios (required))

teste do pull 