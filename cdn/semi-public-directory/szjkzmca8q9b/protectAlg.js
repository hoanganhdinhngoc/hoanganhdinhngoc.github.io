(function() {

    const _0xEncryptedData = "U2FsdGVkX1/Rfr60bY/t41DVfoQGkruHQSC7pFG/sVe0QG39xT8lDm+03KDChR6lTHy3eGwQ1/jj/aoX/ZoepJXqtPZ534o/sPBxM0TWbyk1oCJuRXrMf1ntMkgbRtiAIYGGNdu3jTO9fh3sjxtdiA=="; 
    const MAGIC_STRING = "[NIER-VERIFIED]";

    window.checkPassword = function(event) {
        if (event && event.type === 'keypress' && event.key !== 'Enter') return;

        const userPass = document.getElementById('cheatCodeInput').value;
        if (!userPass) return;

        try {
            const bytes = CryptoJS.AES.decrypt(_0xEncryptedData, userPass);
            const decryptedContent = bytes.toString(CryptoJS.enc.Utf8);

            if (decryptedContent.startsWith(MAGIC_STRING)) {
                const targetUrl = decryptedContent.replace(MAGIC_STRING, "");
                
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

    // Bẫy bảo mật
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