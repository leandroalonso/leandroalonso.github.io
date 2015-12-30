---
title: 'Criação de um layout: Photoshop ou HTML?'
author: leandroalonso
layout: post
permalink: /criacao-de-um-layout-photoshop-ou-html/
dsq_thread_id:
  - 2947861946
categories:
  - Outros
tags:
  - Desenvolvimento
  - Design
  - Produtividade
  - Web
---
Atigamente, nos layouts em que desenvolvia, eu sempre pensava no estilo da página &#8220;mentalmente&#8221; e partia direto pro HTML. Ia montando a página passo-a-passo: do cabeçalho ao rodapé.

Sempre soube que vários designers preferem abrir o Photoshop, desenvolver toda a identidade visual do site, e depois, aí sim, converter tudo pro HTML. Aliás, fiz isso pela primeira vez exatamente com o layout que está atualmente aqui no blog.<!--more-->

![Mockup do atual layout do blog, no Photoshop](/assets/leandrow_mockup_photoshop.jpg){: .center-image }

Gostei bastante do resultado final e desse método de desenvolvimento, mas há um tempinho atrás me deparei com um post do [blog da 37signals][1]: &#8220;[Why we skip Photoshop?][2]&#8221; (&#8220;Porque fugimos do Photoshop?&#8221;), que me levou a pensar mais sobre esse assunto.

Pra quem não sabe, a 37signals é uma compania que, entre outros produtos, criou o [Basecamp][3] e lançou o [Ruby On Rails][4]. Ou seja, o conhecimento deles com relação à web é gigantesco e muito válido.

O artigo em questão, cita alguns tópicos sobre o porque da 37signals **não** adotar o Photoshop no desenvolvimento inicial do layout. Entre os pontos citados, destaco alguns:

  * Você não pode clicar em um mockup feito no Photoshop, eles não são reais. *E se está na tela, deve funcionar.*
  * Quando você muda alguma coisa em um mockup, precisa exportar para gif/jpg/png&#8230; e enviar para o cliente. Utilizando o HTML você altera uma simples linha no CSS e pede ao cliente que atualize a página.
  * Photoshop não é uma ferramenta de colaboração, isso recai no item anterior. Enquanto você precisa mudar algumas linhas de código no HTML para fazer uma simples mudança, no Photoshop você provavelmente terá que enfrentar várias ferramentas.

Na minha opinião, o ponto mais crítico citado por eles tem forte relação com a produtividade, o Photoshop não oferece uma flexibilidade na hora de alterar o &#8220;mockup&#8221; feito. E pensando bem, isso é verdade.

Nos trabalhos que desenvolvi anteriormente, usei o conceito do &#8220;refresh&#8221;: atualizo o CSS/HTML e a pessoa simplesmente recarrega a página. Funcionou muito bem.

No estágio aonde trabalho, o Photoshop no estágio inicial não funcionou como deveria. Isso me leva a pensar que cada caso é um caso, que precisa ser analisado cuidadosamente.

De qualquer maneira, é sempre necessário um estudo inicial, algo que lhe diga para qual caminho o trabalho deve seguir. Pode ser um esboço, sites de referências ou qualquer outro material extra, mas ele precisa existir.

O uso, ou não, do Photoshop precisa ser pensado: ele pode trazer uma maior produtividade. Ou não.

 [1]: http://blogcabin.37signals.com/svn/
 [2]: http://www.37signals.com/svn/posts/1061-why-we-skip-photoshop
 [3]: http://www.basecamphq.com/
 [4]: http://pt.wikipedia.org/wiki/Ruby_on_Rails
