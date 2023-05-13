const firstss = document.querySelectorAll(".total00");
const secondss = document.querySelectorAll(".second00");
const Img_rotate = document.querySelectorAll(".img_rotate");

console.log(firstss);

if (firstss) {
  for (let index = 0; index < firstss.length; index++) {
    const element = firstss[index];
    element.addEventListener("click", (e) => {
      const element2 = secondss[index];
      const element3 = Img_rotate[index];
      console.log(element2);

      element2.classList.toggle("active0");
      element3.classList.toggle("active_img");
    });
  }
}

const Menu_icon = document.querySelector(".icons");
const Mobile_data = document.querySelector(".mobile_next");
const close_item = document.querySelector(".close_icon");
const open_item = document.querySelector(".fa-bars");

Menu_icon.addEventListener("click", () => {
  Mobile_data.classList.toggle("active04");

  close_item.classList.toggle("active02");

  open_item.classList.toggle("active05");
});

const Main = document.querySelectorAll(".main");
const About = document.querySelectorAll(".about");

const icon_180 = document.querySelectorAll(".rotate_0");

if (Main) {
  for (let index = 0; index < Main.length; index++) {
    const element0 = Main[index];

    element0.addEventListener("click", () => {
      const element02 = About[index];
      const element03 = icon_180[index];

      element02.classList.toggle("active02");

      element03.classList.toggle("active03");
    });
  }
}

const btn_click = document.querySelectorAll(".book_click");
const btn_section = document.querySelector(".book_section");
const Close_click = document.querySelector(".close_book");

for (let index = 0; index < btn_click.length; index++) {
  const element = btn_click[index];
  element.addEventListener("click", () => {
    console.log("click");
    btn_section.style.display = "block";
  });
}

Close_click.addEventListener("click", () => {
  btn_section.style.display = "none";
});

const FName = document.getElementById("fname");
const LName = document.getElementById("lname");
const Email = document.getElementById("email");
const Number1 = document.getElementById("number");
const Submit = document.querySelector(".submitt");

if (Submit) {
  Submit.addEventListener("click", (e) => {
    e.preventDefault();
    if (FName.value === "") {
      document.getElementById("fname_valid").innerText =
        "Please complete this required field.";
    }

    if (LName.value === "") {
      document.getElementById("lname_valid").innerText =
        "Please complete this required field.";
    }
    if (Email.value === "") {
      document.getElementById("email_valid").innerText =
        "Please complete this required field.";
    }
    if (Number1.value === "") {
      document.getElementById("number_valid").innerText =
        "Please complete this required field.";
    }
  });
}

FName.addEventListener("keyup", () => {
  if (FName.value != "") {
    document.getElementById("fname_valid").innerText = "";
  }
});
LName.addEventListener("keyup", () => {
  if (LName.value != "") {
    document.getElementById("lname_valid").innerText = "";
  }
});
Email.addEventListener("keyup", () => {
  if (Email.value != "") {
    document.getElementById("email_valid").innerText = "";
  }
});
Number1.addEventListener("keyup", () => {
  if (Number1.value != "") {
    document.getElementById("number_valid").innerText = "";
  }
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  centeredSlides: true,
  spaceBetween: 120,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
  },
});
