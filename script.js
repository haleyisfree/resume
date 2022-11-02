//scroll progress bar
const progressBar = () => {
  const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;

  document.getElementsByClassName(
    "progress-bar"
  )[0].style.width = `${scrolled}%`;
};

window.onscroll = () => {
  progressBar();
};

//footer top, contact button
const topButton = document.getElementById("top-button");
topButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const contactButton = document.getElementById("contact-button");
contactButton.addEventListener("click", () => {
  window.scrollTo({ top: 5657, behavior: "smooth" });
});
