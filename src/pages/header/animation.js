const preloader = document.getElementById('preloader');
const content = document.getElementById('content');
const imageContainer = document.getElementById('image-container');
const animatedImage = document.getElementById('animated-image');

// Задержка в 5 секунд перед скрытием заставки
setTimeout(() => {
    preloader.classList.add('hidden'); // Добавляем класс для плавного исчезновения
    preloader.addEventListener('transitionend', () => {

// Установите таймер, чтобы добавить класс после завершения первой анимации

        // Показать приветственное сообщение через 1 секунду
        setTimeout(() => {
  

            // Показать дополнительную информацию через 2 секунды
            setTimeout(() => {
         
               
            }, 3000); // 2000 миллисекунд = 2 секунды
        }, 1000); // 1000 миллисекунд = 1 секунда
    });
}, 5000); // 5000 миллисекунд = 5 секунд

setTimeout(() => {

}, 10); // 3500 мс = 2 сек. задержки + 1.5 сек. для slideAndShrink


const container = document.querySelector('.balloon-container');
const balloonCount = 4; // Количество шариков, которые нужно создать
const balloons = [];

// Функция для создания шарика
function createBalloon(index) {
const balloon = document.createElement('div');
balloon.classList.add('balloon');
// Устанавливаем цвет шарика: красный для первой половины и синий для второй
if (index < balloonCount / 2) {
    balloon.style.background = 'linear-gradient(180deg, rgba(68, 133, 255, 0.8) 0%, #377DFF 100%)';
} else {
    balloon.style.background = 'linear-gradient(180deg, #FF8E8E 0%, #F62424 100%)';
}
// Задаем фиксированные начальные позиции для шариков
const startX = (index % 3) * 200 + 50; // Располагаем шарики в ряд
const startY = Math.floor(index / 3) * 100 + 50; // Два ряда шариков
balloon.style.left = `${startX}px`;
balloon.style.top = `${startY}px`;

// Добавляем шарик в контейнер
container.appendChild(balloon);
const velocityX = (Math.random() < 0.5 ? 1 : -1) * (Math.random() * 1 + 1);
const velocityY = (Math.random() < 0.5 ? 1 : -1) * (Math.random() * 1 + 1);
balloons.push({ balloon, velocityX, velocityY });

// Запускаем анимацию
moveBalloon(balloons[balloons.length - 1]);
}



// Функция для инициализации шариков
function initBalloon(balloonObj) {
moveBalloon(balloonObj);
}

// Функция для движения шариков
function moveBalloon(balloonObj) {
let { balloon, velocityX, velocityY } = balloonObj;
let posX = parseFloat(balloon.style.left);
let posY = parseFloat(balloon.style.top);

function animate() {
    posX += velocityX;
    posY += velocityY;

    const containerHeight = container.clientHeight; // Получите высоту контейнера
    const containerWidth = container.clientWidth; // Получите ширину контейнера
    const balloonWidth = 30; // Ширина шарика
    const balloonHeight = 30; // Высота шарика

    // Проверка столкновений с границами контейнера
    if (posX + balloonWidth > containerWidth || posX < 0) {
        velocityX *= -1; // Изменение направления по оси X
        posX = Math.max(0, posX); // Убедитесь, что не выйдем за левую границу
        posX = Math.min(containerWidth - balloonWidth, posX); // Убедитесь, что не выйдем за правую границу
    }

    // Проверяем, не вышел ли шарик за пределы контейнера по высоте
    if (posY + balloonHeight > containerHeight || posY < 0) {
        velocityY *= -1; // Изменение направления по оси Y
        posY = Math.max(0, posY); // Убедитесь, что не выйдем за верхнюю границу
        posY = Math.min(containerHeight - balloonHeight, posY); // Убедитесь, что не выйдем за нижнюю границу
    }

    // Обновляем позицию шарика
    balloon.style.left = `${posX}px`;
    balloon.style.top = `${posY}px`;

    requestAnimationFrame(animate); // Рекурсивный вызов для анимации
}

animate();
}

// Обработчик события изменения размера


// Создаем фиксированное количество шариков
for (let i = 0; i < balloonCount; i++) {
createBalloon(i);
}

const elements = document.querySelectorAll('.fade-in');

function checkVisibility() {
const windowHeight = window.innerHeight;

elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;

    // Если элемент виден на экране
    if (elementTop < windowHeight && elementTop > 0) {
        element.classList.add('visible'); // Добавляем класс для появления
    } 
});
}

// Получаем все необходимые элементы с помощью классов
const nameInput = document.querySelector('.name-input');
const emailInput = document.querySelector('.email-input');
const messageInput = document.querySelector('.message-input');

// Получаем контейнеры для добавления класса ошибки
const nameContainer = document.querySelector('.name-container');
const emailContainer = document.querySelector('.email-container');
const messageContainer = document.querySelector('.message-container');

// Получаем соответствующие лейблы
const nameLabel = nameContainer.querySelector('label');
const emailLabel = emailContainer.querySelector('label');
const messageLabel = messageContainer.querySelector('label');

// Пример функции валидации
function validateInputs() {
    // Проверка для имени
    if (nameInput.value.trim() === '') {
        nameContainer.classList.add('error');
        nameLabel.classList.add('error');
    } else {
        nameContainer.classList.remove('error');
        nameLabel.classList.remove('error');
    }

    // Проверка для email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        emailContainer.classList.add('error');
        emailLabel.classList.add('error');
    } else {
        emailContainer.classList.remove('error');
        emailLabel.classList.remove('error');
    }

    // Проверка для сообщения
    if (messageInput.value.trim() === '') {
        messageContainer.classList.add('error');
        messageLabel.classList.add('error');
    } else {
        messageContainer.classList.remove('error');
        messageLabel.classList.remove('error');
    }
}

// Привязка функции проверки к событию ввода
nameInput.addEventListener('input', validateInputs);
emailInput.addEventListener('input', validateInputs);
messageInput.addEventListener('input', validateInputs);


// Проверяем видимость элементов при прокрутке
window.addEventListener('scroll', checkVisibility);

// Выполняем проверку сразу при загрузке страницы
checkVisibility();