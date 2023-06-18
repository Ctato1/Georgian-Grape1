const hamburgerIcon = document.querySelector(".hamburger-icon");
const navigation = document.querySelector(".navigation");

const profileImg = document.querySelector(".profile img");
const profileActions = document.querySelector(".profile__actions");

let flag = true;

hamburgerIcon.addEventListener("click", () => {
  if (!flag) {
    navigation.style.display = "flex";
    flag = true;
  } else {
    navigation.style.display = "none";
    flag = false;
  }
});

let proFlag = false;
profileImg.addEventListener("click", () => {
  if (!proFlag) {
    profileActions.style.display = "flex";
    proFlag = true;
  } else {
    profileActions.style.display = "none";
    proFlag = false;
  }
});
