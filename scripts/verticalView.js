console.log('verticalView.js');

const videoBackground = document.querySelector('.sqs-video-background')
const tourButton = document.querySelector(".sqs-block-button-element[href='/the-gym']")
console.log({ videoBackground, tourButton })

tourButton.addEventListener('mouseenter', () => {
  videoBackground.classList.add('active')
})
tourButton.addEventListener('mouseleave', () => {
  videoBackground.classList.remove('active')
})
