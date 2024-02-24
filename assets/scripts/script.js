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
