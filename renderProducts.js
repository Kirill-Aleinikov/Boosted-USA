const productsContainer = document.querySelector('#products-container');

// Запускаем getProducts
getProducts();

// Асинхронная функция получения данных из файла products.json
async function getProducts() {
	// Получаем данные из products.json
    const response = await fetch('products.json');
    // Парсим данные из JSON формата в JS
    const productsArray = await response.json();
    // Запускаем ф-ю рендера (отображения товаров)
	renderProducts(productsArray);
}

    function renderProducts(productsArray) {
        productsArray.forEach(function (item) {
            const productHTML = `<div class="product" data-id="${item.id}>
                                <span class="">
                                    <img src="img/${item.imgSrc}" alt="шьп">
                                </span>
                                <span>
                                    ${item.title}
                                </span>
                                <span>
                                    $ ${item.price}
                                </span>
                                </div>
                            </div>`;
            productsContainer.insertAdjacentHTML('beforeend', productHTML);
        });
    }
    