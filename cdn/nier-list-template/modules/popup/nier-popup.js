// nier-popup.js (Cập nhật - Tắt tự động âm thanh để chống xung đột)
$(document).ready(function() {
    // -----------------------------------------------------------
    // [1] HỆ THỐNG QUẢN LÝ ÂM THANH (PRELOAD ONLY)
    // Tự động nạp sẵn vào RAM, nhưng KHÔNG tự phát để tránh xung đột
    // -----------------------------------------------------------
    const soundBaseUrl = "https://hoanganhdinhngoc.github.io/cdn/sounds/";
    window.nierSounds = {
        'core_1': new Audio(soundBaseUrl + "core_1.ogg"),
        'core_16': new Audio(soundBaseUrl + "core_16.ogg"),
        'core_20': new Audio(soundBaseUrl + "core_20.ogg"),
        'core_32': new Audio(soundBaseUrl + "core_32.ogg"),
        'core_52': new Audio(soundBaseUrl + "core_52.ogg"),
        'core_58': new Audio(soundBaseUrl + "core_58.ogg"),
        'core_76': new Audio(soundBaseUrl + "core_76.ogg")
    };

    // Hàm Public để trang đích có thể chủ động gọi âm thanh khi cần
    window.playNierSound = function(soundName) {
        if (window.nierSounds[soundName]) {
            window.nierSounds[soundName].currentTime = 0;
            window.nierSounds[soundName].play().catch(e => console.log("Sound play prevented by browser:", e));
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
    // [3] HÀM ĐÓNG POPUP
    // -----------------------------------------------------------
    window.closePopup = function(isOverlayClick = false) {
        // Chỉ phát âm thanh duy nhất 1 trường hợp: Bấm ra ngoài Overlay
        if (isOverlayClick === true) {
            playNierSound('core_1');
        }
        
        $('#popupOverlay').fadeOut(200);
        $('#customPopup').fadeOut(200);
    };

    // -----------------------------------------------------------
    // [4] HÀM HIỂN THỊ POPUP ĐỘNG
    // -----------------------------------------------------------
    window.showPopup = function(title, contentHTML, buttons) {
        $('#popupTitle').text(title);
        $('#popupBody').html(contentHTML);
        $('#popupButtons').empty();

        if (buttons && buttons.length > 0) {
            buttons.forEach(function(btn) {
                let btnEl = $('<button></button>')
                    .text(btn.text)
                    .addClass('themebutton popup-btn')
                    .attr('id', btn.id || '');
                
                // Gán sự kiện click cho nút (Không tự phát âm thanh)
                btnEl.click(function() {
                    if (typeof btn.action === 'function') {
                        btn.action(); 
                    } else {
                        closePopup(false); 
                    }
                });
                
                $('#popupButtons').append(btnEl);
            });
        } else {
            // Nút OK mặc định
            let btnOk = $('<button class="themebutton popup-btn">OK</button>');
            btnOk.click(function() { closePopup(false); });
            $('#popupButtons').append(btnOk);
        }

        $('#popupOverlay').fadeIn(200);
        $('#customPopup').fadeIn(200);
    };

    // -----------------------------------------------------------
    // [5] SỰ KIỆN ĐÓNG POPUP KHI CLICK RA NGOÀI OVERLAY
    // -----------------------------------------------------------
    $(document).on('click', '#popupOverlay', function() {
        closePopup(true); // Truyền true để nó phát tiếng core_1.ogg
    });
});