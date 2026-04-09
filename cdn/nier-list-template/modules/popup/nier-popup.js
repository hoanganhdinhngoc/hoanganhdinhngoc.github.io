// nier-popup.js
$(document).ready(function() {
    // 1. Tự động bơm HTML của Popup vào cuối thẻ body nếu chưa có
    if ($('#customPopup').length === 0) {
        const popupHTML = `
        <div class="popup-overlay" id="popupOverlay"></div>
        <div class="popupSection" id="customPopup">
            <h2 class="popupSectionTitle" id="popupTitle">System Alert</h2>
            <div class="popup-boxContent">
                <p id="popupMessage">Alert message goes here.</p>
                <button id="popupOkBtn" class="themebutton popup-btn">Ok</button>
            </div>
        </div>
        `;
        $('body').append(popupHTML);
    }

    // 2. Khai báo hàm showPopup thành biến toàn cục (Global function) để trang nào cũng gọi được
    window.showPopup = function(title, message) {
        var clickSnd = document.getElementById("click-sound");
        if(clickSnd) { clickSnd.currentTime = 0; clickSnd.play(); }
        
        $('#popupTitle').text(title);
        $('#popupMessage').text(message);
        $('#popupOverlay').fadeIn(300);
        $('#customPopup').fadeIn(300);
    };

    // 3. Sự kiện tắt popup (dùng Event Delegation để bắt sự kiện cho HTML vừa bơm vào)
    $(document).on('click', '#popupOkBtn, #popupOverlay', function() {
        var clickSnd = document.getElementById("click-sound");
        if(clickSnd) { clickSnd.currentTime = 0; clickSnd.play(); }
        
        $('#popupOverlay').fadeOut(300);
        $('#customPopup').fadeOut(300);
    });
});