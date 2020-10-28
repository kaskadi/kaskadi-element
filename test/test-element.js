/* eslint-env browser, mocha */
import { KaskadiElement, html } from '../kaskadi-element.js'

class TestElem extends KaskadiElement {
  render () {
    return html`<div>Hello</div>`
  }
}
customElements.define('test-element', TestElem)
