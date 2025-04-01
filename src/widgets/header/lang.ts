// Language array with translations
const langArr: { [key: string]: { [key: string]: string } } = {
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
  header_title: {
    ru: 'Помогаем бизнесу достигать поставленных целей',
    en: 'Make your dream business goal come true'
  },
  header_text: {
    ru: 'Когда бизнес нуждается в преобразовании, вы просто приходите к нам, расстабляетесь и наблюдаете, как цели становятся реальностью.',
    en: 'When you need us to improve your business, then come with us to help your business reach it, you just sit and feel that goal.'
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
    en: 'Start Project'
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
  } // <-- No trailing comma here
}

// Language settings
const allLang = ['en', 'ru']
const btnRu = document.querySelector('.btnRu') as HTMLButtonElement | null
const btnEn = document.querySelector('.btnEn') as HTMLButtonElement | null

if (btnRu) {
  btnRu.addEventListener('click', function () {
    changeLanguage('ru')
  })
} else {
  console.error('Кнопка для русского языка не найдена.')
}

if (btnEn) {
  btnEn.addEventListener('click', function () {
    changeLanguage('en')
  })
} else {
  console.error('Кнопка для английского языка не найдена.')
}

function changeLanguage (lang: string) {
  // Save the language in the URL
  location.hash = lang

  // Update the text on the page
  updateText(lang)

  // Update testimonials text
  updateTestimonialsText(lang) // Call the function to update testimonials
}

function initializeLanguage () {
  let hash = window.location.hash.substring(1)

  // If the language is not supported, set to default
  if (!allLang.includes(hash)) {
    hash = 'ru' // Default to Russian
    location.hash = hash // Update hash for proper display
  }

  updateText(hash)
  updateTestimonialsText(hash) // Update testimonials text when initializing
}

function updateText (lang: string) {
  document.querySelector('title')!.innerHTML = langArr.unit[lang]

  for (const key in langArr) {
    const element = document.querySelector(`[lng="${key}"]`) as HTMLElement | null
    if (element) {
      element.innerHTML = langArr[key][lang]
    }
  }
}

function updateTestimonialsText (lang: string) {
  // Get all testimonials elements
  const testimonials = document.querySelectorAll('.testimonials__pannel')

  testimonials.forEach((panel, index) => {
    // Get title, subtitle, and text
    const title = panel.querySelector('.testimonials__pannel-title-text') as HTMLElement | null
    const subtitle = panel.querySelector('.testimonials__pannel-subtitle-text') as HTMLElement | null
    const text = panel.querySelector('.testimonials__text') as HTMLElement | null

    // Use (index + 1) for langArr indexing as it starts from 1
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

// Initialize language
initializeLanguage()

const slides = document.querySelectorAll('.slider-item') as NodeListOf<HTMLElement>
const sliderWrapper = document.querySelector('.slider-wrapper') as HTMLElement

let currentSlide = 0
const totalSlides = slides.length - 1 // Exclude duplicate when counting
const slideInterval = 3000 // Set the interval time

function showSlide (index: number) {
  sliderWrapper.style.transform = `translateX(-${index * 100}%)`
}

function startInterval () {
  setInterval(() => { // Remove intervalId if not needed
    currentSlide++

    if (currentSlide > totalSlides) {
      // Temporarily remove transition to avoid "jump"
      sliderWrapper.style.transition = 'none'
      sliderWrapper.style.transform = 'translateX(0%)'
      setTimeout(() => {
        currentSlide = 1 // Move to first slide (duplicate)
        sliderWrapper.style.transition = 'transform 1.1s ease-in-out' // Re-enable transition
        showSlide(currentSlide)
      }, 50) // Small delay for styles
    } else {
      sliderWrapper.style.transition = 'transform 1.1s ease-in-out' // Set smooth transition
      showSlide(currentSlide)
    }
  }, slideInterval)
}
// Start the slider
showSlide(currentSlide)
startInterval()
