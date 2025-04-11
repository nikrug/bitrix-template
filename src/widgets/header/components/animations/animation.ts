const preloader = document.getElementById('preloader') as HTMLElement

// Delay of 5 seconds before hiding the preloader
setTimeout(() => {
  preloader.classList.add('hidden') // Adding class for smooth disappearance
  preloader.addEventListener('transitionend', () => {
    // Set a timer to show a welcome message after 1 second
    setTimeout(() => {
      // Show additional information after 3 seconds
      setTimeout(() => {
        // ... add your code here if needed
      }, 3000) // 3000 milliseconds = 3 seconds
    }, 1000) // 1000 milliseconds = 1 second
  })
}, 5000) // 5000 milliseconds = 5 seconds

const container = document.querySelector('.balloon-container') as HTMLElement
const balloonCount = 4 // Number of balloons to create
const balloons: { balloon: HTMLElement; velocityX: number; velocityY: number }[] = []

// Function to create a balloon
function createBalloon (index: number) {
  const balloon = document.createElement('div')
  balloon.classList.add('balloon')

  // Set balloon color: red for the first half and blue for the second
  if (index < balloonCount / 2) {
    balloon.style.background = 'linear-gradient(180deg, rgba(68, 133, 255, 0.8) 0%, #377DFF 100%)'
  } else {
    balloon.style.background = 'linear-gradient(180deg, #FF8E8E 0%, #F62424 100%)'
  }

  // Set fixed initial positions for balloons
  const startX = (index % 3) * 200 + 50 // Arrange balloons in a row
  const startY = Math.floor(index / 3) * 100 + 50 // Two rows of balloons
  balloon.style.left = `${startX}px`
  balloon.style.top = `${startY}px`

  // Add balloon to the container
  container.appendChild(balloon)

  const velocityX = (Math.random() < 0.5 ? 1 : -1) * (Math.random() * 1 + 1)
  const velocityY = (Math.random() < 0.5 ? 1 : -1) * (Math.random() * 1 + 1)
  balloons.push({ balloon, velocityX, velocityY })

  // Start animation
  moveBalloon(balloons[balloons.length - 1])
}

// Function to move balloons
function moveBalloon (balloonObj: { balloon: HTMLElement; velocityX: number; velocityY: number }) {
  let { balloon, velocityX, velocityY } = balloonObj
  let posX = parseFloat(balloon.style.left)
  let posY = parseFloat(balloon.style.top)

  function animate () {
    posX += velocityX
    posY += velocityY

    const containerHeight = container.clientHeight
    const containerWidth = container.clientWidth
    const balloonWidth = 30
    const balloonHeight = 30

    // Collision check with container boundaries
    if (posX + balloonWidth > containerWidth || posX < 0) {
      velocityX *= -1 // Change direction on X-axis
      posX = Math.max(0, posX) // Ensure we don't go out of bounds on left
      posX = Math.min(containerWidth - balloonWidth, posX) // Ensure we don't go out of bounds on right
    }

    // Check if balloon is out of bounds on height
    if (posY + balloonHeight > containerHeight || posY < 0) {
      velocityY *= -1 // Change direction on Y-axis
      posY = Math.max(0, posY) // Ensure we don't go out of bounds on top
      posY = Math.min(containerHeight - balloonHeight, posY) // Ensure we don't go out of bounds on bottom
    }

    // Update balloon position
    balloon.style.left = `${posX}px`
    balloon.style.top = `${posY}px`

    requestAnimationFrame(animate) // Recursive call for animation
  }

  animate()
}

// Create a fixed number of balloons
for (let i = 0; i < balloonCount; i++) {
  createBalloon(i)
}

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

// Get all necessary elements by classes
const nameInput = document.querySelector('.name-input') as HTMLInputElement
const emailInput = document.querySelector('.email-input') as HTMLInputElement
const messageInput = document.querySelector('.message-input') as HTMLTextAreaElement

// Get containers for adding error class
const nameContainer = document.querySelector('.name-container') as HTMLElement
const emailContainer = document.querySelector('.email-container') as HTMLElement
const messageContainer = document.querySelector('.message-container') as HTMLElement

// Get corresponding labels
const nameLabel = nameContainer.querySelector('label') as HTMLLabelElement
const emailLabel = emailContainer.querySelector('label') as HTMLLabelElement
const messageLabel = messageContainer.querySelector('label') as HTMLLabelElement

// Example of validation function
function validateInputs () {
  // Check for name
  if (nameInput.value.trim() === '') {
    nameContainer.classList.add('error')
    nameLabel.classList.add('error')
  } else {
    nameContainer.classList.remove('error')
  }

  // Check for email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(emailInput.value)) {
    emailContainer.classList.add('error')
    emailLabel.classList.add('error')
  } else {
    emailContainer.classList.remove('error')
    emailLabel.classList.remove('error')
  }

  // Check for message
  if (messageInput.value.trim() === '') {
    messageContainer.classList.add('error')
    messageLabel.classList.add('error')
  } else {
    messageContainer.classList.remove('error')
    messageLabel.classList.remove('error')
  }
}

// Bind validation function to input events
nameInput.addEventListener('input', validateInputs)
emailInput.addEventListener('input', validateInputs)
messageInput.addEventListener('input', validateInputs)

// Check visibility of elements on scroll
window.addEventListener('scroll', checkVisibility)

// Perform check immediately on page load
checkVisibility()
