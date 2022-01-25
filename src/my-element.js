import { html, css, LitElement } from 'lit'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class MyElement extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        border: solid 1px gray;
        padding: 16px;
        max-width: 800px;
      }
      
      main {
        & h1 {
          color: red;
        } 
      }
    `
  }

  static get properties() {
    return {
      /**
       * The name to say "Hello" to.
       */
      name: { type: String },

      /**
       * The number of times the button has been clicked.
       */
      count: { type: Number }
    }
  }

  constructor() {
    super()
    this.name = 'World'
    this.count = 0
  }

  render() {
    return html`
      <main>
        <h1>This text will be red if PostCSS is working</h1>
        <button @click=${this._onClick} part="button">
          Click Count: ${this.count}
        </button>
        <slot></slot>
      </main>
    `
  }

  _onClick() {
    this.count++
  }
}

window.customElements.define('my-element', MyElement)
