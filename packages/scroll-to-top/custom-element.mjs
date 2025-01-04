/**
 * Back to Top button.
 */
class KBackToTop extends HTMLElement {
    constructor() {
        super();

        // Create shadow DOM
        this.attachShadow({ mode: 'open' });

        // Add styles
        const style = document.createElement('style');
        style.textContent = `
        .k-back-to-top {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background-color: #333;
          color: white;
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          cursor: pointer;
          opacity: 0;
          transition: opacity 0.3s, background-color 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        }
  
        .k-back-to-top:hover {
          background-color: #555;
        }
  
        .k-back-to-top.visible {
          opacity: 1;
        }
  
        .k-back-to-top svg {
          width: 24px;
          height: 24px;
          fill: currentColor;
        }
      `;

        // Create button
        const button = document.createElement('button');
        button.className = 'k-back-to-top';
        button.innerHTML = `
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" 
                transform="rotate(-90 12 12)"/>
        </svg>
      `;

        // Add elements to shadow DOM
        this.shadowRoot.appendChild(style);
        this.shadowRoot.appendChild(button);

        // Bind methods
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.scrollToTop = this.scrollToTop.bind(this);

        // Add event listeners
        button.addEventListener('click', this.scrollToTop);
        window.addEventListener('scroll', this.toggleVisibility);

        // Initial visibility check
        this.toggleVisibility();
    }

    toggleVisibility() {
        const button = this.shadowRoot.querySelector('.k-back-to-top');
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 200) {
            button.classList.add('visible');
        } else {
            button.classList.remove('visible');
        }
    }

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Cleanup when element is removed
    disconnectedCallback() {
        window.removeEventListener('scroll', this.toggleVisibility);
    }
}

// Auto-register the component
customElements.define('k-back-to-top', KBackToTop);
