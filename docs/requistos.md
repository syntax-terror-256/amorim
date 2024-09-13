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
### Requisito 1
* **Nome do Requisito:** Landing Page
* **Descrição:** O site deverá ter uma landing page atraente e informativa que receba os visitantes e forneça uma visão geral dos principais recursos e ofertas do site.
* **Ator(es):** Visitantes
* **Pré-condições:** 
  - O conteúdo e o design da landing page devem estar preparados e aprovados.
  - O site deve estar configurado para direcionar os visitantes para a landing page ao acessarem o site pela primeira vez.
* **Pós-condições:** 
  - A landing page deve ser exibida corretamente para todos os visitantes.
  - Os visitantes devem ser capazes de entender os principais recursos e ofertas do site e navegar para outras partes do site, se desejado.
* **Critérios de Aceitação:** 
  - A landing page deve ser visualmente atraente e refletir a identidade da marca.
  - Deve conter informações claras e concisas sobre os principais recursos e ofertas.
  - Deve haver botões de chamada para ação (CTA) visíveis e funcionais que direcionem os visitantes para páginas relevantes do site.
  - A página deve ser responsiva e funcionar bem em diferentes dispositivos e tamanhos de tela.
  - A performance da página deve ser adequada, com tempos de carregamento rápidos.

### Requisito 2
* **Nome do Requisito:** Banco de Dados
* **Descrição:** Um banco de dados com os itens do cardápio deverá ser criado para permitir o gerenciamento e consulta de informações desses itens.
* **Ator(es):** Usuários e Administradores
* **Pré-condições:** 
  - O banco de dados deve ser criado e configurado corretamente.
  - Deve haver uma estrutura definida para armazenar os itens do cardápio.
* **Pós-condições:** 
  - O banco de dados deve estar acessível e funcional para gerenciamento e consulta dos itens do cardápio.
* **Critérios de Aceitação:** 
  - O banco de dados deve permitir a adição, modificação e remoção de itens.
  - Deve ser possível realizar consultas rápidas e precisas sobre os itens do cardápio.
  - O banco de dados deve garantir a integridade e segurança das informações.

### Requisito 3
* **Nome do Requisito:** Cardápio Interativo
* **Descrição:** O site deverá permitir que o usuário visualize uma lista de produtos e preços.
* **Ator(es):** Clientes
* **Pré-condições:** 
  - O banco de dados deve estar atualizado com os produtos e preços.
  - O site deve estar funcional e acessível aos clientes.
* **Pós-condições:** 
  - O cliente pode visualizar uma lista de produtos com os preços atualizados.
* **Critérios de Aceitação:** 
  - A lista de produtos deve ser exibida corretamente e de forma legível.
  - Os preços devem estar atualizados e corresponder às informações no banco de dados.
  - A interface deve ser intuitiva e fácil de usar.

### Requisito 4
* **Nome do Requisito:** Cardápio Dinâmico
* **Descrição:** O site deverá criar dinamicamente a página do cardápio com base em resultados de consultas em banco de dados.
* **Ator(es):** Clientes
* **Pré-condições:** 
  - O banco de dados deve conter informações atualizadas sobre o cardápio.
  - O site deve estar configurado para conectar e consultar o banco de dados.
* **Pós-condições:** 
  - A página do cardápio é exibida com as informações mais recentes.
* **Critérios de Aceitação:** 
  - O cardápio exibido deve refletir exatamente as informações armazenadas no banco de dados.
  - A atualização do cardápio deve ser visível para o cliente sem a necessidade de atualizar a página manualmente.
  - O cardápio deve ser exibido sem erros e com boa performance.

### Requisito 5
* **Nome do Requisito:** Edição de Cardápio
* **Descrição:** O administrador deverá poder adicionar, editar e remover produtos no sistema.
* **Ator(es):** Administradores
* **Pré-condições:** 
  - O administrador deve estar autenticado e autorizado a fazer alterações no cardápio.
  - A interface de administração deve estar funcional.
* **Pós-condições:** 
  - O cardápio deve refletir as alterações feitas pelo administrador.
* **Critérios de Aceitação:** 
  - O administrador deve ser capaz de adicionar, editar e remover produtos com sucesso.
  - As alterações devem ser refletidas imediatamente no cardápio exibido para os clientes.
  - O sistema deve validar e garantir a integridade dos dados durante as edições.

### Requisito 6
* **Nome do Requisito:** Integração com WhatsApp
* **Descrição:** O site deverá gerar uma mensagem com os detalhes do pedido e enviá-la à atendente via WhatsApp para finalização do pedido.
* **Ator(es):** Clientes
* **Pré-condições:** 
  - O cliente deve ter um pedido pronto para enviar.
  - O sistema deve estar integrado com a API do WhatsApp ou outro serviço similar.
* **Pós-condições:** 
  - A mensagem com os detalhes do pedido deve ser enviada para a atendente via WhatsApp.
* **Critérios de Aceitação:** 
  - A mensagem deve conter todos os detalhes relevantes do pedido.
  - A mensagem deve ser enviada sem erros e recebida pela atendente.
  - O processo deve ser concluído de forma rápida e eficiente.


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
