# ONG Amigos do Bem

Plataforma web institucional da ONG Amigos do Bem, organização sem fins lucrativos dedicada a transformar a vida de famílias em situação de vulnerabilidade social por meio de projetos de alimentação, educação e capacitação profissional.

## Funcionalidades

- **Página inicial** com missão, valores e apresentação institucional
- **Página de projetos** com frentes de atuação (Alimentação e Educação)
- **Formulário de cadastro** para doadores e voluntários, com validações nativas de CPF, CEP, telefone e e-mail
- **Máscaras de entrada** aplicadas via JavaScript
- **Layout responsivo** com folha de estilos centralizada

## Estrutura do projeto

```text
projeto-ong/
│
├── index.html          (Página inicial institucional)
├── projetos.html       (Página de iniciativas e projetos sociais)
├── cadastro.html       (Página com formulário de engajamento)
│
├── css/
│   └── estilo.css      (Folha de estilos centralizada)
│
├── js/
│   └── mascaras.js     (Scripts de tratamento de entrada de dados)
│
└── imagens/
    ├── ong.jpg         (Fotografia institucional da ONG)
    └── projetos.jpg    (Fotografia das frentes de atuação)

## Estratégia de versionamento (GitFlow)

Este repositório segue o modelo GitFlow de ramificação para separar o código em diferentes estágios de maturidade:

- **main**: versão de lançamento, contém apenas código estável e entregue;
- **develop**: código de desenvolvimento constante, onde as funcionalidades são integradas;
- **feature/***: ramificações temporárias para desenvolvimento de novas funcionalidades, criadas a partir da develop e mescladas de volta após a conclusão;
- **hotfix/***: ramificações de correção urgente de defeitos, criadas a partir da main quando necessário.

O fluxo padrão adotado é: nova funcionalidade é criada em feature/*, desenvolvida isoladamente e integrada na develop; quando a develop atinge um estado estável, é promovida para a main como uma nova versão de lançamento.