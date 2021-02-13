//NAVBAR
let lastScrollTop = 0;
navbar = document.getElementById('navbar');

window.addEventListener('scroll',function(){
    const scrollTop = window.pageTOffseet ||
    this.document.documentElement.scrollTop;

    if(scrollTop > lastScrollTop){
        navbar.style.top="-50px";}
        else{
            navbar.style.top= "0";
        }
lastScrollTop = scrollTop;   
});



//TYPED 
var typed = new Typed('.typed',{
    strings: ["Bonjour à tous et à toutes, je me présente je m'appelle Kevin" ,"Apres mon baccalaureat scientique, je me suis lancé dans beaucoup de domaines d'etudes comme la biologie, la langue anglaise et celle chinoise. Mais depuis peu, exactement depuis 2019, je me suis lancé dans l'informatique, suivant une formation en plein temps aux langages Front tels que CSS, Javascript et son Framework React afin de devenir le plus rapidement développeur en plus du fait que je code en languages C, Java et Python. Plus qu'un avenir professionnel, je me suis découvert une passion, celle de coder."],
    typeSpeed:40,
    });

// COMPTEUR LIVE
let compteur = 0;

$(window).scroll(function() {

  const top = $('.counter').offset().top - window.innerHeight;

  if (compteur == 0 && $(window).scrollTop() > top) {
    $('.counter-value').each(function() {
      let $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
        countNum : countTo
      },
      {
        duration: 10000,
        easing: 'swing',
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum);
        }
      });
    });
    compteur = 1;
  }
});

//AOS
AOS.init();