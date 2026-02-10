---
title: "Pare de Executar Toda a Sua Suite de Testes em Cada Commit \U0001F6AB\U0001F9EA"
date: 2026-02-10
time: 00:00
source: DEV Community
link: https://dev.to/schirrel/pare-de-executar-toda-a-sua-suite-de-testes-em-cada-commit-1b56
image: ""
tags: [testing, git, developer-experience, javascript, ci-cd]
---

Versão em português introduzindo o test-staged, uma ferramenta similar ao lint-staged que executa apenas os testes relacionados às mudanças staged no Git antes de cada commit. Usando análise do grafo de dependências, o test-staged identifica quais testes são afetados por cada arquivo modificado, reduzindo o tempo de commit de minutos para segundos. Compatível com Jest, Vitest, Mocha e Ava, e integra facilmente com hooks do Husky.
