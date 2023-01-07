export const linearSearch = (arr: string[], elem: string): number => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === elem) {
      return i
    }
  }

  return -1
}
