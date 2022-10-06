class AppFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <p tabindex="0">Copyright&#169; 2022 - Created by Nashira Oksani Ardine Santosa</p>
        `;
  }
}

customElements.define('app-footer', AppFooter);
