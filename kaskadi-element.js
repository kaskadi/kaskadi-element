/* eslint-env browser, mocha */
import { css, html, LitElement } from 'https://cdn.klimapartner.net/modules/lit-element/lit-element.js'
import { lang, translate } from './modules/translator.js'

class KaskadiElement extends LitElement {
  constructor () {
    super()
    this.lang = 'en'
  }
}

export { css, html, LitElement, KaskadiElement, lang, translate }

export default KaskadiElement
