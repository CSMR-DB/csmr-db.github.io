export type JPSelectorStyleObject = { [key: string]: string }

export type JPSelectorsStyleObject = { [key: string]: JPSelectorStyleObject }

export type JPUncomputedStyleObject = {
  [key: string]: string | JPSelectorStyleObject | JPSelectorsStyleObject
}

export type JPStyleSheetObject = {
  [key: string]: JPSelectorStyleObject | JPSelectorsStyleObject
}

/**
 * 
 * @param hyphenedString string that looks like
 * @example ```
 *    hyphenToCamelcase('justify-self')
 * ```
 * 
 * @returns ```
 *    'justifySelf'
 * ``` 
 */
export function hyphenToCamelcase(hyphenedString: string): string {
  const [stringStart, ...stringRest]: string[] = hyphenedString.split('-')

  const camelCase: string[] = stringRest.map((value: string): string => {
    return value.charAt(0).toLocaleUpperCase() + value.slice(1)
  })

  return `${stringStart}${camelCase.join(',').replace(',', '')}`
}

/**
 * Generates an object of CSS styles from a string containing semicolons to separate properties
 * @param cssTextString string that looks like
 * @example ```
 *    selectorStringSplitter('.ktvULf > * { justify-self: center; }')
 * ```
 * 
 * @returns ```
 * ['.ktvULf > *', 'justify-self: center;']
 * ```
 */
export function selectorStringSplitter(
  cssTextString: string
): [string, string] {
  return cssTextString
    .replace(/\{/, 'SELECTOR_DATA')
    .split('SELECTOR_DATA')
    .map((s: string): string => s.replace('}', '').trim()) as [string, string]
}

/**
 * Generates an object of CSS styles from a string containing semicolons to separate properties
 * @param cssTextString string that looks like
 * @example ```
 *    selectorStyleObjectGenerator('justify-self: center;')
 * ```
 * 
 * @returns ```
 * { justifySelf: 'center', }
 * ```
 */
export function selectorStyleObjectGenerator(
  cssTextString: string
): JPSelectorStyleObject {
  const object: JPSelectorStyleObject = {}

  cssTextString.split(';').forEach((propertyText: string): void => {
    if (propertyText !== '') {
      object[
        hyphenToCamelcase(propertyText.split(':')[0].trim())
      ] = propertyText.split(':')[1].trim()
    }
  })

  return object
}

/**
 * Separates the [at]media query conditional from the selector declarations in a given cssText string
 * @param cssTextString string that looks like
 * @example ```
 *  mediaQuerySelectorSeparator('[at]media only screen and (min-width: 600px) { .ktvULf { gap: 4rem; } }')
 * ```
 * @returns [
 *    '[at]media only screen and (min-width: 600px)',
 *    '.ktvULf { gap: 4rem; }',
 *  ]
 */
export function mediaQueryStringGenerator(
  cssTextString: string
): [string, string] {
  return cssTextString
    .replace(/\{/, 'MEDIA_QUERY_PROPERTY')
    .split('MEDIA_QUERY_PROPERTY')
    .map((s: string): string => s.replace(/\}$/, '').trim()) as [string, string]
}

/**
 * Separates the [at]media query conditional from the selector declarations in a given cssText string
 * @param cssTextString string that looks like
 * @example ```
 *  mediaQuerySelectorSeparator('.ktvULf { gap: 4rem; } .mtvOMG { visibility: "hidden" }')
 * 
 *  returns [
 *    '.ktvULf { gap: 4rem; }', 
 *    '.mtvOMG { visibility: "hidden" }'
 *  ]
 * ```
 * @returns [
 *    '.ktvULf { gap: 4rem; }', 
 *    '.mtvOMG { visibility: "hidden" }'
 *  ]
 */
export function mediaQuerySelectorSeparator(
  cssTextString: string
): RegExpMatchArray | null {
  return cssTextString.match(/(\.\w*\s*\{\s*.*?\})/gi)
}

/**
 * This function merges 2 objects containing css properties, taking into account the possibility of values being `!important`
 * @param oldProps {} object containing css properties for a selector
 * @param newProps {} object containing css properties for a selector
 * 
 * @example ```
 * mergeCSSPropertiesByImportance(
 *   { color: 'pink !important' },
 *   { color: 'purple', background: 'blue' }
 * )
 * ```
 * 
 * @returns ```
 *   { color: 'pink !important', background: 'blue' }
 * ```
 */
export function mergeCSSPropertiesByImportance(
  oldProps: JPSelectorStyleObject = {},
  newProps: JPSelectorStyleObject = {}
): JPSelectorStyleObject {
  const resultObj: JPSelectorStyleObject = {}

  const combinedProps: string[] = Array.from(
    new Set([...Object.keys(oldProps), ...Object.keys(newProps)])
  )

  combinedProps.forEach((key: string): void => {
    if (newProps) {
      const [newProp, oldProp]: [string | undefined, string | undefined] = [
        newProps[key],
        oldProps[key],
      ]

      if (newProp !== oldProp) {
        if (typeof newProp === 'undefined' && typeof oldProp !== 'undefined') {
          resultObj[key] = oldProp
        } else if (
          typeof newProp !== 'undefined' &&
          typeof oldProp === 'undefined'
        ) {
          resultObj[key] = newProp
        } else if (oldProp.includes('!important')) {
          if (newProp.includes('!important')) {
            resultObj[key] = newProp
          } else {
            resultObj[key] = oldProp
          }
        } else {
          resultObj[key] = newProp
        }
      } else {
        resultObj[key] = oldProp
      }
    }
  })

  return resultObj
}

export function uncomputedStyleGrouper(
  uncomputedStyles: JPStyleSheetObject,
  selectors: string[]
): JPUncomputedStyleObject {
  let combinedStyles: JPUncomputedStyleObject = {}

  Object.keys(uncomputedStyles).forEach((key: string): void => {
    if (key.includes('@media')) {
      const recursedResult: JPSelectorsStyleObject = uncomputedStyleGrouper(
        uncomputedStyles[key] as JPStyleSheetObject,
        selectors
      ) as JPSelectorsStyleObject

      Object.keys(recursedResult).length !== 0
        ? (combinedStyles[key] = recursedResult)
        : null
    } else {
      selectors.forEach((selector: string): void => {
        if (key.includes(`${selector},`) || key.includes(`, ${selector}`)) {
          combinedStyles = mergeCSSPropertiesByImportance(
            combinedStyles as JPSelectorStyleObject,
            uncomputedStyles[key] as JPSelectorStyleObject
          )
        } else if (
          key.includes(`${selector} >`) ||
          key.includes(`${selector}::`) ||
          key.includes(`${selector}.`)
        ) {
          combinedStyles[key.replace(selector, '').trim()] =
            uncomputedStyles[key]
        } else {
          combinedStyles = mergeCSSPropertiesByImportance(
            combinedStyles as JPSelectorStyleObject,
            uncomputedStyles[selector] as JPSelectorStyleObject
          )
        }
      })
    }
  })

  return combinedStyles
}

export function getUncomputedStyle(rules: CSSRuleList): JPStyleSheetObject {
  const transposedStyles: JPStyleSheetObject = {}

  for (const [_index, value] of Object.entries(rules)) {
    if (value.cssText.includes('@media')) {
      const [mediaRule, selectorRules]: [
        string,
        string
      ] = mediaQueryStringGenerator(value.cssText)

      const selectors: RegExpMatchArray | null = mediaQuerySelectorSeparator(
        selectorRules
      )
      const selectorsObject: JPSelectorsStyleObject = {}
      selectors?.forEach((selector: string): void => {
        const [selectorName, selectorStylesString]: [
          string,
          string
        ] = selectorStringSplitter(selector)

        selectorsObject[selectorName] = selectorStyleObjectGenerator(
          selectorStylesString
        )
      })

      transposedStyles[mediaRule] = selectorsObject
    } else {
      const [selectorName, selectorStylesString]: [
        string,
        string
      ] = selectorStringSplitter(value.cssText)
      const styleObject: JPSelectorStyleObject = selectorStyleObjectGenerator(
        selectorStylesString
      )

      transposedStyles[selectorName] = styleObject
    }
  }

  return transposedStyles
}

export function getUncomputedStyles(
  documentStyleSheetList: StyleSheetList
): JPStyleSheetObject {
  let concatenatedStyles: JPStyleSheetObject = {}

  Object.entries(documentStyleSheetList).forEach(
    ([_key, documentStyleSheet]: [string, CSSStyleSheet]): void => {
      const individualRules: CSSRuleList =
        documentStyleSheet.rules || documentStyleSheet.cssRules
      const individualStyles: JPStyleSheetObject = getUncomputedStyle(
        individualRules
      )

      concatenatedStyles = { ...concatenatedStyles, ...individualStyles }
    }
  )

  return concatenatedStyles
}