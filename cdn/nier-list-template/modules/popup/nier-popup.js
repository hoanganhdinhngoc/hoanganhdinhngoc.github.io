// nier-popup.js (Cập nhật)
$(document).ready(function() {
    // 1. Tự động bơm "Khung" Popup vào body
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

    // Biến lưu trữ âm thanh
    const clickSnd = document.getElementById("click-sound");

    // Hàm đóng Popup (có thể gọi từ bên ngoài)
    window.closePopup = function() {
        if(clickSnd) { clickSnd.currentTime = 0; clickSnd.play(); }
        $('#popupOverlay').fadeOut(200);
        $('#customPopup').fadeOut(200);
    };

    /**
     * Hàm hiển thị Popup Động
     * @param {string} title - Tiêu đề Popup
     * @param {string} contentHTML - Nội dung (có thể là chuỗi HTML)
     * @param {Array} buttons - Mảng cấu hình các nút bấm. Ví dụ: [{text: "OK", id: "btnOk", action: function() {...}}]
     */
    window.showPopup = function(title, contentHTML, buttons) {
        if(clickSnd) { clickSnd.currentTime = 0; clickSnd.play(); }
        
        $('#popupTitle').text(title);
        
        // 1. Chèn nội dung HTML (Cho phép Form, Textarea...)
        $('#popupBody').html(contentHTML);

        // 2. Tạo nút bấm linh hoạt
        $('#popupButtons').empty(); // Xóa nút cũ
        if(buttons && buttons.length > 0) {
            buttons.forEach(function(btn) {
                // Tạo element nút
                let btnEl = $('<button></button>')
                    .text(btn.text)
                    .addClass('themebutton popup-btn')
                    .attr('id', btn.id || '');
                
                // Gán sự kiện click cho nút
                btnEl.click(function() {
                    if (typeof btn.action === 'function') {
                        btn.action(); // Chạy hàm do Sir định nghĩa
                    } else {
                        closePopup(); // Mặc định là đóng popup
                    }
                });
                
                $('#popupButtons').append(btnEl);
            });
        } else {
            // Nếu không truyền nút nào, tạo mặc định 1 nút OK
            let btnOk = $('<button class="themebutton popup-btn">OK</button>').click(closePopup);
            $('#popupButtons').append(btnOk);
        }

        // 3. Hiển thị
        $('#popupOverlay').fadeIn(200);
        $('#customPopup').fadeIn(200);
    };

    // Bấm ra ngoài Overlay thì đóng
    $(document).on('click', '#popupOverlay', closePopup);
});