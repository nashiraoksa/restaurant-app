class AppHero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="hero">
      <div class="hero__inner">
        <h2 class="hero__title" tabindex="0">Looking for restaurant?</h2>
        <p class="hero__tagline" tabindex="0">Kotak Makan provides the restaurant catalog you need to find the best eatery in Indonesia.</p>
      </div>
    </div>
    `;
  }
}

customElements.define('app-hero', AppHero);
