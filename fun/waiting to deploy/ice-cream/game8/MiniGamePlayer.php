<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flora Garden Minigame</title>
    <script src="/ruffle/ruffle.js"></script> <!-- Path to Ruffle -->
    <script>
        document.addEventListener("DOMContentLoaded", function() {
            // Define language mappings
            var langMapping = {
                'en': 1,
                'it': 2,
                'fr': 3,
                'es': 6,
                'de': 7,
                'pt': 9
            };

            // Get the lang parameter from the URL
            var urlParams = new URLSearchParams(window.location.search);
            var lang = urlParams.get('lang') || 'en'; // Default to 'en' if no lang parameter is present

            // Get the languageId from the mapping, default to 1 (English) if not found
            var languageId = langMapping[lang] || 1;

            // Create the game object only if it hasn't been loaded yet
            if (!window.gameLoaded) {
                var gameContainer = document.createElement("object");
                gameContainer.setAttribute("id", "minigame-object");
                gameContainer.setAttribute("type", "application/x-shockwave-flash");
                gameContainer.setAttribute("data", `game.swf?languageId=${languageId}&userId=0&sessionId=`);
                gameContainer.setAttribute("width", "750");
                gameContainer.setAttribute("height", "480");

                gameContainer.innerHTML = `
                    <param name="base" value="game8/">
                    <param name="quality" value="high">
                    <param name="bgcolor" value="#ffffff">
                    <param name="allowFullScreen" value="true">
                    <param name="allowScriptAccess" value="always">
                    <param name="wmode" value="opaque">
                    <param name="FlashVars" value="gameId=8&languageId=${languageId}&userId=0&sessionId=">
                    <div>
                        <p>You need Ruffle to play this game. <a href="https://ruffle.rs/#downloads" target="_blank">Download Ruffle here</a>.</p>
                    </div>
                `;

                document.body.appendChild(gameContainer);
                // Mark the game as loaded
                window.gameLoaded = true;
            }
        });
    </script>
</head>
<body>
</body>
</html>