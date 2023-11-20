import React from 'react'
import ReactDOM from 'react-dom/client'
import './demo.css'

import AudioQuote from './AudioQuote';
import { IntoWonderland } from './IntoWonderland';

function Demo() {
  return (
    <article>
      <h1>AudioQuote Demo</h1>

      <p>
        Trying to build a complete "UI component library" from scratch?
        <AudioQuote
          color="#b25b3b"
          audioSrc="alice-hustle-glacier.mp3"
          cite="https://librivox.org/the-westminster-alice-by-saki/" >
          Might as well try to hustle a glacier.
        </AudioQuote>
        
        It's a slow and arduous journey filled with obstacles, and success seems distant*.
      </p>

      <aside>
        *Mostly because of my procrastination, but let's not talk about that.
      </aside>


      <hr />

      Originally written for the following intro:
      
      <IntoWonderland />

    </article>

  );

}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Demo />
  </React.StrictMode>,
)
