/* eslint-env browser, mocha */
import { css, html, LitElement } from 'https://cdn.klimapartner.net/modules/lit-element/lit-element.js'

class TemplateKaskadiElement extends LitElement {
  constructor () {
    super()
    this.name = 'World'
    this.lang = 'en'
  }

  static get styles () {
    return css`
      :host{
        display: inline-block;
      }
      div{color: red}
    `
  }

  static get properties () {
    return {
      name: { type: String },
      lang: { type: String }
    }
  }

  render () {
    return html`
      <div>Hello ${this.name}!</div>
    `
  }
}
customElements.define('template-kaskadi-element', TemplateKaskadiElement)
