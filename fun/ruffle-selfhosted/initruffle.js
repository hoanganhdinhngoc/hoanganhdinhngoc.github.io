function embedSWF(url, cont, width, height) {
    var ruffle = window.RufflePlayer.newest(),
        player = Object.assign(document.getElementById(cont).appendChild(ruffle.createPlayer()), {
            width: width,
            height: height,
            style: 'width: ' + width + 'px; height: ' + height + 'px',
        });

    player.load({ url: url });
}

// Visual Novel
function how_dark_priestess_uriki_got_her_groove_back_by_purplemantis() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/hentais/how-dark-priestess-uriki-got-her-groove-back-by-purplemantis/how-dark-priestess-uriki-got-her-groove-back-by-purplemantis.swf', 'ruffle', 1500, 800);
}



// Frank's Adventure Series - ID: franks-adventure-1
function franks_adventure_1() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/hentais/franks-adventure-1/franks-adventure-1.swf', 'ruffle', 1500, 800);
}

function franks_adventure_2() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/hentais/franks-adventure-2/franks-adventure-2.swf', 'ruffle', 1500, 800);
}

function franks_adventure_3() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/hentais/franks-adventure-3/franks-adventure-3.swf', 'ruffle', 1500, 800);
}

function franks_adventure_4() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/hentais/franks-adventure-4/franks-adventure-4.swf', 'ruffle', 1500, 800);
}

// Simgirls Series
function simgirls_5_5() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/hentais/simgirls-5.5/simgirls-5.5.swf', 'ruffle', 1500, 800);
}

function simgirls_6_6() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/hentais/simgirls-6.6/simgirls-6.6.swf', 'ruffle', 1500, 800);
}

function simgirls_7_7() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/hentais/simgirls-7.7/simgirls-7.7.swf', 'ruffle', 1500, 800);
}

function simgirls_rosebery_teaser() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/hentais/simgirls-rosebery-teaser/simgirls-rosebery-teaser.swf', 'ruffle', 1500, 800);
}

function simgirls_tomokos_story() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/hentais/simgirls-tomokos-story/706364_simgirls-vn.swf', 'ruffle', 1500, 800);
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
