const slides = document.querySelectorAll('.slider-item') as NodeListOf<HTMLElement>
const sliderWrapper = document.querySelector('.slider-wrapper') as HTMLElement

let currentSlide = 0
const totalSlides = slides.length - 1 // Exclude duplicate when counting
const slideInterval = 3000 // Set the interval time

function showSlide (index: number) {
  sliderWrapper.style.transform = `translateX(-${index * 100}%)`
}

function startInterval () {
  setInterval(() => { // Remove intervalId if not needed
    currentSlide++

    if (currentSlide > totalSlides) {
      // Temporarily remove transition to avoid "jump"
      sliderWrapper.style.transition = 'none'
      sliderWrapper.style.transform = 'translateX(0%)'
      setTimeout(() => {
        currentSlide = 1 // Move to first slide (duplicate)
        sliderWrapper.style.transition = 'transform 1.1s ease-in-out' // Re-enable transition
        showSlide(currentSlide)
      }, 50) // Small delay for styles
    } else {
      sliderWrapper.style.transition = 'transform 1.1s ease-in-out' // Set smooth transition
      showSlide(currentSlide)
    }
  }, slideInterval)
}
// Start the slider
showSlide(currentSlide)
startInterval()
