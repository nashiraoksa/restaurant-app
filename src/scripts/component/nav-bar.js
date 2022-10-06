class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <ul class="nav__list">
            <li class="nav__item"><a href="/">Home</a></li>
            <li class="nav__item"><a href="#/like">Favorite</a></li>
            <li class="nav__item"><a href="https://www.linkedin.com/in/nashiraoksani/">About</a></li>
        </ul>
        `;
  }
}

customElements.define('nav-bar', NavBar);
