$(document).foundation();


window.onload = function(){
    slideAtivo();    
};

//preloader
setTimeout(function(){ carregado() }, 2500);
function carregado(){
    $('.pre-loader').animate({height: '0'}, 1000);
    $('.pre-loader .brand, .pre-loader  span').fadeOut(function(){
        $('.logo').animate({'opacity':1}, 1000);
    });    
  }
  
// data
(function(){
   $('#welcome .date').text((new Date()).getFullYear());
})();


// carrossel
$('#carrossel .inner .itens').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll:1,
    arrows: false,
    dots: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 1,
            infinite: true,
            arrows: false,
            dots: true,
            swipe:true
          }
        },
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 1,
            infinite: true,
            arrows: false,
            dots: true,
            swipe:true
          }
        },
            {
    breakpoint: 480,
    settings: {
    slidesToShow: 1,
    infinite: true,
    arrows: false,
    dots: true,
    swipe:true

          }
        }
    ]
});

let slideAtivo = function(){
    if( $(window).width() > 1024) {
        let item = document.querySelectorAll('#carrossel .inner .itens .item');
        let ativo = document.querySelectorAll('#carrossel .inner .itens .slick-current');    
        $(item).next().removeClass('slide-ativo');
        $(ativo).next().addClass('slide-ativo');
    }else{
        jQuery('#carrossel .inner .itens .item').removeClass('slide-ativo');
    }
}
if( $(window).width() > 1024) {
    $('#carrossel .inner .itens').on('swipe', function(event, slick, direction){
        slideAtivo();
    });

    $('#carrossel .inner .itens').on('afterChange', function(event, slick, currentSlide, nextSlide){
        slideAtivo();
    });
}

let largura = document.querySelector('body').clientWidth;
let paddingCarrossel = (largura * 6) / 100;
if( $(window).width() > 1024) {
    $('#carrossel .inner .itens .item').css('padding-left',  paddingCarrossel);
    $('#carrossel .inner .itens .item').css('padding-right',  paddingCarrossel);
}

// botao remover
(function() {
    remove = function(item) {
      var parent = $(item).closest('.item');
      var tr = $(item).closest('tr');
      var list = $(parent).find('tr').length;  
      if(list < 2){    
          $( parent ).fadeOut(400, function() {
            $( parent ).remove();  
          }); 
      }
      tr.fadeOut(400, function() {
        tr.remove();  
      });              
      return false;
    }
  })();



      
