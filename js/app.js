$(document).foundation();


window.onload = () => slideAtivo();

//preloader
setTimeout( () => { carregado() }, 2500);
let carregado = () => {
    $('.pre-loader').animate({height: '0'}, 1000);
    $('.pre-loader .brand, .pre-loader  span').fadeOut( () =>{
        $('.logo').animate({'opacity':1}, 1000);
        $('body').removeClass('loader');
    });    
  }
 
// data
(()=>{
   let data = (new Date()).getFullYear();
   document.querySelector('#welcome .date').innerHTML = data;
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



let slideAtivo = () =>{
    if( window.innerWidth > 1024) {
        let item = document.querySelectorAll('#carrossel .inner .itens .item');
        let ativo = document.querySelectorAll('#carrossel .inner .itens .slick-current');  
        
        $(item).next().removeClass('slide-ativo');       
        $(ativo).next().addClass('slide-ativo');        

    }else{
        $('#carrossel .inner .itens .item').removeClass('slide-ativo');
    }
}
if(window.innerWidth > 1024) {
    $('#carrossel .inner .itens').on('swipe', (event, slick, direction) => {slideAtivo() });
    $('#carrossel .inner .itens').on('afterChange', (event, slick, currentSlide, nextSlide) => { slideAtivo() });
}

let largura = document.querySelector('body').clientWidth;
let paddingCarrossel = (largura * 6) / 100;
if( window.innerWidth > 1024) {
    $('#carrossel .inner .itens .item').css('padding-left',  paddingCarrossel);
    $('#carrossel .inner .itens .item').css('padding-right',  paddingCarrossel);
}

// botao remover
( () => {
    remove = (item) => {
      let parent = $(item).closest('.item');
      let tr = $(item).closest('tr');
      let list = $(parent).find('tr').length;  
      if(list < 2){    
          $( parent ).fadeOut(400, () => { $( parent ).remove() }); 
      }
      tr.fadeOut(400, () => { tr.remove() });              
      return false;
    }
  })();



      
