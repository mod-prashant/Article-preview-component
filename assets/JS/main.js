const shareBtn = document.getElementById("shareBtn");
const tooltip = document.getElementById("shareTooltip");

shareBtn.addEventListener("click", () => {
  shareBtn.classList.toggle("active");
  tooltip.classList.toggle("active");
});

/*
const shareBtn = document.getElementById("shareBtn");
const tooltip = document.getElementById("shareTooltip");
const authorInfo = document.getElementById("authorInfo");
const shareTooltip = document.getElementById("shareTooltip");

// Toggle based on screen width
shareBtn.addEventListener("click", () => {
  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    authorInfo.classList.toggle("hidden");
    shareTooltip.classList.toggle("active");
  } else {
    tooltip.classList.toggle("active");
    shareBtn.classList.toggle("active");
  }
});
*/