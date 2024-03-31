document.addEventListener("DOMContentLoaded", zamanAyarla);
function zamanAyarla() {
}
setInterval(function () {
    let zaman = new Date();
    let saat = zaman.getHours();
    let dakika = zaman.getMinutes();
    let saniye = zaman.getSeconds();
    let vakit = document.querySelector(".saat");
    vakit.textContent = saat + ":" + dakika + ":" + saniye;
}, 1000);