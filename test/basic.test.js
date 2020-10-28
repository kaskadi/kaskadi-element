/* eslint-env browser, mocha */
import './test-element.js'

describe('kaskadi-element', () => {
  it('should be usable as base class for custom elements', async () => {
    const elem = document.createElement('test-element')
    document.body.appendChild(elem)
    await elem.updateComplete
    elem.lang.should.equal('en')
  })
})
