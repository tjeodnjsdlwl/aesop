// 새로고침 시 페이지 맨 위로 위동
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

const splitLines = new SplitType('.split-line', {types: 'lines'});
$('.line').wrap('<div class="line-wrap">')

const lenis = new Lenis()

lenis.on('scroll', (e) => {
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

// 스크롤을 비활성화하는 함수
function disableLenisScroll() {
  lenis.stop(); // Lenis 스크롤 비활성화
}
// 스크롤을 다시 활성화하는 함수
function enableLenisScroll() {
  lenis.start(); // Lenis 스크롤 활성화
}


// header
$('.header .header__gnb .gnb__item').on('mouseover', function() {
  $('.header').addClass('on');
}).on('mouseleave', function() {
  $('.header').removeClass('on');
})

// gnb depth02 이미지
let $gnbImg = $('.header .header__gnb .gnb .gnb__img');

$('.header .header__gnb .gnb .gnb__item').on('mouseenter', function() {
    var imgSrc = $(this).data('img');

    $gnbImg.attr('src', imgSrc);
    $gnbImg.parent().addClass('on');
}).on('mouseleave', function() {
  $gnbImg.parent().removeClass('on');
})

// 모바일 gnb 메뉴 열기
$('.header .header__m--btn').on('click', function() {
  $('.header').toggleClass('m-on');
  // $('.header__gnb--m').toggleClass('on');

  if ($(this).hasClass('on')) {
    $('body').css({'overflow':'hidden'});
    disableLenisScroll();
  } else {
    $('body').css({'overflow':'visible'});
    enableLenisScroll();
  }
})

// intro 영역 부터 헤더 색 검정으로
$(window).on('scroll', function() {
  var introTop = $('.intro').offset().top;
  var scrollTop = $(window).scrollTop();
  var headerH = $('.header').outerHeight(); 

  if (scrollTop >= (introTop - headerH)) {
    $('.header').addClass('change');
  } else {
      $('.header').removeClass('change');
  }
});


const loading = gsap.timeline({
  onComplete: function(){
    visual.play();
  }
})
loading.from('.loading .loading__logo', {
  scale: 0,
  duration: 1,
  delay: 0.5,
  ease: 'power1.out'
})
loading.to('.loading .loading__logo', {
  opacity: 0,
}, 'loading')
loading.to('.loading', {
  autoAlpha: 0,
}, 'loadingBg')
loading.to('.visual', {
  'clip-path': 'circle(100% at 50% 50%)',
  duration: 0.8,
  ease: 'power1.inOut'
}, 'loadingBg')

// visual 영역
const visual = gsap.timeline({
  paused: true,
  scrollTrigger: {
    trigger: '.visual',
    start: "0% 100%",
    end: "100% 0%",
    toggleActions: "pause pause restart pause",
  },
})
visual.from('.visual .visual__text', {
  yPercent:100,
  stagger:0.1,
})
visual.from('.visual .visual__top', {
  top: '50%',
  transform: 'translateY(-50%)',
  delay: 0.2,
  onComplete: () => {
    gsap.set('.visual .visual__top', {
      clearProps: 'transform' // transform 속성 초기화
    });
  },
}, 'visu')
visual.to('.visual .visual__wrap--ml', {
  marginLeft: 'auto',
  delay: 0.2,
}, 'visu')
visual.to('.visual .visual__title--under, .visual .visual__icon--under', {
  yPercent:-100,
  duration: 0.5,
  ease: 'power1.inOut',
  delay: 0.2,
}, 'visu')
visual.from('.visual .visual__title--over', {
  yPercent:100,
  duration: 0.5,
  ease: 'power1.inOut',
  delay: 0.2,
}, 'visu')
visual.from('.visual .visual__icon--over', {
  yPercent:600,
  delay: 0.2,
}, 'visu')
visual.from('.visual .desc', {
  yPercent:100,
  stagger:0.1,
} ,'visu')
visual.from('.visual .visual__more', {
  opacity: 0,
}, 'visu')

ScrollTrigger.matchMedia({
  "(min-width: 1024px)": function() {
    visual.to('.visual .visual__wrap--mr', {
      marginRight: '13.9vw',
      delay: 0.2,
    }, 'visu')
  },
  "(max-width: 1024px)": function () {
    visual.to('.visual .visual__wrap--mr', {
      marginRight: '18.6vw',
      delay: 0.2,
    }, 'visu')
  },
  "(max-width: 767px)": function () {
    visual.to('.visual .visual__wrap--mr', {
      marginRight: '12vw',
      delay: 0.2,
    }, 'visu')
  },
  "(max-width: 360px)": function () {
    visual.to('.visual .visual__wrap--mr', {
      marginRight: '7vw',
      delay: 0.2,
    }, 'visu')
  },
})


var infinityLottieAni = lottie.loadAnimation({
  container: $('#infinity-lottie')[0],
  path: './assets/data/infinity_lottie.json',
  renderer: 'svg',
  loop: true,
  autoplay: true
});
var flowerLottieAni = lottie.loadAnimation({
  container: $('#flower-lottie')[0],
  path: './assets/data/flower_lottie.json',
  renderer: 'svg',
  loop: true,
  autoplay: true
});
var infinityLottieAni = lottie.loadAnimation({
  container: $('#infinity-lottie2')[0],
  path: './assets/data/infinity_lottie.json',
  renderer: 'svg',
  loop: true,
  autoplay: true
});
var flowerLottieAni = lottie.loadAnimation({
  container: $('#flower-lottie2')[0],
  path: './assets/data/flower_lottie.json',
  renderer: 'svg',
  loop: true,
  autoplay: true
});


// intro 영역
const intro = gsap.timeline({
  scrollTrigger: {
    trigger: '.intro',
    start: "0% 100%",
    end: "100% 0%",
    toggleActions: "restart pause restart pause",
  },
})
intro.from('.intro .intro__video', {
  transform: 'rotateX(-100deg)',
  duration: 1.5,
  ease: 'power2.inOut'

},' intro')
intro.from('.intro .intro__text', {
  opacity: 0,
  duration: 1.5,
},' intro')
intro.from('.intro .intro__desc', {
  opacity: 0,
  duration: 1.5,
  delay: 0.5,
}, "<")
gsap.from('.intro .intro__img', {
  y: '-12%',
  ease: 'power1.inOut',
  scrollTrigger: {
    trigger: ".intro",
    start: "0% 100%",
    end: "100% 0%",
    scrub: 0,
  }
})

const introVideo = $('.intro .intro__modal .modal__video')[0];
const introPlayBtn = $('.intro .intro__modal .modal__play');

$('.intro .intro__video .btn-play').on('click', function() {
  $('.intro .intro__modal').fadeIn(1000);
  introPlayBtn.show();
  $('body').css({'overflow':'hidden'});
  disableLenisScroll(); 
})
$('.intro .intro__modal .modal__close').on('click', function() {
  $('.intro .intro__modal').fadeOut(1000);
  if (introVideo.play) {
    introVideo.pause();
  }
  $('body').css({'overflow':'visible'});
  enableLenisScroll();
})

// 동영상 플레이 되면 재생버튼 사라지기
introPlayBtn.click(function() {
  if (introVideo.paused) {
    introVideo.play();
    introPlayBtn.hide();
  }
});
// 동영상 클릭하면 재생/정지
$('.intro .intro__modal .modal__video').on('click', function() {
  if (introVideo.paused) {
    introVideo.play();
    introPlayBtn.hide();
  } else {
    introVideo.pause();
    introPlayBtn.show();
  }
})
// 동영상 끝났을 때 재생 버튼 다시 보이기
introVideo.addEventListener('ended',  function() {
  introPlayBtn.show();
})

// 재생시간 업데이트
introVideo.addEventListener('timeupdate', function() {
  var currMinutes = Math.floor(introVideo.currentTime / 60);
  var currSeconds = Math.floor(introVideo.currentTime % 60);
  var totalMinutes = Math.floor(introVideo.duration / 60);
  var totalSeconds = Math.floor(introVideo.duration % 60);

  $('.intro .intro__modal .modal__time--curr').text((currMinutes < 10 ? '0' : '') + currMinutes + ':' + (currSeconds < 10 ? '0' : '') + currSeconds);
  $('.intro .intro__modal .modal__time--total').text((totalMinutes < 10 ? '0' : '') + totalMinutes + ':' + (totalSeconds < 10 ? '0' : '') + totalSeconds);

  // 재생바 업데이트
  var value = (introVideo.currentTime / introVideo.duration) * 100;
  $('#seek-bar').val(value);
})

$('.intro .intro__modal .modal__mute').click(function() {
  introVideo.muted = !introVideo.muted;
  $('.intro .intro__modal .modal__mute--status').text(introVideo.muted ? 'ON' : 'OFF');
})


// $('#muteBtn').click(function() {
//   video.muted = !video.muted;
//   $('#muteBtn').text(video.muted ? '소리 켜기' : '소리 끄기');
// });



// skincare 영역
const skincareOffer = gsap.timeline({
  scrollTrigger: {
    trigger: ".skincare .offer__text--big",
    start: "0% 100%",
    end: "100% 0%",
    toggleActions: "restart pause restart pause",
  }
})
skincareOffer.from('.skincare .offer .line', {
  yPercent: 100,
  stagger: 0.15,
})

$('.skincare .skincare__link').each(function(i, el) {
  const skincareList = gsap.timeline({
    scrollTrigger: {
      trigger: el,
      start: "0% 100%",
      end: "100% 0%",
      toggleActions: "restart pause restart pause",
    }
  })
  skincareList.to($(el).find('.num'), {
    opacity: 1,
    duration: 0.5,
  }, 'sl')
  skincareList.from($(el).find('.skincare__split--text'), {
    yPercent: 100,
    stagger: 0.1,
  }, 'sl')
  skincareList.from($(el).find('.line'), {
    yPercent: 100,
    stagger: 0.1,
  }, 'sl')
})

let $floatingImg = $('.skincare .skincare__floating .skincare__img');

$('.skincare .skincare__list .skincare__item').on('mouseenter', function() {
    var imgSrc = $(this).data('img');

    $floatingImg.attr('src', imgSrc);
    setTimeout(function() {
      $floatingImg.parent().addClass('on');
    }, 300); 
}).on('mouseleave', function() {
  $floatingImg.parent().removeClass('on');
})

// 마우스를 움직일 때 이미지가 따라다님
$('.skincare .skincare__list .skincare__item').on('mousemove', function(e) {
    $('.skincare .skincare__floating').css({
        top: e.pageY + 'px',
        left: e.pageX + 'px'
    });
});


// vision 영역
const vision = gsap.timeline({
  scrollTrigger: {
    trigger: ".vision .vision__content",
    start: "0% 100%",
    end: "100% 0%",
    toggleActions: "restart pause restart pause",
  }
})
vision.from('.vision .vision__split--first', {
  yPercent: 100,
}, 'vf')
vision.to('.vision .vision__text--wrap', {
  yPercent: -100,
  delay: 0.5,
}, '<')
vision.to('.vision .vision__split--wrap', {
  yPercent: -100,
  delay: 0.2,
}, '<')
vision.to('.vision .vision__split--over', {
  yPercent: -100,
  duration: 0.4,
  ease: 'power3.in',
}, '<')
vision.from('.vision .vision__split--under', {
  yPercent: 100,
  duration: 0.4,
  delay: 0.2,
  ease: 'power1.inOut',
}, '<')
vision.to('.vision .vision__item', {
  scale: 1,
  duration: 1,
}, 'vf')
vision.to('.vision .vision__icon', {
  scale: 1,
  duration: 1.2,
}, 'vf')

gsap.from('.vision .vision__background', {
  scrollTrigger: {
    trigger: '.vision',
    start: "0% 100%",
    end: "100% 0%",
    toggleActions: "restart pause restart pause",
  },
  transform: 'rotateX(-50deg)',
  ease: true
})

gsap.to('.vision .vision__background--img', {
  y: '5.21vw',
  scrollTrigger: {
    trigger: '.vision',
    start: "0% 100%",
    end: "100% 0%",
    scrub: 0,
  },
})

const visionKeyword = gsap.timeline({
  scrollTrigger: {
    trigger: ".vision .vision__keyword",
    start: "0% 100%",
    end: "100% 0%",
    toggleActions: "restart pause restart pause",
  }
})
visionKeyword.from('.vision .keyword__text', {
  yPercent: 100,
  stagger: 0.1,
})


// new-product 영역
const newProduct = gsap.timeline({
  scrollTrigger: {
    trigger: '.new-product',
    start: "0% 100%",
    end: "100% 0%",
    scrub: 0,
  }
})
newProduct.to('.new-product .keyword__wrap', {
  y: '-80%',
})


// store 영역
const storeTxtBig = gsap.timeline({
  scrollTrigger: {
    trigger: '.store__text--big',
    start: "0% 100%",
    end: "100% 0%",
    toggleActions: "restart pause restart pause",
  }
})
storeTxtBig.to('.store .store__title', {
  opacity: 1,
  duration: 0.5,
})
storeTxtBig.to('.store .store__text--big', {
  opacity: 1,
  duration: 0.5,
})

const storeTxtSm = gsap.timeline({
  scrollTrigger: {
    trigger: '.store__text--sm',
    start: "0% 100%",
    end: "100% 0%",
    toggleActions: "restart pause restart pause",
  }
})
storeTxtSm.to('.store .store__text--sm', {
  opacity: 1,
  duration: 0.5,
  delay: 0.8,
}, "<")


// product 영역
const productSlide = new Swiper('.product .swiper', {
  loop: true,
  slidesPerView: 'auto',
  // speed: 5000,
  // autoplay: {
  //   delay: 0,
  // },
});

const $cursor = $('.product .cursor');
$('.product .swiper').on('mousemove', function(e) {
  
  let offset = $(this).offset();
  let x = e.pageX - offset.left;
  let y = e.pageY - offset.top;

  $cursor.css({
    'top':y + 'px', 'left':x + 'px', 'transform': 'translate(-50%, -50%)'+'scale(1)', 'opacity': 1
  });
}).on('mouseleave', function() {
  $cursor.css({
    'transform': 'translate(-50%, -50%)'+'scale(0)' , 'opacity': 0
  })
});


// sound 영역
const sound = gsap.timeline({
  scrollTrigger: {
    trigger: '.sound .sound__content',
    start: "0% 100%",
    end: "100% 0%",
    toggleActions: "restart pause restart pause",
  }
})
sound.to('.sound .sound__content', {
  opacity: 1,
  duration: 1,
  delay: 0.7,
})


// laboratory 영역
gsap.from('.laboratory .laboratory__background', {
  scrollTrigger: {
    trigger: '.laboratory',
    start: "0% 100%",
    end: "100% 0%",
    toggleActions: "restart pause restart pause",
  },
  transform: 'rotateX(-50deg)',
  ease: true
})

gsap.to('.laboratory .laboratory__img', {
  y: '5.21vw',
  ease: 'power1.inOut',
  scrollTrigger: {
    trigger: '.laboratory',
    start: "0% 100%",
    end: "100% 0%",
    scrub: 0,
  },
})


// outro 영역
const outro = gsap.timeline({
  scrollTrigger: {
    trigger: '.outro .outro__desc',
    start: "0% 100%",
    end: "100% 0%",
    toggleActions: "restart pause restart pause",
  }
})
outro.from('.outro .line', {
  yPercent: 100,
  stagger: 0.1,
}, 'outro')
outro.from('.outro .outro__icon', {
  scale: 0,
  stagger: 0.1,
  duration: 0.5,
  delay: 0.3
}, 'outro')

gsap.to('.outro .outro__content', {
  '--before-scale-x': 1,
  scrollTrigger: {
    trigger: '.outro',
    start: "0% 100%",
    end: "100% 0%",
    toggleActions: "restart pause restart pause",
  },
})


// headline 공통
$('.headline').each(function (i, el) {
  const headline = gsap.timeline({
    scrollTrigger: {
      trigger: el,
      start: "0% 100%",
      end: "100% 0%",
      toggleActions: "restart pause restart pause",
    }
  })
  headline.from($(el).find('.headline__split--first'), {
    y: '100%',
  })
  headline.to($(el).find('.headline__text'), {
    y:'0',
    delay: 0.5,
  },'<')
  headline.to($(el).find('.headline__split--wrap'), {
    y: '0',
    delay: 0.2,
  }, '<')
  headline.to($(el).find('.headline__split--over'), {
    y: '-100%',
    duration: 0.4,
    ease: 'power3.in',
  }, '<')
  headline.from($(el).find('.headline__split--under'), {
    y: '100%',
    duration: 0.4,
    delay: 0.2,
    ease: 'power1.inOut',
  }, '<')
})