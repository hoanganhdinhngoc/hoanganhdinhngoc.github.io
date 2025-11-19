<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Play Game</title>
    <script src="/ruffle/ruffle.js"></script> <!-- Caminho para o Ruffle -->
    <script>
        document.addEventListener("DOMContentLoaded", function() {
            // Mapear as línguas para seus respectivos números no jogo
            const langMap = {
                'en': 1,
                'it': 2,
                'fr': 3,
                'es': 6,
                'de': 7,
                'pt': 9
            };

            // Função para obter o valor do parâmetro de URL
            function getQueryParam(param) {
                const urlParams = new URLSearchParams(window.location.search);
                return urlParams.get(param);
            }

            // Obter o idioma da URL
            const lang = getQueryParam('lang');
            const languageId = langMap[lang] || 1; // Padrão para inglês (1) se o lang não for encontrado

            // Check if the game has already been loaded
            if (!window.gameLoaded) {
                var gameContainer = document.createElement("object");
                gameContainer.setAttribute("id", "minigame-object");
                gameContainer.setAttribute("type", "application/x-shockwave-flash");
                gameContainer.setAttribute("data", "../../../../pages/Games/Flash/IceCream/MinigameWrapper.swf?gameId=8&amp;languageId=${languageId}&amp;userId=0&amp;sessionId=");
                gameContainer.setAttribute("width", "750");
                gameContainer.setAttribute("height", "480");

                // Add the outline style
            gameContainer.setAttribute("style", "outline: 1px solid #7E7F7F;");

                gameContainer.innerHTML = `
                    <param name="base" value=".">
                    <param name="quality" value="high">
                    <param name="bgcolor" value="#ffffff">
                    <param name="allowFullScreen" value="true">
                    <param name="allowScriptAccess" value="always">
                    <param name="wmode" value="opaque">
                    <param name="FlashVars" value="gameId=8&amp;languageId=${languageId}&amp;userId=0&amp;sessionId=">
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
