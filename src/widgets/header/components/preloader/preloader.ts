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
