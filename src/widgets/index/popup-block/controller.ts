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
