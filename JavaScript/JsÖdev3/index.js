var menuItems = [
  {
    category: "korea",
    foodImg: "img/tteokbokki.jpg",
    foodName: "Tteokbokki",
    foodPay: "10.99",
    menuText: "Spicy rice cakes, serving with fish cake.",
  },
  {
    category: "korea",
    foodImg: "img/bibimbap.jpg",
    foodName: "Bibimbap",
    foodPay: "8.99",
    menuText: "Boiling vegetables, serving with special hot sauce",
  },
  {
    category: "china",
    foodImg: "img/yangzhoufr.jpg",
    foodName: "Yangzhou Fried Rice",
    foodPay: "12.99",
    menuText: "Yangzhou style fried rice, serving with bean and pickles",
  },
  {
    category: "korea",
    foodImg: "img/jajangmyeon.jpg",
    foodName: "Jajangmyeon",
    foodPay: "15.99",
    menuText: "Black bean sauce noodle, serving with green onion",
  },

  {
    category: "japan",
    foodImg: "img/dorayaki.jpg",
    foodName: "Doroyaki",
    foodPay: "3.99",
    menuText: "Red bean paste dessert, serving with honey.",
  },
  {
    category: "japan",
    foodImg: "img/ramen.jpg",
    foodName: "Chicken Ramen",
    foodPay: "7.99",
    menuText:
      "Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg.",
  },
  {
    category: "china",
    foodImg: "img/dandan.jpg",
    foodName: "Dan Dan Mian",
    foodPay: "5.99",
    menuText: "Dan dan noodle, serving with green onion",
  },
  {
    category: "japan",
    foodImg: "img/onigiri.jpg",
    foodName: "Onigiri",
    foodPay: "11.99",
    menuText: "Rice Sandwich, serving with soy sauce",
  },
  {
    category: "china",
    foodImg: "img/mayishang.jpg",
    foodName: "Ma Yi Shang Shu",
    foodPay: "14.99",
    menuText: "Hot pepper sauce noodle, serving with soy bean and onion",
  },
];

const menu = document.querySelector(".menu");

const allBtn = document.querySelector("#all");
allBtn.addEventListener("click", function () {
  addMenu(menuItems);
});

const koreaBtn = document.querySelector("#korea");
koreaBtn.addEventListener("click", function () {
  addMenu(menuItems.filter((x) => x.category === "korea"));
});

const japanBtn = document.querySelector("#japan");
japanBtn.addEventListener("click", function () {
  addMenu(menuItems.filter((x) => x.category === "japan"));
});

const chinaBtn = document.querySelector("#china");
chinaBtn.addEventListener("click", function () {
  addMenu(menuItems.filter((x) => x.category === "china"));
});

addMenu(menuItems);

function addMenu(param) {
  menu.innerHTML = "";

  param.forEach((x) => {
    menu.innerHTML += `<div class="col-md-6">
      <div class="menuItem">
        <img
          class="foodImg"
          src="${x.foodImg}"
         
        />
        <div class="comment">
          <div class="name">
            <p class="foodName fs-4">${x.foodName}</p>
            <p class="foodPay fs-4">${x.foodPay}</p>
          </div>
          <div class="menuText">
          ${x.menuText}
          </div>
        </div>
      </div>
      </div>`;
  });
}
