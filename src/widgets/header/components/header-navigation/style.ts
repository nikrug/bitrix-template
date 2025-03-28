// Get the current style mode from localStorage
let styleMode: string | null = localStorage.getItem('styleMode')
const styleToggle = document.querySelector('.style-button') as HTMLElement

// Function to enable dark style
const enableDarkStyle = () => {
  document.body.classList.add('darkstyle')
  localStorage.setItem('styleMode', 'dark')
}

// Function to disable dark style
const disableDarkStyle = () => {
  document.body.classList.remove('darkstyle')
  localStorage.setItem('styleMode', 'null') // Store 'null' as a string to indicate no dark mode
}

// Event listener for the style toggle button
styleToggle.addEventListener('click', () => {
  styleMode = localStorage.getItem('styleMode')
  if (styleMode !== 'dark') {
    enableDarkStyle()
  } else {
    disableDarkStyle()
  }
})

// Apply dark style if it was previously set in localStorage
if (styleMode === 'dark') {
  enableDarkStyle()
}
