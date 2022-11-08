class HeroElement extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="hero">
                <div class="hero-text">
                    <h2>Welcome To</h2>
                    <h1>FOODWAR RESTO</h1>
                </div>
            </div>
        `;
        document.querySelector('.btn-order').onclick = this._scroll;
    }

    _scroll() {
        const heros = document.querySelector('.hero');
        window.scrollTo(0, heros.clientHeight);
    }
}

customElements.define('hero-element', HeroElement);
