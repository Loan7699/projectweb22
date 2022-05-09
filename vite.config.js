const { resolve } = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                about: resolve(__dirname, "aboutus.html"),
                detail: resolve(__dirname, "detail-product.html"),
                contact: resolve(__dirname, "contact.html"),
                news: resolve(__dirname, "news.html"),
                payment: resolve(__dirname, "payment.html"),
                products: resolve(__dirname, "products.html"),
            },
        },
    },
});