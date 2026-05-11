const emailRamIcon = document.querySelector("#contactButtons");
const emailRam = () => {
  window.open("./contactform.html").focus;
};

emailRamIcon.addEventListener("click", () => {
  emailRam();
});
