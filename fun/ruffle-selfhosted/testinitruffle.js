function embedSWF(url, cont, originalWidth, originalHeight) {
    var ruffle = window.RufflePlayer.newest();
    var player = ruffle.createPlayer();
    document.getElementById(cont).appendChild(player);

    // Apply styles to make the player responsive
    player.style.width = "100vw";
    player.style.height = "100vh";
    player.style.maxWidth = originalWidth + "px";
    player.style.maxHeight = originalHeight + "px";
    player.style.padding = "10px";  // Adjust padding as needed
    
    player.load({ url: url });
}

// InitRuffle to call the correct function to load the right SWF
function initRuffle() {
    var gameElement = document.querySelector('.gamearea');
    if (gameElement) {
        var gameId = gameElement.id.replace(/-/g, '_');
        var initFunction = window[gameId];
        if (typeof initFunction === 'function') {
            initFunction();
        }
    }
}

// Function to dynamically adjust the size of the Ruffle player
function resizeRufflePlayer() {
    const rufflePlayer = document.querySelector('ruffle-player');
    if (rufflePlayer) {
        const containerWidth = rufflePlayer.parentElement.offsetWidth;
        const aspectRatio = rufflePlayer.width / rufflePlayer.height;
        
        if (window.innerWidth <= 600) {
            rufflePlayer.style.width = containerWidth + 'px';
            rufflePlayer.style.height = (containerWidth / aspectRatio) + 'px';
        } else {
            rufflePlayer.style.width = rufflePlayer.width + 'px';
            rufflePlayer.style.height = rufflePlayer.height + 'px';
        }
    }
}

// Call initRuffle to initialize Ruffle
document.addEventListener('DOMContentLoaded', (event) => {
    initRuffle();
    resizeRufflePlayer();
});

// Add event listeners for resize and load
window.addEventListener('resize', resizeRufflePlayer);
window.addEventListener('load', resizeRufflePlayer);



// Puzzle
function weapons_of_maths() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/weapons-of-maths/weapons-of-maths.swf', 'ruffle', 1500, 800);
}

// Action
function tactical_assassin_2() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/tactical-assassin-2/tactical-assassin-2.swf', 'ruffle', 1500, 800);
}

function picos_school() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/picos-school/picos-school.swf', 'ruffle', 1500, 800);
}

// Adventure
function four_hundred_years() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/400-years/400-years.swf', 'ruffle', 1500, 800);
}

// Strategy
function mcdonalds() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/strategy/mcdonalds/mcdonalds.swf', 'ruffle', 1500, 800);
}

function age_of_war_1() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/strategy/age-of-war-1/age-of-war-1.swf', 'ruffle', 1500, 800);
}

function age_of_war_2() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/strategy/age-of-war-2/age-of-war-2.swf', 'ruffle', 1500, 800);
}

// Grow games EYEZMAZE
function grow_cube() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/grow/grow-cube/grow-cube.swf', 'ruffle', 1500, 800);
}

function grow_cannon() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/grow/grow-cannon/grow-cannon.swf', 'ruffle', 1500, 800);
}

function grow_island() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/grow/grow-island/grow-Island.swf', 'ruffle', 1500, 800);
}

function grow_rpg() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/grow/grow-rpg/grow-rpg.swf', 'ruffle', 1500, 800);
}

function grow_tower() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/grow/grow-tower/grow-tower.swf', 'ruffle', 1500, 800);
}

function grow_transform() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/grow/grow-transform/grow-transform.swf', 'ruffle', 1500, 800);
}

function grow_v1() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/grow/grow-v1/grow-v1.swf', 'ruffle', 1500, 800);
}

function grow_v2() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/grow/grow-v2/grow-v2.swf', 'ruffle', 1500, 800);
}

function grow_valley() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/grow/grow-valley/grow-valley.swf', 'ruffle', 1500, 800);
}

function grow_nano_v0() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/grow/grow-nano-v0/grow-nano-v0.swf', 'ruffle', 1500, 800);
}

function grow_nano_v1() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/grow/grow-nano-v1/grow-nano-v1.swf', 'ruffle', 1500, 800);
}

function grow_nano_v2() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/grow/grow-nano-v2/grow-nano-v2.swf', 'ruffle', 1500, 800);
}

function grow_nano_v3() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/grow/grow-nano-v3/grow-nano-v3.swf', 'ruffle', 1500, 800);
}

function grow_nano_v4() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/grow/grow-nano-v4/grow-nano-v4.swf', 'ruffle', 1500, 800);
}

function chronon() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/grow/chronon/chronon.swf', 'ruffle', 1500, 800);
}

// Experience
function fly_guy() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/experience/fly-guy/flyguy.swf', 'ruffle', 1500, 800);
}

// Simulator
function businessman_simulato() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/businessman-simulato/businessman-simulato.swf', 'ruffle', 1500, 800);
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
    embedSWF('https://hoanganhdinhngoc.github.io/fun/hentais/simgirls-rosebery-teaser/simgirls-rosebery-teaser.swf', 'ruffle', 1200, 1000);
}

function simgirls_tomokos_story() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/hentais/simgirls-tomokos-story/706364_simgirls-vn.swf', 'ruffle', 1500, 800);
}