class AppHeader extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="header__inner">
            <h1 class="header__title" tabindex="0">Kotak Makan</h1>
            <button id="menu" class="header__menu" tabindex="0">☰</button>
        </div>
        `;
  }
}

customElements.define('app-header', AppHeader);
