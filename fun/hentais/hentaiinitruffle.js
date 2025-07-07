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
    embedSWF('https://hoanganhdinhngoc.github.io/fun/hentais/simgirls-rosebery-teaser/simgirls-rosebery-teaser.swf', 'ruffle', 1000, 820);
}

function simgirls_tomokos_story() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/hentais/simgirls-tomokos-story/706364_simgirls-vn.swf', 'ruffle', 1500, 800);
}

// New hentai

function fuck_for_luck_1() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/hentais/archive/fuck-for-luck-1.swf', 'ruffle', 1500, 800);
}

function fuck_for_luck_2() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/hentais/archive/fuck-for-luck-2.swf', 'ruffle', 1500, 800);
}

function meet_and_fuck_jessica_fuck_machine() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/hentais/archive/meet-and-fuck-jessica-fuck-machine.swf', 'ruffle', 900, 1500);
}

function meet_and_fuck_dance_school() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/hentais/archive/meet-and-fuck-dance-school.swf', 'ruffle', 1000, 800);
}

function meet_and_fuck_denise_milani() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/hentais/archive/meet-and-fuck-denise-milani.swf', 'ruffle', 1000, 820);
}

function meet_and_fuck_detective_rpg() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/hentais/archive/meet-and-fuck-detective-rpg.swf', 'ruffle', 1000, 820);
}

function meet_and_fuck_first_date_sex() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/hentais/archive/meet-and-fuck-first-date-sex.swf', 'ruffle', 1500, 800);
}

function meet_and_fuck_hawaiian_vacation() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/hentais/archive/meet-and-fuck-hawaiian-vacation.swf', 'ruffle', 1500, 800);
}

function meet_and_fuck_intensive_therapy() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/hentais/archive/meet-and-fuck-intensive-therapy.swf', 'ruffle', 1500, 800);
}

function meet_and_fuck_jessica_vs_holli() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/hentais/archive/meet-and-fuck-jessica-vs-holli.swf', 'ruffle', 1500, 800);
}

function meet_and_fuck_lavindor_kingdom() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/hentais/archive/meet-and-fuck-lavindor-kingdom.swf', 'ruffle', 1500, 800);
}

function meet_and_fuck_leila() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/hentais/archive/meet-and-fuck-leila.swf', 'ruffle', 1500, 800);
}

function meet_and_fuck_my_favourite_teacher() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/hentais/archive/meet-and-fuck-my-favourite-teacher.swf', 'ruffle', 1500, 800);
}

function meet_and_fuck_ocean_cruise() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/hentais/archive/meet-and-fuck-ocean-cruise.swf', 'ruffle', 1500, 800);
}

function meet_and_fuck_office_romance() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/hentais/archive/meet-and-fuck-office-romance.swf', 'ruffle', 1500, 800);
}

function meet_and_fuck_road_trip() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/hentais/archive/meet-and-fuck-road-trip.swf', 'ruffle', 1500, 800);
}

function meet_and_fuck_secret_agent() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/hentais/archive/meet-and-fuck-secret-agent.swf', 'ruffle', 1500, 800);
}

function meet_and_fuck_street_racing() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/hentais/archive/meet-and-fuck-street-racing.swf', 'ruffle', 1500, 800);
}

function meet_and_fuck_subway_story() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/hentais/archive/meet-and-fuck-subway-story.swf', 'ruffle', 1500, 800);
}

function meet_and_fuck_the_plumber() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/hentais/archive/meet-and-fuck-the-plumber.swf', 'ruffle', 1500, 800);
}

function meet_and_fuck_threesome_fun() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/hentais/archive/meet-and-fuck-threesome-fun.swf', 'ruffle', 1500, 800);
}

function meet_and_fuck_who_framed_jessica_rub_em() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/hentais/archive/meet-and-fuck-who-framed-jessica-rub-em.swf', 'ruffle', 1500, 1098);
}

function private_prescription() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/hentais/archive/private-prescription.swf', 'ruffle', 1500, 800);
}

function seductive_rpg_swim_team() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/hentais/archive/seductive-rpg-swim-team.swf', 'ruffle', 1500, 800);
}

function sex_kitten_maids() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/hentais/archive/sex-kitten-maids.swf', 'ruffle', 1500, 800);
}

function subway_fucker_part_1() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/hentais/archive/subway-fucker-part-1.swf', 'ruffle', 1500, 800);
}

function subway_fucker_part_2() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/hentais/archive/subway-fucker-part-2.swf', 'ruffle', 1500, 800);
}

function subway_fucker_part_3() {
    embedSWF('https://hoanganhdinhngoc.github.io/fun/hentais/archive/subway-fucker-part-3.swf', 'ruffle', 1500, 800);
}

