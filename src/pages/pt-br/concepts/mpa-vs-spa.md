---
layout: ~/layouts/MainLayout.astro
title: MPAs vs. SPAs
description: "Entender os tradeoffs entre a arquitetura de Aplicação de Múltiplas Páginas (MPA) e Aplicação de Página Única (SPA) é fundamental para entender o que faz Astro diferente de outros frameworks web."
i18nReady: true
---

 Entender os tradeoffs entre a arquitetura de Aplicação de Múltiplas Páginas (MPA, do inglês "Multi-Page Application") e Aplicação de Página Única (SPA, do inglês "Single-Page Application") é fundamental para entender o que faz Astro diferente de outros frameworks web como Next.js e Remix.

## Terminologia

**Uma Aplicação de Múltiplas Páginas (MPA)** é um website que consiste de múltiplas páginas HTML, majoritariamente renderizadas em um servidor. Quando você navega para uma nova página, o seu navegador requisita por uma nova página HTML do servidor. **Astro é um framework MPA.** Frameworks MPA tradicionais incluem também Ruby on Rails, Python Django, PHP Laravel, WordPress, Joomla, Drupal e construtores de sites estáticos como Eleventy ou Hugo.

**Uma Aplicação de Página Única (SPA)** é um website que consiste de uma única aplicação JavaScript que é carregada no navegador do usuário e então renderiza o HTML localmente. SPAs também *podem* gerar HTML no servidor, porém SPAs são únicos na sua habilidade de executar o seu website como uma aplicação JavaScript no navegador e renderizar uma nova página HTML quando você navega. Next.js, Nuxt, SvelteKit, Remix, Gatsby e Create React App são todos exemplos de frameworks SPA.

## Astro vs. outros MPAs

Astro é um framework MPA. Porém, Astro também é único entre outros frameworks MPA. Sua principal diferença é que ele utiliza JavaScript como linguagem de runtime e de servidor. Frameworks MPA tradicionais te fariam escrever em uma linguagem diferente no servidor (Ruby, PHP, etc.) e JavaScript no navegador. No Astro, você está sempre apenas escrevendo JavaScript, HTML e CSS. Dessa forma, você pode renderizar seus componentes de UI (como React e Svelte) tanto no servidor quanto no cliente.

O resultado é uma experiência do desenvolvedor que parece muito com Next.js e outros frameworks web modernos, porém com uma performance característica de uma arquitetura de site MPA mais tradicional.

## MPAs vs. SPAs

Há três diferenças principais para estar ciente ao se comparar MPAs com SPAs:

#### Renderização no servidor (MPA) vs. renderização no cliente (SPA)

Em MPAs, a maior parte do HTML da sua página é renderizado no servidor. Em SPAs, a maior parte do HTML é renderizado localmente, executando JavaScript no navegador. Isto tem um grande impacto no comportamento, performance e SEO do seu site.  

Renderizar o seu HTML no navegador pode parecer como a opção mais rápida em comparação a requisitá-lo de um servidor remoto. Porém, o contrário é verdade. Uma SPA vai ter uma performance consistentemente mais lenta no primeiro carregamento da página em comparação a uma MPA, a menos que renderização no servidor esteja sendo utilizada. Isto pois uma SPA precisa baixar, fazer parse e executar a aplicação JavaScript inteira no navegador para apenas renderizar qualquer HTML na página. Então, sua SPA vai provavelmente precisar buscar dados remotos de qualquer forma, introduzindo ainda mais tempo de espera antes de sua página terminar de carregar.

A maioria dos frameworks SPA vão tentar mitigar esse problema de performance adicionando renderização no servidor básica no primeiro carregamento da página. Isso é uma melhora, porém introduz uma nova complexidade pelo fato de que seu website agora pode ser renderizado de múltiplas formas e em múltiplos ambientes (servidor, navegador). Isso também introduz um novo problema do "vale da estranheza" onde seu site parece carregado (HTML) mas é não é responsivo já que a lógica JavaScript da aplicação ainda está sendo carregada no plano de fundo.

MPAs renderizam todo o HTML em um servidor remoto e geralmente não precisam de muito (ou até menos nenhum) JavaScript para serem executados. Isso dá aos MPAs uma experiência de primeiro carregamento muito mais rápida do que SPAs, que é essencial para websites focados em conteúdo. Porém, isso vem com um tradeoff: futuras navegações de página não podem se beneficiar de renderização local, então experiências duradouras do usuário não irão se beneficiar tanto após o primeiro carregamento da página.

#### Roteamento no servidor (MPA) vs. roteamento no cliente (SPA)

Onde vive o roteador do seu website? Em uma MPA, cada requisição para o servidor decide com qual HTML será respondido, então a lógica de roteamento vive no servidor. Em uma SPA, seu roteador é localmente executado no navegador e "rouba" qualquer navegação para renderizar uma nova página sem nunca encostar num servidor.

Este é um tradeoff similar com o descrito acima: MPAs oferecem uma experiência de primeiro carregamento mais rápida, enquanto SPAs oferecem um carregamento de segunda ou terceira página mais rápida já que o JavaScript da aplicação está completamente carregado no navegador.

SPAs podem também oferecer transições mais poderosas na navegação entre páginas por elas controlam muito sobre a renderização da página. Para se comparar a este suporte, MPAs se aproveitam de ferramentas como o [Turbo](https://turbo.hotwired.dev/) da Hotwire, que imita roteamento no cliente por também controlar a navegação no navegador. O HTML ainda é renderizado no servidor, porém o Turbo agora pode mostrar uma transição suave entre páginas similar ao roteamento no cliente de uma SPA.

#### Gerenciamento de estado no servidor (MPA) vs. gerenciamento de estado no cliente (SPA)

SPAs são uma arquitetura superior para websites que lidam com complexo gerenciamento de estado em múltiplas páginas (pense no Gmail). Isto porque uma SPA executa o website inteiro como uma única aplicação JavaScript, permitindo com que a aplicação mantenha seu estado e memória entre múltiplas páginas. Experiências interativas, baseada em dados como caixas de entrada e painéis de administração funcionam bem como SPAs porque o website em si é como uma aplicação.

## MPAs são Melhores que SPAs?

Ao comparar MPAs com SPAs, não há uma escolha "melhor" ou "pior". Tudo se resume a tradeoffs.

**Astro prioriza a performance e simplicidade das MPAs porque elas fazem mais sentido para nosso caso de uso de websites focados em conteúdo.** Websites com mais interações e estado podem se beneficiar mais da arquitetura estilo aplicação que as SPAs trazem ao custo da performance do primeiro carregamento.

:::note[Acessibilidade]
MPAs usam o elemento padrão `<a>` para navegação. Isso fornece funcionalidades de acessibilidade importantes, como o gerenciamento dos estados de foco e o anúncio de mudanças de rota por padrão.
:::

## Estudos de Caso

Abaixo estão todas as comparações públicas do Astro de que estamos cientes sobre:

- [Astro vs. SPA (Next.js)](https://twitter.com/t3dotgg/status/1437195415439360003) - 94% menos JavaScript
- [Astro vs. SPA (Next.js)](https://twitter.com/jlengstorf/status/1442707241627385860?lang=en) - carregamento 34% mais rápido
- [Astro vs. SPA (Next.js)](https://vanntile.com/blog/next-to-astro) – 65% de redução no uso de rede
- [Astro vs. SPA (Remix, SvelteKit)](https://www.youtube.com/watch?v=2ZEMb_H-LYE&t=8163s) - "Essa [pontuação do Lighthouse] é incrível."
- [Astro vs. Qwik](https://www.youtube.com/watch?v=2ZEMb_H-LYE&t=8504s) - TTI 43% mais rápido 

Se você conhece uma migração ou benchmark pública e não a vê listada aqui, por favor crie um PR a adicionando.

## Mais Recursos

Se você quiser aprender mais, Surma (Google) e Jake Archibald (Google) gravaram uma ótima discussão vai e volta [sobre este exato tópico.](https://www.youtube.com/watch?v=ivLhf3hq7eM)


