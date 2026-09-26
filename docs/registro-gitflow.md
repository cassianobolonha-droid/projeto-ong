# Registro da prática de GitFlow

Este arquivo documenta a aplicação prática do fluxo GitFlow neste repositório.

## Ramificações utilizadas

- **main**: versão estável, publicada em produção (Netlify).
- **develop**: integração de funcionalidades em desenvolvimento.
- **feature/***: ramificações temporárias para desenvolvimento de novas funcionalidades, criadas a partir de develop e integradas via Pull Request.

## Fluxo realizado

1. Criação do ramo develop a partir de main.
2. Criação deste ramo de funcionalidade (feature) a partir de develop.
3. Abertura de Pull Request para integrar a funcionalidade em develop.
4. Após validação, develop é promovido a main e publicado em produção.
