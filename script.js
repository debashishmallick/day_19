

const collections = [
  {
    id: 1,
    title: "Men’s Classic Leather Jacket",
    category: "MEN",
    price: "$199",
    image:
      "https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    tag: "LIMITED EDITION",
  },
  {
    id: 2,
    title: "Women’s Elegant Evening Gown",
    category: "WOMEN",
    price: "$249",
    image:
      "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?cs=srgb&dl=pexels-anastasiya-gepp-654466-1462637.jpg&fm=jpg",
    tag: "NEW ARRIVAL",
  },
  {
    id: 3,
    title: "Men’s Streetwear Hoodie",
    category: "MEN",
    price: "$89",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcORxFMrmCtSnyY9HDzAOB81_6BtcX3UIRyA&s",
    tag: "HOT",
  },
  {
    id: 4,
    title: "Women’s Summer Floral Dress",
    category: "WOMEN",
    price: "$119",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    tag: "TRENDING",
  },
  {
    id: 5,
    title: "Stylish Leather Watch",
    category: "ACCESSORISE",
    price: "$159",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    tag: "BEST SELLER",
  },
  {
    id: 6,
    title: "Limited Edition Sneakers",
    category: "LIMITED EDITION",
    price: "$299",
    image:
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cnVubmluZyUyMHNob2VzfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000",
    tag: "EXCLUSIVE",
  },
  {
    id: 7,
    title: "Stylish Leather Watch",
    category: "ACCESSORISE",
    price: "$159",
    image: "https://images.unsplash.com/3/www.madebyvadim.com.jpg?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVucyUyMGFjY2Vzc29yaWVzfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000",
    tag: "BEST SELLER",
  },
];


const container = document.getElementById("cnt");


function displayCollection(data) {
  container.innerHTML = ""; // Clear previous content

  data.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}">
      <div>
      <div class="tag">${item.tag}</div>
      <h3>${item.title}</h3>
      <p style="color:gray;">${item.category}</p>
      <p style="color:#ff0077; font-weight:bold;">${item.price}</p>
      </div>
    `;

    container.appendChild(card);
  });
}


displayCollection(collections);


const buttons = document.querySelectorAll(".c-btn button");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
   
    const category = btn.textContent.toUpperCase();
    if (category === "ALL") {
        //  btn.className=""
      displayCollection(collections);
      btn.className="bg"
    } else {
      const filtered = collections.filter((item) => item.category === category);
    //    btn.className=""
      displayCollection(filtered);
       btn.className="bg"
    }
  });
});
