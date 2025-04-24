import Swiper from 'swiper'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper', {
    modules: [Pagination, Navigation, Autoplay],
    loop: true, // Зацикливание слайдов
    autoplay: {
      delay: 3000, // задержка перед переключением слайда в миллисекундах
      disableOnInteraction: false // продолжать автопрокрутку даже после взаимодействия
    },

    breakpoints: {
      1244: {
        slidesPerView: 3, // 3 слайда на больших экранах
        slidesPerGroup: 1
      },
      // Когда окно равно 768px и выше
      768: {
        slidesPerView: 2, // 2 слайда на планшете
        slidesPerGroup: 1
      },
      // Когда окно меньше 768px
      320: {
        slidesPerView: 1, // 1 слайд на мобильных устройствах
        slidesPerGroup: 1
      }
    }
  })
  swiper.update()
})
