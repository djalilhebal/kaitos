# K-Passage / K-Encore
_#WebComponent #WebAnimationAPI #CSS_

<aside style="text-align: center; font-size: small;">

"Can I get an encore? I know you want more." -- [Nicki Minaj - Encore '07][encore-lyrics]

</aside>

A component that expands and reveals text in place.
Think of it as a paragraph that shows hidden lines.

Inspired by interactive fiction (IF) stuff like Twine, Windrift, Ink/Inky, etc.


## Features

- **Accessible** enough. \
(See `TODO.md`.)

- **Future-proof**: It's a web component and relies on no framework, so there won't be any breaking changes.

- **Fail-proof**/Progressive-enhancement: In the worst-case scenario (the custom elements aren't loaded), you still see the entire revealed content.
(`trigger` is hidden by default, `reveal` is shown by default).


## Usage

See `demo.html`

- Import the script
```html
<script type="module" src="passage-element.js"></script>
```

- Use `<k-passage>` in lieu of `<p>`
and . . .
```html
<p>
    You emerge from a deep slumber to the sound of pouring rain.
    The room is shrouded in darkness due to a blackout.
</p>

<k-passage>
    A faint source of light reveals a mysterious book on a nearby table.
    <k-passage-trigger hidden>You pick up the book.<k-passage-trigger>
    <k-passage-reveal>As you open the book, words unfold like magic. It fills you with determination.<k-passage-reveal>
</k-passage>

<p>Fin.</p>
```

### Dev

Running the demo locally:
```sh
npm install
npm run dev
```

### Gotchas

- ~~Content might have changed or shifted due to loading resources (fonts) or external (out of our control) CSS like pseudoselectors.~~
Meaning, the final height transition might be a bit "abrupt".


## Name

TBD.

- `k-passage` \
It implies a section or segment of content.
A la IF engines/frameworks.

- `k-encore` \
It implies an extra layer of content that the user can reveal or experience upon interaction.
Shorter.

"Can I get an encore? I know you want more." -- [Nicki Minaj - Encore '07][encore-lyrics]


- `k-reveal` \
Can't get any more literal.
It doesn't suggest that it's about text or hint at "revising content".

Choice (when clicked shows the hidden text):
- `passage-trigger`
- `passage-anchor`

Content (to be revealed):
- `passage-reveal`
- `passage-content`
- `passage-payload`


## Example

```html
<k-passage>
    I'm Djalil, or <k-passage-trigger keep="no">Kaito just because.</k-passage-trigger>
    <k-passage-reveal>
        Kaito because it represents the fusion of technology and creativity/entertainment.
    </k-passage-reveal>
<k-passage>
```


## How it should work

(Kinda outdated details)

A `passage` is like a `p`aragraph.
It should accept as children whatever `<p>` accepts.
`passage-trigger` and `passage-reveal` should be descendants of `passage`.
- [ ] Again, how are events propagated in web components?

```js
// Step 1: Calculate height.
// Calculate with the content shown.
// Hide "to reveal" elements.

// k-encore-reveal.onClick
() => {
    //transition opacity to 0;
    //$parent.height = maxHeight;
    //set -content to visible;
    //set -reveal to hidden if keep !== 'yes';
    //transition opacity to 1;
}
```

```js
heightAnim = animate height from the (approx) `revealedHeight`, fill forwards, duration 300ms.
await heightAnim.finished;
await fadeInAnim.finished;
heightAnim.cancel();
```


### Events

- [ ] RECHECK: [Knowledge: Events: Open Web Components](https://open-wc.org/guides/knowledge/events/)

- [ ] [`composed: true` considered harmful? - DEV Community](https://dev.to/open-wc/composed-true-considered-harmful-5g59)

### Styling

- [x] Use HTML `hidden`

- [scrollHeight | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight)
    * `scrollHeight`: "the height of an element's content, including content not visible on the screen due to overflow."

- [clientHeight | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/clientHeight)

- [offsetHeight | MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetHeight)


## Further reading

- [Collapsible Sections | Inclusive Components](https://inclusive-components.design/collapsible-sections/)

---

- [x] CHECK: [Using CSS Transitions on Auto Dimensions | CSS-Tricks](https://css-tricks.com/using-css-transitions-auto-dimensions/)
    * Visited: 2023-12-06
    * By Brandon Smith 
    * Last updated: 2021.
    * TLDR:
        + Technique 1: `max-height`
        + Technique 2: `transform: scaleY()`
        + Technique 3: JavaScript (used `Element.scrollHeight` and the `transitionend` event)
        + Bonus Technique: Flexbox

[encore-lyrics]: https://genius.com/Nicki-minaj-encore-07-lyrics "Nicki Minaj – Encore '07 Lyrics | Genius Lyrics"

---

FIN.
