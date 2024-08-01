
// Frank's Adventure 1 - ID: franksAdventure1:

function franksAdventure1() {
    var swfobject = {};

    swfobject.embedSWF = function (url, cont, width, height) {
        var ruffle = window.RufflePlayer.newest(),
            player = Object.assign(document.getElementById(cont).appendChild(ruffle.createPlayer()), {
                width: width,
                height: height,
                style: 'width: ' + width + 'px; height: ' + height + 'px',
            });

        player.load({ url: url });
    };

    swfobject.embedSWF('https://hoanganhdinhngoc.github.io/fun/hentais/frank-adventure-1/franks-adventure-1.swf', 'ruffle', 1500, 800);
}

// Frank's Adventure 2 - ID: franksAdventure2:

function franksAdventure2() {
    var swfobject = {};

    swfobject.embedSWF = function (url, cont, width, height) {
        var ruffle = window.RufflePlayer.newest(),
            player = Object.assign(document.getElementById(cont).appendChild(ruffle.createPlayer()), {
                width: width,
                height: height,
                style: 'width: ' + width + 'px; height: ' + height + 'px',
            });

        player.load({ url: url });
    };

    swfobject.embedSWF('https://hoanganhdinhngoc.github.io/fun/hentais/frank-adventure-2/franks-adventure-2.swf', 'ruffle', 1500, 800);
}

// Frank's Adventure 3 - ID: franksAdventure3:

function franksAdventure3() {
    var swfobject = {};

    swfobject.embedSWF = function (url, cont, width, height) {
        var ruffle = window.RufflePlayer.newest(),
            player = Object.assign(document.getElementById(cont).appendChild(ruffle.createPlayer()), {
                width: width,
                height: height,
                style: 'width: ' + width + 'px; height: ' + height + 'px',
            });

        player.load({ url: url });
    };

    swfobject.embedSWF('https://hoanganhdinhngoc.github.io/fun/hentais/frank-adventure-3/franks-adventure-3.swf', 'ruffle', 1500, 800);
}

// Frank's Adventure 4 - ID: franksAdventure4:

function franksAdventure4() {
    var swfobject = {};

    swfobject.embedSWF = function (url, cont, width, height) {
        var ruffle = window.RufflePlayer.newest(),
            player = Object.assign(document.getElementById(cont).appendChild(ruffle.createPlayer()), {
                width: width,
                height: height,
                style: 'width: ' + width + 'px; height: ' + height + 'px',
            });

        player.load({ url: url });
    };

    swfobject.embedSWF('https://hoanganhdinhngoc.github.io/fun/hentais/frank-adventure-4/franks-adventure-4.swf', 'ruffle', 1500, 800);
}





// initruffle to call the correct function to load the right swf

function initruffle() {
    var gameElement = document.querySelector('.gamearea');
    if (gameElement) {
        var gameId = gameElement.id;
        var initFunction = window[gameId];
        if (typeof initFunction === 'function') {
            initFunction();
        }
    }
}
