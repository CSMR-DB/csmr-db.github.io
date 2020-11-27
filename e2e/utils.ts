import { Page } from 'puppeteer'

export async function JPGetComputedStyle(
  browserPage: Page,
  selectorName: string,
  cssProperty: keyof CSSStyleDeclaration
): Promise<string> {
  return await browserPage.evaluate(
    async ({
      selector,
      property,
    }: {
      selector: string
      property: keyof CSSStyleDeclaration
    }): Promise<string> => {
      /**
       * Cast as <any>, info at: https://www.thetopsites.net/article/50506154.shtml
       * Otherwise: Element implicitly has an 'any' type because index expression is not of type 'number'.
       */
      return window.getComputedStyle(document.querySelector(selector)!)[
        <any>property
      ]
    },
    { selector: selectorName, property: cssProperty }
  )
}

export type JPStyleSheetObject = {
  [key: string]:
    | { [key: string]: string }
    | { [key: string]: { [key: string]: string } }
}

export async function JPGetClassStyle(
  browserPage: Page,
  selectorName: string,
  cssProperty: keyof CSSStyleDeclaration
): Promise<JPStyleSheetObject> {
  return await browserPage.evaluate(
    async ({
      selector,
      property,
    }: {
      selector: string
      property: keyof CSSStyleDeclaration
    }): Promise<JPStyleSheetObject> => {
      console.log(selector, property)
      const documentStyleSheetList: StyleSheetList = window.document.styleSheets

      const styleBySelector: JPStyleSheetObject = {}

      const rules: CSSRuleList =
        documentStyleSheetList[1].rules || documentStyleSheetList[1].cssRules

      function generateRootProperty(rule: string): string {
        return rule.split('{')[0].trim()
      }
      function generateMediaQueryProperty(rule: string): string {
        return rule
          .split(/\)/)[1]
          .replace('{', '\u0000')
          .split('\u0000')[1]
          .trim()
      }
      function generateStyleObject(rule: string): { [key: string]: string } {
        const object: { [key: string]: string } = {}

        rule.split(';').map((propertyText: string): void => {
          if (propertyText.includes(':')) {
            object[propertyText.split(':')[0].trim()] = propertyText
              .split(':')[1]
              .trim()
          }
        })

        return object
      }

      for (const rule of [...rules]) {
        if (rule.cssText.includes('@media')) {
          styleBySelector[generateRootProperty(rule.cssText)] = {
            [generateMediaQueryProperty(rule.cssText)]: generateStyleObject(
              rule.cssText
                .replace(/\)/, '\u0000')
                .split('\u0000')[1]
                .split('{')[2]
                .trim()
            ),
          }
        } else {
          styleBySelector[
            generateRootProperty(rule.cssText)
          ] = generateStyleObject(
            rule.cssText.split('{')[1].split('}')[0].trim()
          )
        }
      }

      return styleBySelector
    },
    { selector: selectorName, property: cssProperty }
  )
}
