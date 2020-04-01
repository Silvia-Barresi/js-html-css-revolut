// parto da buttare in pagina gli elementi grezzi (non mi interessa la grafica per ora);
// ricreo la funzionalità dei multi dropdown sulle varie voci di menù, su viewport largo;
// ricreo anche la funzionalità di menù hamburger a viewport più piccoli;
// cerco di far si che funzioni la questione di far comparire e scomparire ciò che mi serve sui viewport diversi (quindi come abbiam fatto questa mattina sulla correzione EX che era di ieri).

$(document).ready(function(){

  // dropdown nascosti
  $('.dropdown').hide();

  // con hover spunta il dropdown menù

  $('li a').mouseenter(function(){
      $(this).siblings('.dropdown').show();
  });

  // tolgo il mouse, scompare il menu

  $('li a').mouseleave(function(){
      $(this).siblings('.dropdown').hide();
  });


  // hamburgermenu
  // se clicco sull'icona è visibile
  $('.fa-bars').click(
    function(){
      $('.hamburgermenu').fadeIn();
  });


  // se clicco nuovamente quando è visibile, scompare
  $('.fa-times').click(
    function(){
      $('.hamburgermenu').fadeOut();
  });

});
