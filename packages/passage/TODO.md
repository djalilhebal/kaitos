# TODO

- [ ] Use semantic HTML and the Shadow DOM.
`<p>` for the passage,
`<button>` for the trigger,
`<>`

- [ ] Move `k-passage` styles from main to the components themselves. Inline or using Shadow DOM.

- [ ] Implement `<k-passage-trigger keep="yes">` so that the trigger is still visible after the reveal is shown.
Kinda like Ink:
```
trigger [] reveal
```
Currently it works like:
```
[trigger] reveal
```

- [ ] Ensure it is React-friendly.
Using Shadow DOM should be enough.
