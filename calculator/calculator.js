$(document).ready(function () {
    let windowCalculator = $('.window-calculator');
    
    // Вибираємо кнопки за допомогою класу 'calculator-item' і додаємо обробник подій
    $('.calculator-item').on('click', function() {
        let value = $(this).text();
        console.log(value);
        // Додаємо значення кнопки до вхідного поля
        if (value !== '=') {
            windowCalculator.val(windowCalculator.val() + value);
        } else {
            // Обчислюємо вираз у вхідному полі
            let result = eval(windowCalculator.val());
            windowCalculator.val(result);
        }
    });

    $('.clear-btn').on('click', function() {
        windowCalculator.val('')
    });
});

