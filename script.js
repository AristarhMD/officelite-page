const packBtn = document.querySelector("#planTrigger");
const packList = document.querySelector("#planList");
const arrowIcon = document.querySelector("#drop-down-icon");

packBtn.addEventListener("click", () => {
  packList.classList.toggle("hidden");
  arrowIcon.classList.toggle("rotate-180");
});
