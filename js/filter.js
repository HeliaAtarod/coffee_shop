const btns = [
  {
    id: 1,
    name: "Coffee",
  },
  {
    id: 2,
    name: "Tea",
  },
  {
    id: 3,
    name: "Pastries",
  },
  {
    id: 4,
    name: "Snacks",
  },
  
];

const filters = [
  ...new Set(
    btns.map((btn) => {
      return btn;
    })
  ),
];

document.getElementById("btns").innerHTML = filters
  .map((btn) => {
    var { name, id } = btn;
    return (
      "<button class='fil-p' onclick='filterItems(" + id + `)'>${name}</button>`
    );
  })
  .join("");

const products = [
  {
    id: 1,
    image: "img/Mocha.jpg",
    title: "Mocha",
    price: 6.45,
    category: "Coffee",
  },
  {
    id: 1,
    image: "img/espresso.jpg",
    title: "espresso",
    price: 4.15,
    category: "Coffee",
  },
  {
    id: 1,
    image: "img/Macchiato.jpg",
    title: "Macchiato",
    price: 5.75,
    category: "Coffee",
  },
  {
    id: 1,
    image: "img/Latte.jpg",
    title: "Latte",
    price: 4.55,
    category: "Coffee",
  },
  {
    id: 1,
    image: "img/Americano.jpg",
    title: "Americano",
    price: 4.15,
    category: "Coffee",
  },

  {
    id: 2,
    image: "img/BlackTea.jpg",
    title: "Black Tea",
    price: 2.5,
    category: "Tea",
  },

  {
    id: 2,
    image: "img/GreenTea.jpg",
    title: "Green Tea",
    price: 4.5,
    category: "Tea",
  },
  {
    id: 2,
    image: "img/HerbalTea.jpg",
    title: "Herbal Tea",
    price: 6,
    category: "Tea",
  },
  {
    id: 2,
    image: "img/WhiteTea.jpg",
    title: "White Tea",
    price: 7.7,
    category: "Tea",
  },

  {
    id: 3,
    image: "img/CoffeeCake.jpg",
    title: "Coffee Cake",
    price: 4.49,
    category: "Pastries",
  },
  {
    id: 3,
    image: "img/CherryMuffins.jpg",
    title: "Cherry Muffins",
    price: 3.99,
    category: "Pastries",
  },
  {
    id: 3,
    image: "img/VanillaCupcake.jpg",
    title: "Vanilla Cupcake",
    price: 4.45,
    category: "Pastries",
  },
  {
    id: 4,
    image: "img/EggSandwich.jpg",
    title: "Egg Sandwich",
    price: 3.15,
    category: "Snacks",
  },
  {
    id: 4,
    image: "img/CinnamonBun.jpg",
    title: "Cinnamon Bun",
    price: 3.15,
    category: "Snacks",
  },
  {
    id: 4,
    image: "img/BagelButter.jpg",
    title: "Bagel Butter",
    price: 1.3,
    category: "Snacks",
  },
];

const categories = [
  ...new Set(
    products.map((item) => {
      return item;
    })
  ),
];


const filterItems = (a) => {
  const flterCategories = categories.filter(item);
  function item(value) {
    if (value.id == a) {
      return value.id;
    }
  }
  displayItem(flterCategories);
};

const displayItem = (items) => {
  document.getElementById("root").innerHTML = items
    .map((item) => {
      var { image, title, price } = item;
      return `<div class='box'>
                <h3>${title}</h3>
                <div class='img-box'>
                <img class='images' src=${image}></img>
                </div>
                <div class='bottom'>
                <h2>$ ${price}</h2>
                <button>Add to cart</button>
                </div>
                </div>`;
    })
    .join("");
};
displayItem(categories);
