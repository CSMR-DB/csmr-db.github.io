type PipeComposeFn = <T>(...fns: ((v: T) => T)[]) => (val: T) => T

export const pipe: PipeComposeFn = <T>(
  ...fns: ((v: T) => T)[]
): ((val: T) => T) => (val: T): T =>
  fns.reduce((acc: T, fn: (v: T) => T): T => fn(acc), val)

export const compose: PipeComposeFn = <T>(
  ...fns: ((v: T) => T)[]
): ((val: T) => T) => (val: T): T =>
  fns.reduceRight((acc: T, fn: (v: T) => T): T => fn(acc), val)
