import { swap } from '../utils/swap'

export const selectionSort = <T>(arr: T[]): T[] => {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j
      }
    }

    if (i !== lowest) {
      swap(arr, i, lowest)
    }
  }

  return arr
}
