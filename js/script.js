$(document).ready(function(){
  //ponemos codigo JavaScript para el Jquery
  configurarInicio();
  $('.myicono').click(function(e){

    $('#navbar ul').toggleClass('lista_pequena');

  })
  function configurarInicio() {
    var urlPath = window.location.pathname; //Este metodo permite capturar la url de  la pagina
    console.log(urlPath);
    $('nav a').each(function functionName() {

      var href = $(this).attr('href');
      console.log(href);
      var indice = urlPath.length -href.length;
      console.log(indice);
      console.log(urlPath.substring(indice));
      if (urlPath.substring(indice)=== href) {
        console.log('match');
        $(this).closest('li').addClass('active');
      }
    })
  }
})
