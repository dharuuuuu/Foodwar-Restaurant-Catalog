class BestRestaurants extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <section class="top__resto">
            <div class="info__content">
                <h2 class="title__content" tabindex="0">
                  List Restaurant
                </h2>
                <div class="line_small" ></div>
                <div class="line_big"></div>
                <div class="line_small"></div>
            </div>
            <div id="restaurants" class="list__resto">
            </div>
        </section>`;
    }
}

customElements.define('best-restaurants', BestRestaurants);
