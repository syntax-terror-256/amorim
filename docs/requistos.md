# 1. Introdução
* O presente projeto visa o desenvolvimento de uma aplicação web para uma pequena empresa do ramo alimentício, em especifico
dedicada a atender demandas para festas e eventos, a aplicação tem como objetivo facilitar a apresentação de um catalogo 
de produtos oferecidos, mostrando preços e disponibilidade, e auxiliando no atendimento ao clientes.

## 1.1 Objetivos
* Desenvolver uma aplicação para auxiliar no atendimento ao cliente.
* Apresentar de forma intuitiva os produtos oferecidos.
* Facilitar o processo de atendimento reduzindo tempo de espera.
* Apresentar uma seção inicial com nome da empresa, informações e imagens de trabalhos.
  
## 1.2 Escopos
* Desenvolver uma aplicação web reponsiva para computador e dispositivos móveis.
* Implementação de um catálogo de produtos.
* Criação de sessões para diferentes tipos de produtos.
* Desenvolver um banco de dados em **PostgreSQL**.
* Integração com o WhatsApp, direcionando o usuário para uma conversa.
  
## 1.3 Referências
* Pagina da rede social da empresa para referencia das imagens utilizadas no catálogo de produtos.
* padrões de sites e-commerce em geral.

# 2. Descrição Geral
## 2.1 Visão Geral do Produto
* O produto final deverá ser uma aplicação com funcionalidades de fácil navegação e um catalogo diferenciando sessões
para categorias de produtos, que será facilmente gerenciável pela empresa para atualizações de produtos.
e informações, a aplicação também irá direcionar o usuário (cliente) para o App WhatsApp para concluir o atendimento e pagamento.

## 2.2 Usuários
* **Administradores:** Gerente e funcionários da empresa que terão acesso ao painel administrativo para gerenciar os produtos.
* **Cliente:** usuários que acessarão o site para visualizar produtos e realizar pedidos. 

## 2.3 Restrições e Premissas
* O sistema deverá ser implementado em 3 meses (outubro).
* O site deve ser compatível com diferentes tipos de tela e navegadores.
* O desenvolvimento utilizará HTML, CSS, JavaScript, Node.js e PostgreSQL.

# 3. Requisitos Funcionais
#### Requisito 1
* **Nome do Requisito:** Cardápio Interativo
* **Descrição:** O site deverá permitir que o usuário visualize uma lista de produtos e preços
* **Ator(es):** Clientes
* **Pré-condições:** Situações que devem estar presentes para que o requisito seja válido
* **Pós-condições:** Situação esperada após a execução do requisito
* **Critérios de Aceitação:** Condições que devem ser satisfeitas para que o requisito seja considerado concluído

#### Requisito 1
* **Nome do Requisito:** Cardápio Dinâmico
* **Descrição:** O site deverá criar dinamicamente a página do cardápio com base em resultados de consultas em banco de dados
* **Ator(es):** Cliente
* **Pré-condições:** Situações que devem estar presentes para que o requisito seja válido
* **Pós-condições:** Situação esperada após a execução do requisito
* **Critérios de Aceitação:** Condições que devem ser satisfeitas para que o requisito seja considerado concluído

#### Requisito 2
* **Nome do Requisito:** Edição de Cardápio
* **Descrição:** O administrador deverá poder adicionar, editar e remover produtos no sistema
* **Ator(es):** Administradores
* **Pré-condições:** Situações que devem estar presentes para que o requisito seja válido
* **Pós-condições:** Situação esperada após a execução do requisito
* **Critérios de Aceitação:** Condições que devem ser satisfeitas para que o requisito seja considerado concluído

#### Requisito 3
* **Nome do Requisito:** Integração com WhatsApp
* **Descrição:** O site deverá gerar uma mensagem com os detalhes do pedido e enviá-la à atendente via WhatsApp para finalização do pedido
* **Ator(es):** Clientes
* **Pré-condições:** Situações que devem estar presentes para que o requisito seja válido
* **Pós-condições:** Situação esperada após a execução do requisito
* **Critérios de Aceitação:** Condições que devem ser satisfeitas para que o requisito seja considerado concluído

### Requisito 4
* **Nome do Requisito:** Banco de Dados
* **Descrição:** Um banco de dados com os itens do cardápio deverá ser criado para permitir o gerenciamento e consulta de informações desses itens
* **Ator(es):** Usuários e Administradores
* **Pré-condições:** Situações que devem estar presentes para que o requisito seja válido
* **Pós-condições:** Situação esperada após a execução do requisito
* **Critérios de Aceitação:** Condições que devem ser satisfeitas para que o requisito seja considerado concluído

# 4. Requisitos Não Funcionais
## 4.1 Desempenho
* O site deverá ter um carregamento em tempo satisfatório em condições de rede normal.
  
## 4.2 Segurança
* Qualquer transação será feita diretamente com a empresa dispensando a criação de qualquer funcionalidade de pagamento.
* O sistema deve exigir uma senha para acesso à página de edição do cardápio.
  
## 4.3 Usabilidade
* A interface deverá ser simples e intuitiva, com navegação fácil para usuários leigos.
* O sistema deve ser reponsivo e compatível com diferentes tamanhos de tela.
  
## 4.4 Confiabilidade
* O sistema devera estar completamente disponível em horários comerciais. 

## 4.5 Manutenibilidade
* O código da aplicação irá seguir os padrões de boa pratica, comentado e documentado para facilitar sua manutenção.

# 5. Casos de Uso
* **Cliente:** acessa o site, navega pelo catálogo e escolhe um ou mais produtos de seu interesse, em seguida é direcionado ao WhatsApp para finalizar a compra.
* **Administrador:** o administrador acessa o painel e edita, remove ou insere produtos no sistema.

# 6. Diagrama de Classes

# 7. Protótipos de Interface
![image](https://github.com/user-attachments/assets/08a88af8-37d3-434a-9fdc-f80f2f4d5dbd)
![image](https://github.com/user-attachments/assets/51e5a80f-2cb8-42a1-a28a-eb693976a188)

# 9. Critérios de Aceitação
* O site deve funcionar em vários dispositivos e diferentes navegadores.
* Todos os produtos devem ser apresentados de forma correta, com informações claras.
* O administrador deve ser capaz de gerenciar o catalogo com facilidade.
* O direcionamento para o WhatsApp deve ser direto e sem dificuldades.  
* O aplicativo de mensagem WhatsApp deve conter respostas pré-programadas para agilizar o processo de atendimento.
  
# 10. Anexos
