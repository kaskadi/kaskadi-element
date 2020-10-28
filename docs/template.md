![](https://img.shields.io/github/package-json/v/kaskadi/template-kaskadi-element)
![](https://img.shields.io/badge/code--style-standard-blue)
![](https://img.shields.io/github/license/kaskadi/template-kaskadi-element?color=blue)

[![](https://img.shields.io/badge/live-example-orange)](https://cdn.klimapartner.net/modules/%40kaskadi/template-kaskadi-element/example/index.html)

**GitHub Actions workflows status**

[![Build status](https://img.shields.io/github/workflow/status/kaskadi/template-kaskadi-element/build?label=build&logo=mocha)](https://github.com/kaskadi/template-kaskadi-element/actions?query=workflow%3Abuild)
[![BuildFF status](https://img.shields.io/github/workflow/status/kaskadi/template-kaskadi-element/build-on-firefox?label=firefox&logo=Mozilla%20Firefox&logoColor=white)](https://github.com/kaskadi/template-kaskadi-element/actions?query=workflow%3Abuild-on-firefox)
[![BuildChrome status](https://img.shields.io/github/workflow/status/kaskadi/template-kaskadi-element/build-on-chrome?label=chrome&logo=Google%20Chrome&logoColor=white)](https://github.com/kaskadi/template-kaskadi-element/actions?query=workflow%3Abuild-on-chrome)
[![Publish status](https://img.shields.io/github/workflow/status/kaskadi/template-kaskadi-element/publish?label=publish&logo=Amazon%20AWS)](https://github.com/kaskadi/template-kaskadi-element/actions?query=workflow%3Apublish)
[![Docs generation status](https://img.shields.io/github/workflow/status/kaskadi/template-kaskadi-element/generate-docs?label=docs&logo=read-the-docs)](https://github.com/kaskadi/template-kaskadi-element/actions?query=workflow%3Agenerate-docs)

**CodeClimate**

[![](https://img.shields.io/codeclimate/maintainability/kaskadi/template-kaskadi-element?label=maintainability&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/template-kaskadi-element)
[![](https://img.shields.io/codeclimate/tech-debt/kaskadi/template-kaskadi-element?label=technical%20debt&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/template-kaskadi-element)
[![](https://img.shields.io/codeclimate/coverage/kaskadi/template-kaskadi-element?label=test%20coverage&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/template-kaskadi-element)

**LGTM**

[![](https://img.shields.io/lgtm/grade/javascript/github/kaskadi/template-kaskadi-element?label=code%20quality&logo=LGTM)](https://lgtm.com/projects/g/kaskadi/template-kaskadi-element/?mode=list&logo=LGTM)

<!-- You can add badges inside of this section if you'd like -->

****

# Testing

`mocha`, `chai`, `standard` & `karma` are available as dev dependencies.

A `build` workflow (see [here](./.github/workflows/build.yml)) along with individual [`build-on-chrome`](./.github/workflows/buildChrome.yml) and [`build-on-firefox`](./.github/workflows/buildFF.yml) workflows are running on `pull request` and will execute your test suite before allowing you to merge your PR. It also has a `coverage` job already prepared that you can comment out as soon as your testing is in place and your `REPORTER_ID` is in the repository secrets. This is the ID on _Code Climate_ used for uploading code coverage reports.

****

# Documentation

This repository comes with a `generate-docs` workflow that generates documentation automatically for you using [`JSDOC`](https://jsdoc.app/). It'll check the element's file (found in the `main` field of `package.json`) for `JSDOC`-like comments in order to build its documentation. It also checks for any CSS custom variables and lists them in the documentation. See [here](https://github.com/kaskadi/action-generate-docs) and [there](./serverless.yml) for more information.

If you would like to see the workflow configuration, head [here](./.github/workflows/generate-docs.yml).

You can configure the template used to generate the action documentation [here](./docs/template.md).

****

# Publishing

Publishing to CDN is done automatically via a `publish` workflow (see [here](./.github/workflows/publish.yml)). This workflow will run on `push` to `master`. It uses our internal action `action-s3cp` and a `kaskadi.s3-push` configuration field in `package.json`. See [here](https://github.com/kaskadi/action-s3cp) for more details on how to use this action.

****

<!-- automatically generated documentation will be placed in here -->
{{>main}}
<!-- automatically generated documentation will be placed in here -->

# Translation modules <a name="translation-module"></a>

This element also provides `lang` and `translate` as exports. Those two modules work in tandem and provide localization ability to an element.

The `lang` module allows you to create a `lang` template string out of an object that defines multi-language localization for a sentence. It also handles regular strings.

The `translate` module would translate a `lang` templated string into the desired language.

_Notes:_:
- if the language you're looking to translate to is unavailable (or if no language is provided), it would fall back to English.
- you can also combine `lang` templated string with regular string to do partial translation.

_Example:_
```js
const hello = {
  en: 'hello',
  de: 'hallo',
  es: 'hola'
}
const s1 = lang`${hello}`
console.log(translate(s1, 'de')) // prints out `hallo`
console.log(translate(s1, 'fr')) // prints out `hello` because we don't know the french localization for `hello`
console.log(translate(s1)) // prints out `hello` because we did not provide a language so it falls back to English

const helloWorld = {
  de: lang`${hello} Welt`,
  en: lang`${hello} World`,
  fr: lang`${hello} Monde`
}
const s2 = lang`${helloWorld}!`
console.log(translate(s2, 'fr')) // prints out `hello Monde!` because we don't know the french localization for `hello`
console.log(translate(s2, 'es')) // prints out `hola World!` because the Spanish localization for `hello` is `hola`
```