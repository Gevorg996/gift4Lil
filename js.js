let song = new Audio("song.mp3");
document.querySelector(".gift-button").addEventListener("click", function() {
    song.play();
    const body = document.body;
    const container = document.querySelector(".container");

    // Затемняем фон
    body.style.background = "black";

    // Добавляем класс для исчезновения коробки и кнопки через 2 секунды
    setTimeout(function() {
        container.classList.add("fade-out");

        // Создаем элемент для отображения ocean.gif
        const oceanImage = document.createElement("img");
        oceanImage.src = "ocean.gif";
        oceanImage.style.position = "fixed";
        oceanImage.style.top = "0";
        oceanImage.style.left = "0";
        oceanImage.style.width = "100%";
        oceanImage.style.height = "100%";
        oceanImage.style.zIndex = "999"; // Set a high z-index to make it appear on top

        // Добавляем картинку на страницу
        document.body.appendChild(oceanImage);

        // Создаем элемент для отображения yacht.png
        const yachtImage = document.createElement("img");
        yachtImage.src = "yacht.png";
        yachtImage.style.position = "fixed";
        yachtImage.style.top = "60%";
        yachtImage.style.left = "50%";
        yachtImage.style.width = "100%";
        yachtImage.style.transform = "translate(-50%, -50%)"; // Center the image
        yachtImage.style.zIndex = "1000"; // Set a higher z-index to ensure it appears on top of the ocean image
        yachtImage.className = "floating-yacht"; // Добавляем класс "floating-yacht"
        yachtImage.style.animation = "yachtFloat 6s infinite"; // Применяем анимацию

        // Добавляем картинку на страницу
        document.body.appendChild(yachtImage);

        // Создаем элемент для отображения dance.gif
        const danceImage = document.createElement("img");
        danceImage.src = "dance.gif";
        // Создаем элемент для отображения dance.gif
        danceImage.className = "dance-image"; // Добавляем класс "dance-image"
// Остальной код остается без изменений

        danceImage.style.position = "fixed";
        danceImage.style.top = "45%"; // Position it below the yacht.png image
        danceImage.style.left = "50%";
        danceImage.style.transform = "translate(-50%, -50%)"; // Center the image
        danceImage.style.zIndex = "1000"; // Set a higher z-index to ensure it appears on top of the ocean image

                // Добавляем картинку на страницу
        document.body.appendChild(danceImage);
    }, 2000);
});
