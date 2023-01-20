// Config //
let server = true;
let debug = false;
let POPULAR = [1, 3, 9, 14, 15];
////////////
let swiper;
let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header .navbar a");

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");

  section.forEach((sec) => {
    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header .navbar a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

document.querySelector("#search-icon").onclick = () => {
  document.querySelector("#search-form").classList.toggle("active");
};

document.querySelector("#close").onclick = () => {
  document.querySelector("#search-form").classList.remove("active");
};

// var swiper = new Swiper(".review-slider", {
//   spaceBetween: 20,
//   centeredSlides: true,
//   autoplay: {
//     delay: 7500,
//     disableOnInteraction: false,
//   },
//   loop: true,
//   breakpoints: {
//     0: {
//       slidesPerView: 1,
//     },
//     640: {
//       slidesPerView: 2,
//     },
//     768: {
//       slidesPerView: 2,
//     },
//     1024: {
//       slidesPerView: 3,
//     },
//   },
// });

function loader() {
  document.querySelector(".loader-container").classList.add("fade-out");
}

function fadeOut() {
  setInterval(loader, 100);
}

window.onload = fadeOut;

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
$("img").imagePopup({
  overlay: "rgba(0, 100, 0, 0.5)",

  closeButton: {
    src: "images/close.png",
    width: "40px",
    height: "40px",
  },
  imageBorder: "15px solid #ffffff",
  borderRadius: "10px",
  imageWidth: "500px",
  imageHeight: "400px",
  imageCaption: {
    exist: true,
    color: "#ffffff",
    fontSize: "40px",
  },
  open: function () {
    // console.log("opened");
  },
  close: function () {
    // console.log("closed");
  },
});

// //////////////////////////

/////////////////////////////////////////////////////////
////////////////////DATA FROM SERVER/////////////////////
/////////////////////////////////////////////////////////

// =============================== //

let ii = 0;
let description = {};
// Get Data From Server
async function fetchData() {
  if (debug) console.log("Start Fetch");
  try {
    let myData;
    if (server) {
      myData = await fetch(
        "https://raw.githubusercontent.com/ayoub198fillali/MaterialStore/main/JSON/menu.json"
      );
    } else myData = await fetch("../JSON/menu.json");

    let jsData = await myData.json();
    let myStrCode = "";
    for (const [index, element] of jsData.entries()) {
      if (debug) {
        console.log(index);
        console.log(element);
      }
      myStrCode = `<div class="box" id="menu-${index + 1}">

          <div class="image">
            <img src="images/${element.img}.jpg" alt="">
            <a id="fav-menu-${index + 1}" class="fas fa-heart"></a>
          </div>
          <div class="content">
            <div class="stars">
            `;

      for (let i = 0; i < Math.floor(element.Rate); i++) {
        myStrCode += `<i class="fas fa-star"></i>`;
      }
      if (!(Number(element.Rate) === element.Rate && element.Rate % 1 === 0))
        myStrCode += `<i class="fas fa-star-half-alt"></i> `;
      myStrCode += ` </div>
            <h3>${element.Name}</h3>
            <p>
              ${element.Description}
            </p>
            <a href="#order" titre="${element.Name}" class="btn btnCommander">Order</a>
            <span class="price">${element.Prix}DH</span>
          </div>
        </div >
        </div>`;
      $("#myMenu").append(myStrCode);
      $(`#fav-menu-${index + 1}`).on("click", function (e) {
        e.preventDefault();
        if (!$(this).hasClass("addedFav2"))
          myNotif(
            "info",
            `Le plat '${element.Name}' a été ajoutée aux favoris`,
            2000
          );
        else
          myNotif(
            "info",
            `Le plat '${element.Name}' a été supprimé des favoris`,
            2000
          );
        $(this).toggleClass("addedFav2");
        UpdateCookiesfavProduits2();
      });
      // ------------------------------------------------------------- //
      if (POPULAR.includes(index + 1)) {
        ii++;
        myStrCode = `<div class="box" id="plat-${index + 1}">
        <div class="shadow">
          <img src="images/${element.img}.jpg" alt="" />
        </div>
        <a id="fav-plat-${index + 1}" class="fas fa-heart"></a>
        <a id="eye-plat-${index + 1}" class="fas fa-eye"></a>
        <h3>${element.Name}</h3>
        <div class="stars">
          `;

        for (let i = 0; i < Math.floor(element.Rate); i++) {
          myStrCode += `<i class="fas fa-star"></i>`;
        }
        if (!(Number(element.Rate) === element.Rate && element.Rate % 1 === 0))
          myStrCode += `<i class="fas fa-star-half-alt"></i>`;
        myStrCode += ` </div>
          <span class="price">${element.Prix}DH</span>
          <a href="#order" titre="${element.Name}" class="btn btnCommander">Order</a>
        </div>`;
        $("#myPlat").append(myStrCode);
        $(`#fav-plat-${index + 1}`).on("click", function (e) {
          e.preventDefault();
          if (!$(this).hasClass("addedFav"))
            myNotif(
              "info",
              `Le plat '${element.Name}' a été ajoutée aux favoris`,
              2000
            );
          else
            myNotif(
              "info",
              `Le plat '${element.Name}' a été supprimé des favoris`,
              2000
            );
          $(this).toggleClass("addedFav");
          UpdateCookiesfavProduits1();
        });
      }
      // ------------------------------------------------------------- //
      // Add In Command Select All Plats
      // console.log($("#multipleselect"));
      $("#multipleselect").append(`<option> ${element.Name.trim()} </option>`);
    }
  } catch (reason) {
    console.log(`Reason: ${reason}`);
  } finally {
    // Get Data From Server ==================================
    try {
      let myData;
      if (server) {
        myData = await fetch(
          "https://raw.githubusercontent.com/ayoub198fillali/MaterialStore/main/JSON/PlatsSlide.json"
        );
      } else myData = await fetch("../JSON/PlatsSlide.json");

      let jsData = await myData.json();
      let myStrCode = "";
      for (const [index, element] of jsData.entries()) {
        // console.log(index);
        // console.log(element);
        myStrCode = `
        <div class="swiper-slide slide">
          <div class="content">
            <span>Our special offer ${element.num.trim()}</span>
            <h3>${element.Name.trim()}</h3>
            <p>${element.Description.trim()}</p>
            <span class="priceHome">${element.price.trim()}</span>
            <a href="#order" titre="${element.Name.trim()}" class="btn btnCommander">Order</a>
          </div>
          <div class="image">
            <img src="images/home-img-${element.num.trim()}.png" alt="" />
          </div>
        </div>        
        `;
        $("#homeSlider").append(myStrCode);
        $("#multipleselect").prepend(
          `<option> ${element.Name.trim()} </option>`
        );
      }
    } catch (reason) {
      console.log(`Reason: ${reason}`);
    } finally {
      if (debug) console.log("After Fetch");

      swiper = new Swiper(".home-slider", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 7500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        loop: true,
      });
      new MultiSelectTag("multipleselect");
      applyAllCookies();
      addCommandListner();
    }

    // if (debug) console.log("After Fetch");
    // new MultiSelectTag("multipleselect");
    // applyAllCookies();
    // addCommandListner();
  }
}
fetchData();

$("#favorite-pack").on("click", function (e) {
  e.preventDefault();
  let favProduitsPopular = getCookie("fav-plat");
  let favProduits = getCookie("fav-menu");

  myNotif(
    "info",
    `Les Produits populaires Favoris:\n ${favProduitsPopular.split("!")}
   \nLes Produits Favoris:\n ${favProduits.split("!")}    `,
    2000
  );
});

// addCommandListner
function addCommandListner() {
  $(".btnCommander")
    .off("click")
    .on("click", function () {
      // console.log(`li[data-value='${$(this).attr("titre").trim()}']`);
      $(`li[data-value='${$(this).attr("titre").trim()}']`).click();
      $(".btn-container").click();
      // $(this).attr("titre");
    });
}

// Cookies --------------------------------------------------------------

// Basic Functions To Treat Cookies
function setCookie(cname, cvalue) {
  let exdays = 2300;
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(";");
  for (const element of ca) {
    let c = element;
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function checkCookie() {
  let user = getCookie("username");
  return user != "";
}

// Update Cookies For Plat(fav-plat) after Every Clic
function UpdateCookiesfavProduits1() {
  let arrfavProduits1 = [];
  // console.log("___________________");
  $(".addedFav").each(function () {
    arrfavProduits1.push($(this).attr("id").split("-")[2]);
  });
  // console.log(arrfavProduits1.join("!"));
  setCookie("fav-plat", arrfavProduits1.join("!"));
}

// Update Cookies For Menu(fav-menu) after Every Clic
function UpdateCookiesfavProduits2() {
  let arrfavProduits2 = [];
  // console.log("___________________");
  $(".addedFav2").each(function () {
    arrfavProduits2.push($(this).attr("id").split("-")[2]);
  });
  // console.log(arrfavProduits2.join("!"));
  setCookie("fav-menu", arrfavProduits2.join("!"));
}

// Add In Favorite All Posts Belong To Cookies (for plat and menu )
function applyAllCookies() {
  let favProduitsPopular = getCookie("fav-plat");
  for (let val of favProduitsPopular.split("!")) {
    if (debug) console.log("fav-plat-" + val);
    $("#fav-plat-" + val).addClass("addedFav");
  }
  if (debug) console.log("___________________");
  let favProduits = getCookie("fav-menu");
  for (let val of favProduits.split("!")) {
    if (debug) console.log("fav-menu-" + val);
    $("#fav-menu-" + val).addClass("addedFav2");
  }
}

// Submit --------------------------------------------------------------
$("#ContactForm").on("submit", function (e) {
  e.preventDefault();
  // CMT console.log("Sended");
  let myCommand = [];
  $(".item-label").each(function () {
    myCommand.push($(this).html());
  });
  // console.log(myCommand.join(", "));
  // https://mailtrap.io/blog/javascript-send-email/
  $.getJSON("https://api.ipify.org?format=json", function (data) {
    emailjs.init("0_F9rR6oBtBbaBTkv"); //please encrypted user id for malicious attacks
    // https://dashboard.emailjs.com/admin/templates/tvk9clb
    let templateParams = {
      from_name: $("#formeNom").val(),
      commande: myCommand.join(", "),
      from_num: $("#formeNumber").val(),
      nbcommande: $("#formeCombien").val(),
      msg: $("#formeMessage").val(),
    };

    // console.log(templateParams);

    emailjs.send("service_1f6c6js", "template_9o7elp4", templateParams).then(
      function () {
        myNotif("success", "Message envoyé", 1000);
        $("#ContactForm")[0].reset();
      },
      function () {
        myNotif("error", "Message non envoyé...", 1000);
      }
    );
  });
});
