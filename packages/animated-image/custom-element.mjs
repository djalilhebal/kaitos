class KAnimatedImage extends HTMLElement {

  // NOTE: As defined by GitHub's `clipboard-copy-element`
  // https://github.com/github/clipboard-copy-element/blob/a4a20027ac86f75a8a81d4419f484c165f184935/src/clipboard-copy-element.ts#L65
  static define(name = 'k-animated-image', registry = customElements) {
    registry.define(name, this);
    return this;
  }

  static get observedAttributes() {
    return ['src', 'caption'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log('AnimatedImage::attributeChangedCallback', { name, oldValue, newValue });

    if (name === 'src' && oldValue !== newValue) {
      this.$video.src = newValue;
    }

    if (name === 'caption') {
      this.$wrapper.setAttribute('aria-label', newValue);
    }
  }

  constructor() {
    super();

    // XXX: There is no point in using the `closed` mode, is there?
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
        <style>
          /* Custom styles for the video component within the shadow DOM */
          :host {
            display: block;
          }

          video {
            width: 100%;
          }
        </style>
        <div role="img">
          <video autoplay muted></video>
        </div>
      `;

    // Get video element and set the source
    this.$video = this.shadowRoot.querySelector('video');
    this.$wrapper = this.shadowRoot.querySelector('div');
    /*
    this.$video.src = this.getAttribute('src');
    this.$video.setAttribute('aria-label', this.getAttribute('caption'));
    */

    const loopA = Number(this.getAttribute('loopA'));
    const loopB = Number(this.getAttribute('loopB'));
    const hasABLoop = !Number.isNaN(loopA) && !Number.isNaN(loopB);
    if (hasABLoop) {
      this.$video.ontimeupdate = (_event) => {
        if (this.$video.currentTime > loopB) {
          this.$video.currentTime = loopA;

          // Sometimes, the end (loopB = 4.5) is too close to the ending of the video (duration = 4.757333),
          // so the video ends/stops.
          // In this case, we need to resume playing it.
          if (this.$video.paused) {
            this.$video.play();
          }
        }
      };
    }


  }

}

KAnimatedImage.define();
