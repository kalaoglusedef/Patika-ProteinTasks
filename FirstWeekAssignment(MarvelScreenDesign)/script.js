function oku() {
  fetch("https://dummyjson.com/products/1")
    .then((resp) => resp.json())
    .then((data) => {
      products.push(data);
    });
  fetch("https://dummyjson.com/products/2")
    .then((resp) => resp.json())
    .then((data) => {
      products.push(data);
    });

  localStorage.setItem("products", JSON.stringify(products));
}
oku();

function dnm() {
  fetch("https://dummyjson.com/users")
    .then((resp) => resp.json())
    .then((data) => {
      let html = "<ul>";
      data.users.map((user) => {
        html +=
          '<li onclick="getUser(' +
          user.id +
          ')" >' +
          user.firstName +
          " " +
          user.lastName +
          "</li>";
      });

      html += "</ul>";
      document.getElementById("products").innerHTML = html;
    });
}
dnm();

function getUser(id) {
  console.log(id);

  fetch("https://dummyjson.com/users/" + id)
    .then((resp) => resp.json())
    .then((user) => {
      let html = "<div>";

      html += "<strong>" + user.firstName + "</strong>";
      html += "<strong>" + user.lastName + "</strong>";
      html += "<span><b>Yaş: </b>" + user.age + "</span>";
      html += "<span><b>Email: </b>" + user.email + "</span>";
      html += "<span><b>Cinsiyet: </b>" + user.gender + "</span>";
      html += "<span><b>Telefon: </b>" + user.phone + "</span>";

      document.getElementById("users").innerHTML = html;
    });
    
}
getUser();
