// Определение типов для языковых настроек
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
    header_menu_home: {
        ru: "Главная",
        en: "Home"
    },
    header_menu_about: {
        ru: "О нас",
        en: "About"
    },
    header_menu_services: {
        ru: "Услуги",
        en: "Services"
    },
    header_menu_projects: {
        ru: "Проекты",
        en: "Projects"
    },
    header_menu_button: {
        ru: "Написать нам",
        en: "Contact us"
    },
    header_title: {
        ru: "Помогаем бизнесу достигать поставленных целей",
        en: "Make your dream business goal come true"
    },
    header_text: {
        ru: "когда бизнес нуждается в преобразовании, вы просто приходите к нам, расстабляетесь и наблюдаете, как цели становятся реальностью ",
        en: "when you need us for improve your business, then come with us to help your business have reach it, you just sit and feel that goal."
    },
    header_overlay1_title: {
        ru: "800+ Готово ",
        en: "800+ Done"
    },
    header_overlay1_subtitle: {
        ru: "проектов",
        en: "Great Project"
    },
    header_overlay2_title: {
      ru: "Марк Петров",
      en: "Bill Adams"
    },
    header_overlay2_subtitle: {
      ru: "CEO UpTech",
      en: "CEO UpTech"
    },
    header_overlay2_text: {
      ru: "“ Это действительно одна из лучших команд на рынке. Я ни разу не пожалел, что выбрал этих ребят. Приду еще! “",
      en: "“ This team is really the best in its field,I don't regret working with them, and will come back again thanks “"
    },
    header_content_button: {
        ru: "Начать проект",
        en: "Start Project"
    },
    about_title: {
        ru: "Корпоративная семья",
        en: "Our Teammate"
    },
    about_subtitle: {
        ru: "О нас",
        en: "About Us"
    },
    about_text: {
        ru: "Создаем креаливные стратегии, которые помогают вашему бизнесу достигать поставленных целей. Используем широкий спектр приемов для генерации уникального и интересного контента.",
        en: "We move with make a Creative Strategy for help your business goal, we help to improve your income by a services we have. make your content look interesting and make people look for your business2"
    },
    about_text2: {
        ru: "Создаем креаливные стратегии, которые помогают вашему бизнесу достигать поставленных целей. Используем широкий спектр приемов для генерации уникального и интересного контента.",
        en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu neque tempor at ut auctor maecenas, Lorem ipsum d"
    },
    about_button: {
        ru: "О нас",
        en: "About Us"
    },
    about_button2: {
        ru: "История компании",
        en: "About Us"
    },
    services_title: {
        ru: "Эффективные приемы",
        en: "Perfect and Fast Movement"
    },
    services_subtitle: {
        ru: "Услуги",
        en: "Our Services"
    },
    services_text: {
        ru: "Создаем креаливные стратегии, которые помогают вашему бизнесу достигать поставленных целей. Используем широкий спектр приемов для генерации уникального и интересного контента.",
        en: "We move with make a Creative Strategy for help your business goal, we help to improve your income by a services we have. make your content look interesting and make people look for your business"
    },
    services_pannel_text_blue: {
        ru: "Ведение ",
        en: "Social Media "
    },
    services_pannel_text_blue2: {
        ru: "соцсетей",
        en: "Management"
    },
    services_pannel_text_red: {
        ru: "SEO ",
        en: "Search Engine "
    },
    services_pannel_text_red2: {
        ru: "оптимизация",
        en: "Opimization"
    },
    services_pannel_text_green: {
        ru: "Дизайн",
        en: "Design"
    },
    services_pannel_text_yellow: {
        ru: "Рекламма",
        en: "Ads"
    },
    portfolio_title: {
        ru: "Что мы делаем",
        en: "What do we do"
    },
    portfolio_subtitle: {
        ru: "Портфолио",
        en: "Our Portfolio"
    },
    portfolio_text: {
        ru: "многолетний опыт позволяет нам достигать максимальной эффективности, а результаты проектов говорят сами за себя",
        en: "all projects that we have already done , proven can help to use more comfortable, then can used by client from our business"
    },
    testimonials_title: {
        ru: "Что о нас говорят",
        en: "People Talk about us"
    },
    testimonials_subtitle: {
        ru: "Отзывы",
        en: "Testimonial"
    },
    testimonials_text: {
        ru: "Крутые ребята, работать вместе очень комфортно. Сотрудничаем на протяжении нескольких лет.",
        en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit”"
    },
    testimonials_text2: {
        ru: "Крутые ребята, работать вместе очень комфортно. Сотрудничаем на протяжении нескольких лет.",
        en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit”"
    },
    testimonials_text3: {
        ru: "Крутые ребята, работать вместе очень комфортно. Сотрудничаем на протяжении нескольких лет.",
        en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit”"
    },
    testimonials_pannel_title: {
        ru: "Ангелина Кан",
        en: "Angel Rose"
    },
    testimonials_pannel_subtitle: {
        ru: "Креативный директор",
        en: "Creative Manager"
    },
    testimonials_pannel_title2: {
        ru: "Ангелина Кан",
        en: "Angel Rose"
    },
    testimonials_pannel_subtitle2: {
        ru: "Креативный директор",
        en: "Creative Manager"
    },
    testimonials_pannel_title3: {
        ru: "Ангелина Кан",
        en: "Angel Rose"
    },
    testimonials_pannel_subtitle3: {
        ru: "Креативный директор",
        en: "Creative Manager"
    },

    testimonials_text4: {
      ru: "Крутые ребята, работать вместе очень комфортно. Сотрудничаем на протяжении нескольких лет.",
      en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit”"
  },
  testimonials_text5: {
      ru: "Крутые ребята, работать вместе очень комфортно. Сотрудничаем на протяжении нескольких лет.",
      en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit”"
  },
  testimonials_text6: {
      ru: "Крутые ребята, работать вместе очень комфортно. Сотрудничаем на протяжении нескольких лет.",
      en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit”"
  },
  testimonials_pannel_title4: {
      ru: "Ангелина Кан",
      en: "Angel Rose"
  },
  testimonials_pannel_subtitle4: {
      ru: "Креативный директор",
      en: "Creative Manager"
  },
  testimonials_pannel_title5: {
      ru: "Ангелина Кан",
      en: "Angel Rose"
  },
  testimonials_pannel_subtitle5: {
      ru: "Креативный директор",
      en: "Creative Manager"
  },
  testimonials_pannel_title6: {
      ru: "Ангелина Кан",
      en: "Angel Rose"
  },
  testimonials_pannel_subtitle6: {
      ru: "Креативный директор",
      en: "Creative Manager"
  },
    testimonials_colaboration_text: {
        ru: "Помогаем бизнесу достигать поставленных целей",
        en: "Help you to reach your business goal"
    },
    testimonials_colaboration_title: {
        ru: "Хочешь работать с нами?",
        en: "Interesting Collaboration With Us?"
    },
    testimonials_content_button: {
        ru: "Начать проект",
        en: "Start Project"
    },
    footer_terms: {
        ru: "Условия",
        en: "Terms & policies"
    },
    footer_service: {
        ru: "Условия обслуживания",
        en: "Terms of Service"
    },
    footer_policy: {
        ru: "Политика конфиденциальности",
        en: "Privacy Policy"
    },
    footer_company: {
        ru: "Компания",
        en: "Company"
    },
    footer_home: {
        ru: "Главная",
        en: "Home"
    },
    footer_about: {
        ru: "О нас",
        en: "About Us"
    },
    footer_contact_us: {
        ru: "Написать нам",
        en: "Contct Us"
    },
    footer_contact: {
        ru: "Контакты",
        en: "Contct"
    },
    footer_location: {
        ru: "Адреса",
        en: "Location"
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
