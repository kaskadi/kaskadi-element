![](https://img.shields.io/github/package-json/v/kaskadi/kaskadi-element)
![](https://img.shields.io/badge/code--style-standard-blue)
![](https://img.shields.io/github/license/kaskadi/kaskadi-element?color=blue)

[![](https://img.shields.io/badge/live-example-orange)](https://cdn.klimapartner.net/modules/%40kaskadi/kaskadi-element/example/index.html)

**GitHub Actions workflows status**

[![Build status](https://img.shields.io/github/workflow/status/kaskadi/kaskadi-element/build?label=build&logo=mocha)](https://github.com/kaskadi/kaskadi-element/actions?query=workflow%3Abuild)
[![BuildFF status](https://img.shields.io/github/workflow/status/kaskadi/kaskadi-element/build-on-firefox?label=firefox&logo=Mozilla%20Firefox&logoColor=white)](https://github.com/kaskadi/kaskadi-element/actions?query=workflow%3Abuild-on-firefox)
[![BuildChrome status](https://img.shields.io/github/workflow/status/kaskadi/kaskadi-element/build-on-chrome?label=chrome&logo=Google%20Chrome&logoColor=white)](https://github.com/kaskadi/kaskadi-element/actions?query=workflow%3Abuild-on-chrome)
[![Publish status](https://img.shields.io/github/workflow/status/kaskadi/kaskadi-element/publish?label=publish&logo=Amazon%20AWS)](https://github.com/kaskadi/kaskadi-element/actions?query=workflow%3Apublish)
[![Docs generation status](https://img.shields.io/github/workflow/status/kaskadi/kaskadi-element/generate-docs?label=docs&logo=read-the-docs)](https://github.com/kaskadi/kaskadi-element/actions?query=workflow%3Agenerate-docs)

**CodeClimate**

[![](https://img.shields.io/codeclimate/maintainability/kaskadi/kaskadi-element?label=maintainability&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/kaskadi-element)
[![](https://img.shields.io/codeclimate/tech-debt/kaskadi/kaskadi-element?label=technical%20debt&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/kaskadi-element)
[![](https://img.shields.io/codeclimate/coverage/kaskadi/kaskadi-element?label=test%20coverage&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/kaskadi-element)

**LGTM**

[![](https://img.shields.io/lgtm/grade/javascript/github/kaskadi/kaskadi-element?label=code%20quality&logo=LGTM)](https://lgtm.com/projects/g/kaskadi/kaskadi-element/?mode=list&logo=LGTM)

<!-- You can add badges inside of this section if you'd like -->

****

<!-- automatically generated documentation will be placed in here -->
{{>main}}
<!-- automatically generated documentation will be placed in here -->

# Translation modules <a name="translation-module"></a>

`KaskadiElement` provides `lang` and `translate` as exports. Those two modules work in tandem and provide localization ability to an element.

The `lang` module allows you to create a `lang` template string out of an object that defines multi-language localization for a sentence. It also handles regular strings.

The `translate` module would translate a `lang` templated string into the desired language.

_Notes:_
- if the language you're looking to translate to is unavailable (or if no language is provided), it falls back to English.
- you can also combine `lang` templated string with regular string to do partial translation.

_Example:_
```js
const hello = {
  en: 'hello',
  de: 'hallo',
  es: 'hola'
}
const s1 = lang`${hello}`
console.log(translate(s1, 'de')) // `hallo`
console.log(translate(s1, 'fr')) // `hello`: no French localization for `hello` -> it falls back to English
console.log(translate(s1)) // `hello`: language not provided -> it falls back to English

const helloWorld = {
  de: lang`${hello} Welt`,
  en: lang`${hello} World`,
  fr: lang`${hello} Monde`
}
const s2 = lang`${helloWorld}!`
console.log(translate(s2, 'fr')) // `hello Monde!`: no French localization for `hello` -> it falls back to English
console.log(translate(s2, 'es')) // `hola World!`: the Spanish localization for `hello` is `hola`
```