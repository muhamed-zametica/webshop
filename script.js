
var products = [

    { title: 'Samsung S6', img: 'https://gizchina.it/wp-content/uploads/2015/07/samsung-galaxy-s6-specifiche-400x400.jpg', price: 650, description: 'Versions: G920F (Europe); G920FD (Philippines, Pakistan, Russia, Ukraine); G920FQ (Turkey); G920I (LATAM, Singapore, India, Australia, New Zealand); G920A (AT&T); G920T (T-Mobile); G920S/K (Korea); G9200 (Hong Kong); G9208 (China); G9208/SS (China); G9209 (China)' },
    { title: 'Samsung S21', img: 'https://gizchina.it/wp-content/uploads/2015/07/samsung-galaxy-s6-specifiche-400x400.jpg', price: 650, description: 'Versions: G920F (Europe); G920FD (Philippines, Pakistan, Russia, Ukraine); G920FQ (Turkey); G920I (LATAM, Singapore, India, Australia, New Zealand); G920A (AT&T); G920T (T-Mobile); G920S/K (Korea); G9200 (Hong Kong); G9208 (China); G9208/SS (China); G9209 (China)' },
    { title: 'Nokia', img: 'https://gizchina.it/wp-content/uploads/2015/07/samsung-galaxy-s6-specifiche-400x400.jpg', price: 650, description: 'Versions: G920F (Europe); G920FD (Philippines, Pakistan, Russia, Ukraine); G920FQ (Turkey); G920I (LATAM, Singapore, India, Australia, New Zealand); G920A (AT&T); G920T (T-Mobile); G920S/K (Korea); G9200 (Hong Kong); G9208 (China); G9208/SS (China); G9209 (China)' },
    { title: 'Iphone', img: 'https://gizchina.it/wp-content/uploads/2015/07/samsung-galaxy-s6-specifiche-400x400.jpg', price: 650, description: 'Versions: G920F (Europe); G920FD (Philippines, Pakistan, Russia, Ukraine); G920FQ (Turkey); G920I (LATAM, Singapore, India, Australia, New Zealand); G920A (AT&T); G920T (T-Mobile); G920S/K (Korea); G9200 (Hong Kong); G9208 (China); G9208/SS (China); G9209 (China)' },

];

var cart = []

function displayProducts(p_products) {
    var main = document.getElementById("main");
    main.innerHTML = "";

    for (var i = 0; i < p_products.length; i++) {
        var element = p_products[i];
        var card = document.createElement("div");
        card.classList.add("card");
        var title = document.createElement("h2");
        title.innerHTML = element.title;
        var img = document.createElement("img");
        img.src = element.img;
        var price = document.createElement("h1");
        price.innerHTML = element.price + 'KM';
        var buyBtn = document.createElement("button");
        buyBtn.innerHTML = 'Buy';
        buyBtn.classList.add("buyBtn");
        buyBtn.id = i;
        buyBtn.addEventListener("click", function (e) {
            var check = confirm("Jeste li sigurni?");
            if (check) {
                cart.push(products[e.target.id])
                products.splice(e.target.id, 1)
                displayProducts(products);
            }
        })
        var detailsBtn = document.createElement("button");
        detailsBtn.innerHTML = 'Details';
        detailsBtn.classList.add("detailsBtn");
        card.appendChild(title);
        card.appendChild(img);
        card.appendChild(price);
        card.appendChild(buyBtn);
        card.appendChild(detailsBtn);
        main.appendChild(card);
    }
}

displayProducts(products);

function searchProducts(e) {
    var filtered = [];
    for (var prod of products) {
        if (prod.title.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1) {
            filtered.push(prod)

        }
    }
    displayProducts(filtered);
}

function showCart() {
    displayProducts(cart)
}

function backToHome() {
    displayProducts(products)
}