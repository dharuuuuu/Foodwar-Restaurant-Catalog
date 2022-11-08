class NavBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <ul id="navigationDrawer" class="list">
                <li><a href="#/home">Home</a></li>
                <li><a href="#/favorite">Favorite</a></li>
                <li><a href="https://www.instagram.com/dharu_ddr/" target="_blank" rel="noopener">About Us</a></li>
            </ul>
        `;
    }
}

customElements.define('nav-bar', NavBar);
