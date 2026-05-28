// nier-popup.js (Cập nhật)
$(document).ready(function() {
    // -----------------------------------------------------------
    // [1] HỆ THỐNG QUẢN LÝ ÂM THANH (SOUND MANAGER)
    // Tự động load âm thanh bằng JS, không cần chèn thẻ <audio> vào HTML
    // -----------------------------------------------------------
    const soundBaseUrl = "https://hoanganhdinhngoc.github.io/cdn/sounds/";
    const nierSounds = {
        'core_1': new Audio(soundBaseUrl + "core_1.ogg"),
        'core_16': new Audio(soundBaseUrl + "core_16.ogg"),
        'core_20': new Audio(soundBaseUrl + "core_20.ogg"),
        'core_32': new Audio(soundBaseUrl + "core_32.ogg"),
        'core_52': new Audio(soundBaseUrl + "core_52.ogg"),
        'core_58': new Audio(soundBaseUrl + "core_58.ogg"),
        'core_76': new Audio(soundBaseUrl + "core_76.ogg")
    };

    // Hàm public để phát âm thanh ở bất cứ đâu nếu cần
    window.playNierSound = function(soundName) {
        if (nierSounds[soundName]) {
            nierSounds[soundName].currentTime = 0;
            nierSounds[soundName].play().catch(e => console.log("Sound play prevented by browser:", e));
        }
    };

    // -----------------------------------------------------------
    // [2] TỰ ĐỘNG BƠM GIAO DIỆN POPUP VÀO BODY
    // -----------------------------------------------------------
    if ($('#customPopup').length === 0) {
        const popupHTML = `
        <div class="popup-overlay" id="popupOverlay"></div>
        <div class="popupSection" id="customPopup">
            <h2 class="popupSectionTitle" id="popupTitle">System Alert</h2>
            <div class="popup-boxContent">
                <div id="popupBody"></div>
                
                <div class="popup-button-group" id="popupButtons"></div>
            </div>
        </div>
        `;
        $('body').append(popupHTML);
    }

    // -----------------------------------------------------------
    // [3] HÀM ĐÓNG POPUP (Kèm logic xử lý âm thanh 2 trường hợp)
    // -----------------------------------------------------------
    // Tham số isOverlayClick = true: Tắt do bấm ra ngoài -> phát core_1
    // Tham số isOverlayClick = false (mặc định): Tắt bằng nút -> phát core_52
    window.closePopup = function(isOverlayClick = false) {
        if (isOverlayClick) {
            playNierSound('core_1');  // Âm thanh tắt Dialog
        } else {
            playNierSound('core_52'); // Âm thanh xác nhận/click
        }
        
        $('#popupOverlay').fadeOut(200);
        $('#customPopup').fadeOut(200);
    };

    // -----------------------------------------------------------
    // [4] HÀM HIỂN THỊ POPUP ĐỘNG
    // -----------------------------------------------------------
    /**
     * @param {string} title - Tiêu đề Popup
     * @param {string} contentHTML - Nội dung (có thể là chuỗi HTML)
     * @param {Array} buttons - Mảng cấu hình các nút bấm. Ví dụ: [{text: "OK", id: "btnOk", action: function() {...}}]
     */
    window.showPopup = function(title, contentHTML, buttons) {
        playNierSound('core_52'); // Âm thanh mở Popup
        
        $('#popupTitle').text(title);
        
        // 1. Chèn nội dung HTML (Cho phép Form, Textarea...)
        $('#popupBody').html(contentHTML);

        // 2. Tạo nút bấm linh hoạt
        $('#popupButtons').empty(); // Xóa nút cũ
        if (buttons && buttons.length > 0) {
            buttons.forEach(function(btn) {
                // Tạo element nút
                let btnEl = $('<button></button>')
                    .text(btn.text)
                    .addClass('themebutton popup-btn')
                    .attr('id', btn.id || '');
                
                // Thêm âm thanh khi Hover
                btnEl.mouseenter(function() {
                    playNierSound('core_16');
                });

                // Gán sự kiện click cho nút
                btnEl.click(function() {
                    if (typeof btn.action === 'function') {
                        btn.action(); // Chạy hàm do người dùng định nghĩa
                        // Lưu ý: Nếu trong btn.action() gọi closePopup(), nó sẽ gọi mặc định là closePopup(false) -> phát core_52
                    } else {
                        closePopup(false); // Mặc định đóng popup bằng nút
                    }
                });
                
                $('#popupButtons').append(btnEl);
            });
        } else {
            // Nếu không truyền nút nào, tạo mặc định 1 nút OK
            let btnOk = $('<button class="themebutton popup-btn">OK</button>');
            
            btnOk.mouseenter(function() { playNierSound('core_16'); });
            btnOk.click(function() { closePopup(false); });
            
            $('#popupButtons').append(btnOk);
        }

        // 3. Hiển thị
        $('#popupOverlay').fadeIn(200);
        $('#customPopup').fadeIn(200);
    };

    // -----------------------------------------------------------
    // [5] SỰ KIỆN ĐÓNG POPUP KHI CLICK RA NGOÀI OVERLAY
    // -----------------------------------------------------------
    $(document).on('click', '#popupOverlay', function() {
        closePopup(true); // Truyền tham số true để phát âm thanh core_1.ogg
    });
});