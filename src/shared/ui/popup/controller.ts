import { BodyOverflow } from '@src/shared/lib/helpers/bodyOverflow'
import { EClasses } from '@shared/lib/enums/EClasses'
import { EEvent } from '@shared/lib/enums/EEvent'

export class PopupController {
  bodyOverflow = new BodyOverflow()
  private readonly closeBtn: HTMLButtonElement | null

  constructor(private container: HTMLElement) {
    this.closeBtn = container.querySelector('.j-popup-close')
    this.init()
  }

  init() {
    this.container.addEventListener(EEvent.CLICK, this.handleContainerClose)
    if (this.closeBtn)
      this.closeBtn.addEventListener(EEvent.CLICK, this.closePopup)
    this.addListener()
  }

  addListener = () => {
    this.container.addEventListener(EEvent.OPEN, this.openHandler)
  }

  openHandler = () => {
    this.bodyOverflow.lock()
    this.container.removeEventListener(EEvent.OPEN, this.openHandler)
    document.body.appendChild(this.container)
    setTimeout(() => {
      this.container.classList.add(EClasses.OPEN)
    })
  }

  handleContainerClose = (e: MouseEvent) => {
    const target = e.target as HTMLElement
    if (target === this.container) {
      this.closePopup()
    }
  }

  closePopup = () => {
    this.container.classList.remove(EClasses.OPEN)
    this.bodyOverflow.unlock()
    this.addListener()
  }
}

// Языковые настройки
type LanguageKeys = 'ru' | 'en';

interface LanguageObject {
  [key: string]: {
    [lang in LanguageKeys]: string;
  };
}

// Языковые настройки
export const langArr: LanguageObject = {
  unit: {
    ru: "Добро пожаловать",
    en: "Welcome"
  },
  other: {
    ru: "Другой текст на русском",
    en: "Another text in English"
  },
  testimonials_pannel_title1: {
    ru: "Заголовок отзыва 1",
    en: "Testimonial Title 1"
  },
  testimonials_pannel_subtitle1: {
    ru: "Подзаголовок отзыва 1",
    en: "Testimonial Subtitle 1"
  },
  testimonials_text1: {
    ru: "Текст отзыва 1",
    en: "Testimonial Text 1"
  },
};

// Все поддерживаемые языки
const allLang: LanguageKeys[] = ['en', 'ru'];

// Кнопки для изменения языка
const btnRu = document.querySelector<HTMLButtonElement>('.btnRu');
const btnEn = document.querySelector<HTMLButtonElement>('.btnEn');

// Обработчик событий для кнопок выбора языка
btnRu?.addEventListener('click', () => changeLanguage('ru'));
btnEn?.addEventListener('click', () => changeLanguage('en'));

// Функция изменения языка
function changeLanguage(lang: LanguageKeys): void {
  location.hash = lang; // Сохраняем язык в URL
  updateText(lang); // Обновляем текст на странице
}

// Инициализация языка на старте
function initializeLanguage(): void {
  let hash = window.location.hash.substring(1) as LanguageKeys;

  if (!allLang.includes(hash)) {
    hash = 'ru'; // Используем русский язык по умолчанию
    location.hash = hash; // обновляем хеш для правильного отображения
  }

  updateText(hash); // Обновляем текст для инициализированного языка
}

// Обновление текста на странице
function updateText(lang: LanguageKeys): void {
  const titleElement = document.querySelector('title');
  if (titleElement) {
    titleElement.innerHTML = langArr['unit'][lang];
  }

  for (const key in langArr) {
    const element = document.querySelector(`[lng="${key}"]`);
    if (element) {
      element.innerHTML = langArr[key][lang];
    }
  }
}

// Запуск инициализации языка
initializeLanguage();

// Работа со слайдами
const slides = document.querySelectorAll<HTMLElement>('.slider-item');
const sliderWrapper = document.querySelector<HTMLElement>('.slider-wrapper');

let currentSlide = 0;
const totalSlides = slides.length - 1; // Исключаем дубликат при подсчете
const slideInterval = 3000; 
let intervalId: number | undefined;

function showSlide(index: number): void {
  if (sliderWrapper) {
    sliderWrapper.style.transform = `translateX(-${index * 100}%)`;
  }
}

// Запускаем интервал для переключения слайдов
function startInterval(): void {
  if (!sliderWrapper) {
    console.error("Элемент sliderWrapper не найден.");
    return; // Выходим из функции, если элемент отсутствует
  }

  intervalId = window.setInterval(() => {
    currentSlide++;

    if (currentSlide > totalSlides) {
      // Возвращаемся к первому слайду
      sliderWrapper.style.transition = 'none';
      currentSlide = 0; // Указываем индекс на первый элемент

      // используем таймаут, чтобы дождаться завершения применения стилей
      setTimeout(() => {
        sliderWrapper.style.transform = `translateX(0%)`; // Переход на первый слайд
        sliderWrapper.style.transition = 'transform 1.1s ease-in-out'; // Включаем переход снова
      }, 50); // Маленькая задержка для стилей
    } else {
      sliderWrapper.style.transition = 'transform 1.1s ease-in-out'; // Установите плавный переход до вызова
      showSlide(currentSlide);
    }
  }, slideInterval);
}

// Запуск слайдера
showSlide(currentSlide);
startInterval();
