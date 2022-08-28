//control navbar collapse
$(".navbar-nav>li>a").on("click", function () {
  $(".navbar-collapse").collapse("hide");
});
//control navbar collapse
$(function () {
  $(document).click(function (event) {
    var clickover = $(event.target);
    var _opened = $(".navbar-collapse").hasClass(
      "navbar-collapse collapse show"
    );
    if (_opened === true && !clickover.hasClass("navbar-toggler")) {
      $("button.navbar-toggler").click();
    }
  });
});

$("#myModal").on("shown.bs.modal", function () {
  $("#myInput").trigger("focus");
});

/*
function id_src(e) {
  var img_caption = document.getElementById("catption1").innerHTML;
  document.getElementById("img_caption_model").innerHTML = img_caption;
  document.getElementById("img_model").src = e.src;
}

function id_src2(e) {
  var img_caption = document.getElementById("catption2").innerHTML;
  document.getElementById("img_caption_model").innerHTML = img_caption;
  document.getElementById("img_model").src = e.src;
}
*/

function showImageModal(src, caption){
  document.getElementById("img_caption_model").innerHTML = caption;
  document.getElementById("img_model").src = src;
}



// cart clicks button
var clicks = 0;
function cartbutton(){
  clicks += 1;
  document.getElementById("increasecart").innerHTML = clicks;
}





///reveal/
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);


