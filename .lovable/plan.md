# Logo interativa no banner principal

## Objetivo
Substituir somente a imagem atual do tênis pela logo existente da LP Store Import's, preservando todos os textos, botões, cores e demais seções.

## Implementação
- Reutilizar a logo já disponível nos arquivos do projeto.
- Manter a animação vinculada à posição real da rolagem com `requestAnimationFrame`.
- Aplicar deslocamento, escala, rotação sutil, profundidade e transição de opacidade progressiva.
- Fazer a logo terminar integrada à transição para a seção seguinte, sem desaparecimento brusco.
- Reduzir deslocamento e rotação em telas pequenas para manter a logo visível e o conteúdo legível.
- Respeitar a preferência do dispositivo por movimento reduzido.

## Validação
- Conferir o resultado no computador e no celular em diferentes pontos da rolagem.
- Confirmar que o restante da página permanece inalterado e sem erros.
