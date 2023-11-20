//import AudioQuote from '@kaitos/audioquote';
import AudioQuote from "./AudioQuote";

export function IntoWonderland() {
    return (
        <article id="intoWonderland">
            <h2>Wonderland</h2>
            <p>
                This is my collection of notes, my digital guarden, second brain, or as I like to call it <strong>Wonderland</strong>,
                as in 
                <AudioQuote
                    color="blueviolet"
                    audioSrc="./wonderland-is-destroyed.mp3"
                    cite="https://store.steampowered.com/app/19680/Alice_Madness_Returns/"
                    >
                    Wonderland is destroyed! My mind is in ruins!
                </AudioQuote>.
            </p>

            <p>
                ...
            </p>
        </article>
    );
}
