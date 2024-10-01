import { saleProductsData } from "./data.js";
import { skinCareData } from "./data.js";



const productsRow = document.getElementById('products-row');

saleProductsData.forEach(product => {
    const productCard = `
        <div class=" col-sm-12  col-md-6  col-lg-3 my-3">
            <div class="product-card">
                <img src="${product.img}" alt="${product.title}" class="product-image" />
                <h4>${product.title}</h4>
                <span>${product.brand}</span>
                <p>${product.price} AZN</p>
                <div class="product-status">
                ${product.bestSeller ? '<p class="best-seller">Çox Satılan </p>' : ''}
                ${product.freeDelivery ? '<p class="free-delivery">Pulsuz Çatdırılma</p>' : ''}
                
                </div>
                <button class="btn my-btn">Səbətə əlavə et<i class="fa-solid fa-bag-shopping"></i></button>
            </div>
        </div>
    `;

    productsRow.innerHTML += productCard;
});


const skinCareRow = document.querySelector('.skin-care .row');

skinCareData.forEach(item => {
    const skinCareCard = `
        <div class="col-lg-4 col-md-6 mb-4">
            <div class=" card my-card">
                <img src="${item.img}" alt="${item.title}" class="card-img-top" />
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text">${item.desc}</p>
                    <button class="btn my-btn">Kəşf et</button> 
                </div>
            </div>
        </div>
    `;

    skinCareRow.innerHTML += skinCareCard;
});
