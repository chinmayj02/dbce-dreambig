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
  // Image data array (you can add more images here)
  var imageData = [
    { type: "img", url: "./assets/images/IMG_1369.JPG", link: "https://example.com/link1" },
    { type: "img", url: "./assets/images/IMG_1416.JPG", link: "https://example.com/link2" },
    { type: "img", url: "./assets/images/IMG_1433.JPG", link: "https://example.com/link3" },
    { type: "img", url: "./assets/images/IMG_1441.JPG", link: "https://example.com/link4" },
    { type: "img", url: "./assets/images/IMG_1517.JPG", link: "https://example.com/link5" },
    { type: "img", url: "./assets/images/IMG_1527.JPG", link: "https://example.com/link6" },
    { type: "img", url: "./assets/images/IMG_1549.JPG", link: "https://example.com/link7" },
    // Add more images similarly
  ];

  // Interval for auto-changing images (3 seconds)
  setInterval(changeImages, 3000);

  function changeImages() {
    // Get two unique random indices
    var randomIndices = getUniqueRandomIndices(2, imageData.length);

    // Create a new list item for each random index
    randomIndices.forEach(function(index) {
      var randomImage = imageData[index];
      var li = document.createElement("li");
      li.style.width = "168.5px";
      li.style.height = "168px";
      li.innerHTML = '<a target="_blank" href="' + randomImage.link + '" style="background-image: url(\'' + randomImage.url + '\'); cursor: default; width: 169px; height: 168px; top: 0px; transition: all 400ms linear 400ms; transform: rotate3d(1, 1, 0, 0deg); left: 0px;"></a>';

      // Add the new list item to the imageGrid
      var imageGrid = document.getElementById("imageGrid");
      if (imageGrid.childElementCount >= 8) {
        // Remove the first child if there are already 8 children
        imageGrid.removeChild(imageGrid.firstElementChild);
      }
      imageGrid.appendChild(li);
    });
  }

  // Function to get unique random indices
  function getUniqueRandomIndices(count, max) {
    var indices = [];
    while (indices.length < count) {
      var randomIndex = Math.floor(Math.random() * max);
      if (!indices.includes(randomIndex)) {
        indices.push(randomIndex);
      }
    }
    return indices;
  }
});