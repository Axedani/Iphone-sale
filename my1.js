const mainBody = document.querySelector("body");
const menuElement = document.getElementById("navbar");

mainBody.addEventListener("click", (event)=>{
    switch(event.target.id){
        case "open":
            menuElement.style.right = "0";
        break;
        case "close":
           menuElement.style.right = "-200px"; 
    }
});

const products = [
    {
        id: 1,
        name: "iphone5 S",
        image: "iphone5S",
        rating: {
            count: 1
        },
        price: 35000
    },
    {
        id: 2,
        name: "iphone6",
        image: "iphone6",
        rating: {
            count: 1
        },
        price: 46000
    },
    {
        id: 3,
        name: "iphone6 Plus",
        image: "iphone6-Plus",
        rating: {
            count: 1
        },
        price: 58000
    },
    {
        id: 4,
        name: "iphone7",
        image: "iphone7",
        rating: {
            count: 1
        },
        price: 67000
    },
    {
        id: 5,
        name: "iphone7 Plus",
        image: "iphone7-Plus",
        rating: {
            count: 1
        },
        price: 70000
    },
    {
        id: 6,
        name: "iphone8",
        image: "iphone8",
        rating: {
            count: 2
        },
        price: 83000
    },
    {
        id: 7,
        name: "iphone SE",
        image: "iphoneSE",
        rating: {
            count: 2
        },
        price: 75000
    },
    {
        id: 8,
        name: "iphone SE (2020)",
        image: "iphoneSE-2020",
        rating: {
            count: 2
        },
        price: 84000
    },
    {
        id: 9,
        name: "iphone SE (2022)",
        image: "iphoneSE-2022",
        rating: {
            count: 2
        },
        price: 90000
    },
    {
        id: 10,
        name: "iphone X",
        image: "iphoneX",
        rating: {
            count: 2
        },
        price: 105000
    },
    {
        id: 11,
        name: "iphone XR",
        image: "iphoneXR",
        rating: {
            count: 2
        },
        price: 119500
    },
    {
        id: 12,
        name: "iphone XS",
        image: "iphoneXS",
        rating: {
            count: 2
        },
        price: 130000
    },
    {
        id: 13,
        name: "iphone XS Max",
        image: "iphoneXS-Max",
        rating: {
            count: 2
        },
        price: 145900
    },
    {
        id: 14,
        name: "iphone11",
        image: "iphone11",
        rating: {
            count: 3
        },
        price: 174500
    },
    {
        id: 15,
        name: "iphone11 Pro",
        image: "iphone11-Pro",
        rating: {
            count: 3
        },
        price: 195700
    },
    {
        id: 16,
        name: "iphone11 Pro Max",
        image: "iphone11-Pro-Max",
        rating: {
            count: 3
        },
        price: 228300
    },
    {
        id: 17,
        name: "iphone12",
        image: "iphone12",
        rating: {
            count: 3
        },
        price: 257600
    },
    {
        id: 18,
        name: "iphone12 mini",
        image: "iphone12-mini",
        rating: {
            count: 3
        },
        price: 289500
    },
    {
        id: 19,
        name: "iphone12 Pro",
        image: "iphone12-Pro",
        rating: {
            count: 3
        },
        price: 318400
    },
    {
        id: 20,
        name: "iphone12 Pro Max",
        image: "iphone12-Pro-Max",
        rating: {
            count: 3
        },
        price: 347600
    },
    {
        id: 21,
        name: "iphone13",
        image: "iphone13",
        rating: {
            count: 4
        },
        price: 485000
    },
    {
        id: 22,
        name: "iphone13 mini",
        image: "iphone13-mini",
        rating: {
            count: 4
        },
        price: 598200
    },
    {
        id: 23,
        name: "iphone13 Pro",
        image: "iphone13-Pro",
        rating: {
            count: 4
        },
        price: 659800
    },
    {
        id: 24,
        name: "iphone13 Pro Max",
        image: "iphone13-Pro-Max",
        rating: {
            count: 4
        },
        price: 778400
    },
    {
        id: 25,
        name: "iphone14",
        image: "iphone14",
        rating: {
            count: 4
        },
        price: 850600
    },
    {
        id: 26,
        name: "iphone14 Plus",
        image: "iphone14-Plus",
        rating: {
            count: 4
        },
        price: 983100
    },
    {
        id: 27,
        name: "iphone14 Pro",
        image: "iphone14-Pro",
        rating: {
            count: 4
        },
        price: 1145900
    },
    {
        id: 28,
        name: "iphone14 Pro Max",
        image: "iphone14-Pro-Max",
        rating: {
            count: 4
        },
        price: 1267500
    },
    {
        id: 29,
        name: "iphone15",
        image: "iphone15",
        rating: {
            count: 5
        },
        price: 1380500
    },
    {
        id: 30,
        name: "iphone15 Plus",
        image: "iphone15-Plus",
        rating: {
            count: 5
        },
        price: 1406200
    },
    {
        id: 31,
        name: "iphone15 Pro",
        image: "iphone15-Pro",
        rating: {
            count: 5
        },
        price: 1540800
    },
    {
        id: 32,
        name: "iphone15 Pro Max",
        image: "iphone15-Pro-Max",
        rating: {
            count: 5
        },
        price: 1605700
    },
    {
        id: 33,
        name: "iphone16 Pro Max",
        image: "iphone16-Pro-Max",
        rating: {
            count: 5
        },
        price: 1870300
    }
];

const productElement = document.querySelector(".row");
let shopView = "";
products.forEach((product) => {
    shopView += `
     <div class="product-col">
           <button data-product-id = "${product.id}" class="btn"> <img src="Images/my1-${product.image}.jpg" alt="${product.name}"/></button>
            <div class="layer">
                <h3>${product.name}</h3>
            </div>
        </div>
    `;
});
productElement.innerHTML = shopView;

const imageEl = document.querySelectorAll(".btn");
imageEl.forEach((button) => {
    button.addEventListener("click", () => {
       const productId = Number(button.dataset.itemId);
       products.forEach((items)=>{
           if(productId === items.id){
               console.log(items.id);
           }
       });
    });
});





























