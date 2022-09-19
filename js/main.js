let productsList = $('.products');

function createProduct(product) {
    let productCard = createEl('div', 'card m-2  rounded ',
        `
    <img src="${product.images[0]}">
    <div class="card-body">
    <h5>${product.title}</h5> 
    <p>${product.description.substring(0,70)}...</p>
    <div class="number">
    <span> Quantity: ${product.stock}</span>
    <span> Price: $${product.price}</span>
    </div>
    <button type="button" class="${product.id}  btn btn-info rounded myBtn " id=" ">More</button>
    </div>
    `
    )
    return productCard;
}


async function getInfo() {

    const getInfoJson = await fetch('https://dummyjson.com/products').then(res => res.json());
    const getProductInfo = getInfoJson.products;

    getProductInfo.forEach((item) => {
        console.log(item);
        let test = createProduct(item);
        productsList.appendChild(test)
    });

}
getInfo();

