const packContainer = document.querySelector("#drop-down-container");
const packBtn = document.querySelector("#planTrigger");
const labelInfo = document.querySelector(".label");
const tagInfo = document.querySelector(".tag");
const packList = document.querySelector("#planList");
const arrowIcon = document.querySelector("#drop-down-icon");
const packInput = document.querySelector("#plan");
const availablePacks = document.querySelectorAll("li");
const formEl = document.querySelector("form");

// Making btn for choose pack working
packBtn.addEventListener("click", () => {
  packList.classList.toggle("hidden");
  arrowIcon.classList.toggle("rotate-180");
});

// If click is outside of the pack-container close pack-container
document.addEventListener("click", (e) => {
  if (!packContainer.contains(e.target)) {
    packList.classList.add("hidden");
    arrowIcon.classList.remove("rotate-180");
  }
});

availablePacks.forEach((pack) => {
  pack.addEventListener("click", () => {
    const { value, label, tag } = { ...pack.dataset };
    packInput.value = value;
    labelInfo.textContent = label;
    tagInfo.textContent = tag || "";

    //   Hide list
    packList.classList.add("hidden");
    arrowIcon.classList.remove("rotate-180");
  });
});
