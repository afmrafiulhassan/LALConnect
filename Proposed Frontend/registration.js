const userType = document.getElementById("userType");
const lawyerFields = document.getElementById("lawyerFields");

userType.addEventListener("change", function () {
  if (this.value === "lawyer") {
    lawyerFields.classList.remove("hidden");
  } else {
    lawyerFields.classList.add("hidden");
  }
});