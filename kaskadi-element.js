/* eslint-env browser, mocha */
import { css, html, LitElement } from 'https://cdn.klimapartner.net/modules/lit-element/lit-element.js'
import { lang, translate } from './modules/translator.js'

/**
 * Base element for all Kaskadi elements.
 *
 * This does not render anything and is used for the sole purpose of bringing a set of properties and base utilities to every elements created in Kaskadi. Therefore **you should not use this element in the browser** but only as an import that is used for creating sub-classes on which custom elements are based.
 *
 * _Note:_ this module also exports `html`, `css` and `LitElement` from `lit-element` for further usage. It also exports its own localization modules `lang` and `translate`. See [here](#translation-module) for more information.
 *
 * @module KaskadiElement
 *
 * @param {string} [lang=en] - element's language
 *
 * @example
 *
 * import { lang, translate, KaskadiElement, css, html } from 'https://cdn.klimapartner.net/modules/@kaskadi/kaskadi-element/kaskadi-element.js'
 *
 * class KaskadiCustomElement extends KaskadiElement {
 *  constructor () {
 *    super()
 *    // initialize any properties of your element
 *  }
 *
 *  static get properties () {
 *    return {} // your properties
 *  }
 *
 *  static get styles () {
 *    return css`` // your styles
 *  }
 *
 *  render () {
 *    return html`` // your rendering function
 *  }
 * }
 *
 * customElements.define('kaskadi-custom-element', KaskadiCustomElement)
 *
 */

class KaskadiElement extends LitElement {
  constructor () {
    super()
    this.lang = 'en'
  }

  static get properties () {
    return {
      lang: { type: String }
    }
  }
}

export { css, html, LitElement, KaskadiElement, lang, translate }

export default KaskadiElement
