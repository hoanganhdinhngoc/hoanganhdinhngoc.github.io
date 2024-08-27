const trueString = "1b2cd9a06c8da5523a1e7e1ad754aef1d96ba607aa75538b8ce6cd8ea1";

function getPart(index) {
    const parts = ["687474707", "33A2F2F77", "77772E796", "F75747562", "652E636F6D", "2F7761746", "3683F763D6", "C7867314C7", "5574559744D"];
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
