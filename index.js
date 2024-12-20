$(document).ready(function () {
  $(".card").on("click", function () {
    let $this = $(this);
    let originalText = $this.data("original-text"); // Зберігаємо початковий текст в атрибуті data
    if (!originalText) {
      originalText = $this.text();
      $this.data("original-text", originalText); // Зберігаємо текст тільки один раз
    }

    if ($this.hasClass("off")) {
      $this.removeClass("off").addClass("on");
      if ($this.hasClass("goal-builder")) {
        $this.html("<span>New HTML for goal builder</span>");
        // при класі 'goal-builder' встанолюємо HTML, для кожного класу свій HTML
      } else if ($this.hasClass("calculator")) {
        $this.html("<span>New HTML for calculator</span>");
      } else if ($this.hasClass("ai")) {
        $this.html("<span>New HTML for AI</span>");
      } else if ($this.hasClass("youtube")) {
        $this.html("<span>New HTML for youtube</span>");
      }else if ($this.hasClass("wordwall")) {
        $this.html("<span>New HTML for wordwall</span>");
      }else if ($this.hasClass("finance")) {
        $this.html("<span>New HTML for finance</span>");
      }else if ($this.hasClass("quote")) {
        $this.html("<span>New HTML for quote</span>");
      } else {
        $this.html("<span>block is undefined</span>");
      }
    } else {
      $this.removeClass("on").addClass("off");
      $this.css("color", "");
      $this.html(originalText); // Відновлюємо початковий текст
    }

    if ($this.hasClass("on")) {
      $(".off").css("display", "none");
    } else {
      $(".off").css("display", "");
    }

    function goalBuilder() {}

    console.log($this.attr("class"));
  });
});

// $('.card').css('background-color', 'brown');
// $('.left-side > div > span').css('border', "2px solid green")
// $('.left-side div').css('border', "2px solid green");
// $('.left-side + .right-side').css('border', "2px solid green");
// $('.calculator ~ .card').css('border', "12px solid green");
// $("button[type = 'text']").css('color', 'red');
// $("button[type = 'button']").css('color', 'red');
// $("button[type]").css('color', 'red');
