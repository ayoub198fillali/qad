// ------------------------------------------------- //
let slideIndex = 1;
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
function plusSlides(n) {
  showSlides((slideIndex += n));
}
// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

const url =
  "https://api.github.com/repos/ayoub198fillali/qad/contents/assets/images/PortfolioDesign";
let dataNumber;
fetch(url)
  .then((response) => response.json())
  .then((images) => {
    // ------------------------------------------------- //
    let Code = "";
    images.forEach(function (element, idx) {
      Code += `   <div class="mySlides">
                    <div class="numbertext">${idx + 1} / ${images.length}</div>
                    <img src="${element.download_url}">
                  </div>`;
    });

    Code += `  
          <!-- Next and previous buttons -->
            <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
            <a class="next" onclick="plusSlides(1)">&#10095;</a>
    
            <!-- Image text -->
            <div class="caption-container">
              <p id="caption">Our Portfolio</p>
            </div>
            <div class="row">
            `;

    images.forEach(function (element, idx) {
      Code += `  
              <div class="column">
                <img class="demo cursor" src="${
                  element.download_url
                }" style="width:100%" onclick="currentSlide(${
        idx + 1
      })" alt="${0}">
              </div>
            `;
    });
    Code += ` </div>`;
    $(".containerPort").html(`${Code}`);
  })
  .then(() => {
    // JS
    showSlides(slideIndex);
  })
  .catch((error) => console.error(error));
//
