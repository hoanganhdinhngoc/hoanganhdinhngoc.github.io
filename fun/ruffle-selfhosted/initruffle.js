
// Frank's Adventure Series - ID: franksAdventure1:

function franks_adventure_1() {
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

    swfobject.embedSWF('https://hoanganhdinhngoc.github.io/fun/hentais/franks-adventure-1/franks-adventure-1.swf', 'ruffle', 1500, 800);
}



function franks_adventure_2() {
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

    swfobject.embedSWF('https://hoanganhdinhngoc.github.io/fun/hentais/franks-adventure-2/franks-adventure-2.swf', 'ruffle', 1500, 800);
}



function franks_adventure_3() {
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

    swfobject.embedSWF('https://hoanganhdinhngoc.github.io/fun/hentais/franks-adventure-3/franks-adventure-3.swf', 'ruffle', 1500, 800);
}



function franks_adventure_4() {
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

    swfobject.embedSWF('https://hoanganhdinhngoc.github.io/fun/hentais/franks-adventure-4/franks-adventure-4.swf', 'ruffle', 1500, 800);
}







// initruffle to call the correct function to load the right swf

function initruffle() {
    var gameElement = document.querySelector('.gamearea');
    if (gameElement) {
        var gameId = gameElement.id.replace(/-/g, '_');
        var initFunction = window[gameId];
        if (typeof initFunction === 'function') {
            initFunction();
        }
    }
}
