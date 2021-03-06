
class FooterComponent extends HTMLElement {
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
    const year = new Date().getFullYear();

    return `
      <style>
      .footer {
        position: fixed;
        bottom: 0;
        width: 100%;
        min-height: 30px;
        padding-top: 10px;
        background-color: #fff;
      }
      .footer a {
        color: var(--color-primary);
        text-decoration: none;
      }
      .footer h4 {
        width: 90%;
        margin: 0 auto;
        padding: 20px;
        text-align: center;
        font-weight: 200;
      }
      span {
        color:var(--color-tertiary);
      }
      </style>

      <footer class="footer">
        <h4>
          <a href="https://www.greenwoodjs.io/">My Blog &copy; ${year} <span>&#9672</span> Built with GreenwoodJS</a>
        </h4>
      </footer>
    `;
  }
}

customElements.define('app-footer', FooterComponent);
