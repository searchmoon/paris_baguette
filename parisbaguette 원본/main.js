
// new Swiper(선택자, 옵션)

// var swiper = new Swiper(".mySwiper", {
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });


// FOOTER에 있는 마지막 li에 brand sites를 클릭했을때
// .links의 display속성을 block 으로 바꾸기
// -->방법 1번
document.addEventListener('DOMContentLoaded', () => {
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
})

// -->방법 2번 


// document.addEventListener('DOMContentLoaded', () => {
//   const link = document.querySelector('.links')
//   const label = document.querySelector('.label')
//   let isHideLink = false;
  
//   label.addEventListener('click', () => {
//     isHideLink = !isHideLink
//     if (isHideLink) {
//       link.classList.add('hide')
//     } else {
//       link.classList.remove('hide')
//     }
//   })
// })

// 추석 팝업 x표 클릭시 닫기

  const close = document.querySelector('.close_popup')
  const chuseock = document.querySelector('.chuseock_popup')
  
  close.addEventListener('click', () => {
    chuseock.style.display = 'none'
  });


// PROMOTION에 슬라이드 만들기 JS

const slides = document.querySelector(".slides")
const slide = document.querySelectorAll(".slides li")
const currentIdx = 0
const slideCount = slide.length

const prevBtn = document.querySelector(".prev")
const slideWidth = 320
const slideMargin = 40
const nextBtn = document.querySelector(".next")

slides.style.width = (slideWidth + slideMargin) * slideCount - slideMargin + 'px'

function moveSlide (num) {
  slides.style.left = -num * 360 + 'px'
  currentIdx = num
}


nextBtn.addEventListener('click', function () {
  if (currentIdx < slideCount - 1) {
    moveSlide(currentIdx + 1);
  }
  
});
