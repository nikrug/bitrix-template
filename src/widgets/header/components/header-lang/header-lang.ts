// Определяем перечисление языков
enum AllLang {
  RU = 'ru',
  EN = 'en',
}

const langArr: Record<string, Record<AllLang, string>> = {
  unit: {
    ru: 'Добро пожаловать',
    en: 'Welcome'
  },
  other: {
    ru: 'Другой текст на русском',
    en: 'Another text in English'
  },
  header_menu_home: {
    ru: 'Главная',
    en: 'Home'
  },
  header_menu_about: {
    ru: 'О нас',
    en: 'About'
  },
  header_menu_services: {
    ru: 'Услуги',
    en: 'Services'
  },
  header_menu_projects: {
    ru: 'Проекты',
    en: 'Projects'
  },
  header_menu_button: {
    ru: 'Написать нам',
    en: 'Contact us'
  },
  header_menu_home_drop: {
    ru: 'Главная',
    en: 'Home'
  },
  header_menu_about_drop: {
    ru: 'О нас',
    en: 'About'
  },
  header_menu_services_drop: {
    ru: 'Услуги',
    en: 'Services'
  },
  header_menu_projects_drop: {
    ru: 'Проекты',
    en: 'Projects'
  },
  header_menu_button_drop: {
    ru: 'Написать нам',
    en: 'Contact us'
  },
  header_title: {
    ru: 'Помогаем бизнесу достигать поставленных целей',
    en: 'Make your dream business goal come true'
  },
  header_text: {
    ru: 'Когда бизнес нуждается в преобразовании,',
    en: 'when you need us for improve your business,'
  },
  header_text2: {
    ru: ' вы просто приходите к нам, расстабляетесь и наблюдаете, как цели становятся реальностью.',
    en: 'then come with us to help your business reach it, you just sit and feel that goal.'
  },
  header_overlay1_title: {
    ru: '800+ Готово',
    en: '800+ Done'
  },
  header_overlay1_subtitle: {
    ru: 'проектов',
    en: 'Great Project'
  },
  header_overlay2_title: {
    ru: 'Марк Петров',
    en: 'Bill Adams'
  },
  header_overlay2_subtitle: {
    ru: 'CEO UpTech',
    en: 'CEO UpTech'
  },
  header_overlay2_text: {
    ru: '“ Это действительно одна из лучших команд на рынке. Я ни разу не пожалел, что выбрал этих ребят. Приду еще! “',
    en: '“ This team is really the best in its field. I don\'t regret working with them, and I will come back again thanks “'
  },
  header_content_button: {
    ru: 'Начать проект',
    en: 'Start Project'
  },
  about_title: {
    ru: 'Корпоративная семья',
    en: 'Our Teammate'
  },
  about_subtitle: {
    ru: 'О нас',
    en: 'About Us'
  },
  about_text: {
    ru: 'Создаем креативные стратегии, которые помогают вашему бизнесу достигать поставленных целей. Используем широкий спектр приемов для генерации уникального и интересного контента.',
    en: 'We move with a creative strategy to help your business goal. We help to improve your income with the services we have, making your content look interesting and appealing to potential customers.'
  },
  about_button: {
    ru: 'О нас',
    en: 'About Us'
  },
  about_button2: {
    ru: 'История компании',
    en: 'Our story'
  },
  services_title: {
    ru: 'Эффективные приемы',
    en: 'Perfect and Fast Movement'
  },
  services_subtitle: {
    ru: 'Услуги',
    en: 'Our Services'
  },
  services_text: {
    ru: 'Создаем креативные стратегии, которые помогают вашему бизнесу достигать поставленных целей. Используем широкий спектр приемов для генерации уникального и интересного контента.',
    en: 'We move with a creative strategy to help your business goal, we help to improve your income through the services we offer. Make your content look interesting to attract customers.'
  },
  services_pannel_text_blue: {
    ru: 'Ведение ',
    en: 'Social Media '
  },
  services_pannel_text_blue2: {
    ru: 'соцсетей',
    en: 'Management'
  },
  services_pannel_text_red: {
    ru: 'SEO ',
    en: 'Search Engine '
  },
  services_pannel_text_red2: {
    ru: 'оптимизация',
    en: 'Optimization'
  },
  services_pannel_text_green: {
    ru: 'Дизайн',
    en: 'Design'
  },
  services_pannel_text_yellow: {
    ru: 'Реклама',
    en: 'Ads'
  },
  services_read: {
    ru: 'Подробнее',
    en: 'Read more'
  },
  portfolio_title: {
    ru: 'Что мы делаем',
    en: 'What do we do'
  },
  portfolio_subtitle: {
    ru: 'Портфолио',
    en: 'Our Portfolio'
  },
  portfolio_text: {
    ru: 'Многолетний опыт позволяет нам достигать максимальной эффективности, а результаты проектов говорят сами за себя',
    en: 'All projects that we have already done prove that we can help you use their products more comfortably.'
  },
  portfolio_button: {
    ru: 'Все проекты',
    en: 'See All Portfolio'
  },
  testimonials_title: {
    ru: 'Что о нас говорят',
    en: 'People Talk about us'
  },
  testimonials_subtitle: {
    ru: 'Отзывы',
    en: 'Testimonial'
  },
  testimonials_text: {
    ru: 'Крутые ребята, работать вместе очень комфортно. Сотрудничаем на протяжении нескольких лет.',
    en: 'Great guys, it is very comfortable to work together. We have been collaborating for several years.'
  },
  testimonials_pannel_title: {
    ru: 'Ангелина Кан',
    en: 'Angel Rose'
  },
  testimonials_pannel_subtitle: {
    ru: 'Креативный директор',
    en: 'Creative Manager'
  },
  testimonials_text2: {
    ru: 'Крутые ребята, работать вместе очень комфортно. Сотрудничаем на протяжении нескольких лет.',
    en: 'Great guys, it is very comfortable to work together. We have been collaborating for several years.'
  },
  testimonials_pannel_title2: {
    ru: 'Ангелина Кан',
    en: 'Angel Rose'
  },
  testimonials_pannel_subtitle2: {
    ru: 'Креативный директор',
    en: 'Creative Manager'
  },
  testimonials_text3: {
    ru: 'Крутые ребята, работать вместе очень комфортно. Сотрудничаем на протяжении нескольких лет.',
    en: 'Great guys, it is very comfortable to work together. We have been collaborating for several years.'
  },
  testimonials_pannel_title3: {
    ru: 'Ангелина Кан',
    en: 'Angel Rose'
  },
  testimonials_pannel_subtitle3: {
    ru: 'Креативный директор',
    en: 'Creative Manager'
  },
  testimonials_text4: {
    ru: 'Крутые ребята, работать вместе очень комфортно. Сотрудничаем на протяжении нескольких лет.',
    en: 'Great guys, it is very comfortable to work together. We have been collaborating for several years.'
  },
  testimonials_pannel_title4: {
    ru: 'Ангелина Кан',
    en: 'Angel Rose'
  },
  testimonials_pannel_subtitle4: {
    ru: 'Креативный директор',
    en: 'Creative Manager'
  },
  testimonials_text5: {
    ru: 'Крутые ребята, работать вместе очень комфортно. Сотрудничаем на протяжении нескольких лет.',
    en: 'Great guys, it is very comfortable to work together. We have been collaborating for several years.'
  },
  testimonials_pannel_title5: {
    ru: 'Ангелина Кан',
    en: 'Angel Rose'
  },
  testimonials_pannel_subtitle5: {
    ru: 'Креативный директор',
    en: 'Creative Manager'
  },
  testimonials_text6: {
    ru: 'Крутые ребята, работать вместе очень комфортно. Сотрудничаем на протяжении нескольких лет.',
    en: 'Great guys, it is very comfortable to work together. We have been collaborating for several years.'
  },
  testimonials_pannel_title6: {
    ru: 'Ангелина Кан',
    en: 'Angel Rose'
  },
  testimonials_pannel_subtitle6: {
    ru: 'Креативный директор',
    en: 'Creative Manager'
  },
  testimonials_colaboration_title: {
    ru: 'Хочешь работать с нами?',
    en: 'Interesting Collaboration With Us?'
  },
  testimonials_colaboration_text: {
    ru: 'Помогаем бизнесу достигать поставленых целей',
    en: 'Help you to reach your business goal'
  },
  testimonials_content_button: {
    ru: 'Начать проект',
    en: 'Get Started'
  },
  footer_terms: {
    ru: 'Условия',
    en: 'Terms & policies'
  },
  footer_service: {
    ru: 'Условия обслуживания',
    en: 'Terms of Service'
  },
  footer_policy: {
    ru: 'Политика конфиденциальности',
    en: 'Privacy Policy'
  },
  footer_company: {
    ru: 'Компания',
    en: 'Company'
  },
  footer_home: {
    ru: 'Главная',
    en: 'Home'
  },
  footer_about: {
    ru: 'О нас',
    en: 'About Us'
  },
  footer_contact_us: {
    ru: 'Написать нам',
    en: 'Contact Us'
  },
  footer_contact: {
    ru: 'Контакты',
    en: 'Contact'
  },
  footer_location: {
    ru: 'Адреса',
    en: 'Location'
  },
  popup_title: {
    [AllLang.RU]: 'Отправте нам сообщение',
    [AllLang.EN]: 'Send us a message'
  },
  popup_subtitle: {
    [AllLang.RU]: 'Мы поможем вам создать стратегию для ваших бизнес задача',
    [AllLang.EN]: 'We move with make a Creative Strategy for help your business goal'
  },
  popup_name: {
    [AllLang.RU]: 'Ваше имя',
    [AllLang.EN]: 'Your name'
  },
  popup_email: {
    [AllLang.RU]: 'Антон',
    [AllLang.EN]: 'Email'
  },
  popup_message: {
    [AllLang.RU]: 'А че звал сларк?',
    [AllLang.EN]: 'Your Message'
  },
  popup_attach: {
    [AllLang.RU]: 'прикрепить файл',
    [AllLang.EN]: 'Attach file'
  },
  popup_button: {
    [AllLang.RU]: 'Отправить сообщение',
    [AllLang.EN]: 'Send message'
  },
  preloader_text: {
    [AllLang.RU]: 'Поможем достич ваши цели',
    [AllLang.EN]: 'will help to reach your goals.'
  },

  name_error_text: {
    [AllLang.RU]: 'Введите имя',
    [AllLang.EN]: 'Enter a name'
  },
  email_error_text: {
    [AllLang.RU]: 'Укажите верный адресс почты',
    [AllLang.EN]: 'Enter a valid email'
  },
  message_error_text: {
    [AllLang.RU]: 'Наберите сообщение',
    [AllLang.EN]: 'Enter a message'
  }
}
// Функция для добавления обработчиков событий для кнопок
function setupLanguageButtons () {
  const languageButtons = document.querySelectorAll('.language-button') as NodeListOf<HTMLButtonElement>

  languageButtons.forEach((button) => {
    button.addEventListener('click', function () {
      const lang = button.getAttribute('data-lang') as AllLang // Убеждаемся, что это AllLang
      if (lang && Object.values(AllLang).includes(lang)) {
        changeLanguage(lang)
      } else {
        console.error('Язык не поддерживается: ' + lang)
      }
    })
  })
}

// Функция смены языка
function changeLanguage (lang: AllLang) {
  // Сохранить язык в localStorage
  localStorage.setItem('preferredLanguage', lang)

  // Обновить текст на странице
  updateText(lang)

  // Обновить текст отзывов
  updateTestimonialsText(lang)
  updatePopupText(lang)
}

// Функция инициализации языка
function initializeLanguage () {
  // Получить язык из localStorage или использовать язык по умолчанию
  let lang = (localStorage.getItem('preferredLanguage') as AllLang) || AllLang.RU // По умолчанию русский

  // Если язык не поддерживается, установить по умолчанию
  if (!Object.values(AllLang).includes(lang)) {
    lang = AllLang.EN // По умолчанию русский
  }
  updateText(lang)
  updateTestimonialsText(lang) // Обновляем текст отзывов при инициализации
  updatePopupText(lang)
}

function updateText (lang: AllLang) {
  document.querySelector('title')!.innerHTML = langArr.unit[lang]

  for (const key in langArr) {
    const element = document.querySelector(`[lng="${key}"]`) as HTMLElement | null
    if (element) {
      element.innerHTML = langArr[key][lang]
    }
  }
}
// Обновление текста в всплывающем окне
function updatePopupText (lang: AllLang) {
  // Выбираем все элементы, которые имеют атрибут lng
  const popupElements = document.querySelectorAll('[lng]')

  popupElements.forEach((popupElement) => {
    const lngKey = popupElement.getAttribute('lng') // Получаем значение атрибута lng
    if (lngKey && langArr[lngKey]) {
      popupElement.innerHTML = langArr[lngKey][lang] // Обновляем текст элемента
    }
  })
}

// Функция обновления текста отзывов
function updateTestimonialsText (lang: AllLang) {
  const testimonials = document.querySelectorAll('.testimonials__pannel')

  testimonials.forEach((panel, index) => {
    const title = panel.querySelector('.testimonials__pannel-title-text') as HTMLElement | null
    const subtitle = panel.querySelector('.testimonials__pannel-subtitle-text') as HTMLElement | null
    const text = panel.querySelector('.testimonials__text') as HTMLElement | null

    if (title && langArr[`testimonials_pannel_title${index + 1}`]) {
      title.innerHTML = langArr[`testimonials_pannel_title${index + 1}`][lang] || title.innerHTML
    }

    if (subtitle && langArr[`testimonials_pannel_subtitle${index + 1}`]) {
      subtitle.innerHTML = langArr[`testimonials_pannel_subtitle${index + 1}`][lang] || subtitle.innerHTML
    }

    if (text && langArr[`testimonials_text${index + 1}`]) {
      text.innerHTML = langArr[`testimonials_text${index + 1}`][lang] || text.innerHTML
    }
  })
}

// Инициализация языка и установка кнопок
document.addEventListener('DOMContentLoaded', function () {
  initializeLanguage()
  setupLanguageButtons() // Установка кнопок должна быть после инициализации
})
