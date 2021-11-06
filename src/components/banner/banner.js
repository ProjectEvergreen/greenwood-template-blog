class HeaderComponent extends HTMLElement {
  constructor() {
    super();

    // create a Shadow root
    this.root = this.attachShadow({ mode: 'closed' });
  }

  // run some code when the component is ready
  connectedCallback() {
    this.root.innerHTML = this.getTemplate();
  }

  // create templates that interpolate variables and HTML!
  getTemplate() {
    return `
      <style>
      .banner
      </style>

      <div class="banner"></div>
    `;
  }
}

customElements.define('app-banner', HeaderComponent);