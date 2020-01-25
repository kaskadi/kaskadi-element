/* eslint-env browser, mocha */
import './test-element.js'
describe('kaskadi-element', () => {
  it('shou be usable as base class for custom elements', async () => {
    // STRANGE BUG!!! MUST INVESTIGATE!!!
    // try {
    //   document.createElement('test-element')
    // } catch (err) {
    //   console.log('hi')
    // }
    document.body.innerHTML = '<test-element></test-element>'
    const elem = document.querySelector('test-element')
    await elem.updateComplete
    elem.lang.should.equal('en')
  })
})
