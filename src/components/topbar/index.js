class Topbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="topbar-container">
          <span class="topbar-circle-item red"></span>
          <span class="topbar-circle-item yellow"></span>
          <span class="topbar-circle-item green"></span>
      </div>
    `;
  }
}

customElements.define('topbar-component', Topbar);
