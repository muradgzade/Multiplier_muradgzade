const Mini1 = document.querySelectorAll(".mini_js");
const Big_Img = document.querySelectorAll(".big_img0");

if (Mini1) {
  for (let index = 0; index < Mini1.length; index++) {
    const element10 = Mini1[index];

    element10.addEventListener("click", () => {
      console.log("kkkk");
      const element20 = Big_Img[index];

      element20.style.opacity = "1";

      if (Big_Img[index] == Big_Img[0]) {
        Big_Img[1].style.opacity = "0";
        Big_Img[2].style.opacity = "0";
        Big_Img[3].style.opacity = "0";
      }
      if (Big_Img[index] == Big_Img[1]) {
        Big_Img[0].style.opacity = "0";
        Big_Img[2].style.opacity = "0";
        Big_Img[3].style.opacity = "0";
      }
      if (Big_Img[index] == Big_Img[2]) {
        Big_Img[0].style.opacity = "0";
        Big_Img[1].style.opacity = "0";
        Big_Img[3].style.opacity = "0";
      }

      if (Big_Img[index] == Big_Img[3]) {
        Big_Img[0].style.opacity = "0";
        Big_Img[1].style.opacity = "0";
        Big_Img[2].style.opacity = "0";
      }
    });
  }
}

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  loop: true,
  autoplay: true,
  spaceBetween: 10,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 43,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

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
  for (let index1 = 0; index1 < Main.length; index1++) {
    const element0 = Main[index1];

    element0.addEventListener("click", () => {
      const element02 = About[index1];
      const element03 = icon_180[index1];

      element02.classList.toggle("active02");

      element03.classList.toggle("active03");
    });
  }
}

const btn_click = document.querySelectorAll(".book_click");
const btn_section = document.querySelector(".book_section");
const Close_click = document.querySelector(".close_book");

for (let index2 = 0; index2 < btn_click.length; index2++) {
  const element = btn_click[index2];
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

const One_flag = document.querySelectorAll(".one_flag");
const Img_text = document.querySelectorAll(".img_text");
const Flag_img1 = document.querySelectorAll(".flag_img1");

if (One_flag) {
  for (let index3 = 0; index3 < One_flag.length; index3++) {
    const element101 = One_flag[index3];

    element101.addEventListener("click", () => {
      const element201 = Img_text[index3];
      const element301 = Flag_img1[index3];

      element201.style.opacity = "1";
      element301.style.opacity = "1";

      if (Img_text[index3] == Img_text[0]) {
        Img_text[1].style.opacity = "0";
        Img_text[2].style.opacity = "0";
      }
      if (Img_text[index3] == Img_text[1]) {
        Img_text[0].style.opacity = "0";
        Img_text[2].style.opacity = "0";
      }
      if (Img_text[index3] == Img_text[2]) {
        Img_text[0].style.opacity = "0";
        Img_text[1].style.opacity = "0";
      }

      if (Flag_img1[index3] == Flag_img1[0]) {
        Flag_img1[1].style.opacity = "0.2";
        Flag_img1[2].style.opacity = "0.2";
      }
      if (Flag_img1[index3] == Flag_img1[1]) {
        Flag_img1[0].style.opacity = "0.2";
        Flag_img1[2].style.opacity = "0.2";
      }
      if (Flag_img1[index3] == Flag_img1[2]) {
        Flag_img1[0].style.opacity = "0.2";
        Flag_img1[1].style.opacity = "0.2";
      }
    });
  }
}

const Left_above = document.querySelector(".left_above");
const Right_above = document.querySelector(".right_above");
const Left_bottom = document.querySelector(".left_bottom");
const Right_bottom = document.querySelector(".right_bottom");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);

  console.log(scrollY);
  if (window.scrollY > 7400 && window.scrollY < 8450) {
    Left_above.classList.add("active020");
    Left_bottom.classList.add("active020");
    Right_above.classList.add("active020");
    Right_bottom.classList.add("active020");
  } else {
    Left_above.classList.remove("active020");
    Left_bottom.classList.remove("active020");
    Right_above.classList.remove("active020");
    Right_bottom.classList.remove("active020");
  }
});

var swiper = new Swiper(".mySwiper2", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
  },
});
