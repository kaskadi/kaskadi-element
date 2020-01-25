/* eslint-env browser, mocha */
import { lang, translate } from '../kaskadi-element.js'
const L = {
  hello: {
    en: 'hello',
    de: 'hallo',
    es: 'holla'
  }
}
describe('translate', () => {
  it('should work with normal strings', async () => {
    const s1 = lang`hello`
    s1[0].should.equal('hello')
    translate(s1).should.equal('hello')
  })
  it('should work with objects having properties "de", "en", ... ', async () => {
    const s1 = lang`${L.hello}`
    s1.length.should.equal(3)
    s1[1].en.should.equal('hello')
    s1[1].de.should.equal('hallo')
    s1[1].es.should.equal('holla')
    translate(s1, 'de').should.equal('hallo')
    translate(s1, 'fr').should.equal('hello')
  })
  it('should default to "en", ... ', async () => {
    const s1 = lang`${L.hello}`
    translate(s1, 'fr').should.equal('hello')
    translate(s1).should.equal('hello')
  })
  it('should work with nested tempalte strings', async () => {
    const s1 = {
      de: lang`${L.hello} Welt`,
      en: lang`${L.hello} World`,
      es: lang`${L.hello} Mundo`
    }
    const s2 = lang`${s1}!`
    translate(s2, 'de').should.equal('hallo Welt!')
  })
  it('should fallback to en only for unknown words or phrases when nesting', async () => {
    const s1 = {
      de: lang`${L.hello} Welt`,
      en: lang`${L.hello} World`,
      fr: lang`${L.hello} Monde`
    }
    const s2 = lang`${s1}!`
    translate(s2, 'fr').should.equal('hello Monde!') // hello unknown in frensh
    translate(s2, 'es').should.equal('holla World!') // hello world phrase unknown in spanish but hello known in es
  })
})
