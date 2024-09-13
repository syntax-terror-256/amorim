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
* O site deverá permitir que o usuário visualize uma lista de produtos e preços.
* O administrador deverá poder adicionar, editar e remover produtos no sistema.
* O site deverá redirecionar o cliente para o WhatsApp a fim de finalizar o atendimento.
  
# 4. Requisitos Não Funcionais
## 4.1 Desempenho
* O site deverá ter um carregamento em tempo satisfatório em condições de rede normal.
  
## 4.2 Segurança
* Qualquer transação será feita diretamente com a empresa dispensando a criação de qualquer funcionalidade de pagamento.
  
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
![WhatsApp Image 2024-09-13 at 11 26 28](https://github.com/user-attachments/assets/73d45912-30b5-4632-b3d1-c5b67b4136f5)

# 9. Critérios de Aceitação
* O site deve funcionar em vários dispositivos e diferentes navegadores.
* Todos os produtos devem ser apresentados de forma correta, com informações claras.
* O administrador deve ser capaz de gerenciar o catalogo com facilidade.
* O direcionamento para o WhatsApp deve ser direto e sem dificuldades.  
* O aplicativo de mensagem WhatsApp deve conter respostas pré-programadas para agilizar o processo de atendimento.
  
# 10. Anexos
