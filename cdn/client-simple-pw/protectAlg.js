(function() {

    // Hashed string:
    const _0xEncryptedData = "U2FsdGVkX19b9nOxCmTw8df8CvE4vy7hOAoww4fWYC5q84cDlYxi9mdoJZMTsnGlTpkt6ailicNhhsBoPLOj6shyMkgdiTJethP+uix09ug="; 
    const MAGIC_STRING = "[NIER-VERIFIED]";

    window.checkPassword = function(event) {
        if (event && event.type === 'keypress' && event.key !== 'Enter') return;

        const userPass = document.getElementById('cheatCodeInput').value;
        if (!userPass) return;

        try {
            // Giải mã bằng mật khẩu
            const bytes = CryptoJS.AES.decrypt(_0xEncryptedData, userPass);
            const decryptedContent = bytes.toString(CryptoJS.enc.Utf8);

            // Kiểm tra dấu hiệu
            if (decryptedContent.startsWith(MAGIC_STRING)) {
                // Tách URL thật
                const targetUrl = decryptedContent.replace(MAGIC_STRING, "");
                
                // Chuyển hướng
                if (typeof fadeOutContent === 'function') {
                    fadeOutContent(function() {
                        window.location.replace(targetUrl);
                    });
                } else {
                    window.location.replace(targetUrl);
                }
            } else {
                showError();
            }
        } catch (e) {
            showError();
        }
    };

    (function(){
        const _check = setInterval(() => {
            if(typeof CryptoJS === 'undefined') return;
            clearInterval(_check);
        }, 100);
        setInterval(function() {
            (function(a){return(function(a){return(Function('debugger')())}(a))}(0));
        }, 1000);
    })();
})();