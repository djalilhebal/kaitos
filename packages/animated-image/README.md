# K-Animated-Image
_#WebComponent #Gif_

<!-- TODO: Reword -->
Welcome to K-Animated-Image, a web component designed to effortlessly integrate and showcase autoplaying and muted videos with A-B loop functionality. This lightweight and versatile component is perfect for adding dynamic animated content to your web projects.

The "animated image" should be a video that will be played automatically and muted.
If timestamps A and B are specified, the video will loop from A to B.
**_Think: A-B repeat._**


## Usage

Load the web component:
```html
<script type="module" src="path/to/k-animated-image.js"></script>
```

And use it:
```html
<k-animated-image
    src="./robin-breaking-vase.mp4"
    loopA="10.0"
    loopB="10.5"
    caption="Robin analyzes a vase then dramatically breaks it."
/>
```

- **`src`** is the source of the video.
Reactive.

- **`caption`** is the label.
Reactive.

- Both **`loopA`** and **`loopB`** must be specified for the part to loop.
Values are expressed in seconds,
similar to [`currentTime`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/currentTime).
Not reactive (must be set from the start).

The snippet above has the same meaning as:
```html
<div class="k-animated-image" role="img" aria-label=props.caption>
    <video autoplay muted src=props.src></video>
</div>
```


## Uses / Might use

- [ ] https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/canPlayType


## Background

I've been meaning to make something like this since forever.
The goal was to animate the middle part of the following meme:
[【MMD Meme】 Shut up and Dance! 【ft. Kaito, Len, IO】 | YouTube](https://www.youtube.com/watch?v=uOGHNfG5qVo)

Now, I need it for something more important.

I tried to clip "Robin breaking vase" and convert it to a gif, but the output was almost 20mb.
Even after optimizing it, it was still huge (9mb)!

I decided to use mp4 like Telegram, with one extra feature: A-B loop.  
Robin should analyze the vase like normal, break it, then start "weeping" (this is our A-B loop).


## Name

TBD. For now, let's call it "animated image" and use `role=img`.

---

These things have different meanings from an accessibility perspective.

- Image? as in [`role="img"`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/img_role).

- Picture? as in `<picture>`.

- Figure? as in `<figure>` or [`role="figure"`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/figure_role).

- Presentation? as in [`role="presentation"`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/presentation_role).
Probably not.


## Related

- VLC supports _A-B repeat_.

- FFmpeg's ffplay: `ffplay -loop 0 -ss 4.20 -t 0.40 robin-breaking-vase.mp4`
    * Note: `-to` is not supported, that's why I used `-t`.
    * Note: ffplay does not really support A-B repeat, but this is close enough.

- See Wikipedia for a list of players that support A-B repeat:
[Comparison of video player software](https://en.wikipedia.org/wiki/Comparison_of_video_player_software#Extended_features)

- ABLoopPlayer
    * https://github.com/agrahn/ABLoopPlayer
    * https://agrahn.gitlab.io/ABLoopPlayer/


## Credits

- The OpenGraph image was created using [Vercel OG Image Playground](https://og-playground.vercel.app/) (Satori version 0.0.0-development).
