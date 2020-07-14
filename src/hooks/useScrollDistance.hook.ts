import { useState, useEffect } from 'react'

// function debounce(
//   func: Function,
//   wait: number,
//   immediate: boolean
// ): () => void {
//   let timeout: number

//   return function executedFunction(): void {
//     const context: any = this as unknown as any
//     const args: any = arguments

//     const later: () => void = function (): void {
//       timeout = (null as unknown) as number
//       if (!immediate) func.apply(context, args)
//     }

//     const callNow: boolean = immediate && !timeout

//     clearTimeout(timeout)

//     timeout = setTimeout(later, wait)

//     if (callNow) func.apply(context, args)
//   }
// }

export function useScrollDistance(
  thresholdDistance: number,
  time: number
): number {
  const [scrollDistance, setScrollDistance]: [
    number,
    React.Dispatch<React.SetStateAction<number>>
  ] = useState(0)

  useEffect((): (() => void) => {
    function scrollHandler(e: WheelEvent): void {
      setScrollDistance(scrollDistance + Math.round(e.deltaY))
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('mousewheel', scrollHandler as (e: Event) => void)

      return (): void => {
        window.removeEventListener(
          'mousewheel',
          scrollHandler as (e: Event) => void
        )

        if (scrollDistance >= thresholdDistance) {
          setTimeout((): void => {
            setScrollDistance(0)
          }, time)

          clearTimeout(time)
        }
      }
    }

    // tslint:disable-next-line: no-empty
    return (): void => {}
  })

  return scrollDistance
}
