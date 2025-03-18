// Получаем все необходимые элементы с помощью классов
const nameInput = document.querySelector<HTMLInputElement>('.name-input');
const emailInput = document.querySelector<HTMLInputElement>('.email-input');
const messageInput = document.querySelector<HTMLInputElement>('.message-input');

// Получаем контейнеры для добавления класса ошибки
const nameContainer = document.querySelector<HTMLDivElement>('.name-container');
const emailContainer = document.querySelector<HTMLDivElement>('.email-container');
const messageContainer = document.querySelector<HTMLDivElement>('.message-container');

// Получаем соответствующие лейблы
const nameLabel = nameContainer?.querySelector<HTMLLabelElement>('label');
const emailLabel = emailContainer?.querySelector<HTMLLabelElement>('label');
const messageLabel = messageContainer?.querySelector<HTMLLabelElement>('label');

// Пример функции валидации
function validateInputs() {
    // Проверка для имени
    if (nameInput?.value.trim() === '') {
        nameContainer?.classList.add('error');
        nameLabel?.classList.add('error');
    } else {
        nameContainer?.classList.remove('error');
        nameLabel?.classList.remove('error');
    }

    // Проверка для email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput && !emailRegex.test(emailInput.value)) {
        emailContainer?.classList.add('error');
        emailLabel?.classList.add('error');
    } {
        emailContainer?.classList.remove('error');
        emailLabel?.classList.remove('error');
    }

    // Проверка для сообщения
    if (messageInput?.value.trim() === '') {
        messageContainer?.classList.add('error');
        messageLabel?.classList.add('error');
    } else {
        messageContainer?.classList.remove('error');
        messageLabel?.classList.remove('error');
    }
}

// Привязка функции проверки к событию ввода
nameInput?.addEventListener('input', validateInputs);
emailInput?.addEventListener('input', validateInputs);
messageInput?.addEventListener('input', validateInputs);
