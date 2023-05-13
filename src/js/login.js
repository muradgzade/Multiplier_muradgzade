const Eye = document.querySelector(".fa-eye");
const EyeSlash = document.querySelector(".fa-eye-slash");
const Password1 = document.querySelector("#password1");

EyeSlash.addEventListener("click", () => {
  EyeSlash.style.display = "none";
  Eye.style.display = "block";

  Password1.setAttribute("type", "password");
});
Eye.addEventListener("click", () => {
  EyeSlash.style.display = "block";
  Eye.style.display = "none";
  Password1.setAttribute("type", "text");
});
