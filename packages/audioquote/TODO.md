# TODO

- [ ] Make the background transition smoother!

- [ ] Add Start/Pause icons
    * As emoji or inline svg?
    * Or as Unicode characters?
    https://en.wikipedia.org/wiki/Media_control_symbols

- [ ] onEnd set percentage = 0 and state = ready
```
CSS states:
--ready
--playing
--paused
```

- [ ] percentage toFixed 0 or 1 or 2
Like, there is little advantage to updating UI for 0.01 vs 0.02%. It just makes the UI update with no noticeable effect.

- [ ] Add `<q role="button" ...>`?
    * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role

- [ ] Support multiple audio `<source>`s

- [ ] Add `<audio preload="auto" ...>`?
