import { swap } from '../utils/swap'

const getPivot = <T>(arr: T[], start = 0, end = arr.length - 1) => {
  const pivot = arr[start]
  let swapIdx = start

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++
      swap(arr, swapIdx, i)
    }
  }

  swap(arr, start, swapIdx)

  return swapIdx
}

export const quickSort = <T>(
  arr: T[],
  left = 0,
  right = arr.length - 1
): T[] => {
  if (left < right) {
    let pivotIndex = getPivot(arr, left, right)

    quickSort(arr, left, pivotIndex - 1)
    quickSort(arr, pivotIndex + 1, right)
  }

  return arr
}
