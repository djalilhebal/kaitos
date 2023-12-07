/**
 * Think: `<p className="encore">{children}</p>`
 */
class Passage extends HTMLElement {
    static define(tag = 'k-passage', registry = customElements) {
        registry.define(tag, Passage);
    }

    constructor() {
        super();
        // this.attachShadow({ mode: 'open' });
        this.addEventListener('k-passage-triggered', (ev) => {
            console.debug('Passage', ev);
            Passage.reveal(this);
        });
    }

    connectedCallback() {
        console.log("Passage element added to page.");
    }

    /**
     * 
     * @param {HTMLElement} $p passage
     */
    static async reveal($p) {
        const unrevealedHeight = $p.getBoundingClientRect().height;
        //$p.style.height = unrevealedHeight;

        /**
         * @type {PassageTrigger}
         */
        const $trigger = $p.querySelector('k-passage-trigger');
        /**
         * @type {PassageReveal}
         */
        const $reveal = $p.querySelector('k-passage-reveal');

        $trigger.style.display = 'none';
        $reveal.style.display = '';
        const revealedHeight = $p.scrollHeight;
        $trigger.style.display = 'inline';
        $reveal.style.display = 'none';

        const fadeOutAnim = $p.animate([{height: unrevealedHeight+'px', opacity: 1}, {height: revealedHeight+'px', opacity: 0}], {duration: 300, fill: 'forwards'});
        await fadeOutAnim.finished;

        $trigger.style.display = 'none';
        $reveal.style.display = '';

        const fadeInAnim = $p.animate([{opacity: 0}, {opacity: 1}], {duration: 200, delay: 100, fill: 'forwards'});
        await fadeInAnim.finished;

        /*
        // Highlight revealed content (to differentiate it from old ones)
        // HACK:
        // reveal is `display`ed inline, but may contain `block` elements.
        [$reveal, ...$reveal.querySelectorAll('*')].forEach($el => {
            $el.animate([{backgroundColor: 'pink'}, {backgroundColor: 'transparent'}], {duration: 700, easing: 'cubic-bezier(0.4, 0, 1, 1)'});
        });
        */

        fadeOutAnim.cancel();
        fadeInAnim.cancel();
    }
}

/**
 * Think: `<span className="encore__trigger" onClick={handleReveal}>{children}</span>`
 * 
 * - Idea: Only if it has 'hidden', it means we should hide it after revealing.
 */
class PassageTrigger extends HTMLElement {
    static define(tag = 'k-passage-trigger', registry = customElements) {
        registry.define(tag, PassageTrigger);
    }

    /**
     * Should the `trigger` be kept visible after the passage is revealed?
     */
    keep = false;

    constructor() {
        super();

        //this.attachShadow({ mode: 'open' });

        const hasHidden = this.hasAttribute('hidden');
        this.removeAttribute('hidden');
        const keep = !hasHidden;
        console.log('PassageTrigger', {keep});

        this.setAttribute('role', 'button');
        this.tabIndex = 0;

        const onClick = (ev) => {
            this.dispatchEvent(
                new CustomEvent('k-passage-triggered', {
                  bubbles: true,
                  //composed: true,
                }),
              );
        }

        const onKeyDown = (ev) => {
            ev.preventDefault();
            if (ev.key === 'Enter' || ev.key === ' ') {
              onClick();
            }
          }

        this.addEventListener('click', onClick);
        this.addEventListener('keydown', onKeyDown);
    }

    connectedCallback() {
        console.log("PassageTrigger element added to page.");
    }

}

/**
 * Think: `<span className='encore__reveal'>{children}</span>`
 */
class PassageReveal extends HTMLElement {
    static define(tag = 'k-passage-reveal', registry = customElements) {
        registry.define(tag, PassageReveal);
    }

    constructor() {
        super();
        //this.attachShadow({ mode: 'open' });
        this.style.display = 'none';
    }

    connectedCallback() {
        console.log("PassageReveal element added to page.");
    }

}

/**
 * Define the component and child components.
 */
function defineAll() {
    Passage.define();
    PassageTrigger.define();
    PassageReveal.define();
    console.debug('Defined all k-passage* elements');
}

defineAll();
