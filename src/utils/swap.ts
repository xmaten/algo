export function swap<T>(arr: T[], idx1: number, idx2: number) {
  const temp = arr[idx1]
  arr[idx1] = arr[idx2]
  arr[idx2] = temp
}
