const trueString = "a93f04ccdc40a3563fbb37421da2183df4f7a941";

function getPart(index) {
    const parts = ["68747470733A2F2F6", "4726976652E676F6F", "676C652E636F6D2F6", "4726976652F752F30", "2F666F6C646572732", "F314D4B676645526C", "71383630392D58477", "A474A4B686D2D6872", "33534C5256504E30"];

return parts[index];
}

function stringToHex(str) {
    let hex = '';
    for (let i = 0; i < str.length; i++) {
        hex += str.charCodeAt(i).toString(16).padStart(2, '0');
    }
    return hex;
}

function hexToString(hex) {
    let str = '';
    for (let i = 0; i < hex.length; i += 2) {
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    }
    return str;
}

function alterHash(input) {
    let hash = 0n;
    for (let i = 0; i < input.length; i++) {
        const char = BigInt(input.charCodeAt(i));
        hash = (hash << 5n) - hash + char;
    }
    let hexString = hash.toString(16).replace(/^-/, '');
    return hexString;
}

function checkPassword(event) {
    if (!event || event.key === "Enter") {
        const cheatCodeInput = document.getElementById("cheatCodeInput").value;
        const trueDeString = stringToHex(cheatCodeInput);
        const afterHash = alterHash(trueDeString);
        const trueDeTarget = hexToString(trueTarget);

        if (afterHash === trueString) {
            fadeOutContent(function () {
                window.location.href = trueDeTarget;
            });
        } else {
            $('#error-message').text("Incorrect password. Try again.");
            showError();
        }
    }
}

const trueTarget = getPart(0) + getPart(1) + getPart(2) + getPart(3) + getPart(4) + getPart(5) + getPart(6) + getPart(7) + getPart(8);
