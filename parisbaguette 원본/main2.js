document.addEventListener('DOMContentLoaded', () => {


  /* Brand Sites 콤보박스 ON/OFF (START) */
  const link = document.querySelector('.links')
  const label = document.querySelector('.label')
  let isHideLink = true;

  label.addEventListener('click', () => {

    isHideLink = !isHideLink
    if (!isHideLink) {
      link.style.display = 'block'
    } else {
      link.style.display = 'none'
    }
  })
  /* Brand Sites 콤보박스 ON/OFF (END) */

  /* 추석 팝업 종료 (START) */
  const close = document.querySelector('.close_popup')
  const chuseock = document.querySelector('.chuseock_popup')

  close.addEventListener('click', () => {
    chuseock.style.display = 'none'
  });
  /* 추석 팝업 종료 (END) */

  /* slides 를 전역변수로 선언하든가... */
  slides = document.querySelector(".slides")
  const slide = document.querySelectorAll(".slides li")
  // 전역변수로...
  currentIdx = 0
  const slideCount = slide.length

  const prevBtn = document.querySelector(".prev")
  const slideWidth = 320
  const slideMargin = 40
  const nextBtn = document.querySelector(".next")

//17
  nextBtn.addEventListener('click', () => {
    if (currentIdx < slideCount - 12) {
      moveSlide(currentIdx + 1);
    } else{
      moveSlide(0);
    }

    slides.style.width = (slideWidth + slideMargin) * slideCount - slideMargin + 'px'
  });

  prevBtn.addEventListener('click', () => {
    if (currentIdx > 0) {
      moveSlide(currentIdx - 1)
    } else {
      moveSlide(slideCount - 12)
    }

    slides.style.width = (slideWidth + slideMargin) * slideCount - slideMargin + 'px'
  });

})

function moveSlide(num) {
  // 전역변수로 선언했으면 이 함수에서도 slides, currentIdx  사용가능...
  // const slides = document.querySelector(".slides")
  slides.style.left = -num * 360 + 'px'
  currentIdx = num
}
