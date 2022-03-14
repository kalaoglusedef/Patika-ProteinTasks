const name = prompt("Lütfen adınızı giriniz:", "");

if (name === null || name === "") {
  alert("Lütfen adınızı giriniz!");
  Reflect;
} else {
  document.querySelector("#userName").textContent = name;
  let dateTime = new Date();
  document.getElementById("date").innerHTML = dateTime;
}

// let dateTime = new Date();
// document.querySelector("#date").textContent = dateTime;
