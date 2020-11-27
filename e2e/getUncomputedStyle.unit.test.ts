import {
  hyphenToCamelcase,
  getUncomputedStyle,
  getUncomputedStyles,
  selectorStringSplitter,
  selectorStyleObjectGenerator,
  mediaQueryStringGenerator,
  mediaQuerySelectorSeparator,
  uncomputedStyleGrouper,
  mergeCSSPropertiesByImportance,
} from './getUncomputedStyle'

// const symbol: SymbolConstructor = Symbol

const TEST_RESET_RULES: CSSRuleList = ({
  '0': ({
    cssText: '* { box-sizing: border-box; margin: 0px; padding: 0px; }',
  } as unknown) as CSSRule,
  '1': ({
    cssText: 'body, html { margin: 0px; overflow-x: hidden; }',
  } as unknown) as CSSRule,
  // length: 2,
  // item: (_index: number): CSSRule | null => ({} as CSSRule)
} as unknown) as CSSRuleList

const TEST_SC_RULES: CSSRuleList = ({
  '0': ({
    cssText:
      '.gpUjuq { position: relative; transition: all 200ms ease-in-out 0s; overflow: hidden; filter: sepia(0.25) saturate(2) grayscale(1) brightness(0.5); }',
  } as unknown) as CSSRule,
  '1': ({
    cssText:
      '.gpUjuq::after { content: ""; position: absolute; top: 0px; bottom: 0px; left: 0px; right: 0px; background: rgba(0, 136, 205, 0.25); }',
  } as unknown) as CSSRule,
  '2': ({
    cssText:
      '@media only screen and (min-width: 600px) { .gLaorg { grid-template-columns: auto; gap: 1rem; } .ktvULf { gap: 4rem; } }',
  } as unknown) as CSSRule,
  '3': ({
    cssText: '.ktvULf > * { justify-self: center; }',
  } as unknown) as CSSRule,
  '4': ({
    cssText:
      '.cjpuut { width: 4rem; height: 4rem; margin: 0px auto; text-align: center; text-decoration: none; display: flex; flex-direction: column; justify-content: space-evenly; border-radius: 256rem; background: rgba(0, 136, 205, 0.25); color: rgb(248, 248, 248); grid-area: w / w / w / w; }',
  } as unknown) as CSSRule,
  // length: 5,
  // item: (_index: number): CSSRule | null => ({} as CSSRule)
} as unknown) as CSSRuleList

// const ITERABLE = {
//   // tslint:disable-next-line: typedef
//   [symbol.iterator]() {
//     let step: number = 0;

//     const iterator: Iterator<any> = {
//       next(): { value: CSSRuleList, done: boolean } {
//         step++;

//         if (step === 1) {
//           return { value: TEST_SC_RULES[0] as unknown as CSSRuleList, done: false }
//         } // [...etc]

//         return { value: undefined as unknown as CSSRuleList, done: true }
//       }
//     }

//     return iterator
//   }
// }

// const ITERABLE_SC_RULES = ITERABLE[Symbol.iterator]()

describe('uncomputedStyleGrouper', (): void => {
  it('should combine style rules from selectors lead by specificity', (): void => {
    expect(
      uncomputedStyleGrouper(
        {
          'body, html': {
            margin: '0px',
            overflowX: 'hidden',
          },
          '.gpUjuq': {
            position: 'relative',
            transition: 'all 200ms ease-in-out 0s',
          },
          '.gpUjuq::after': {
            content: '""',
            position: 'absolute',
            background: 'rgba(0, 136, 205, 0.25)',
          },
          '@media only screen and (min-width: 600px)': {
            '.gLaorg': {
              gridTemplateColumns: 'auto',
              gap: '1rem',
            },
            '.ktvULf': {
              gap: '4rem',
            },
          },
          '.ktvULf > *': {
            justifySelf: 'center',
          },
          '.cjpuut': {
            position: 'absolute',
            width: '4rem',
            height: '4rem',
            margin: '0px auto',
            display: 'flex',
            flexDirection: 'column',
          },
        },
        ['.gpUjuq', '.cjpuut']
      )
    ).toEqual({
      position: 'absolute',
      transition: 'all 200ms ease-in-out 0s',
      width: '4rem',
      height: '4rem',
      margin: '0px auto',
      display: 'flex',
      flexDirection: 'column',
      '::after': {
        content: '""',
        position: 'absolute',
        background: 'rgba(0, 136, 205, 0.25)',
      },
    })

    expect(
      uncomputedStyleGrouper(
        {
          'body, html': {
            margin: '0px',
            overflowX: 'hidden',
          },
          '.gpUjuq': {
            position: 'relative',
            transition: 'all 200ms ease-in-out 0s',
          },
          '.gpUjuq::after': {
            content: '""',
            position: 'absolute',
            background: 'rgba(0, 136, 205, 0.25)',
          },
          '@media only screen and (min-width: 600px)': {
            '.gLaorg': {
              gridTemplateColumns: 'auto',
              gap: '1rem',
            },
            '.ktvULf': {
              gap: '4rem',
            },
          },
          '.ktvULf > *': {
            justifySelf: 'center',
          },
          '.cjpuut': {
            position: 'absolute',
            width: '4rem',
            height: '4rem',
            margin: '0px auto',
            display: 'flex',
            flexDirection: 'column',
          },
        },
        ['.gpUjuq', '.cjpuut', '.gLaorg']
      )
    ).toEqual({
      position: 'absolute',
      transition: 'all 200ms ease-in-out 0s',
      width: '4rem',
      height: '4rem',
      margin: '0px auto',
      display: 'flex',
      flexDirection: 'column',
      '@media only screen and (min-width: 600px)': {
        gridTemplateColumns: 'auto',
        gap: '1rem',
      },
      '::after': {
        content: '""',
        position: 'absolute',
        background: 'rgba(0, 136, 205, 0.25)',
      },
    })

    expect(
      uncomputedStyleGrouper(
        {
          'body, html': {
            margin: '0px',
            overflowX: 'hidden',
          },
          '.gpUjuq': {
            position: 'relative',
            transition: 'all 200ms ease-in-out 0s',
          },
          '.gpUjuq::after': {
            content: '""',
            position: 'absolute',
            background: 'rgba(0, 136, 205, 0.25)',
          },
          '@media only screen and (min-width: 600px)': {
            '.gLaorg': {
              gridTemplateColumns: 'auto',
              gap: '1rem',
            },
            '.ktvULf': {
              gap: '4rem',
            },
          },
          '.ktvULf > *': {
            justifySelf: 'center',
          },
          '.cjpuut': {
            position: 'absolute',
            width: '4rem',
            height: '4rem',
            margin: '0px auto',
            display: 'flex',
            flexDirection: 'column',
          },
        },
        ['body', '.gpUjuq', '.cjpuut', '.gLaorg']
      )
    ).toEqual({
      overflowX: 'hidden',
      position: 'absolute',
      transition: 'all 200ms ease-in-out 0s',
      width: '4rem',
      height: '4rem',
      margin: '0px auto',
      display: 'flex',
      flexDirection: 'column',
      '@media only screen and (min-width: 600px)': {
        gridTemplateColumns: 'auto',
        gap: '1rem',
      },
      '::after': {
        content: '""',
        position: 'absolute',
        background: 'rgba(0, 136, 205, 0.25)',
      },
    })

    expect(
      uncomputedStyleGrouper(
        {
          'body, html': {
            margin: '0px',
            overflowX: 'hidden',
          },
          '.gpUjuq': {
            position: 'relative',
            transition: 'all 200ms ease-in-out 0s',
          },
          '.gpUjuq::after': {
            content: '""',
            position: 'absolute',
            background: 'rgba(0, 136, 205, 0.25)',
          },
          '@media only screen and (min-width: 600px)': {
            '.gLaorg, .booooo': {
              gridTemplateColumns: 'auto',
              gap: '1rem',
            },
            '.ktvULf': {
              gap: '4rem',
            },
          },
          '.ktvULf > *': {
            justifySelf: 'center',
          },
          '.cjpuut': {
            position: 'absolute',
            width: '4rem',
            height: '4rem',
            margin: '0px auto',
            display: 'flex',
            flexDirection: 'column',
          },
        },
        ['body', '.gpUjuq', '.cjpuut', '.gLaorg']
      )
    ).toEqual({
      overflowX: 'hidden',
      position: 'absolute',
      transition: 'all 200ms ease-in-out 0s',
      width: '4rem',
      height: '4rem',
      margin: '0px auto',
      display: 'flex',
      flexDirection: 'column',
      '@media only screen and (min-width: 600px)': {
        gridTemplateColumns: 'auto',
        gap: '1rem',
      },
      '::after': {
        content: '""',
        position: 'absolute',
        background: 'rgba(0, 136, 205, 0.25)',
      },
    })

    expect(
      uncomputedStyleGrouper(
        {
          'body, html': {
            margin: '0px',
            overflowX: 'hidden',
          },
          '.gpUjuq': {
            position: 'relative',
            transition: 'all 200ms ease-in-out 0s',
          },
          '.gpUjuq::after': {
            content: '""',
            position: 'absolute',
            background: 'rgba(0, 136, 205, 0.25)',
          },
          '@media only screen and (min-width: 600px)': {
            '.gLaorg, .booooo': {
              gridTemplateColumns: 'auto',
              gap: '1rem',
            },
            '.ktvULf': {
              gap: '4rem',
            },
            '.ktvULf > h1': {
              color: 'red',
            },
          },
          '.ktvULf > *': {
            justifySelf: 'center',
          },
          '.cjpuut': {
            position: 'absolute',
            width: '4rem',
            height: '4rem',
            margin: '0px auto',
            display: 'flex',
            flexDirection: 'column',
          },
        },
        ['body', '.gpUjuq', '.cjpuut', '.ktvULf']
      )
    ).toEqual({
      overflowX: 'hidden',
      position: 'absolute',
      transition: 'all 200ms ease-in-out 0s',
      width: '4rem',
      height: '4rem',
      margin: '0px auto',
      display: 'flex',
      flexDirection: 'column',
      '@media only screen and (min-width: 600px)': {
        gap: '4rem',
        '> h1': {
          color: 'red',
        },
      },
      '::after': {
        content: '""',
        position: 'absolute',
        background: 'rgba(0, 136, 205, 0.25)',
      },
      '> *': {
        justifySelf: 'center',
      },
    })

    expect(
      uncomputedStyleGrouper(
        {
          'body, html': {
            margin: '0px',
            overflowX: 'hidden',
          },
          '.gpUjuq': {
            position: 'relative !important',
            transition: 'all 200ms ease-in-out 0s',
          },
          '.gpUjuq::after': {
            content: '""',
            position: 'absolute',
            background: 'rgba(0, 136, 205, 0.25)',
          },
          '@media only screen and (min-width: 600px)': {
            '.gLaorg': {
              gap: '2rem',
            },
            '.gLaorg, .booooo': {
              gridTemplateColumns: 'auto',
              gap: '1rem !important',
            },
            '.ktvULf': {
              gap: '4rem',
            },
          },
          '.ktvULf > *': {
            justifySelf: 'center',
          },
          '.cjpuut': {
            position: 'absolute',
            width: '4rem',
            height: '4rem',
            margin: '0px auto',
            display: 'flex',
            flexDirection: 'column',
          },
        },
        ['body', '.gpUjuq', '.cjpuut', '.gLaorg']
      )
    ).toEqual({
      overflowX: 'hidden',
      position: 'relative !important',
      transition: 'all 200ms ease-in-out 0s',
      width: '4rem',
      height: '4rem',
      margin: '0px auto',
      display: 'flex',
      flexDirection: 'column',
      '@media only screen and (min-width: 600px)': {
        gridTemplateColumns: 'auto',
        gap: '1rem !important',
      },
      '::after': {
        content: '""',
        position: 'absolute',
        background: 'rgba(0, 136, 205, 0.25)',
      },
    })
  })
})

describe('mergeCSSPropertiesByImportance', (): void => {
  it('should overwrite / preserve properties with a value containing !important', (): void => {
    expect(
      mergeCSSPropertiesByImportance(
        { color: 'pink !important' },
        { color: 'purple' }
      )
    ).toEqual({ color: 'pink !important' })

    expect(
      mergeCSSPropertiesByImportance(
        { color: 'pink !important' },
        { color: 'purple', background: 'blue' }
      )
    ).toEqual({ color: 'pink !important', background: 'blue' })
  })
})

describe('hyphenToCamelcase', (): void => {
  it('should convert a hyphened string to a camelCase one', (): void => {
    expect(hyphenToCamelcase('justify-self-always')).toEqual(
      'justifySelfAlways'
    )
  })
})

describe('selectorStringSplitter', (): void => {
  it('should generate a string containing only the selector part of a cssText string', (): void => {
    expect(
      selectorStringSplitter('.ktvULf > * { justify-self: center; }')
    ).toEqual(['.ktvULf > *', 'justify-self: center;'])
  })
})

describe('selectorStyleObjectGenerator', (): void => {
  it('should generate an object containing only the style rules in a cssText string', (): void => {
    expect(selectorStyleObjectGenerator('justify-self: center;')).toEqual({
      justifySelf: 'center',
    })

    expect(
      selectorStyleObjectGenerator('justify-self: center; width: auto;')
    ).toEqual({
      justifySelf: 'center',
      width: 'auto',
    })
  })
})

describe('mediaQueryStringGenerator', (): void => {
  it('should generate a string containing only the media query part of a cssText string', (): void => {
    expect(
      mediaQueryStringGenerator(
        '@media only screen and (min-width: 600px) { .ktvULf { gap: 4rem; } }'
      )
    ).toEqual([
      '@media only screen and (min-width: 600px)',
      '.ktvULf { gap: 4rem; }',
    ])

    expect(
      mediaQueryStringGenerator(
        '@media only screen and (min-width: 600px) { .ktvULf { gap: 4rem; } .mtvOMG { visibility: "hidden" } }'
      )
    ).toEqual([
      '@media only screen and (min-width: 600px)',
      '.ktvULf { gap: 4rem; } .mtvOMG { visibility: "hidden" }',
    ])
  })
})

describe('mediaQuerySelectorSeparator', (): void => {
  it('should split all selector rule objects embedded in a single media query cssText string', (): void => {
    expect(
      mediaQuerySelectorSeparator(
        '.ktvULf { gap: 4rem; } .mtvOMG { visibility: "hidden" }'
      )
    ).toEqual(['.ktvULf { gap: 4rem; }', '.mtvOMG { visibility: "hidden" }'])

    expect(
      mediaQuerySelectorSeparator(
        '@media only screen and (min-width: 600px) { .ktvULf { gap: 4rem; } .mtvOMG { visibility: "hidden" } }'
      )
    ).toEqual(['.ktvULf { gap: 4rem; }', '.mtvOMG { visibility: "hidden" }'])
  })
})

describe('getUncomputedStyle', (): void => {
  it('should convert a set of rules to an object using classes as keys', (): void => {
    expect(getUncomputedStyle(TEST_SC_RULES)).toEqual({
      '.gpUjuq': {
        position: 'relative',
        transition: 'all 200ms ease-in-out 0s',
        overflow: 'hidden',
        filter: 'sepia(0.25) saturate(2) grayscale(1) brightness(0.5)',
      },
      '.gpUjuq::after': {
        content: '""',
        position: 'absolute',
        top: '0px',
        bottom: '0px',
        left: '0px',
        right: '0px',
        background: 'rgba(0, 136, 205, 0.25)',
      },
      '@media only screen and (min-width: 600px)': {
        '.gLaorg': {
          gridTemplateColumns: 'auto',
          gap: '1rem',
        },
        '.ktvULf': {
          gap: '4rem',
        },
      },
      '.ktvULf > *': {
        justifySelf: 'center',
      },
      '.cjpuut': {
        width: '4rem',
        height: '4rem',
        margin: '0px auto',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        borderRadius: '256rem',
        background: 'rgba(0, 136, 205, 0.25)',
        color: 'rgb(248, 248, 248)',
        gridArea: 'w / w / w / w',
      },
    })
  })
})

describe('getUncomputedStyles', (): void => {
  it('should convert a set of rules to an object using classes as keys', (): void => {
    expect(
      getUncomputedStyles(({
        '0': ({
          cssRules: TEST_RESET_RULES,
          rules: TEST_RESET_RULES,
        } as unknown) as CSSStyleSheet,
        '1': ({
          cssRules: TEST_SC_RULES,
          rules: TEST_SC_RULES,
        } as unknown) as CSSStyleSheet,
        // length: 2,
        // item: (_index: number): CSSStyleSheet => ({} as CSSStyleSheet),
      } as unknown) as StyleSheetList)
    ).toEqual({
      '*': {
        boxSizing: 'border-box',
        margin: '0px',
        padding: '0px',
      },
      'body, html': {
        margin: '0px',
        overflowX: 'hidden',
      },
      '.gpUjuq': {
        position: 'relative',
        transition: 'all 200ms ease-in-out 0s',
        overflow: 'hidden',
        filter: 'sepia(0.25) saturate(2) grayscale(1) brightness(0.5)',
      },
      '.gpUjuq::after': {
        content: '""',
        position: 'absolute',
        top: '0px',
        bottom: '0px',
        left: '0px',
        right: '0px',
        background: 'rgba(0, 136, 205, 0.25)',
      },
      '@media only screen and (min-width: 600px)': {
        '.gLaorg': {
          gridTemplateColumns: 'auto',
          gap: '1rem',
        },
        '.ktvULf': {
          gap: '4rem',
        },
      },
      '.ktvULf > *': {
        justifySelf: 'center',
      },
      '.cjpuut': {
        width: '4rem',
        height: '4rem',
        margin: '0px auto',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        borderRadius: '256rem',
        background: 'rgba(0, 136, 205, 0.25)',
        color: 'rgb(248, 248, 248)',
        gridArea: 'w / w / w / w',
      },
    })
  })
})
