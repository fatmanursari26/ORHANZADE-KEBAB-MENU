
// MENU PRODUCTS

const products = [

    // IZGARA

    {
        name: "Adana Kebap",
        category: "grill",
        categoryName: "IZGARA",
        description: "Ustalıkla hazırlanan, közde pişirilmiş geleneksel Adana kebap.",
        price: 350,
        image: "images/adana-kebap.jpg"
    },

    {
        name: "Beyti Lokum",
        category: "grill",
        categoryName: "IZGARA",
        description: "Özel hazırlanmış etin eşsiz lezzetiyle buluşması.",
        price: 500,
        image: "images/beyti-lokum.jpg"
    },

    {
        name: "Tavuk Kanat",
        category: "grill",
        categoryName: "IZGARA",
        description: "Özel sosuyla marine edilmiş, köz ateşinde tavuk kanat.",
        price: 330,
        image: "images/tavuk-kanat.jpg"
    },

    {
        name: "Tavuk Şiş",
        category: "grill",
        categoryName: "IZGARA",
        description: "Yumuşacık tavuk parçaları, ateşte özenle pişirilir.",
        price: 250,
        image: "images/tavuk-sis.jpg"
    },

    {
        name: "Çöp Şiş",
        category: "grill",
        categoryName: "IZGARA",
        description: "Lezzetli et parçalarıyla hazırlanan geleneksel çöp şiş.",
        price: 450,
        image: "images/cop-sis.jpg"
    },

    {
        name: "Pirzola",
        category: "grill",
        categoryName: "IZGARA",
        description: "Izgarada tam kıvamında pişirilmiş özel pirzola.",
        price:500,
        image: "images/pirzola.jpg"
    },


    // DURUMLER

    {
        name: "Adana Dürüm",
        category: "wrap",
        categoryName: "DÜRÜM",
        description: "Adana kebap, taze lavaş ve eşlik eden lezzetler.",
        price: 240,
        image: "images/adana-durum.jpg"
    },

    {
        name: "Çöp Şiş Dürüm",
        category: "wrap",
        categoryName: "DÜRÜM",
        description: "Izgara çöp şişin lavaş içerisindeki nefis sunumu.",
        price: 210,
        image: "images/cop-sis-durum.jpg"
    },

    {
        name: "Tavuk Şiş Dürüm",
        category: "wrap",
        categoryName: "DÜRÜM",
        description: "Özel marine edilmiş tavuk şiş, taze lavaşla buluşuyor.",
        price: 180,
        image: "images/tavuk-sis-durum.jpg"
    }

];


// DRINKS
// İçecekleri daha sonra buraya ekleyebilirsin.

const drinks = [

    // ÖRNEK:
    // {
    //     name: "Ayran",
    //     category: "drink",
    //     categoryName: "İÇECEK",
    //     description: "Soğuk ve ferahlatıcı ayran.",
    //     price: 30,
    //     image: "images/ayran.jpg"
    // }

       {
        name: "Ayran",
        category: "drink",
        categoryName: "İÇECEK",
        description: "Geleneksel, serinletici ve bol köpüklü ayran.",
        price: 40,
        image: "images/ayran1.jpg"
    },

    {
        name: "Şalgam",
        category: "drink",
        categoryName: "İÇECEK",
        description: "Acılı veya acısız, geleneksel şalgam suyu.",
        price: 50,
        image: "images/salgam.jpg"
    },

    {
        name: "Kola",
        category: "drink",
        categoryName: "İÇECEK",
        description: "Soğuk ve ferahlatıcı kola.",
        price: 60,
        image: "images/kola.jpg"
    },

    {
        name: "Fanta",
        category: "drink",
        categoryName: "İÇECEK",
        description: "Portakal aromalı gazlı içecek.",
        price: 60,
        image: "images/fanta.jpg"
    },

    {
        name: "Su",
        category: "drink",
        categoryName: "İÇECEK",
        description: "Serinletici doğal kaynak suyu.",
        price: 20,
        image: "images/su.jpg"
    },

    {
    name: "Soda",
    category: "drink",
    categoryName: "İÇECEK",
    description: "Soğuk ve ferahlatıcı doğal mineralli soda.",
    price: 30,
    image: "images/soda.jpg"
    },

    

];


// HTML ELEMENTS

const menuGrid = document.getElementById("menu-grid");

const categoryButtons = document.querySelectorAll(".category-btn");


// ALL PRODUCTS

const allProducts = [...products, ...drinks];


// DISPLAY PRODUCTS

function displayProducts(category = "all") {

    menuGrid.innerHTML = "";

    let filteredProducts;

    if (category === "all") {

        filteredProducts = allProducts;

    } else {

        filteredProducts = allProducts.filter(product => {
            return product.category === category;
        });

    }


    // EMPTY CATEGORY

    if (filteredProducts.length === 0) {

        menuGrid.innerHTML = `
            <div class="empty-menu">

                <span>🥤</span>

                <h3>İçecek Menümüz</h3>

                <p>
                    İçecek seçeneklerimiz çok yakında burada olacak.
                </p>

            </div>
        `;

        return;

    }


    // CREATE PRODUCT CARDS

    filteredProducts.forEach(product => {

        const priceText = product.price !== null
            ? `${product.price.toLocaleString("tr-TR")} ₺`
            : "Fiyat için arayınız";

        const card = document.createElement("article");

        card.className = "menu-card";

        card.innerHTML = `

            <div class="menu-image-wrapper">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    class="menu-image"
                    loading="lazy"
                >

                <span class="menu-category-label">
                    ${product.categoryName}
                </span>

            </div>


            <div class="menu-info">

                <h3>${product.name}</h3>

                <p>${product.description}</p>

                <div class="menu-price">

                    <span>${priceText}</span>

                    <span>ORHANZADE</span>

                </div>

            </div>

        `;

        menuGrid.appendChild(card);

    });

}


// CATEGORY FILTER

categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Remove active class

        categoryButtons.forEach(btn => {
            btn.classList.remove("active");
        });


        // Add active class

        button.classList.add("active");


        // Get selected category

        const selectedCategory = button.dataset.category;


        // Display selected products

        displayProducts(selectedCategory);

    });

});


// INITIAL MENU

displayProducts();
