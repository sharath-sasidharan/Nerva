//  JSON Data

const brands = [
  {
    id: 1,
    category: "watches",
    img: "assets/images/watch1.jpg",
  },
  {
    id: 2,
    category: "watches",
    img: "assets/images/watch3.jpg",
  },
  {
    id: 3,
    category: "headphones",
    img: "assets/images/headphone2.jpg",
  },
  {
    id: 4,
    category: "cameras",
    img: "assets/images/camera2.jpg",
  },
  {
    id: 5,
    category: "shoes",
    img: "assets/images/shoe1.jpg",
  },
  {
    id: 6,
    category: "watches",
    img: "assets/images/watch4.jpg",
  },
  {
    id: 7,
    category: "headphones",
    img: "assets/images/headphone1.jpg",
  },
  {
    id: 8,
    category: "headphones",
    img: "assets/images/headphone3.jpg",
  },
  {
    id: 9,
    category: "Pokemon",
    img: "assets/images/2.jpg",
  },
];

//selection of elements

const gallerySection = document.querySelector(".gallery-section");

const itemsFilterBtns = document.querySelector(".items");

// load items

window.addEventListener("DOMContentLoaded", () => {
  loadBrandItems(brands);

  // Get unique Category
  const filterBtn = brands.reduce(
    (values, item) => {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );

  const displayFilterBtns = filterBtn
    .map((category) => {
      return `
    <button class="item capitalize" data-name=${category}>
                ${category}
              </button>
    `;
    })
    .join("");

  itemsFilterBtns.innerHTML = displayFilterBtns;
  const filterBtns = document.querySelectorAll(".item");
  // filter Items

  filterBtns.forEach((categoryBtns) => {
    categoryBtns.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.name;
      const filterBrandItems = brands.filter((categoryItem) => {
        if (categoryItem.category === category) {
          return categoryItem;
        }
      });
      if (category === "all") {
        loadBrandItems(brands);
      } else {
        loadBrandItems(filterBrandItems);
      }
    });
  });
});

function loadBrandItems(item) {
  let brandItems = item.map((brandItem) => {
    return `
                <a href="#FIXME" class="image">
                <figure>
                  <img src="${brandItem.img}" alt="image" />
                </figure>
              </a>
  `;
  });
  brandItems = brandItems.join("");
  gallerySection.innerHTML = brandItems;
}

// preloader logic

function preloader() {
  document.querySelector("#preloader").style.display = "none";
}

window.addEventListener("load", function () {
  setTimeout(preloader, 2000);
});
