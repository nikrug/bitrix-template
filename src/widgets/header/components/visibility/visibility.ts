const elements = document.querySelectorAll('.fade-in') as NodeListOf<HTMLElement>

function checkVisibility () {
  const windowHeight = window.innerHeight

  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top

    // If element is visible on screen
    if (elementTop < windowHeight && elementTop > 0) {
      element.classList.add('visible') // Add class for appearance
    }
  })
}

// Check visibility of elements on scroll
window.addEventListener('scroll', checkVisibility)

// Perform check immediately on page load
checkVisibility()
