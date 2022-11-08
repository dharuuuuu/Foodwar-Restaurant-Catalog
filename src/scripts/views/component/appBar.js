class AppBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="logo">
              <h1>FOODWAR RESTO</h1>
            </div>
        `;
    }
}

customElements.define('app-bar', AppBar);
