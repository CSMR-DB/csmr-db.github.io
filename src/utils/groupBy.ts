export function groupBy<T, K extends keyof T>(arr: T[], field: K): Map<T[K], T[]> {
  const groupedArray: Map<T[K], T[]> = new Map()

  const uniqueFields: T[K][] = [...new Set(arr.map((item: T): any => item[field]))];

  uniqueFields.forEach((fieldValue: T[K]): void => {
    const matchingFieldItems: T[] = arr.filter((item: T): boolean => item[field] === fieldValue)

    groupedArray.set(fieldValue, matchingFieldItems)
  })

  return groupedArray;
}