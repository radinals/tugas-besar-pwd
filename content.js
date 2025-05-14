
export class FlashSaleCard {

    static tambahFlashSaleCard(gambarProduk, hargaProduk) {

        const flashsaleContentContainer = document.getElementById("flashsale-scroll-container");

        const divFlashSale = document.createElement("div");

        divFlashSale.classList.add("flashsale-product-card");

        const span = document.createElement("span");
        span.id = "flashsale-blibli-product-label";
        span.innerHTML = "Pilihan Blibli";

        const img = document.createElement("img");
        img.setAttribute("src", gambarProduk);
        img.setAttribute("alt", "product");
        img.classList.add("flashsale-product-img");


        const divProductInfo = document.createElement("div");
        divProductInfo.id = "flashsale-product-info";

        const spanInfoHarga = document.createElement("span");
        spanInfoHarga.innerHTML = hargaProduk;

        const divProductStockBar = document.createElement("div");
        divProductStockBar.id = "flashsale-product-stock-bar";

        const divProductStockBarProgress = document.createElement("div");
        divProductStockBarProgress.id = "flashsale-product-stock-bar-progress";

        divProductInfo.appendChild(spanInfoHarga);

        divProductStockBar.appendChild(divProductStockBarProgress);
        divProductInfo.appendChild(divProductStockBar);

        divProductInfo.appendChild(document.createElement("div"));

        const spanBeliSekarang = document.createElement("span");
        spanBeliSekarang.innerHTML = "Beli Sekarang";

        divFlashSale.appendChild(span);
        divFlashSale.appendChild(img);
        divFlashSale.appendChild(divProductInfo);
        divFlashSale.appendChild(spanBeliSekarang);

        flashsaleContentContainer.appendChild(divFlashSale);
    }

}
