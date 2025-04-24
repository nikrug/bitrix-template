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
document.addEventListener('DOMContentLoaded', () => {
  // Функция для движения шариков
  function moveBalloon (container: HTMLElement, balloon: HTMLElement) {
    let velocityX = (Math.random() < 0.5 ? 1 : -1) * (Math.random() + 1) // Случайная скорость по X
    let velocityY = (Math.random() < 0.5 ? 1 : -1) * (Math.random() + 1) // Случайная скорость по Y
    const position = { x: Math.random() * (container.clientWidth - 30), y: Math.random() * (container.clientHeight - 30) }

    function animate () {
      position.x += velocityX
      position.y += velocityY
      const containerHeight = container!.clientHeight // Non-null assertion
      const containerWidth = container!.clientWidth
      const balloonSize = 30 // Размер шарика

      // Проверка столкновения с границами контейнера
      if (position.x + balloonSize > container.clientWidth || position.x < 0) {
        velocityX *= -1 // Изменить направление по оси X
        position.x = Math.max(0, Math.min(containerWidth - balloonSize, position.x)) // Ensure we don't go out of bounds
      }
      if (position.y + balloonSize > container.clientHeight || position.y < 0) {
        velocityY *= -1 // Изменить направление по оси Y
        position.y = Math.max(0, Math.min(containerHeight - balloonSize, position.y)) // Ensure we don't go out of bounds
      }

      // Обновление позиции шарика
      balloon.style.transform = `translate(${position.x}px, ${position.y}px)`

      requestAnimationFrame(animate) // Рекурсивный вызов для анимации
    }

    animate()
  }

  // Получаем все контейнеры с классом balloon-container
  const containers = document.querySelectorAll('.balloon-container') as NodeListOf<HTMLElement>

  containers.forEach(container => {
    // Проверка наличия хотя бы одного элемента с классом balloon в текущем контейнере
    const balloons = container.getElementsByClassName('balloon')

    if (balloons.length > 0) { // Если есть хотя бы один шарик
      const balloonCount = balloons.length // Число шариков на основе имеющихся элементов

      // Создание фиксированного количества шариков на основе имеющихся элементов
      for (let i = 0; i < balloonCount; i++) {
        moveBalloon(container, balloons[i] as HTMLElement) // Теперь мы передаем текущий контейнер
      }
    } else {
      console.warn('No balloons found in the balloon container.')
    }
  })
})

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

document.addEventListener('DOMContentLoaded', () => {
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

  // Get the submit button
  const submitButton = document.querySelector('.submit-button') as HTMLButtonElement

  // Validation function
  function validateInputs (): void {
    let isValid = true

    // Check for name
    if (nameInput.value.trim() === '') {
      nameContainer.classList.add('error')
      nameLabel.classList.add('error')
      isValid = false
    } else {
      nameContainer.classList.remove('error')
      nameLabel.classList.remove('error')
    }

    // Check for email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(emailInput.value)) {
      emailContainer.classList.add('error')
      emailLabel.classList.add('error')
      isValid = false
    } else {
      emailContainer.classList.remove('error')
      emailLabel.classList.remove('error')
    }

    // Check for message
    if (messageInput.value.trim() === '') {
      messageContainer.classList.add('error')
      messageLabel.classList.add('error')
      isValid = false
    } else {
      messageContainer.classList.remove('error')
      messageLabel.classList.remove('error')
    }

    // Enable or disable the submit button based on validity
    submitButton.disabled = !isValid
  }

  // Bind validation function to input events
  nameInput.addEventListener('input', validateInputs)
  emailInput.addEventListener('input', validateInputs)
  messageInput.addEventListener('input', validateInputs)

  // Handle form submission
  submitButton.addEventListener('click', (event: MouseEvent) => {
    event.preventDefault()

    if (submitButton.disabled) {
      return // Prevent submission if the button is disabled
    }

    // Process the validated form data
    console.log('Form submitted with:', {
      name: nameInput.value,
      email: emailInput.value,
      message: messageInput.value
    })

    // Optionally: Clear inputs
    nameInput.value = ''
    emailInput.value = ''
    messageInput.value = ''
    validateInputs() // Re-validate to reset the button state
  })
})

// Check visibility of elements on scroll
window.addEventListener('scroll', checkVisibility)

// Perform check immediately on page load
checkVisibility()
