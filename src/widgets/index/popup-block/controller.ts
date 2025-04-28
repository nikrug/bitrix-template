import { EEvent } from '@shared/lib/enums/EEvent'

export class PopupBlockController {
  private readonly button: HTMLButtonElement | null
  private readonly buttonTwo: HTMLButtonElement | null
  private readonly popup: HTMLElement | null
  private readonly popupTwo: HTMLElement | null

  constructor (private container: HTMLSelectElement) {
    this.button = this.container.querySelector('.j-example-popup-button')
    this.buttonTwo = this.container.querySelector('.j-example-popup-two-button')
    this.popup = this.container.querySelector('.j-example-popup')
    this.popupTwo = this.container.querySelector('.j-example-popup-two')
    this.initButton()
  }

  initButton () {
    if (this.button) this.button.addEventListener(EEvent.CLICK, this.openPopup)
    if (this.buttonTwo) this.buttonTwo.addEventListener(EEvent.CLICK, this.openTwoPopup)
  }

  openPopup = () => {
    this.popup?.dispatchEvent(new Event(EEvent.OPEN))
  }

  openTwoPopup = () => {
    this.popupTwo?.dispatchEvent(new Event(EEvent.OPEN))
  }
}

// Создаём класс для обработки загрузки файлов
export class FileUploader {
  private fileInput: HTMLInputElement | null
  private uploadButton: HTMLElement | null
  private fileNameDisplay: HTMLElement | null

  constructor () {
    // Находим элементы на странице
    this.fileInput = document.querySelector('.file-input') as HTMLInputElement
    this.uploadButton = document.querySelector('.upload-button')
    this.fileNameDisplay = document.querySelector('.file-name')

    // Проверяем, найдены ли элементы
    if (!this.fileInput || !this.uploadButton || !this.fileNameDisplay) {
      console.error('Elements not found. Check your HTML.')
      return
    }

    // Привязываем обработчики событий
    this.uploadButton.addEventListener('click', this.onUploadButtonClick.bind(this))
    this.fileInput.addEventListener('change', this.onFileInputChange.bind(this))
  }

  private onUploadButtonClick (): void {
    this.fileInput?.click()
  }

  private onFileInputChange (event: Event): void {
    const target = event.target as HTMLInputElement
    const files = target.files

    if (files && files.length > 0) {
      const file = files[0]
      console.log('Выбран файл:', file.name)
      this.updateFileNameDisplay(file.name) // Обновляем имя файла
      this.uploadFile(file)
    } else {
      this.updateFileNameDisplay('') // Если файл не выбран
    }
  }

  private updateFileNameDisplay (fileName: string): void {
    if (this.fileNameDisplay) { // Проверяем, что объект не равен null
      this.fileNameDisplay.textContent = fileName
    } else {
      console.error('Элемент для отображения имени файла не найден.')
    }
  }

  private uploadFile (file: File): void {
    const formData = new FormData()
    formData.append('file', file)

    fetch('/upload', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        console.log('Успех:', data)
      })
      .catch(error => {
        console.error('Ошибка:', error)
      })
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new FileUploader()
})

document.addEventListener('DOMContentLoaded', () => {
  const nameInput = document.querySelector('.name-input') as HTMLInputElement
  const emailInput = document.querySelector('.email-input') as HTMLInputElement
  const messageInput = document.querySelector('.message-input') as HTMLTextAreaElement

  const nameContainer = document.querySelector('.name-container') as HTMLElement
  const emailContainer = document.querySelector('.email-container') as HTMLElement
  const messageContainer = document.querySelector('.message-container') as HTMLElement

  // Get corresponding labels
  const nameLabel = nameContainer.querySelector('label') as HTMLLabelElement
  const emailLabel = emailContainer.querySelector('label') as HTMLLabelElement
  const messageLabel = messageContainer.querySelector('label') as HTMLLabelElement

  const submitButton = document.querySelector('.submit-button') as HTMLButtonElement

  // Функция валидации
  function validateInputs (): void {
    let isValid = true

    // Проверка имени
    const nameError = nameContainer.querySelector('.error-message') as HTMLDivElement
    if (nameInput.value.trim() === '') {
      nameContainer.classList.add('error')
      nameError.classList.remove('hidden')
      nameLabel.classList.add('error') // Убираем класс "hidden", чтобы показать сообщение
      isValid = false
    } else {
      nameContainer.classList.remove('error')
      nameError.classList.add('hidden')
      nameLabel.classList.remove('error') // Добавляем класс "hidden", чтобы скрыть сообщение
    }

    // Проверка электронной почты
    const emailError = emailContainer.querySelector('.error-message') as HTMLDivElement
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(emailInput.value)) {
      emailContainer.classList.add('error')
      emailError.classList.remove('hidden')
      emailLabel.classList.add('error')// Убираем класс "hidden", чтобы показать сообщение
      isValid = false
    } else {
      emailContainer.classList.remove('error')
      emailError.classList.add('hidden')
      emailLabel.classList.remove('error') // Добавляем класс "hidden", чтобы скрыть сообщение
    }

    // Проверка сообщения
    const messageError = messageContainer.querySelector('.error-message') as HTMLDivElement
    if (messageInput.value.trim() === '') {
      messageContainer.classList.add('error')
      messageError.classList.remove('hidden')
      messageLabel.classList.add('error') // Убираем класс "hidden", чтобы показать сообщение
      isValid = false
    } else {
      messageContainer.classList.remove('error')
      messageError.classList.add('hidden')
      messageLabel.classList.remove('error') // Добавляем класс "hidden", чтобы скрыть сообщение
    }

    // Включаем или отключаем кнопку отправки на основе валидности
    submitButton.disabled = !isValid
  }

  // Добавляем обработчики ввода для валидации
  nameInput.addEventListener('input', validateInputs)
  emailInput.addEventListener('input', validateInputs)
  messageInput.addEventListener('input', validateInputs)

  // Добавляем обработчики ввода для валидации
  nameInput.addEventListener('input', validateInputs)
  emailInput.addEventListener('input', validateInputs)
  messageInput.addEventListener('input', validateInputs)

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
