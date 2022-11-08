class Footer extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <footer>
          <div class="center_items">      
              <p tabindex="0">Copyright 2022 © By <span>Dimas Dharu Ramadhan</span></p>
              <br>
          </div>
        </footer>
        `;
    }
}

customElements.define('footer-app', Footer);
