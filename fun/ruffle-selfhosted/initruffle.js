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
function fire_boy_and_water_girl() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/fire-boy-and-water-girl/fire-boy-and-water-girl.swf', 'ruffle', 1500, 800);
}

function weapons_of_maths() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/weapons-of-maths/weapons-of-maths.swf', 'ruffle', 1500, 800);
}

function black_knight() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/black-knight/black-knight.swf', 'ruffle', 1500, 1000);
}

// Shooter
function thirteen_days_after() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/13-days-after/13-days-after.swf', 'ruffle', 1500, 800);
}

function tactical_assassin_2() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/tactical-assassin-2/tactical-assassin-2.swf', 'ruffle', 1500, 800);
}

function gold_miner() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/gold-miner/gold-miner.swf', 'ruffle', 1500, 800);
}

function thing_thing() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/thing-thing/thing-thing.swf', 'ruffle', 1500, 800);
}

function thing_thing_2() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/thing-thing/thing-thing-2.swf', 'ruffle', 1500, 800);
}

function thing_thing_3() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/thing-thing/thing-thing-3.swf', 'ruffle', 1500, 800);
}

function thing_thing_4() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/thing-thing/thing-thing-4.swf', 'ruffle', 1500, 800);
}

function thing_thing_arena() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/thing-thing/thing-thing-arena.swf', 'ruffle', 1500, 800);
}

function thing_thing_arena_2() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/thing-thing/thing-thing-arena-2.swf', 'ruffle', 1500, 800);
}

function clear_vision() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/clear-vision/clear-vision.swf', 'ruffle', 1500, 800);
}

function clear_vision_2() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/clear-vision/clear-vision-2.swf', 'ruffle', 1500, 800);
}

function clear_vision_3() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/clear-vision/clear-vision-3.swf', 'ruffle', 1500, 800);
}

function clear_vision_4() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/clear-vision/clear-vision-4.swf', 'ruffle', 1500, 800);
}

function clear_vision_5() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/clear-vision/clear-vision-5.swf', 'ruffle', 1500, 800);
}

// Adventure
function four_hundred_years() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/400-years/400-years.swf', 'ruffle', 1500, 800);
}

function seven_days_without_rain() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/7-days-without-rain/7-days-without-rain.swf', 'ruffle', 1067, 800);
}

function picos_school() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/picos-school/picos-school.swf', 'ruffle', 550, 350);
}

// Strategy
function mcdonalds() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/mcdonalds/mcdonalds.swf', 'ruffle', 1500, 800);
}

function mcdonalds_money_hack() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/mcdonalds-money-hack/mcdonalds-money-hack.swf', 'ruffle', 1500, 800);
}

function age_of_war_1() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/strategy/age-of-war-1/age-of-war-1.swf', 'ruffle', 1500, 800);
}

function age_of_war_2() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/strategy/age-of-war-2/age-of-war-2.swf', 'ruffle', 1500, 800);
}

function samurai_rebellion() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/strategy/samurai-rebellion/samurai-rebellion.swf', 'ruffle', 1500, 800);
}

function battleships() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/strategy/battleships/battleships.swf', 'ruffle', 1500, 800);
}

function starcraft_fa5() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/strategy/starcraft-fa-5/starcraft-fa-5.swf', 'ruffle', 1500, 800);
}

function incursion() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/strategy/incursion/incursion.swf', 'ruffle', 1500, 800);
}

function phage_wars_1() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/strategy/phage-wars-1/phage-wars-1.swf', 'ruffle', 1500, 800);
}

function phage_wars_2() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/strategy/phage-wars-2/phage-wars-2.swf', 'ruffle', 1500, 800);
}

function i_am_an_insane_rogue_ai() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/strategy/i-am-an-insane-rogue-ai/i-am-an-insane-rogue-ai.swf', 'ruffle', 1500, 800);
}

function castlewars() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/strategy/castlewars/castlewars.swf', 'ruffle', 1500, 800);
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
    embedSWF('https://hoanganhdinhngoc.github.io/fun/experience/fly-guy/flyguy.swf', 'ruffle', 1500, 900);
}

// Simulator
function businessman_simulato() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/businessman-simulato/businessman-simulato.swf', 'ruffle', 1500, 800);
}

// Visual Novel