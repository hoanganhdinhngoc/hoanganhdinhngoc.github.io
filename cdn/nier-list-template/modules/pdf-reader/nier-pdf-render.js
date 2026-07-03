// File: nier-pdf-render.js
document.addEventListener("DOMContentLoaded", function() {
    let readerUrl = "https://hoanganhdinhngoc.github.io/cdn/nier-list-template/modules/pdf-reader/index.html";

    // Tự động nhận diện thư mục thực tế nếu anh chạy trên domain/path khác
    if (document.currentScript && document.currentScript.src) {
        readerUrl = document.currentScript.src.replace("nier-pdf-render.js", "index.html");
    }

    // Tìm tất cả các thẻ <a> liên kết đến file .pdf
    const pdfLinks = document.querySelectorAll('a[href$=".pdf"]');

    pdfLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const pdfUrl = this.getAttribute("href");
            
            // Lấy nội dung hypertext, dọn khoảng trắng thừa
            let linkTitle = this.innerText.trim();
            
            // XỬ LÝ FALLBACK: Nếu hypertext rỗng, bóc tách lấy tên file từ link href
            if (!linkTitle) {
                linkTitle = pdfUrl.substring(pdfUrl.lastIndexOf('/') + 1);
            }

            // Tạo link điều hướng an toàn kèm tham số
            const targetUrl = `${readerUrl}?file=${encodeURIComponent(pdfUrl)}&title=${encodeURIComponent(linkTitle)}`;
            
            // Bật tab mới
            window.open(targetUrl, "_blank");
        });
    });
});