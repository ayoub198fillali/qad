//Noifier Sweet
function myNotif(type, msg, time = 1000) {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: time,
    timerProgressBar: true,
    customClass: "swal-wide",
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: type,
    title: msg,
  });
}

//
//
$(document).ready(function () {
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $(".navbar").toggleClass("nav-toggle");
  });

  $(window).on("scroll load", function () {
    $("#menu").removeClass("fa-times");
    $(".navbar").removeClass("nav-toggle");

    if (window.scrollY > 60) {
      document.querySelector("#scroll-top").classList.add("active");
    } else {
      document.querySelector("#scroll-top").classList.remove("active");
    }

    // scroll spy
    $("section").each(function () {
      let height = $(this).height();
      let offset = $(this).offset().top - 200;
      let top = $(window).scrollTop();
      let id = $(this).attr("id");

      if (top > offset && top < offset + height) {
        $(".navbar ul li a").removeClass("active");
        $(".navbar").find(`[href="#${id}"]`).addClass("active");
      }
    });
  });

  // smooth scrolling
  $('a[href*="#"]:not([href*="/"])').on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      500,
      "linear"
    );
  });

  // <!-- emailjs to mail contact form data -->
  $("#contact-form").submit(function (event) {
    emailjs.init("osB0muvAZQW21XMQq");
    // let template = "";
    // if ($(".textTitleForm").html() == "Logo") template = "logo";
    // else if ($(".textTitleForm").html() == "business card") template = "bc";
    // else if ($(".textTitleForm").html() == "Other") template = "o";
    // else template = "";

    let template = "template_design";

    emailjs.sendForm("service_afdqcx3", template, "#contact-form").then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        document.getElementById("contact-form").reset();
        myNotif("success", "Form Submitted Successfully", 1000);
      },
      function (error) {
        console.log("FAILED...", error);
        myNotif("error", "Form Submission Failed! Try Again", 1000);
      }
    );
    event.preventDefault();
  });
  // <!-- emailjs to mail contact form data -->
});

document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "visible") {
    document.title = "Qad";
    $("#favicon").attr("href", "assets/images/favicon.svg");
  } else {
    document.title = "Come Back To Qad WebSite";
    $("#favicon").attr("href", "assets/images/favhand.svg");
  }
});

// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
  strings: GlobalStringHideShow,
  loop: true,
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 500,
});
// <!-- typed js effect ends -->

async function fetchData(type = "skills") {
  let response;
  type === "skills"
    ? (response = await fetch("skills.json"))
    : (response = await fetch("./projects/projects.json"));
  const data = await response.json();
  return data;
}

function showProjects(projects) {
  let projectsContainer = document.querySelector("#work .box-container");
  let projectHTML = "";
  projects
    .slice(0, 10)
    .filter((project) => project.category != "android")
    .forEach((project) => {
      projectHTML += `
        <div class="box tilt">
      <img draggable="false" src="assets/images/projects/${project.image}.png" alt="project" />
      <img draggable="false" src="https://github.com/ayoub198fillali/porayfil/blob/main/assets/images/projects/${project.image}.png?raw=true" alt="project" />

      <div class="content">
        <div class="tag">
        <h3>${project.name}</h3>
        </div>
        <div class="desc">
          <p>${project.desc}</p>
          <div class="btns">
            <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
            <a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
          </div>
        </div>
      </div>
    </div>`;
    });
  projectsContainer.innerHTML = projectHTML;

  // <!-- tilt js effect starts -->
  VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
  });
  // <!-- tilt js effect ends -->

  /* ===== SCROLL REVEAL ANIMATION ===== */
  const srtop = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 1000,
    reset: true,
  });

  /* SCROLL PROJECTS */
  srtop.reveal(".work .box", { interval: 200 });
}

// fetchData("projects").then((data) => {
//   showProjects(data);
// });

// <!-- tilt js effect starts -->
VanillaTilt.init(document.querySelectorAll(".tilt"), {
  max: 15,
});
// <!-- tilt js effect ends -->

// pre loader start
function loader() {
  document.querySelector(".loader-container").classList.add("fade-out");
}
function fadeOut() {
  setInterval(loader, 500);
}
window.onload = fadeOut;
// pre loader end

//
//
//

// disable developer mode
// document.onkeydown = function (e) {
//     if (e.keyCode == 123) {
//         return false;
//     }
//     if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
//         return false;
//     }
//     if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
//         return false;
//     }
//     if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
//         return false;
//     }
//     if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
//         return false;
//     }
// }

// Start of Tawk.to Live Chat
var Tawk_API = Tawk_API || {},
  Tawk_LoadStart = new Date();
(function () {
  var s1 = document.createElement("script"),
    s0 = document.getElementsByTagName("script")[0];
  s1.async = true;
  s1.src = "https://embed.tawk.to/63b8a20d47425128790c1a2b/1gm4ji1k3";
  s1.charset = "UTF-8";
  s1.setAttribute("crossorigin", "*");
  s0.parentNode.insertBefore(s1, s0);
})();
// End of Tawk.to Live Chat

/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 1000,
  reset: true,
});

/* SCROLL HOME */
srtop.reveal(".home .content h3", { delay: 200 });
srtop.reveal(".home .content p", { delay: 200 });
srtop.reveal(".home .content .btn", { delay: 200 });

srtop.reveal(".home .image", { delay: 400 });
srtop.reveal(".home .linkedin", { interval: 600 });
srtop.reveal(".home .github", { interval: 800 });
srtop.reveal(".home .twitter", { interval: 1000 });
srtop.reveal(".home .telegram", { interval: 600 });
srtop.reveal(".home .instagram", { interval: 600 });
srtop.reveal(".home .dev", { interval: 600 });

/* SCROLL ABOUT */
srtop.reveal(".about .content h3", { delay: 200 });
srtop.reveal(".about .content .tag", { delay: 200 });
srtop.reveal(".about .content p", { delay: 200 });
srtop.reveal(".about .content .box-container", { delay: 200 });
srtop.reveal(".about .content .resumebtn", { delay: 200 });

/* SCROLL EXPERIENCE */
srtop.reveal(".experience .timeline", { delay: 400 });
srtop.reveal(".experience .timeline .container", { interval: 400 });

/* SCROLL CONTACT */
// srtop.reveal(".contact .DesignChoice", { delay: 300 });
// srtop.reveal(".contact .container", { delay: 300 });
srtop.reveal(".contact .container .form-group", { delay: 500 });

// ------------------------------------------------- //

// Portfolio
const images = [
  "https://github.com/ayoub198fillali/qad/blob/main/assets/images/PortfolioDesign/1.png?raw=true",
  "https://github.com/ayoub198fillali/qad/blob/main/assets/images/PortfolioDesign/2.png?raw=true",
  "https://github.com/ayoub198fillali/qad/blob/main/assets/images/PortfolioDesign/3.png?raw=true",
  "https://github.com/ayoub198fillali/qad/blob/main/assets/images/PortfolioDesign/4.png?raw=true",
  "https://github.com/ayoub198fillali/qad/blob/main/assets/images/PortfolioDesign/5.png?raw=true",
  "https://github.com/ayoub198fillali/qad/blob/main/assets/images/PortfolioDesign/6.png?raw=true",
  "https://github.com/ayoub198fillali/qad/blob/main/assets/images/PortfolioDesign/7.png?raw=true",
  "https://github.com/ayoub198fillali/qad/blob/main/assets/images/PortfolioDesign/8.png?raw=true",
  "https://github.com/ayoub198fillali/qad/blob/main/assets/images/PortfolioDesign/9.png?raw=true",
  "https://github.com/ayoub198fillali/qad/blob/main/assets/images/PortfolioDesign/10.png?raw=true",
  "https://github.com/ayoub198fillali/qad/blob/main/assets/images/PortfolioDesign/11.png?raw=true",
  "https://github.com/ayoub198fillali/qad/blob/main/assets/images/PortfolioDesign/12.png?raw=true",
  "https://github.com/ayoub198fillali/qad/blob/main/assets/images/PortfolioDesign/13.png?raw=true",
];
let currentIndex = 0;

// ------------------------------------------------- //

let Code = "";
images.forEach(function (element, idx) {
  console.log(element);
  Code += `  <div class="mySlides">
              <div class="numbertext">${idx + 1} / ${images.length}</div>
              <img src="${element}">
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
  console.log(element);
  Code += `  
          <div class="column">
            <img class="demo cursor" src="${element}" style="width:100%" onclick="currentSlide(${
    idx + 1
  })" alt="${element.split(".")[0]}">
          </div>
        `;
});
Code += ` </div>`;
$(".containerPort").html(`${Code}`);

// JS
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}
// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  // let captionText = $("#caption");
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
