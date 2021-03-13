function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

function submit() {
  var inputEmail = document.getElementById("email").value;
  var storeEmail = localStorage.getItem("email");
  // console.log(storeEmail);
  if (storeEmail == inputEmail) {
    alert("You are Successfully logged in to Calendly");
  } else {
    alert("Please enter correct credential");
  }
  window.location.href = "./user.html";
}
