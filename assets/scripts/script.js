document.addEventListener('DOMContentLoaded', function () {
    var actionLink = document.getElementById('action');
    if (actionLink) {
        actionLink.addEventListener('click', function (event) {
            event.preventDefault();
            var targetElement = document.getElementById('intro');
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar_top').classList.add('fixed-top');
        document.getElementById('navbar_top').classList.add('show-nav');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        // document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar_top').classList.remove('fixed-top');
        document.getElementById('navbar_top').classList.remove('show-nav');
         // remove padding top from body
        // document.body.style.paddingTop = '0';
      } 
  });
}); 