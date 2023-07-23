const height = 40;
const width = 40;

const emojis = document.querySelectorAll('.emoji');



emojis.forEach((emoji) => {
    setInterval(() => {
        const posicionX = Math.floor(Math.random() * (window.innerWidth));
        const posicionY = Math.floor(Math.random() * (window.innerHeight));
        emoji.style.top = `${posicionY}px`;
        emoji.style.left = `${posicionX}px`;

        emojis.forEach((otroEmoji) => {
            // Obtener las coordenadas de los emojis
            const emojiRect = emoji.getBoundingClientRect();
            const otroEmojiRect = otroEmoji.getBoundingClientRect();
      
            // Comprobar si las coordenadas se superponen
            if (
              emojiRect.top < otroEmojiRect.bottom &&
              emojiRect.bottom > otroEmojiRect.top &&
              emojiRect.left < otroEmojiRect.right &&
              emojiRect.right > otroEmojiRect.left &&
              emoji !== otroEmoji &&
              emoji.textContent !== otroEmoji.textContent
            ) {
                if(
                    (emoji.textContent == '⛰️' ||
                    otroEmoji.textContent == '⛰️') &&
                    (emoji.textContent == '✂️' ||
                    otroEmoji.textContent == '✂️')
                ) {
                    emoji.textContent = '⛰️';
                    otroEmoji.textContent = '⛰️';
                }
                if(
                    (emoji.textContent == '✂️' ||
                    otroEmoji.textContent == '✂️') &&
                    (emoji.textContent == '📰' ||
                    otroEmoji.textContent == '📰')
                ) {
                    emoji.textContent = '✂️';
                    otroEmoji.textContent = '✂️';
                }
                if(
                    (emoji.textContent == '📰' ||
                    otroEmoji.textContent == '📰') &&
                    (emoji.textContent == '⛰️' ||
                    otroEmoji.textContent == '⛰️')
                ) {
                    emoji.textContent = '📰';
                    otroEmoji.textContent = '📰';
                }
            }
          });
          

    }, 100);
});