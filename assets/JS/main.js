const shareBtn = document.getElementById("shareBtn");
const tooltip = document.getElementById("shareTooltip");
const authorInfo = document.getElementById("authorInfo");
const shareTooltip = document.getElementById("shareTooltip");
const shareBOX = document.getElementById("shareBOX");
const cardContent = document.getElementById("cardContent");

const box = document.getElementById("box");


shareBtn.addEventListener("click", () => {
  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    authorInfo.classList.toggle("hide");
    shareTooltip.classList.toggle("active");
    shareBOX.classList.toggle("style");
    shareBtn.classList.toggle("active");
    box.classList.toggle("boxstyle");
    cardContent.classList.toggle("card-contenstyle")

  } else {
    tooltip.classList.toggle("active");
    shareBtn.classList.toggle("active");
  }
});