# K-Fin

Fanfics and creative works in general end with "FIN" or "END".

I don't remember where I saw it, but someone ended their nonfictional post but "Fin".
I thought it was cute, so I decided to do the same.

It's important for me so I don't get confused whether I accidentally copied half a document or note.

```md
Whatever

---

END.
```

```md
Whatever

---

FIN.
```


## Impl

```js
// "END." or "FIN."
const rExpectedContent = /^(FIN|END)\.$/;
const $possibleFinPara = [...document.querySelectorAll('article > hr + p:last-of-type')].at(-1);
const isFin = $possibleFinPara && $possibleFinPara.textContent.match(rExpectedContent);
if (isFin) {
    $possibleFinPara.classList.add('k-fin');
}
```

---

END.
