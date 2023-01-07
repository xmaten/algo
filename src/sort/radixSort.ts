const getDigit = (num: number, i: number): number => {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
}

const digitCount = (num: number): number => {
  if (num === 0) {
    return 1
  }

  return Math.floor(Math.log10(Math.abs(num))) + 1
}

const mostDigits = (nums: number[]): number => {
  let maxDigits = 0
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]))
  }

  return maxDigits
}

export const radixSort = (nums: number[]): number[] => {
  let maxDigitCount = mostDigits(nums)

  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets: number[][] = Array.from({ length: 10 }, () => [])
    for (let i = 0; i < nums.length; i++) {
      const digit = getDigit(nums[i], k)
      digitBuckets[digit].push(nums[i])
    }

    nums = ([] as number[]).concat(...digitBuckets)
  }

  return nums
}
