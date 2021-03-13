function logout() {
  alert("Your Successfully logout from Calendly");
}

function saved() {
  var Name = document.getElementById("name1");
  var message = document.getElementById("msg1");
  var language = document.getElementById("sel-lang");
  var Date = document.getElementById("data-id");
  var datefor = document.getElementById("data-id");
  var count = document.getElementById("country");
  var time = document.getElementById("timezone");
  localStorage.setItem("name1", Name.value);
  localStorage.setItem("msg1", message.value);
  localStorage.setItem("sel-lang", language.value);
  localStorage.setItem("data-id", Date.value);
  localStorage.setItem("data-id", datefor.value);
  localStorage.setItem("country", count.value);
  localStorage.setItem("timezone", time.value);
  alert("Your Changes has been successfully changed");
  window.location.href = "./home.html";
}

function deleteAcc() {
  localStorage.clear();
  alert("You successfull deleted your account");
}

function profile() {
  var profile = document.getElementById("Profile");
  profile.hidden = false;
}

function branding() {}
