document.addEventListener('DOMContentLoaded', () => {
  // Функция для движения шариков
  function moveBalloon (container: HTMLElement, balloon: HTMLElement) {
    let velocityX = (Math.random() < 0.5 ? 1 : -1) * (Math.random() + 1) // Случайная скорость по X
    let velocityY = (Math.random() < 0.5 ? 1 : -1) * (Math.random() + 1) // Случайная скорость по Y
    const position = { x: Math.random() * (container.clientWidth - 30), y: Math.random() * (container.clientHeight - 30) }

    function animate () {
      position.x += velocityX
      position.y += velocityY
      const containerHeight = container!.clientHeight // Non-null assertion
      const containerWidth = container!.clientWidth
      const balloonSize = 30 // Размер шарика

      // Проверка столкновения с границами контейнера
      if (position.x + balloonSize > container.clientWidth || position.x < 0) {
        velocityX *= -1 // Изменить направление по оси X
        position.x = Math.max(0, Math.min(containerWidth - balloonSize, position.x)) // Ensure we don't go out of bounds
      }
      if (position.y + balloonSize > container.clientHeight || position.y < 0) {
        velocityY *= -1 // Изменить направление по оси Y
        position.y = Math.max(0, Math.min(containerHeight - balloonSize, position.y)) // Ensure we don't go out of bounds
      }

      // Обновление позиции шарика
      balloon.style.transform = `translate(${position.x}px, ${position.y}px)`

      requestAnimationFrame(animate) // Рекурсивный вызов для анимации
    }

    animate()
  }

  // Получаем все контейнеры с классом balloon-container
  const containers = document.querySelectorAll('.balloon-container') as NodeListOf<HTMLElement>

  containers.forEach(container => {
    // Проверка наличия хотя бы одного элемента с классом balloon в текущем контейнере
    const balloons = container.getElementsByClassName('balloon')

    if (balloons.length > 0) { // Если есть хотя бы один шарик
      const balloonCount = balloons.length // Число шариков на основе имеющихся элементов

      // Создание фиксированного количества шариков на основе имеющихся элементов
      for (let i = 0; i < balloonCount; i++) {
        moveBalloon(container, balloons[i] as HTMLElement) // Теперь мы передаем текущий контейнер
      }
    } else {
      console.warn('No balloons found in the balloon container.')
    }
  })
})
