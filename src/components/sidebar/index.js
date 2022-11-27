class Sidebar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <aside>
          <img class="logo" src="/src/assets/Freddys_Logo.svg" />
          <ul>
            <li><a class="item" href="/src/pages/dashboard/index.html">Dashboard</a></li>
            <li><a class="item" href="/src/pages/orders/index.html">Orders</a></li>
            <li><span class="item">Logout</span></li>
          </ul>
      </aside>
    `;
  }
}

customElements.define('sidebar-component', Sidebar);
