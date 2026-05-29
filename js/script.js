    /*
  JavaScript: linguagem de programação que adiciona
  comportamento dinâmico à página.

  Aqui fazemos apenas UMA coisa: rolagem suave ao clicar
  em links âncora (href="#secao").
*/

/*
  document.querySelectorAll('a[href^="#"]')
  → seleciona TODOS os links <a> cujo href começa com "#"
  (ou seja, todos os links âncora internos da página).
*/
document.querySelectorAll('a[href^="#"]').forEach(function(link) {

  /*
    Para cada link encontrado, adicionamos um "ouvinte de evento".
    'click' = quando o usuário clicar neste link, executa a função.
  */
  link.addEventListener('click', function(evento) {

    /*
      evento.preventDefault()
      → cancela o comportamento padrão do navegador
      (que seria pular bruscamente até a âncora).
    */
    evento.preventDefault();

    /*
      this.getAttribute('href') → pega o valor do href, ex: "#servicos"
      document.querySelector('#servicos') → encontra o elemento com esse id
    */
    var destino = document.querySelector(this.getAttribute('href'));

    /*
      Se o elemento existir na página, role até ele.
      scrollIntoView() com behavior: 'smooth' faz a rolagem animada.
      block: 'start' alinha o topo do elemento com o topo da janela.
    */
    if (destino) {
      destino.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

  });
});

/*
  FIM do JavaScript.
  O site já funciona sem JS, mas com ele a navegação fica mais fluida.
*/