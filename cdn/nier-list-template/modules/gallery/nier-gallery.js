/* =========================================
   NIER GALLERY MODULE JS
   Dependency: jQuery
========================================= */
$(document).ready(function() {
    // 1. Bơm HTML Khung Gallery vào Body nếu chưa có
    if ($('#nierGalleryOverlay').length === 0) {
        const galleryHTML = `
        <div id="nierGalleryOverlay">
            <i class="fas fa-times nier-gallery-close" id="nierGalleryClose"></i>
            <div class="nier-gallery-nav" id="nierGalleryPrev"><i class="fas fa-chevron-left"></i></div>
            <div class="nier-gallery-nav" id="nierGalleryNext"><i class="fas fa-chevron-right"></i></div>
            
            <div class="nier-gallery-main" id="nierGalleryMain">
                <div class="nier-gallery-img-container nier-anim-center" id="nierGalleryImgContainer">
                    <img src="" id="nierGalleryMainImg">
                </div>
            </div>

            <div class="nier-gallery-counter" id="nierGalleryCounterText">1 / 1</div>
            <div class="nier-gallery-strip" id="nierGalleryStrip"></div>
        </div>
        `;
        $('body').append(galleryHTML);
    }

    // Biến toàn cục của Gallery
    let galleryImages = []; // Mảng chứa URL ảnh
    let galleryIndex = 0;
    let isAnimating = false;

    // 2. Hàm Mở Gallery (Public API)
    // Tham số images: Mảng chứa các URL ảnh (VD: ['img1.jpg', 'img2.png'])
    // Tham số startIndex: Vị trí ảnh bắt đầu mở
    window.openNierGallery = function(images, startIndex = 0) {
        if (!images || images.length === 0) return;
        
        // Tiêu chuẩn hóa dữ liệu đầu vào (hỗ trợ cả Array String và Array Object)
        galleryImages = images.map(img => {
            if (typeof img === 'string') return img;
            return img.src || img.dataUrl || img.url; // Lấy thuộc tính linh hoạt
        });

        galleryIndex = (startIndex >= 0 && startIndex < galleryImages.length) ? startIndex : 0;
        
        $('body').addClass('nier-gallery-no-scroll');
        $('#nierGalleryOverlay').css('display', 'flex');
        
        // Timeout nhỏ để đảm bảo CSS display flex kịp nhận diện trước khi chạy animation opacity
        setTimeout(() => { $('#nierGalleryOverlay').addClass('show'); }, 10);
        
        updateGalleryStrip();
        renderGalleryImage(galleryImages[galleryIndex], 'none');
    };

    // 3. Hàm Đóng Gallery (Public API)
    window.closeNierGallery = function() {
        $('#nierGalleryOverlay').removeClass('show');
        setTimeout(() => { 
            $('#nierGalleryOverlay').css('display', 'none');
            $('body').removeClass('nier-gallery-no-scroll');
            // Dọn dẹp ảnh để giải phóng RAM
            $('#nierGalleryImgContainer img').attr('src', '');
        }, 200);
    };

    // Events Đóng Gallery
    $('#nierGalleryClose').on('click', closeNierGallery);
    $('#nierGalleryMain').on('click', function(e) {
        if (e.target.id === 'nierGalleryMain') closeNierGallery();
    });

    // 4. Các hàm Render & Animation
    function updateGalleryStrip() {
        const strip = document.getElementById('nierGalleryStrip');
        strip.innerHTML = '';
        
        $('#nierGalleryCounterText').text(`${galleryIndex + 1} / ${galleryImages.length}`);

        galleryImages.forEach((imgUrl, idx) => {
            const thumb = document.createElement('img');
            thumb.src = imgUrl;
            thumb.className = 'nier-gallery-thumb' + (idx === galleryIndex ? ' active' : '');
            thumb.onclick = () => { if (!isAnimating && idx !== galleryIndex) navigateGallery(idx); };
            strip.appendChild(thumb);
        });

        // Tự động cuộn thumbnail đang active vào giữa
        const activeThumb = strip.querySelector('.active');
        if (activeThumb) {
            activeThumb.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        }
    }

    function navigateGallery(targetIndex) {
        if (isAnimating) return;
        
        let direction = targetIndex > galleryIndex ? 'right' : 'left';
        galleryIndex = targetIndex;
        
        updateGalleryStrip();
        renderGalleryImage(galleryImages[galleryIndex], direction);
    }

    function renderGalleryImage(newSrc, direction) {
        const container = document.getElementById('nierGalleryMain');
        const oldImgCont = document.getElementById('nierGalleryImgContainer');
        
        // Nếu không có hoạt ảnh (Mở lần đầu)
        if (direction === 'none') {
            if (oldImgCont) oldImgCont.querySelector('img').src = newSrc;
            return;
        }

        isAnimating = true;
        
        // Tạo container ảnh mới bay vào
        const newImgCont = document.createElement('div');
        newImgCont.className = 'nier-gallery-img-container ' + (direction === 'right' ? 'nier-anim-in-right' : 'nier-anim-in-left');
        const img = document.createElement('img'); 
        img.src = newSrc;
        newImgCont.appendChild(img);
        container.appendChild(newImgCont);

        // Kích hoạt render reflow
        void newImgCont.offsetWidth; 

        // Áp dụng animation out cho ảnh cũ và center cho ảnh mới
        oldImgCont.className = 'nier-gallery-img-container ' + (direction === 'right' ? 'nier-anim-out-left' : 'nier-anim-out-right');
        newImgCont.className = 'nier-gallery-img-container nier-anim-center';

        // Dọn dẹp DOM sau khi anim hoàn tất
        setTimeout(() => {
            oldImgCont.remove();
            newImgCont.id = 'nierGalleryImgContainer';
            isAnimating = false;
        }, 150); // Khớp với transition css
    }

    // 5. Tương tác Nút bấm & Phím tắt
    $('#nierGalleryNext').on('click', () => {
        if (galleryIndex < galleryImages.length - 1) navigateGallery(galleryIndex + 1);
    });
    $('#nierGalleryPrev').on('click', () => {
        if (galleryIndex > 0) navigateGallery(galleryIndex - 1);
    });

    $(document).on('keydown', function(e) {
        if ($('#nierGalleryOverlay').hasClass('show')) {
            if (e.key === 'ArrowRight' && galleryIndex < galleryImages.length - 1) navigateGallery(galleryIndex + 1);
            if (e.key === 'ArrowLeft' && galleryIndex > 0) navigateGallery(galleryIndex - 1);
            if (e.key === 'Escape') closeNierGallery();
        }
    });

    // 6. Tương tác Cảm ứng (Touch / Swipe) trên Mobile
    let touchStartX = 0;
    let touchEndX = 0;
    const galleryMainElem = document.getElementById('nierGalleryMain');
    
    // Sử dụng Vanilla JS để có thể dùng option passive (chống cảnh báo Chrome và mượt hơn)
    galleryMainElem.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    }, {passive: true});
    
    galleryMainElem.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        let swipeDist = touchStartX - touchEndX;
        
        // Ngưỡng 40px để xác nhận là đang vuốt, không phải chạm nhầm
        if (swipeDist > 40 && galleryIndex < galleryImages.length - 1) {
            navigateGallery(galleryIndex + 1); // Vuốt trái -> Xem tiếp
        } else if (swipeDist < -40 && galleryIndex > 0) {
            navigateGallery(galleryIndex - 1); // Vuốt phải -> Quay lại
        }
    }, {passive: true});

});