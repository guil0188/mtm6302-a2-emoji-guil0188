const emojiCodes = [ 
128512, 128514, 128525, 128526, 
128545, 128561, 128640, 128293, 
128058, 128054, 128049, 128150 ];

const $gallery = document.getElementById("emoji-gallery");

function showEmojis(count = emojiCodes.length){

    $gallery.innerHTML = "";
    
    
    for (let i = 0; i < count; i++) { 

        const code = emojiCodes[i];

        const card = document.createElement("div");
        card.classList.add("emoji-card");

        const emoji = document.createElement("div");
        emoji.classList.add("emoji");
        emoji.textContent = String.fromCodePoint(code);

        const emojiCode = document.createElement("div");
        emojiCode.classList.add("emoji-code");
        emojiCode.textContent = code;

        card.appendChild(emoji);
        card.appendChild(emojiCode);

        $gallery.appendChild(card);
    }
}

showEmojis();
