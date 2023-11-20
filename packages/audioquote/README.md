# AudioQuote

As the name suggests, this is an `<audio><q>uote`.

Essentially, it is a custom, inline audio player.


## Features

- Accessible. \
You can trigger it using the keyboard (navigate using <kbd>Tab</kbd> then click <kbd>Enter</kbd>).

- Semantic HTML.

- [ ] Playing a specific section instead of the whole file
(like, given a 2:00:00 audio file, play from 55:30 to 50:55).


## Usage

```sh
npm install @kaitos/audioquote
```

```jsx
import AudioQuote from '@kaitos/audioquote';

<p>
    You know,
    <AudioQuote audioSrc="cat-abrupt.mp3" cite="https://librivox.org/the-westminster-alice-by-saki/">
        the cat was nothing if not abrupt.
    </AudioQuote>
</p>
```

[westminster-alice-gutenberg]: https://www.gutenberg.org/ebooks/58201 "The Westminster Alice by Saki | The Westminster Alice by Saki | Project Gutenberg"
[westminster-alice-librivox]: https://librivox.org/the-westminster-alice-by-saki/ "The Westminster Alice by Saki, read by Ruth Golding | LibriVox"
[westminster-alice-notes]: https://archive.org/details/westminsteralice_notes "Ruth Golding's Notes on The Westminster Alice"


## Demo

```sh
ffmpeg -i WestminsterAlice_librivox.m4b -ss 04:55 -to 04:59 -q 0 alice-hustle-glacier.mp3
```

- `WestminsterAlice_librivox.m4b`
    * 01:43 - 01:46 "The cat was nothing if not abrupt."
    * 04:55 - 04:59 "Might as well try to hustle a glacier."


## Related projects

- https://github.com/NUKnightLab/soundcite
    * Outdated (uses old APIs and depends on an external obsolete library--popcornjs).
    * Not accessible.
    * Not semantic HTML.
    * Displays poorly (the background kinda breaks) if the text is too long and wraps.


## Credits

- Inspired by **SoundCite**.
    * https://soundcite.knightlab.com
    * https://github.com/NUKnightLab/soundcite/

---

END.
