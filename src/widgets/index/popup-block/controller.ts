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

export class FileUploader {
  private fileInputs: NodeListOf<HTMLInputElement>
  private uploadButtons: NodeListOf<HTMLElement>
  private fileNameDisplays: NodeListOf<HTMLElement>

  constructor () {
    // Находим все элементы на странице
    this.fileInputs = document.querySelectorAll('.file-input') as NodeListOf<HTMLInputElement>
    this.uploadButtons = document.querySelectorAll('.upload-button') as NodeListOf<HTMLElement>
    this.fileNameDisplays = document.querySelectorAll('.file-name') as NodeListOf<HTMLElement>

    // Проверяем, найдены ли элементы
    if (this.fileInputs.length === 0 || this.uploadButtons.length === 0 || this.fileNameDisplays.length === 0) {
      console.error('Elements not found. Check your HTML.')
      return
    }

    // Привязываем обработчики событий ко всем элементам
    this.fileInputs.forEach((fileInput, index) => {
      const uploadButton = this.uploadButtons[index]
      const fileNameDisplay = this.fileNameDisplays[index]

      uploadButton.addEventListener('click', () => this.onUploadButtonClick(fileInput))
      fileInput.addEventListener('change', (event) => this.onFileInputChange(event, fileNameDisplay))
    })
  }

  private onUploadButtonClick (fileInput: HTMLInputElement): void {
    fileInput.click()
  }

  private onFileInputChange (event: Event, fileNameDisplay: HTMLElement): void {
    const target = event.target as HTMLInputElement
    const files = target.files

    if (files && files.length > 0) {
      const file = files[0]
      console.log('Выбран файл:', file.name)
      this.updateFileNameDisplay(fileNameDisplay, file.name) // Обновляем имя файла
      this.uploadFile(file)
    } else {
      this.updateFileNameDisplay(fileNameDisplay, '') // Если файл не выбран
    }
  }

  private updateFileNameDisplay (fileNameDisplay: HTMLElement, fileName: string): void {
    if (fileNameDisplay) { // Проверяем, что объект не равен null
      fileNameDisplay.textContent = fileName
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
  const forms = document.querySelectorAll('.contact-form')

  forms.forEach(form => {
    const nameInput = form.querySelector('.name-input') as HTMLInputElement
    const emailInput = form.querySelector('.email-input') as HTMLInputElement
    const messageInput = form.querySelector('.message-input') as HTMLTextAreaElement
    const submitButton = form.querySelector('.submit-button') as HTMLButtonElement

    const validateInputs = (): void => {
      let isValid = true

      // Валидация имени
      const nameContainer = form.querySelector('.name-container') as HTMLElement
      const nameError = nameContainer.querySelector('.error-message') as HTMLElement
      const nameLabel = nameContainer.querySelector('.name-label') as HTMLElement
      if (nameInput.value.trim() === '') {
        nameContainer.classList.add('error')
        nameLabel.classList.add('error-label')
        nameError.classList.remove('hidden')
        isValid = false
      } else {
        nameContainer.classList.remove('error')
        nameLabel.classList.remove('error-label')
        nameError.classList.add('hidden')
      }

      // Валидация электронной почты
      const emailContainer = form.querySelector('.email-container') as HTMLElement
      const emailError = emailContainer.querySelector('.error-message') as HTMLElement
      const emailLabel = emailContainer.querySelector('.email-label') as HTMLElement
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(emailInput.value)) {
        emailContainer.classList.add('error')
        emailLabel.classList.add('error-label')
        emailError.classList.remove('hidden')
        isValid = false
      } else {
        emailContainer.classList.remove('error')
        emailLabel.classList.remove('error-label')
        emailError.classList.add('hidden')
      }

      // Валидация сообщения
      const messageContainer = form.querySelector('.message-container') as HTMLElement
      const messageError = messageContainer.querySelector('.error-message') as HTMLElement
      const messageLabel = messageContainer.querySelector('.message-label') as HTMLElement
      if (messageInput.value.trim() === '') {
        messageContainer.classList.add('error')
        messageLabel.classList.add('error-label')
        messageError.classList.remove('hidden')
        isValid = false
      } else {
        messageContainer.classList.remove('error')
        messageLabel.classList.remove('error-label')
        messageError.classList.add('hidden')
      }

      // Включаем или отключаем кнопку отправки
      submitButton.disabled = !isValid
    }

    // Обработчики ввода для валидации
    nameInput.addEventListener('input', validateInputs)
    emailInput.addEventListener('input', validateInputs)
    messageInput.addEventListener('input', validateInputs)

    // Обработка отправки формы
    form.addEventListener('submit', (event: Event) => {
      event.preventDefault()

      if (submitButton.disabled) {
        return // Предотвращаем отправку, если кнопка отключена
      }

      // Обработка валидных данных формы
      console.log('Form submitted with:', {
        name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value
      })

      // Очистка полей
      nameInput.value = ''
      emailInput.value = ''
      messageInput.value = ''
      validateInputs() // Повторная валидация для сброса состояния кнопки
    })

    // Скрываем все сообщения об ошибках при загрузке
    const errorMessages = form.querySelectorAll('.error-message') as NodeListOf<HTMLElement>
    errorMessages.forEach(errorMessage => errorMessage.classList.add('hidden'))
  })
})
