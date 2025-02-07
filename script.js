document.addEventListener("DOMContentLoaded", function () {
    // Анимация плавного появления изображения phone
    const phoneImage = document.querySelector(".phone img");

    if (phoneImage) {
        phoneImage.style.opacity = "0"; // Начальное состояние (скрыто)
        phoneImage.style.transform = "translateY(100%)"; // Сдвигаем вниз

        setTimeout(() => {
            phoneImage.style.transition = "transform 1s ease-out, opacity 1s ease-out";
            phoneImage.style.transform = "translateY(0)";
            phoneImage.style.opacity = "1"; // Плавное появление

            // Убираем transform после завершения анимации
            setTimeout(() => {
                phoneImage.style.transform = "none"; // Фиксируем положение
            }, 1000);
        }, 500); // Задержка перед запуском анимации
    }

    // Лог для проверки загрузки страницы
    console.log("Скрипт загружен и работает!");
});
