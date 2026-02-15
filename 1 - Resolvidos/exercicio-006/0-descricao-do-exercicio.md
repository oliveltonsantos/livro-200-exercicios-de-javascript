## Descrição do exercício:

Declare duas variáveis e atribua valores booleanos a elas. Use os operadores lógicos AND, OR e NOT para realizar operações lógicas entre as variáveis. Imprima os resultados.


## Desafio: Pode ou Não Pode?

### Contexto

Você vai criar um pequeno programa que pergunta coisas ao usuário e decide se uma ação é permitida ou não, usando operadores lógicos.


### Objetivo é praticar

- && (AND)
- || (OR)
- ! (NOT)
- leitura de dados do usuário
- validação lógica


### Regras do sistema (história)

Uma pessoa pode entrar em um evento se:
- for maior de idade
- e tiver ingresso

Ela não pode entrar se:
- estiver banida


### O que você deve implementar

1 - Pergunte ao usuário:
- idade
- se tem ingresso (true ou false)
- se está banida (true ou false)

2 - Crie variáveis booleanas a partir das respostas

3 - Use operadores lógicos para decidir:
- Pode entrar? SIM ou NÃO


### Lógica esperada (não escreva assim, pense assim)

podeEntrar = maiorDeIdade AND temIngresso AND NOT banida


### Dicas importantes:

- Converta idade para número
- Compare booleanos com ===
- Leia a lógica em português antes de codar