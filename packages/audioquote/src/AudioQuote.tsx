import { useRef } from 'react';

import './AudioQuote.css';

interface AudioQuoteProps {

    /**
     * CSS color
     */
    color?: string,

    /**
     * `<q>`'s `cite`
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q#cite
     */
    cite: string,

    /**
     * `<audio>`'s `src`
     * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio#src
     */
    audioSrc: string,

    children?: any
}

/**
 * Inline audio player.
 * 
 * @implNote
 * - Uses `<q>`
 */
export default function AudioQuote({ cite, audioSrc, color, children }: AudioQuoteProps) {
    const COMPONENT = 'kai-audioquote';

    const quoteRef = useRef<HTMLQuoteElement | null>(null);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    /*
    .addEventListener('timeupdate', (event) => {});
    .addEventListener('canplay', (event) => {});
    .addEventListener('canplaythrough', (event) => {});
    */
    const onClick = function () {
        const audioEl = audioRef.current!;
        if (audioEl.ended) {
            // Replay
            audioEl.currentTime = 0;
            audioEl.play();
            return;
        }

        if (audioEl.paused) {
            audioEl.play();
            return;
        }

        // Assume it is playing...
        audioEl.pause();
    }

    function onTimeupdate() {
        const quoteEl = quoteRef.current;
        const audioEl = audioRef.current;

        const total = audioEl!.duration;
        const current = audioEl!.currentTime;
        const percentage = (current * 100) / total;

        /*
        // Old approach:
        const rgb = '0,0,0';
        const background = `linear-gradient(to right, rgba(${rgb},0.15) ${percentage}%, rgba(${rgb},.05) ${percentage + 1}%)`;
        quoteEl!.style.background = background;
        */

        // XXX:
        // - Does using only one fraction improve the UX or at least performance?
        // - Also, should we be adding '%' from the JS side?
        //   CSS can always convert the unitless number to a percentage like: `--percentage: calc(var(--progress) * 1%);`
        quoteEl!.style.setProperty('--percentage', percentage.toFixed(1) + '%');
    }

    const style = { "--color": color } as React.CSSProperties;

    return (
        <q ref={quoteRef} style={style} className={COMPONENT} cite={cite} tabIndex={0}
            onClick={onClick} onKeyDown={(e) => e.key === 'Enter' && onClick()}>
            {children}
            <audio ref={audioRef} src={audioSrc} onTimeUpdate={onTimeupdate}></audio>
        </q>
    );
}
