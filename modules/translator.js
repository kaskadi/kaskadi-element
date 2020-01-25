export function lang (strings, ...values) {
  const res = []
  for (var i = 0; i < strings.raw.length; i++) {
    res.push(strings.raw[i])
    if (i < strings.raw.length - 1) {
      if (Array.isArray(values[i])) {
        res.push(...values[i])
      } else {
        res.push(values[i])
      }
    }
  }
  return res
}

export function translate (langStringTemplate, lang = 'en') {
  if (!Array.isArray(langStringTemplate)) {
    langStringTemplate = [langStringTemplate]
  }
  return langStringTemplate.map(item => {
    if (item.en) {
      if (item[lang]) {
        return translate(item[lang], lang)
      } else {
        return translate(item.en, lang)
      }
    } else {
      return item
    }
  }).join('')
}
