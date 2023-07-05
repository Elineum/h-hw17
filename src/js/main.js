const categoriesMockAPI = [
  {
    categoryType: "electronics",
    categoryName: "Electronics",
    products: [
      {
        productName: "telephone",
        productDisc: "best nokia 5130 ever",
        productId: "telephone",
        img: "https://funart.pro/uploads/posts/2021-07/1626299649_10-funart-pro-p-kot-v-nedoumenii-zhivotnie-krasivo-foto-10.jpg",
        price: 130000,
      },
      {
        productName: "computer",
        productDisc: "Fastest PC on windows 95",
        productId: "computer",
        img: "https://funart.pro/uploads/posts/2021-07/1626299649_10-funart-pro-p-kot-v-nedoumenii-zhivotnie-krasivo-foto-10.jpg",
        price: 6500,
      },
      {
        productName: "notebook",
        productDisc: "Good and flat wooden notebook",
        productId: "notebook",
        img: "https://funart.pro/uploads/posts/2021-07/1626299649_10-funart-pro-p-kot-v-nedoumenii-zhivotnie-krasivo-foto-10.jpg",
        price: 6000,
      },
      {
        productName: "charge device",
        productDisc: "Just charge device",
        productId: "charge",
        img: "https://funart.pro/uploads/posts/2021-07/1626299649_10-funart-pro-p-kot-v-nedoumenii-zhivotnie-krasivo-foto-10.jpg",
        price: 40,
      },
    ],
  },
  {
    categoryType: "food",
    categoryName: "Food",
    products: [
      {
        productName: "fried nails",
        productDisc: "Delicious French fried nails with teriyaki sauce",
        productId: "friedNails",
        img: "https://funart.pro/uploads/posts/2021-07/1626299649_10-funart-pro-p-kot-v-nedoumenii-zhivotnie-krasivo-foto-10.jpg",
        price: 335,
      },
      {
        productName: "fresh nails",
        productDisc: "Fresh unfried nails with salt",
        productId: "freshNails",
        img: "https://funart.pro/uploads/posts/2021-07/1626299649_10-funart-pro-p-kot-v-nedoumenii-zhivotnie-krasivo-foto-10.jpg",
        price: 125,
      },
      {
        productName: "salmon",
        productDisc: "Still live fish without caviar",
        productId: "salmon",
        img: "https://funart.pro/uploads/posts/2021-07/1626299649_10-funart-pro-p-kot-v-nedoumenii-zhivotnie-krasivo-foto-10.jpg",
        price: 170,
      },
      {
        productName: "eggs",
        productDisc: "Ostrich eggs mixed with quail eggs. Guess where what!",
        productId: "eggs",
        img: "https://funart.pro/uploads/posts/2021-07/1626299649_10-funart-pro-p-kot-v-nedoumenii-zhivotnie-krasivo-foto-10.jpg",
        price: 6,
      },
    ],
  },
  {
    categoryType: "medicine",
    categoryName: "Medicine",
    products: [
      {
        productName: "Drugs",
        productDisc: "Drugs is bad!",
        productId: "drugs",
        img: "https://funart.pro/uploads/posts/2021-07/1626299649_10-funart-pro-p-kot-v-nedoumenii-zhivotnie-krasivo-foto-10.jpg",
        price: 99,
      },
      {
        productName: "syrup",
        productDisc: "Syrop is good!",
        productId: "syrup",
        img: "https://funart.pro/uploads/posts/2021-07/1626299649_10-funart-pro-p-kot-v-nedoumenii-zhivotnie-krasivo-foto-10.jpg",
        price: 5,
      },
      {
        productName: "ascorbic",
        productDisc: "Ascorbic for 9999 dollars, pure platinum ascorbic",
        productId: "ascorbic",
        img: "https://funart.pro/uploads/posts/2021-07/1626299649_10-funart-pro-p-kot-v-nedoumenii-zhivotnie-krasivo-foto-10.jpg",
        price: 9999,
      },
      {
        productName: "med. patch",
        productDisc: "Med patch if u been injured ",
        productId: "patch",
        img: "https://funart.pro/uploads/posts/2021-07/1626299649_10-funart-pro-p-kot-v-nedoumenii-zhivotnie-krasivo-foto-10.jpg",
        price: 1,
      },
    ],
  },
  {
    categoryType: "tools",
    categoryName: "Building Tools",
    products: [
      {
        productName: "common nails",
        productDisc: "Nails. Ok? Just nails!",
        productId: "nails",
        img: "https://funart.pro/uploads/posts/2021-07/1626299649_10-funart-pro-p-kot-v-nedoumenii-zhivotnie-krasivo-foto-10.jpg",
        price: 2,
      },
      {
        productName: "roulette",
        productDisc: "Krutilka.",
        productId: "roulette",
        img: "https://funart.pro/uploads/posts/2021-07/1626299649_10-funart-pro-p-kot-v-nedoumenii-zhivotnie-krasivo-foto-10.jpg",
        price: 15,
      },
      {
        productName: "hammer",
        productDisc: "The best gift for your neighbors",
        productId: "hammer",
        img: "https://funart.pro/uploads/posts/2021-07/1626299649_10-funart-pro-p-kot-v-nedoumenii-zhivotnie-krasivo-foto-10.jpg",
        price: 25,
      },
      {
        productName: "drill",
        productDisc: "The best gift for your neighbors, same as hammer",
        productId: "drill",
        img: "https://funart.pro/uploads/posts/2021-07/1626299649_10-funart-pro-p-kot-v-nedoumenii-zhivotnie-krasivo-foto-10.jpg",
        price: 5432,
      },
    ],
  },
  {
    categoryType: "sports",
    categoryName: "Sports",
    products: [
      {
        name: "tennis ball",
        productName: "tennis ball",
        productDisc: "Square tennis ball",
        productId: "ball",
        img: "https://funart.pro/uploads/posts/2021-07/1626299649_10-funart-pro-p-kot-v-nedoumenii-zhivotnie-krasivo-foto-10.jpg",
        price: 3,
      },
      {
        productName: "racket",
        productDisc: "Jelly racket",
        productId: "racket",
        img: "https://funart.pro/uploads/posts/2021-07/1626299649_10-funart-pro-p-kot-v-nedoumenii-zhivotnie-krasivo-foto-10.jpg",
        price: 670,
      },
      {
        productName: "punching bag",
        productDisc: "Висит груша нельзя скушать.",
        productId: "bag",
        img: "https://funart.pro/uploads/posts/2021-07/1626299649_10-funart-pro-p-kot-v-nedoumenii-zhivotnie-krasivo-foto-10.jpg",
        price: 3999,
      },
      {
        productName: "sport boots",
        productDisc: "So soft boots",
        productId: "boots",
        img: "https://funart.pro/uploads/posts/2021-07/1626299649_10-funart-pro-p-kot-v-nedoumenii-zhivotnie-krasivo-foto-10.jpg",
        price: 1500,
      },
    ],
  },
  {
    categoryType: "pets",
    categoryName: "Goods for animals",
    products: [
      {
        productName: "Food for cat",
        productDisc: "Best cat food for your best pet (recommend)",
        productId: "catFood",
        img: "https://funart.pro/uploads/posts/2021-07/1626299649_10-funart-pro-p-kot-v-nedoumenii-zhivotnie-krasivo-foto-10.jpg",
        price: 10,
      },
      {
        productName: "sport boots",
        productDisc: "Best dog food for your best pet",
        productId: "dogFoot",
        img: "https://funart.pro/uploads/posts/2021-07/1626299649_10-funart-pro-p-kot-v-nedoumenii-zhivotnie-krasivo-foto-10.jpg",
        price: 15,
      },
      {
        productName: "food for some people",
        productDisc: "You know who to give it to!",
        productId: "humFood",
        img: "https://funart.pro/uploads/posts/2021-07/1626299649_10-funart-pro-p-kot-v-nedoumenii-zhivotnie-krasivo-foto-10.jpg",
        price: 5,
      },
      {
        productName: "leash",
        productDisc: "For animals, but for people possible too",
        productId: "leash",
        img: "https://funart.pro/uploads/posts/2021-07/1626299649_10-funart-pro-p-kot-v-nedoumenii-zhivotnie-krasivo-foto-10.jpg",
        price: 10,
      },
    ],
  },
];

const categoriesAside = document.querySelector(".categories");
const shopPage = document.querySelector(".shop");
const buyIt = document.querySelector(".buy-it");

const createCategoriesList = (categories) => {
  const createdList = document.createElement("ul");
  createdList.className = "categories-list";
  categoriesAside.appendChild(createdList);
  categoriesAside.addEventListener("click", (event) => {
    const currElement = event.target.dataset.type;

    if (!currElement) {
      return;
    }

    createShopList(currElement);
  });

  categories.forEach((element) => {
    const createdItem = document.createElement("li");
    createdItem.className = "categories-item";
    createdItem.textContent = element.categoryName;
    createdItem.dataset.type = element.categoryType;
    createdList.appendChild(createdItem);
  });
};

createCategoriesList(categoriesMockAPI);

const createShopList = (type) => {
  const isNodeExist = shopPage.querySelector(".article-wrap");

  if (isNodeExist) {
    shopPage.removeChild(isNodeExist);
  }

  const shopWrap = document.createElement("div");
  shopWrap.classList = "article-wrap";
  shopPage.appendChild(shopWrap);
  shopWrap.addEventListener("click", createPurchaseWindow);

  categoriesMockAPI.forEach((item, index) => {
    if (item.categoryType === type) {
      shopPage.dataset.categoryInd = index;
    }
  });

  categoriesMockAPI[shopPage.dataset.categoryInd].products.forEach((item) => {
    const createArticle = document.createElement("article");
    const createDiv = document.createElement("div");
    const createImg = document.createElement("img");
    const createTitle = document.createElement("h3");

    shopWrap.appendChild(createArticle);
    createArticle.appendChild(createDiv);
    createArticle.appendChild(createTitle);
    createDiv.appendChild(createImg);

    createArticle.className = "card card-shop";
    createArticle.dataset.id = item.productId;
    createDiv.className = "card-img-wrap";
    createTitle.className = "card-title";
    createImg.src = item.img;
    createImg.alt = item.productName;
    createTitle.textContent = item.productName;
  });
};

const createPurchaseWindow = (e) => {
  const currentCard = e.target.closest(".card");
  if (!currentCard) {
    return;
  }

  const isNodeExist = buyIt.querySelector(".article-wrap");

  if (isNodeExist) {
    buyIt.removeChild(isNodeExist);
  }

  const articleWrap = document.createElement("div");
  articleWrap.classList = "article-wrap";
  buyIt.appendChild(articleWrap);

  categoriesMockAPI[shopPage.dataset.categoryInd].products.forEach((item) => {
    if (item.productId === currentCard.dataset.id) {
      const createArticle = document.createElement("article");
      const createDiv = document.createElement("div");
      const createImg = document.createElement("img");
      const createTitle = document.createElement("h3");
      const createSpan = document.createElement("span");
      const createDescription = document.createElement("p");
      const buyButton = document.createElement("button");

      articleWrap.appendChild(createArticle);
      createArticle.appendChild(createDiv);
      createArticle.appendChild(createTitle);
      createArticle.appendChild(createSpan);
      createArticle.appendChild(createDescription);
      createDiv.appendChild(createImg);
      articleWrap.appendChild(buyButton);

      createArticle.className = "card";
      createDiv.className = "card-img-wrap";
      createTitle.className = "card-title";
      createSpan.className = "card-price";
      createImg.src = item.img;
      createImg.alt = item.productName;
      createTitle.textContent = item.productName;
      createSpan.textContent = `Price: ${item.price}$`;
      createDescription.textContent = item.productDisc;
      createDescription.className = "card-description";
      buyButton.className = "buy-button active";
      buyButton.textContent = "Buy it!";
      buyButton.addEventListener("click", () => {
        alert(`You purchased ${createTitle.textContent} for ${item.price}$`);

        const shopWrap = shopPage.querySelector(".article-wrap");
        const buyWrap = buyIt.querySelector(".article-wrap");
        shopPage.removeChild(shopWrap);
        buyIt.removeChild(buyWrap);
      });
    }
  });
};
