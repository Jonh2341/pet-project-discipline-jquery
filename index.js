$(document).ready(function () {
  $(".card").on("click", function () {
    let $this = $(this);
    let newHtml;

    if ($this.hasClass("off")) {
      $this.removeClass("off").addClass("on");
    } else {
      $this.removeClass("on").addClass("off");
    }

    if ($this.hasClass("on")) {
      $(".off").css("display", "none");
      $this.css('color', 'transparent');
      newHtml = $this.html('<b>Hey</b>');
    } else {
      $(".off").css("display", "");
      $this.css('color', '');
    }

    console.log($this.attr("class"));
  });
});

// function goalBuilder(el) {
    
// };

// $('.card').css('background-color', 'brown');
// $('.left-side > div > span').css('border', "2px solid green")
// $('.left-side div').css('border', "2px solid green");
// $('.left-side + .right-side').css('border', "2px solid green");
// $('.calculator ~ .card').css('border', "12px solid green");
// $("button[type = 'text']").css('color', 'red');
// $("button[type = 'button']").css('color', 'red');
// $("button[type]").css('color', 'red');
