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

// glimpses section
document.addEventListener("DOMContentLoaded", function() {

    setRandomSizeForThumbs();

    function getRandomSize() {
        const minWidth = 100; // Minimum width
        const maxWidth = 300; // Maximum width
        const minHeight = 150; // Minimum height
        const maxHeight = 250; // Maximum height
      
        const width = Math.floor(Math.random() * (maxWidth - minWidth + 1)) + minWidth;
        const height = Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight;
      
        return { width, height };
      }

    var data = [
        {type: "img", src: "./assets/images/IMG_1369.JPG", },
        {type: "img", src: "./assets/images/IMG_1416.JPG", },
        {type: "img", src: "./assets/images/IMG_1433.JPG", },
        {type: "img", src: "./assets/images/IMG_1441.JPG",},
        {type: "img", src: "./assets/images/IMG_1517.JPG", },
        {type: "img", src: "./assets/images/IMG_1527.JPG", },
        {type: "img", src: "./assets/images/IMG_1549.JPG", },
       ];
       
       // html templates
       var tplimg = '<a href="#" class="thumb thumb-img" style="background-image: url(%src%)">'
                  + '<img src="%src%" alt="%title%"/>'
                  + '</a>';
       var tpltxt = '<a href="#" class="thumb thumb-txt">'
                  + '</a>';
       
                  function setRandomSizeForThumbs() {
                    var thumbs = document.getElementsByClassName('thumb');
                    for (var i = 0; i < thumbs.length; i++) {
                      var thumb = thumbs[i];
                      var size = getRandomSize();
                  
                      thumb.style.width = size.width + 'px';
                      thumb.style.height = size.height + 'px';
                    }
                  }

       var cnt = document.getElementById("thumbs");
       var cs = "";
       for (var i = 0; i < data.length; i++) {
        var tpl = data[i].type == "img" ? tplimg : tpltxt;
        var size = getRandomSize();
      
        // Replace strings including width and height
        
      
        for (var k in data[i]) {
          tpl = tpl.replace(eval("/%"+k+"%/g"), data[i][k]);
        }
      
        cs += tpl;
      }
       cnt.innerHTML = cs;
  });
