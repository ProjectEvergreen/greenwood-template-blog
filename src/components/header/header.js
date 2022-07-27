export default class HeaderComponent extends HTMLElement {

  connectedCallback() {
    this.innerHTML = this.getTemplate();
  }

  getTemplate() {
    return `
      <style>
      .header {
        font-size: 1.2rem;
        background-color: var(--color-secondary);
      }

      .header h3 {
        margin: 0 auto;
        padding: 4px 0 0 10px;
        display: inline-block;
        color: black;
        font-weight: 400;
      }

      .head-wrap {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        max-width: 1000px;
        margin: auto;
      }

      .brand {
        flex: 1;
        text-align: center;
      }

      .header .navigation {
        flex: 2;
        text-align: center;
        padding: 0;
      }

      .navigation li {
        display: inline-block;
        padding: 0.5rem;
      }
      .navigation > li > a {
        color: var(--color-primary);
        font-weight: 300;
        text-decoration: none;
      }
      .navigation a:hover, .navigation a:active {
        color: black;
        text-decoration: none;
      }

      .header .social {
        flex:1;
        text-align: center;
      }

      .header img.github-logo {
        display: inline-block;
        width: 32px;
        height: 32px;
      }

      .github-logo:hover {
        filter: invert(0.3);
      }

      @media(max-width: 992px) {
        .head-wrap {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          flex-direction: column;
        }
      }

      @media(max-width: 576px) {
        .navigation {
          width: 100%;
        }
        .navigation li {
          flex: 1;
          display: block;
          flex-wrap: wrap;
          padding: 0.5rem;
          border-bottom: 1px solid var(--color-primary);
        }
        .navigation li:first-child {
          border-top: 1px solid var(--color-primary);
        }

      }
      </style>

      <header class="header">
        <div class="head-wrap">
          <div class="brand">
            <a href="/">
              <h3>My Personal Blog</h3>
            </a>
          </div>
          <ul class="navigation">
            <li><a href="/category">Category</a></li>
            <li><a href="/category">Category</a></li>
            <li><a href="/category">Category</a></li>
          </ul>
          <div class="social">
            <a href="https://github.com/ProjectEvergreen/greenwood">
              <img
                src="/assets/github_logo.png"
                alt="Github logo"
                class="github-logo"/>
            </a>
          </div>
        </div>
      </header>
    `;
  }
}

customElements.define('app-header', HeaderComponent);