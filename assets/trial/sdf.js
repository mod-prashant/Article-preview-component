const desktopbtn = document.getElementById("desktop-share-btn");
const tooltip = document.getElementById("shareTooltip");
const mobbtn = document.getElementById("mob-share-btn");
const bottom =document.getElementById("cardFooter");
const share =document.getElementById("share");
const mobTooltip =document.getElementById("mobTooltip");

desktopbtn.addEventListener("click", () => {
  const isMobi = window.innerWidth <= 768;
  if (isMobi) {
    mobTooltip.classList.toggle("active");
    bottom.classList.toggle("hide");

  }
  else {
    tooltip.classList.toggle("active");
    desktopbtn.classList.toggle("style");
  }
});

mobbtn.addEventListener("click", () =>{  
  tooltip.classList.toggle("active");
  mobTooltip.classList.toggle("active");
  bottom.classList.toggle("hide");
});