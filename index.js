$(document).ready(function () {
  // alert('to open card - doubleclick');
  $(".card").on("dblclick", function () {
    let $this = $(this);
    let originalText = $this.data("original-text");
    if (!originalText) {
      originalText = $this.text();
      $this.data("original-text", originalText);
    }

    if ($this.hasClass("off")) {
      $this.removeClass("off").addClass("on");
      if ($this.hasClass("goal-builder")) {
        $this.html(`
          <div class='wrap-card'>
            <div class='top-card'>
              <p class='answer-p-first answer-p'>goal: </p>
              <p class='answer-p-second answer-p'>deadline: </p>
              <p class='answer-p-last answer-p'>plan: </p>
            </div>
            <button class='btn-start' type='button'>start</button>
          </div>
        `);
      } else if ($this.hasClass("calculator")) {
        $this.html(`
          <div class="calculator-wrap">
            <input type="text" class="window-calculator" />
            <div class="btns-block">
              <button type="button" class="calculator-item">0</button>
              <button type="button" class="calculator-item">1</button>
              <button type="button" class="calculator-item">2</button>
              <button type="button" class="calculator-item">3</button>
              <button type="button" class="calculator-item">4</button>
              <button type="button" class="calculator-item">5</button>
              <button type="button" class="calculator-item">6</button>
              <button type="button" class="calculator-item">7</button>
              <button type="button" class="calculator-item">8</button>
              <button type="button" class="calculator-item">9</button>
              <button type="button" class="calculator-item">/</button>
              <button type="button" class="calculator-item">*</button>
              <button type="button" class="calculator-item">+</button>
              <button type="button" class="calculator-item">-</button>
              <button type="button" class="calculator-item">=</button>
            </div>
            <button type='button' class="clear-btn">clear</button>
          </div>
        `);
      } else if ($this.hasClass("ai")) {
        $this.html(`
          <div class='ai-wrap'>
            <span class='title-ai'>How to Properly Formulate Requests</span>
            <ul class='list-ai'>
                <li class='list-ai-li'>
                  Be Specific: 
                  Try to formulate your requests as specifically as possible. For example, instead of "Tell me about JavaScript" it’s better to ask "How to use the map() function in JavaScript?".
                </li>
                <li class='list-ai-li'>
                  Ask Clear and Simple Questions:
                  Avoid verbose and complex requests. For example, "How to add an element to an array in JavaScript?" is simpler and more understandable than "Tell me how to add a new element to an existing array in JavaScript".
                </li>
                <li class='list-ai-li'>
                  Add Context:
                  If your request has a specific context, add it. For example, "I need code for adding an element to an array in JavaScript for a project that works with big data".
                </li>
                <li class='list-ai-li'>
                  Ask for Examples:
                  Asking for code examples or explanations with examples can be very helpful. For example, "Can you provide an example of using the filter() function in JavaScript?".
                </li>
                <li class='list-ai-li'>
                  Specify Language or Format:
                  If you want to receive an answer in a specific format or programming language, specify this. For example, "Explain how the reduce() function works in JavaScript and provide an example in Python".
                </li>
            </ul>
            <a href="https://www.microsoft.com/en-us/microsoft-365/copilot" target="_blank" class='ai-link'>Copilot link here</a>
          </div>
        `);
      } else if ($this.hasClass("youtube")) {
        $this.html(`
            <div class='wrap-youtube'>
              <div class='card-youtube'>
                <b class='youtube-title'>How to learn anything for 20h</b>
                <a href='https://www.youtube.com/watch?v=5MgBikgcWnY' class='youtube-link'>link here</a>
              </div>
              <div class='card-youtube'>
                <b class='youtube-title'>How to Get Your Brain to Focus</b>
                <a href='https://www.youtube.com/watch?v=Hu4Yvq-g7_Y' class='youtube-link'>link here</a>
              </div>
              <div class='card-youtube'>
                <b class='youtube-title'>Think Fast. Talk Smart</b>
                <a href='https://www.youtube.com/watch?v=o3K_HbpWNpg' class='youtube-link'>link here</a>
              </div>
            </div>
          `);
      } else if ($this.hasClass("wordwall")) {
        $this.html(`
            <div class='idea-wrap'>
              <div class='idea-card'>
                <span>Pinterest - design ideas</span>
                <a class='idea-link' href='https://www.pinterest.com/'>link here</a>
              </div>
              <div class='idea-card'>
                <span>Pexels - design material</span>
                <a class='idea-link' href='https://www.pexels.com/uk-ua/'>link here</a>
              </div>
              <div class='idea-card'>
                <span>Unsplash - design material</span>
                <a class='idea-link' href='https://unsplash.com/'>link here</a>
              </div>
              <div class='idea-write-card'>
                <label for='idea-writer'>Write your ideas here:</label>
                <input type='text' id='idea-writer'/>
                <button type='button' class='idea-btn'>submit</button>
                <label class='idea-box'></label>
              </div>
            </div>
          `);
      } else if ($this.hasClass("finance")) {
        $this.html(`
            <div class='finance-wrap'>
              <div class='title-wrap'>
                <img src="img/piggy-bank.png" class='icon-finance' alt="*">
                <h1 class='finance'>Finance</h1>
                <img src="img/coins.png" class='icon-finance' alt="*">
              </div>
              <div class='paper-wrap'>
                <div class='paper-item'>
                  <span class='paper-title'>total amount of money</span>
                  <label class='box-paper amount'></label>
                  <button type='button' class='btn-paper btn-amount'>Start</button>
                </div>
                <div class='paper-item'>
                  <span class='paper-title'>costs</span>
                  <label class='box-paper cost'></label>
                  <button type='button' class='btn-paper btn-cost'>Start</button>
                </div>
                <div class='paper-item'>
                  <span class='paper-title'>earnings</span>
                  <label class='box-paper earn'></label>
                  <button type='button' class='btn-paper btn-earn'>Start</button>
                </div>
                <p class='total'>total: </p>
              </div>
            </div>
          `);
      }
    } else {
      $this.removeClass("on").addClass("off");
      $this.css("color", "");
      $this.html(originalText);
    }

    if ($this.hasClass("on")) {
      $(".off").css("display", "none");
    } else {
      $(".off").css("display", "");
    }

    console.log($this.attr("class"));

    $('.btn-start').on('click', function () {
      let goalQuestionFirst = prompt('write a goal');
      let goalQuestionSecond = prompt('write a deadline');
      let goalQuestionLast = prompt('write a plan');

      $('.answer-p-first').append(goalQuestionFirst);
      $('.answer-p-second').append(goalQuestionSecond);
      $('.answer-p-last').append(goalQuestionLast);
    });
  });

  // calculator card
  $(document).on('click', '.calculator-item', function () {
    let windowCalculator = $('.window-calculator');
    let value = $(this).text();
    console.log(value);
    if (value !== '=') {
      windowCalculator.val(windowCalculator.val() + value);
    } else {
      try {
        let result = eval(windowCalculator.val());
        windowCalculator.val(result);
      } catch (error) {
        windowCalculator.val('Error');
        setTimeout(() => {
          windowCalculator.val('');
        }, 1500);
      }
    }
  });

  $(document).on('click', '.clear-btn', function () {
    let windowCalculator = $('.window-calculator');
    windowCalculator.val('');
  });

  // idea card

  $(document).on('click', '.idea-btn', function () {
    let inputIdea = $('#idea-writer').val(); // Отримуємо значення з вхідного поля
    let ideaBox = $('.idea-box');
    let ideas = ideaBox.append(`<p>${inputIdea}</p>`);
    console.log(ideas);
  });

  // finance card
  $(document).on('click', '.btn-paper', function() {
    let questionFinance = prompt('write here your answer');
    
    // Використовуємо `this` для доступу до поточного елементу
    let paperItem = $(this).closest('.paper-item');

    // Знаходимо елемент та міняємо текст на questionFinance
    paperItem.find('.box-paper').text(questionFinance);

    // задаємо змінні за допомогою .text()
    let amount = parseFloat($('.amount').text()) || 0;
    let earn = parseFloat($('.earn').text()) || 0;
    let cost = parseFloat($('.cost').text()) || 0;

    // Обчислюємо значення totalFinance
    if (amount > 0 && earn > 0 && cost > 0) {
        let totalFinance = amount + earn - cost;
        $('.paper-wrap').find('.total').append(totalFinance);
    }
});


});
