---
title: 'Por dentro do TB: sistemas de cache'
layout: post
permalink: /por-dentro-do-tb-sistemas-de-cache/
dsq_thread_id:
  - 2994017584
categories:
  - Otimização
tags:
  - Cache
  - CloudFlare
  - Otimização
  - Servidor
  - Tecnoblog
  - Varnish
  - Wordpress
---
O [WordPress][wordpress] é um sistema de gerenciamento de conteúdo (CMS) que em baixos níveis de tráfego é capaz de atender à demanda sem maiores problemas, mas quando os acessos aumentam substancialmente o panorama tende a mudar. Some isso aos variados plugins (que adicionam mais e mais camadas de complexidade) e temos um sistema ainda mais pesado.

No Tecnoblog — cujo principal sistema utilizado é o WordPress — recebemos mensalmente mais de 2 milhões de pageviews, entregando dezenas e dezenas de gigabytes para usuários no Brasil e no mundo. Fica fácil concluir o quão inviável seria manter um site com essas proporções sem uma estrutura robusta de cache.

Na nossa receita de caches — atingida após vários testes e experimentações — temos três ingredientes principais:

1. [CloudFlare][cloudflare]
2. [Varnish][varnish]
3. [WP Super Cache][supercache]

###Acessando o Tecnoblog 

O workflow abaixo exemplifica brevemente o caminho de cada request:

![Workflow de acesso ao Tecnoblog](/assets/tecnoblog_workflow_acesso.png){: .center-image }

###\#01: Linha de frente

Basicamente utilizamos o CloudFlare como nossa CDN ([Content Delivery Network][cdn]): o serviço conta com uma rede global inteligente, otimizando a entrega dos arquivos e gerando um tempo de carregamento muito menor. Tempo de carregamento menor = melhor experiência para o usuário = usuário feliz. :)

No entanto, o CF também oferece outros recursos: proteção contra bots e ataques, otimizações, analytics, etc. Você não usa o CloudFlare? Deveria.

###\#02: Aplicando um pouco de verniz

Nos nossos servidores o Varnish é o primeiro sistema de caches a ser atingido. Ele é responsável por tratar todo e qualquer request:

1. Definindo se o método (POST, GET, PUT, etc) é permitido;
2. Definindo se a requisição deve ser cacheada;
3. Definindo se a requisição não deve ser cacheada;

Se a requisição estiver em cache, o Varnish simplesmente entrega os dados. Caso contrário — se a requisição é dinâmica ou o cache expirou — ele encaminha o request para o Load Balancer, que por sua vez passa a bola para o nginx da máquina mais apropriada, que irá direcionar a requisição para o WordPress ou outra aplicação.

###\#03: Chegamos ao WordPress

Se a requisição chega até o WordPress é hora do WP Super Cache trabalhar. O Super Cache é um plugin que gera arquivos estáticos das páginas com compressão. Basicamente, pra cada acesso é gerado um HTML estático que será servido até que ele expire.

E é nessa hora que chega a pergunta clássica: como tratar usuários logados?

Por muito tempo, diferenciávamos usuários não-logados e logados. Quem não estava logado recebia uma página em cache (estática) e quem estava logado recebia uma página dinâmica, gerada a cada acesso. Até que percebemos o óbvio: isso não faz sentido.

As partes dinâmicas de cada página podiam (e, na verdade, deveriam) ser controladas através de JavaScript. Dessa forma, todo e qualquer usuário (inclusive admins) recebem a mesma página estática.

O processamento acontece então no browser: quem verifica se você está logado, exibe seu avatar/nome e outras informações é o JavaScript (<3). E se o usuário está logado outras partes da aplicação são carregadas dinamicamente para controlar outros módulos: notificações, “Agora no TB”, etc.

Ou seja, quase todo acesso ao conteúdo do Tecnoblog é respondido com um arquivo estático. Logo, o processamento no servidor diminui drasticamente, consultas na database despencam, temos um tempo-resposta incrivelmente maior e um custo menor. Incrível, não?

###Outros detalhes

Muitos de vocês devem estar se indagando sobre a limpeza de cache. Com relação ao WP Super Cache tudo é muito simples: quando há um novo post, um novo comentário, ou qualquer outra modificação, os arquivos relacionados àquele post expiram.

No entanto, ainda precisamos comunicar ao Varnish quais páginas expiraram. Isso é feito através de uma versão customizada do plugin [WordPress Varnish][wp-varnish].

Obviamente nem tudo são flores e algumas inconsistências podem acontecer — como posts não sendo listados aonde deveriam. Mas é um malefício muito pequeno frente ao quão benéfico é todo esse ecossistema de cache que utilizamos.

Outro elemento muito importante é que mantemos um ambiente de desenvolvimento totalmente (ou quase totalmente) livre de caches. Dessa forma contamos com um environment aonde recursos de rápida prototipagem e modificações podem ser testadas para logo em seguida irem para o ambiente de produção.

###Dúvidas? Comentários?

É importante frisar que essa é nossa receita e que, obviamente, existem várias outras maneiras e técnicas para se trabalhar com cache de páginas e aplicações. O importante é que esse “ecossistema” tem funcionando muito bem nos últimos meses para o nosso modelo.

O sistema de comentários abaixo está aberto a comentários (duh!), dúvidas, dicas, etc. Sinta-se em casa! :)

[wordpress]: http://wordpress.org/
[cloudflare]: https://www.cloudflare.com/
[varnish]: https://www.varnish-cache.org/
[supercache]: https://wordpress.org/plugins/wp-super-cache/
[cdn]: http://en.wikipedia.org/wiki/Content_delivery_network
[wp-varnish]: https://github.com/pkhamre/wp-varnish
